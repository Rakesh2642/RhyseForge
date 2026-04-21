<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-800 p-8 transition-colors duration-300">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Exam Catalog</h1>
          <p class="text-sm text-gray-500 mt-1">Manage, add, and publish your certification exams.</p>
        </div>
        <div class="space-x-3">
          <UButton color="gray" variant="soft" to="/admin/dashboard">Back to Dashboard</UButton>
          <UButton color="primary" icon="i-heroicons-plus" to="/admin/exams/create">New Exam</UButton>
        </div>
      </div>
      
      <!-- Catalog Controls -->
      <div class="mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        <UInput 
          v-model="searchQuery" 
          icon="i-heroicons-magnifying-glass" 
          placeholder="Search exams..." 
          class="w-full md:w-96" 
          size="lg"
        />
        <div class="text-sm font-medium text-gray-500">
          Showing {{ filteredExams.length }} exams
        </div>
      </div>

      <UCard :ui="{ body: { padding: 'p-0' }, rounded: 'rounded-2xl' }" class="overflow-hidden shadow-xl border-none ring-1 ring-gray-200 dark:ring-gray-700">
        <!-- Custom Skeleton Loader -->
        <div v-if="pending" class="divide-y divide-gray-100 dark:divide-gray-800">
          <div v-for="i in 5" :key="i" class="p-4 flex items-center justify-between animate-pulse">
            <div class="space-y-2">
              <div class="h-4 w-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div class="h-3 w-32 bg-gray-100 dark:bg-gray-800 rounded"></div>
            </div>
            <div class="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          </div>
        </div>

        <UTable v-else :columns="columns" :rows="filteredExams" :ui="{ tr: { base: 'hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors' } }">
          <template #title-data="{ row }">
            <div class="max-w-[300px] truncate">
              <p class="font-bold text-gray-900 dark:text-white">{{ row.title }}</p>
              <p class="text-[10px] text-gray-400 uppercase tracking-widest font-black">{{ row.provider }}</p>
            </div>
          </template>

          <template #status-data="{ row }">
            <UBadge 
              :color="row.status === 'published' ? 'green' : 'orange'" 
              variant="soft" 
              class="cursor-pointer font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider"
              @click="toggleStatus(row)"
            >
              {{ row.status }}
            </UBadge>
          </template>
          
          <template #actions-data="{ row }">
            <div class="flex space-x-1">
              <UButton size="sm" color="primary" variant="ghost" icon="i-heroicons-pencil-square" @click="openEditModal(row)" />
              <UButton size="sm" color="gray" variant="ghost" icon="i-heroicons-queue-list" :to="`/admin/exams/${row.id}/questions`" />
              <UButton size="sm" color="blue" variant="ghost" icon="i-heroicons-arrow-up-tray" :to="`/admin/upload?examId=${row.id}`" />
              <UButton size="sm" color="red" variant="ghost" icon="i-heroicons-trash" @click="openDeleteModal(row)" />
            </div>
          </template>
        </UTable>
      </UCard>
    </div>

    <!-- Edit Exam Modal -->
    <UModal v-model="isEditModalOpen">
      <UCard>
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-pencil-square" class="text-2xl text-primary-500" />
            <h3 class="text-xl font-bold">Edit Exam Details</h3>
          </div>
        </template>

        <div class="space-y-4 py-2">
          <UFormGroup label="Exam Title" required>
            <UInput v-model="editForm.title" placeholder="e.g. AWS Certified AI Practitioner" />
          </UFormGroup>
          
          <div class="grid grid-cols-2 gap-4">
            <UFormGroup label="Provider" required>
              <UInput v-model="editForm.provider" placeholder="e.g. AWS, Azure, GCP" />
            </UFormGroup>
            <UFormGroup label="Certification Code">
              <UInput v-model="editForm.certificationCode" placeholder="e.g. AI1-C01" />
            </UFormGroup>
          </div>

          <UFormGroup label="Publication Status">
            <USelect v-model="editForm.status" :options="['draft', 'published']" />
          </UFormGroup>
        </div>

        <template #footer>
          <div class="flex justify-end gap-3">
            <UButton color="gray" variant="ghost" @click="isEditModalOpen = false">Cancel</UButton>
            <UButton color="primary" :loading="updating" @click="handleUpdate">Save Changes</UButton>
          </div>
        </template>
      </UCard>
    </UModal>

    <!-- Delete Verification Modal -->
    <UModal v-model="isDeleteModalOpen">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center gap-2 text-red-600">
            <UIcon name="i-heroicons-exclamation-triangle" class="text-2xl" />
            <h3 class="text-xl font-bold">Confirm Deletion</h3>
          </div>
        </template>

        <div class="space-y-4 py-2">
          <p class="text-gray-600 dark:text-gray-400">
            You are about to delete <span class="font-bold text-gray-900 dark:text-white">{{ examToDelete?.title }}</span>. 
            This will permanently remove all associated questions and student attempt history.
          </p>
          
          <UFormGroup label="Enter Admin Password to Confirm" required>
            <UInput v-model="confirmPassword" type="password" placeholder="Admin Password" @keyup.enter="handleDelete" />
          </UFormGroup>
        </div>

        <template #footer>
          <div class="flex justify-end gap-3">
            <UButton color="gray" variant="ghost" @click="isDeleteModalOpen = false">Cancel</UButton>
            <UButton color="red" :loading="deleting" :disabled="!confirmPassword" @click="handleDelete">
              Permanently Delete
            </UButton>
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useFetch } from '#app'

const { data: exams, pending, refresh } = useFetch('/api/admin/exams')
const searchQuery = ref('')
const isDeleteModalOpen = ref(false)
const isEditModalOpen = ref(false)
const examToDelete = ref(null)
const examToEdit = ref(null)
const confirmPassword = ref('')
const deleting = ref(false)
const updating = ref(false)

const editForm = reactive({
  title: '',
  provider: '',
  certificationCode: '',
  status: ''
})

const filteredExams = computed(() => {
  if (!exams.value) return []
  if (!searchQuery.value) return exams.value
  const query = searchQuery.value.toLowerCase()
  return exams.value.filter(exam => 
    exam.title.toLowerCase().includes(query) || 
    exam.provider?.toLowerCase().includes(query) || 
    exam.certificationCode?.toLowerCase().includes(query)
  )
})

const columns = [
  { key: 'title', label: 'Exam Title' },
  { key: 'provider', label: 'Provider' },
  { key: 'certificationCode', label: 'Code' },
  { key: '_count.questions', label: 'Questions' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: 'Actions' }
]

const openEditModal = (exam) => {
  examToEdit.value = exam
  editForm.title = exam.title
  editForm.provider = exam.provider
  editForm.certificationCode = exam.certificationCode
  editForm.status = exam.status
  isEditModalOpen.value = true
}

const handleUpdate = async () => {
  updating.value = true
  try {
    await $fetch(`/api/admin/exams/${examToEdit.value.id}`, {
      method: 'PATCH',
      body: editForm
    })
    isEditModalOpen.value = false
    refresh()
  } catch (err) {
    alert('Failed to update exam')
  } finally {
    updating.value = false
  }
}

const toggleStatus = async (exam) => {
  const newStatus = exam.status === 'published' ? 'draft' : 'published'
  try {
    await $fetch(`/api/admin/exams/${exam.id}`, {
      method: 'PATCH',
      body: { ...exam, status: newStatus }
    })
    refresh()
  } catch (err) {
    alert('Failed to toggle status')
  }
}

const openDeleteModal = (exam) => {
  examToDelete.value = exam
  confirmPassword.value = ''
  isDeleteModalOpen.value = true
}

const handleDelete = async () => {
  if (!examToDelete.value || !confirmPassword.value) return
  
  deleting.value = true
  try {
    await $fetch(`/api/admin/exams/${examToDelete.value.id}`, {
      method: 'DELETE',
      body: { password: confirmPassword.value }
    })
    
    isDeleteModalOpen.value = false
    refresh()
  } catch (err) {
    alert(err.statusMessage || 'Failed to delete exam')
  } finally {
    deleting.value = false
  }
}
</script>
