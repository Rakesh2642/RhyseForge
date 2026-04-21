<template>
  <div class="min-h-screen bg-gray-50 flex flex-col py-8 md:py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900 transition-colors duration-300">
    <div class="sm:mx-auto sm:w-full sm:max-w-7xl">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
            RhyseForge
          </h2>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Browse and start certification practice exams.
          </p>
        </div>
      </div>

      <div v-if="pending" class="flex justify-center my-12">
        <UIcon name="i-heroicons-arrow-path" class="animate-spin text-4xl text-primary-500" />
      </div>

      <div v-else-if="error" class="text-center text-red-500 my-12">
        Failed to load exams. Please check your database connection.
      </div>

      <div v-else-if="data?.exams" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <UCard v-for="exam in data.exams" :key="exam.id" class="flex flex-col h-full hover:shadow-lg transition-shadow">
          <template #header>
            <div class="flex justify-between items-start">
              <UBadge color="gray" variant="solid" class="mb-2">{{ exam.provider || 'General' }}</UBadge>
              <UBadge v-if="exam.certificationCode" color="primary" variant="subtle">{{ exam.certificationCode }}</UBadge>
            </div>
            <h3 class="text-xl font-bold mt-2 text-gray-900 dark:text-white">{{ exam.title }}</h3>
          </template>

          <div class="flex-grow">
            <div class="flex mt-2 mb-4 space-x-2 flex-wrap">
              <UBadge v-for="tag in exam.categoryTags" :key="tag" color="gray" variant="soft" size="sm" class="mr-1 mb-1">
                {{ tag }}
              </UBadge>
            </div>
            
            <div class="text-sm border-t border-gray-100 dark:border-gray-800 pt-4 flex justify-between text-gray-600 dark:text-gray-400">
              <span class="flex items-center"><UIcon name="i-heroicons-document-text" class="mr-1" /> {{ exam._count?.questions || 0 }} Questions</span>
              <span class="flex items-center" v-if="exam.timeLimit"><UIcon name="i-heroicons-clock" class="mr-1" /> {{ exam.timeLimit }} min</span>
            </div>
          </div>

          <template #footer>
            <div class="flex flex-col sm:flex-row gap-2 w-full">
              <template v-if="(exam._count?.questions || 0) > 0">
                <UButton class="flex-1" @click="handleAction(`/exam/${exam.id}?mode=practice`)" color="primary" variant="solid" icon="i-heroicons-play">
                  Practice
                </UButton>
                <UButton class="flex-1" @click="handleAction(`/exam/${exam.id}?mode=mock`)" color="gray" variant="outline" icon="i-heroicons-academic-cap">
                  Mock Exam
                </UButton>
              </template>
              <template v-else>
                <UButton class="flex-1" disabled color="gray" variant="soft" icon="i-heroicons-lock-closed">
                  Coming Soon
                </UButton>
              </template>
            </div>
          </template>
        </UCard>
      </div>
      
      <div v-if="data && Array.isArray(data.exams) && data.exams.length === 0" class="text-center py-12">
        <UIcon name="i-heroicons-inbox" class="text-6xl text-gray-300 dark:text-gray-600 mb-4" />
        <h3 class="text-xl text-gray-500 dark:text-gray-400">No published exams found.</h3>
        <p class="text-sm text-gray-400 mt-2">Log in as admin to create or extract exams from images.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from '#app'

const { data, pending, error } = useFetch('/api/exams')
const { status } = useAuth()
const router = useRouter()

const handleAction = (url) => {
  if (status.value === 'authenticated') {
    router.push(url)
  } else {
    // Force login if not authenticated
    router.push('/login')
  }
}
</script>
