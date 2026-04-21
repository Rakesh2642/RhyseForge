<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-800 p-8 transition-colors duration-300">
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">AI Question Extraction</h1>
          <p class="text-sm text-gray-500 mt-1">Upload an image of multiple-choice questions to automatically parse into the database.</p>
        </div>
        <UButton color="gray" variant="soft" to="/admin/exams">Back to Exams</UButton>
      </div>

      <UCard>
        <div class="space-y-6">
          <UFormGroup label="Select Destination Exam">
            <USelect v-model="selectedExamId" :options="examOptions" placeholder="Choose an exam or create new..." />
          </UFormGroup>

          <UFormGroup label="Upload Document (PNG, JPG, PDF, JSON, JS)">
            <div 
              class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              <UIcon name="i-heroicons-document-arrow-up" class="text-5xl text-gray-400 mb-4" />
              <p class="text-gray-600 dark:text-gray-400">Drag and drop file here, or click to select</p>
              <!-- Native file input can be styled/hidden behind the visual dropzone -->
              <input type="file" @change="handleFileUpload" class="mt-4 text-sm text-gray-500" accept=".png, .jpg, .jpeg, .pdf, .json, .js" />
            </div>
            <p v-if="file" class="mt-2 text-sm text-blue-600 font-medium">Selected: {{ file.name }}</p>
          </UFormGroup>

          <UButton :loading="uploading" :disabled="!file || !selectedExamId" block color="primary" @click="processUpload">
            {{ (file?.name.toLowerCase().endsWith('.json') || file?.name.toLowerCase().endsWith('.js')) ? 'Import Questions from File' : 'Extract Questions via AI' }}
          </UButton>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useFetch, useRouter } from '#app'

const router = useRouter()
const route = useRoute()
const file = ref(null)
const selectedExamId = ref(route.query.examId || '')
const uploading = ref(false)

const { data: exams } = useFetch('/api/admin/exams')
const examOptions = computed(() => {
  if (!exams.value) return []
  return exams.value.map(e => ({ label: e.title, value: e.id }))
})

const handleFileUpload = (event) => {
  const selected = event.target.files[0]
  if (selected) {
    file.value = selected
  }
}

const processUpload = async () => {
  if (!file.value || !selectedExamId.value) return

  uploading.value = true
  const formData = new FormData()
  formData.append('file', file.value)
  formData.append('examId', selectedExamId.value)

  try {
    const job = await $fetch('/api/admin/upload', {
      method: 'POST',
      body: formData
    })
    
    // In a real scenario, this returns a jobId, and we poll.
    // For now, assume sync response or immediate redirect to review queue
    router.push(`/admin/review/${job.jobId || 'pending'}`)
  } catch (err) {
    alert('Upload failed: ' + (err.message || 'Unknown error'))
  } finally {
    uploading.value = false
  }
}
</script>
