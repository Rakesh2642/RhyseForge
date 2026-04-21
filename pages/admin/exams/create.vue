<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-300">
    <div class="max-w-3xl mx-auto">
      <div class="flex items-center gap-4 mb-8">
        <UButton color="gray" variant="ghost" icon="i-heroicons-arrow-left" to="/admin/exams" />
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Create New Exam</h1>
      </div>

      <UCard>
        <UForm :schema="schema" :state="state" class="space-y-6" @submit="onSubmit">
          <UFormGroup label="Exam Title" name="title" required help="e.g. AWS Certified Solutions Architect - Associate">
            <UInput v-model="state.title" placeholder="Enter exam name..." />
          </UFormGroup>

          <div class="grid grid-cols-2 gap-4">
            <UFormGroup label="Provider" name="provider">
              <USelect v-model="state.provider" :options="['AWS', 'Azure', 'GCP', 'SAP', 'CompTIA', 'Other']" />
            </UFormGroup>
            
            <UFormGroup label="Certification Code" name="certificationCode">
              <UInput v-model="state.certificationCode" placeholder="e.g. SAA-C03" />
            </UFormGroup>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <UFormGroup label="Passing Score (%)" name="passingScore">
              <UInput v-model="state.passingScore" type="number" />
            </UFormGroup>
            
            <UFormGroup label="Time Limit (minutes)" name="timeLimit">
              <UInput v-model="state.timeLimit" type="number" />
            </UFormGroup>
          </div>

          <UFormGroup label="Category Tags" name="tags" help="Comma separated values">
            <UInput v-model="state.tags" placeholder="Cloud, Solutions, Architect..." />
          </UFormGroup>

          <div class="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
            <UButton color="gray" variant="soft" to="/admin/exams">Cancel</UButton>
            <UButton type="submit" color="primary" icon="i-heroicons-check" :loading="loading">
              Create Exam
            </UButton>
          </div>
        </UForm>
      </UCard>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from '#app'

const router = useRouter()
const loading = ref(false)

const state = reactive({
  title: '',
  provider: 'AWS',
  certificationCode: '',
  passingScore: 70,
  timeLimit: 120,
  tags: ''
})

const onSubmit = async () => {
  loading.value = true
  try {
    const response = await $fetch('/api/admin/exams', {
      method: 'POST',
      body: {
        ...state,
        categoryTags: JSON.stringify(state.tags.split(',').map(t => t.trim()))
      }
    })
    
    router.push('/admin/exams')
  } catch (err) {
    alert('Failed to create exam: ' + (err.message || 'Unknown error'))
  } finally {
    loading.value = false
  }
}
</script>
