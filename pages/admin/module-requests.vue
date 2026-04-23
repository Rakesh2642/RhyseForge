<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-300">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Module Request Inbox</h1>
          <p class="text-sm text-gray-500 mt-1">Capture demand from guests and move hot modules into release planning.</p>
        </div>
        <UButton color="gray" variant="soft" to="/admin/dashboard" icon="i-heroicons-arrow-left">
          Back to Dashboard
        </UButton>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <UCard class="lg:col-span-2">
          <template #header>
            <div class="flex items-center justify-between gap-2">
              <h2 class="font-semibold">Top Requested Modules</h2>
            </div>
          </template>
          <div v-if="!data?.demandByModule?.length" class="text-sm text-gray-500">No requests yet.</div>
          <div v-else class="space-y-2">
            <div v-for="item in data.demandByModule" :key="item.moduleName" class="flex justify-between items-center rounded-lg border border-gray-200 dark:border-gray-700 px-3 py-2">
              <span class="text-sm font-medium">{{ item.moduleName }}</span>
              <UBadge color="amber" variant="soft">{{ item._count.moduleName }} requests</UBadge>
            </div>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="font-semibold">Filter</h2>
          </template>
          <USelect v-model="statusFilter" :options="statusOptions" />
          <p class="text-xs text-gray-500 mt-3">Status helps your sales pipeline: NEW -> IN_REVIEW -> PLANNED -> RELEASED.</p>
        </UCard>
      </div>

      <UCard>
        <UTable :columns="columns" :rows="rows" :loading="pending">
          <template #requestedAt-data="{ row }">
            <span class="text-xs text-gray-500">{{ new Date(row.requestedAt).toLocaleString() }}</span>
          </template>

          <template #status-data="{ row }">
            <UBadge :color="statusColor(row.status)" variant="soft">{{ row.status }}</UBadge>
          </template>

          <template #preorderReady-data="{ row }">
            <UBadge :color="row.preorderReady ? 'green' : 'gray'" variant="soft">
              {{ row.preorderReady ? 'Yes' : 'No' }}
            </UBadge>
          </template>

          <template #actions-data="{ row }">
            <UButton size="xs" color="primary" variant="ghost" icon="i-heroicons-pencil-square" @click="openEditor(row)">
              Update
            </UButton>
          </template>
        </UTable>
      </UCard>

      <UModal v-model="editOpen">
        <UCard>
          <template #header>
            <h3 class="text-lg font-bold">Update Module Request</h3>
          </template>

          <div v-if="selectedRow" class="space-y-4">
            <div class="text-sm">
              <p><span class="font-semibold">Requested Module:</span> {{ selectedRow.moduleName }}</p>
              <p><span class="font-semibold">Customer:</span> {{ selectedRow.name }} ({{ selectedRow.email }})</p>
              <p v-if="selectedRow.notes"><span class="font-semibold">Notes:</span> {{ selectedRow.notes }}</p>
            </div>

            <UFormGroup label="Status">
              <USelect v-model="editStatus" :options="statusOptions.filter(s => s !== 'ALL')" />
            </UFormGroup>

            <UFormGroup label="Admin Notes">
              <UTextarea v-model="editNotes" :rows="4" placeholder="Internal note or customer follow-up note" />
            </UFormGroup>
          </div>

          <template #footer>
            <div class="flex justify-end gap-2">
              <UButton color="gray" variant="ghost" @click="editOpen = false">Cancel</UButton>
              <UButton color="primary" :loading="saving" @click="saveUpdate">Save</UButton>
            </div>
          </template>
        </UCard>
      </UModal>
    </div>
  </div>
</template>

<script setup>
import { watchEffect } from 'vue'

const { status, data: sessionData } = useAuth()
const router = useRouter()

watchEffect(() => {
  if (status.value === 'unauthenticated') {
    router.push('/admin/login')
  } else if (status.value === 'authenticated' && sessionData.value?.user?.role !== 'ADMIN') {
    router.push('/dashboard')
  }
})

const statusOptions = ['ALL', 'NEW', 'IN_REVIEW', 'PLANNED', 'RELEASED', 'REJECTED']
const statusFilter = ref('ALL')

const { data, pending, refresh } = useFetch('/api/admin/module-requests', {
  query: computed(() => ({ status: statusFilter.value }))
})

const columns = [
  { key: 'requestedAt', label: 'Requested At' },
  { key: 'moduleName', label: 'Module' },
  { key: 'provider', label: 'Provider' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'urgency', label: 'Urgency' },
  { key: 'preorderReady', label: 'Pre-order' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: 'Actions' }
]

const rows = computed(() => data.value?.requests || [])

const editOpen = ref(false)
const selectedRow = ref(null)
const editStatus = ref('NEW')
const editNotes = ref('')
const saving = ref(false)

const statusColor = (status) => {
  if (status === 'NEW') return 'blue'
  if (status === 'IN_REVIEW') return 'amber'
  if (status === 'PLANNED') return 'purple'
  if (status === 'RELEASED') return 'green'
  if (status === 'REJECTED') return 'red'
  return 'gray'
}

const openEditor = (row) => {
  selectedRow.value = row
  editStatus.value = row.status
  editNotes.value = row.adminNotes || ''
  editOpen.value = true
}

const saveUpdate = async () => {
  if (!selectedRow.value) return
  saving.value = true
  try {
    await $fetch(`/api/admin/module-requests/${selectedRow.value.id}`, {
      method: 'PATCH',
      body: {
        status: editStatus.value,
        adminNotes: editNotes.value
      }
    })
    editOpen.value = false
    await refresh()
  } catch (error) {
    alert(error?.data?.statusMessage || 'Failed to update request')
  } finally {
    saving.value = false
  }
}
</script>
