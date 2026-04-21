<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-300">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="flex items-center gap-4 mb-8">
        <UButton color="gray" variant="ghost" icon="i-heroicons-arrow-left" to="/admin/exams" />
        <div class="flex-1">
          <div class="flex items-center gap-3">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
              {{ exam?.title || 'Loading Exam...' }}
            </h1>
            <UBadge v-if="exam" :color="exam.status === 'published' ? 'green' : 'orange'" variant="subtle">
              {{ exam.status }}
            </UBadge>
          </div>
          <p class="text-sm text-gray-500 mt-1">Manage, edit, and review questions for this certification.</p>
        </div>
        <div class="flex gap-2">
          <UButton color="blue" variant="soft" icon="i-heroicons-cloud-arrow-up" :to="`/admin/upload?examId=${examId}`">
            AI Extract Questions
          </UButton>
          <UButton color="primary" icon="i-heroicons-plus" @click="openAddModal">
            Manual Add
          </UButton>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <!-- Stats Sidebar -->
        <div class="lg:col-span-1 space-y-6">
          <UCard>
            <div class="space-y-4">
              <div>
                <p class="text-xs font-medium text-gray-500 uppercase tracking-wider">Total Questions</p>
                <p class="text-2xl font-bold text-primary-600">{{ questions?.length || 0 }}</p>
              </div>
              <UDivider />
              <div>
                <p class="text-xs font-medium text-gray-500 uppercase tracking-wider">Passing Score</p>
                <p class="text-lg font-semibold">{{ exam?.passingScore || 70 }}%</p>
              </div>
              <div>
                <p class="text-xs font-medium text-gray-500 uppercase tracking-wider">Time Limit</p>
                <p class="text-lg font-semibold">{{ exam?.timeLimit || 0 }} min</p>
              </div>
            </div>
          </UCard>
        </div>

        <!-- Questions List -->
        <div class="lg:col-span-3">
          <UCard>
            <template #header>
              <div class="flex justify-between items-center">
                <h2 class="text-xl font-bold">Exam Questions</h2>
                <UInput v-model="search" icon="i-heroicons-magnifying-glass" placeholder="Search questions..." />
              </div>
            </template>

            <div v-if="pending" class="flex justify-center p-12">
              <UIcon name="i-heroicons-arrow-path" class="animate-spin text-4xl text-primary-500" />
            </div>

            <div v-else-if="!questions || questions.length === 0" class="text-center p-12 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg">
              <UIcon name="i-heroicons-document-text" class="text-5xl text-gray-300 mb-4" />
              <h3 class="text-lg font-medium text-gray-400">No questions found</h3>
              <p class="text-sm text-gray-500 mt-2">Start by uploading images or adding questions manually.</p>
            </div>

            <div v-else class="space-y-4">
              <UCard v-for="(q, idx) in filteredQuestions" :key="q.id" class="relative group hover:border-primary-500 transition-colors">
                <div class="flex gap-4">
                  <div class="flex-none">
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 text-sm font-bold">
                      {{ idx + 1 }}
                    </span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-gray-900 dark:text-white font-medium break-words leading-relaxed">
                      {{ q.question }}
                    </p>
                    
                    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div 
                        v-for="(opt, oIdx) in getOptions(q.options)" 
                        :key="oIdx" 
                        class="p-3 rounded-lg text-sm flex gap-3 items-start"
                        :class="oIdx === q.answer 
                          ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400' 
                          : 'bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400'"
                      >
                        <span class="font-bold opacity-60">{{ String.fromCharCode(65 + oIdx) }}.</span>
                        <span>{{ opt }}</span>
                        <UIcon v-if="oIdx === q.answer" name="i-heroicons-check-circle" class="ml-auto flex-none text-green-500" />
                      </div>
                    </div>
                    
                    <div v-if="q.explanation" class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-xs text-blue-700 dark:text-blue-400">
                      <p class="font-bold mb-1 flex items-center gap-1">
                        <UIcon name="i-heroicons-information-circle" /> Explanation
                      </p>
                      {{ q.explanation }}
                    </div>
                  </div>
                  
                  <div class="flex-none opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
                    <UButton size="xs" color="primary" variant="soft" icon="i-heroicons-pencil" @click="openEditModal(q)" />
                    <UButton size="xs" color="red" variant="soft" icon="i-heroicons-trash" @click="confirmDelete(q.id)" />
                  </div>
                </div>
              </UCard>
            </div>
          </UCard>
        </div>
      </div>
    </div>

    <!-- Question Modal (Add/Edit) -->
    <UModal v-model="isModalOpen" :ui="{ width: 'sm:max-w-2xl' }">
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold">{{ isEditing ? 'Edit Question' : 'Add Manual Question' }}</h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark" @click="isModalOpen = false" />
          </div>
        </template>

        <div class="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
          <UFormGroup label="Question Text" required>
            <UTextarea v-model="form.question" placeholder="Enter the question here..." autoresize :rows="3" />
          </UFormGroup>

          <div class="space-y-3">
            <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Answer Options</p>
            <div v-for="(opt, idx) in 4" :key="idx" class="flex gap-2 items-center">
              <URadio 
                v-model="form.answer" 
                :value="idx" 
                name="correct-answer" 
                class="mt-1"
                :ui="{ base: 'h-5 w-5 text-green-600' }"
              />
              <UInput 
                v-model="form.options[idx]" 
                class="flex-1" 
                :placeholder="`Option ${String.fromCharCode(65 + idx)}`"
                :color="form.answer === idx ? 'green' : 'gray'"
              />
            </div>
            <p class="text-xs text-gray-500">Select the radio button next to the correct answer.</p>
          </div>

          <UFormGroup label="Explanation (Optional)">
            <UTextarea v-model="form.explanation" placeholder="Provide context on why the answer is correct..." autoresize />
          </UFormGroup>

          <div class="grid grid-cols-2 gap-4">
            <UFormGroup label="Topic">
              <UInput v-model="form.topic" placeholder="e.g. EC2, IAM" />
            </UFormGroup>
            <UFormGroup label="Difficulty">
              <USelect v-model="form.difficulty" :options="['easy', 'medium', 'hard']" />
            </UFormGroup>
          </div>
        </div>

        <template #footer>
          <div class="flex justify-end gap-3">
            <UButton color="gray" variant="ghost" @click="isModalOpen = false">Cancel</UButton>
            <UButton color="primary" :loading="saving" icon="i-heroicons-check" @click="handleSave">
              {{ isEditing ? 'Save Changes' : 'Add Question' }}
            </UButton>
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const examId = route.params.id
const search = ref('')
const isModalOpen = ref(false)
const isEditing = ref(false)
const saving = ref(false)
const editingId = ref(null)

const form = reactive({
  question: '',
  options: ['', '', '', ''],
  answer: 0,
  explanation: '',
  topic: '',
  difficulty: 'medium'
})

const { data: exam } = useFetch(`/api/exams/${examId}`)
const { data: questions, pending, refresh } = useFetch(`/api/exams/${examId}/questions?admin=true`)

const getOptions = (options) => {
  if (Array.isArray(options)) return options
  try {
    return JSON.parse(options)
  } catch (e) {
    return []
  }
}

const filteredQuestions = computed(() => {
  if (!questions.value) return []
  if (!search.value) return questions.value
  const s = search.value.toLowerCase()
  return questions.value.filter(q => q.question.toLowerCase().includes(s))
})

const resetForm = () => {
  form.question = ''
  form.options = ['', '', '', '']
  form.answer = 0
  form.explanation = ''
  form.topic = ''
  form.difficulty = 'medium'
  isEditing.value = false
  editingId.value = null
}

const openAddModal = () => {
  resetForm()
  isModalOpen.value = true
}

const openEditModal = (q) => {
  isEditing.value = true
  editingId.value = q.id
  form.question = q.question
  form.options = [...getOptions(q.options)]
  form.answer = q.answer
  form.explanation = q.explanation || ''
  form.topic = q.topic || ''
  form.difficulty = q.difficulty || 'medium'
  isModalOpen.value = true
}

const handleSave = async () => {
  if (!form.question || form.options.some(o => !o)) {
    alert('Please complete all required fields')
    return
  }

  saving.value = true
  try {
    const url = isEditing.value 
      ? `/api/admin/questions/${editingId.value}` 
      : '/api/admin/questions'
    
    await $fetch(url, {
      method: isEditing.value ? 'PATCH' : 'POST',
      body: {
        ...form,
        examId,
        status: 'published'
      }
    })
    
    isModalOpen.value = false
    refresh()
    resetForm()
  } catch (err) {
    alert('Failed to save question')
  } finally {
    saving.value = false
  }
}

const confirmDelete = async (id) => {
  if (!confirm('Are you sure you want to delete this question? This cannot be undone.')) return
  
  try {
    await $fetch(`/api/admin/questions/${id}`, { method: 'DELETE' })
    refresh()
  } catch (err) {
    alert('Failed to delete question')
  }
}
</script>
