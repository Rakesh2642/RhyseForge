<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-800 p-8 transition-colors duration-300">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Review Queue</h1>
          <p class="text-sm text-gray-500 mt-1">Review questions extracted via AI before publishing them.</p>
        </div>
        <UButton color="green" icon="i-heroicons-check-circle" @click="bulkApprove">Bulk Approve All</UButton>
      </div>

      <div v-if="pending" class="flex justify-center h-64 items-center">
         <UIcon name="i-heroicons-arrow-path" class="animate-spin text-4xl text-primary-500" />
      </div>

      <div v-else-if="questions.length === 0" class="text-center py-16 bg-white dark:bg-gray-900 rounded-lg shadow">
        <UIcon name="i-heroicons-clipboard-document-check" class="text-6xl text-green-500 mb-4" />
        <h3 class="text-xl text-gray-900 dark:text-white">All caught up!</h3>
        <p class="text-gray-500">No pending questions in the review queue.</p>
      </div>

      <div v-else class="space-y-6">
        <UCard v-for="(q, idx) in questions" :key="q.id" class="border-l-4" :class="getConfidenceBorder(q.confidenceScore)">
          <div class="flex justify-between items-start mb-4">
            <div class="flex items-center gap-2">
              <span class="font-bold">Q{{ idx + 1 }}</span>
              <UBadge :color="getConfidenceColor(q.confidenceScore)">
                AI Confidence: {{ Math.round((q.confidenceScore || 0) * 100) }}%
              </UBadge>
              <UBadge v-if="q.confidenceScore < 0.85" color="red" variant="solid">Needs Review</UBadge>
            </div>
            <div class="space-x-2">
              <UButton size="sm" color="red" variant="soft" icon="i-heroicons-trash" @click="reject(q.id)">Reject</UButton>
              <UButton size="sm" color="primary" variant="soft" icon="i-heroicons-pencil" @click="edit(q.id)">Edit</UButton>
              <UButton size="sm" color="green" variant="solid" icon="i-heroicons-check" @click="approve(q.id)">Approve</UButton>
            </div>
          </div>
          
          <div class="mb-4">
            <h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-2">Question:</h4>
            <p class="text-gray-700 dark:text-gray-300">{{ q.question }}</p>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div 
              v-for="(opt, optIdx) in q.options" 
              :key="optIdx"
              class="p-3 rounded border"
              :class="optIdx === q.answer ? 'bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-800' : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'"
            >
              <span class="font-mono text-xs mr-2 text-gray-500">{{ String.fromCharCode(65 + optIdx) }}</span>
              {{ opt }}
              <UIcon v-if="optIdx === q.answer" name="i-heroicons-check-circle" class="text-green-500 ml-2" />
            </div>
          </div>

          <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded text-sm text-gray-700 dark:text-gray-300">
            <span class="font-bold">Explanation:</span> {{ q.explanation }}
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// In reality, fetch from /api/admin/questions/pending
const questions = ref([])
const pending = ref(true)

onMounted(async () => {
  // Simulate fetch
  const data = await $fetch('/api/admin/review/pending')
  questions.value = data
  pending.value = false
})

const getConfidenceColor = (score) => {
  if (score >= 0.95) return 'green'
  if (score >= 0.85) return 'yellow'
  return 'red'
}

const getConfidenceBorder = (score) => {
  if (score >= 0.95) return 'border-green-500'
  if (score >= 0.85) return 'border-yellow-500'
  return 'border-red-500'
}

const approve = async (id) => {
  await $fetch(`/api/admin/questions/${id}/approve`, { method: 'POST' })
  questions.value = questions.value.filter(q => q.id !== id)
}

const reject = async (id) => {
  await $fetch(`/api/admin/questions/${id}`, { method: 'DELETE' })
  questions.value = questions.value.filter(q => q.id !== id)
}

const edit = (id) => {
  alert('Edit logic not implemented in Phase 2 mock yet')
}

const bulkApprove = async () => {
  if (questions.value.length === 0) return
  
  const ids = questions.value.map(q => q.id)
  try {
    await $fetch('/api/admin/questions/bulk-approve', {
      method: 'POST',
      body: { ids }
    })
    questions.value = []
  } catch (err) {
    alert('Bulk approval failed: ' + err.message)
  }
}
</script>
