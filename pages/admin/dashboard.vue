<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-800 p-4 md:p-8 transition-colors duration-300">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8">
        <h1 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
        <UButton color="red" variant="soft" @click="signOut({ callbackUrl: '/login' })" class="w-full sm:w-auto">Logout</UButton>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6 mb-6 md:mb-8">
        <UCard v-for="(stat, index) in stats" :key="index">
          <div class="flex flex-col">
            <span class="text-gray-500 dark:text-gray-400 text-xs md:text-sm font-medium">{{ stat.name }}</span>
            <span class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-1 md:mt-2">{{ stat.value }}</span>
          </div>
        </UCard>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <UCard>
          <template #header>
            <h2 class="text-xl font-semibold">Quick Actions</h2>
          </template>
          <div class="flex flex-col space-y-4">
            <UButton icon="i-heroicons-plus" color="primary" variant="soft" to="/admin/exams/create">Create New Exam</UButton>
            <UButton icon="i-heroicons-book-open" color="primary" variant="soft" to="/admin/exams">Global Exam Catalog</UButton>
            <UButton icon="i-heroicons-cloud-arrow-up" color="primary" variant="soft" to="/admin/upload">Upload Image for AI Parsing</UButton>
            <UButton icon="i-heroicons-megaphone" color="amber" variant="soft" to="/admin/module-requests">Module Request Inbox</UButton>
            <UButton icon="i-heroicons-users" color="gray" variant="soft" to="/admin/users">Manage Users</UButton>
          </div>
        </UCard>
        
        <UCard>
          <template #header>
            <h2 class="text-xl font-semibold">Recent AI Parse Jobs</h2>
          </template>
          <div class="text-gray-500 dark:text-gray-400 text-sm">
            <p>No recent jobs found. Upload an exam image to get started.</p>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRouter } from '#app'

const { status, data, signOut } = useAuth()
const router = useRouter()

// Strict admin-only protection
watchEffect(() => {
  if (status.value === 'unauthenticated') {
    router.push('/admin/login')
  } else if (status.value === 'authenticated' && data.value?.user?.role !== 'ADMIN') {
    router.push('/dashboard')
  }
})

const { data: realStats, pending } = useFetch('/api/admin/stats')

const stats = computed(() => [
  { name: 'Total Users', value: realStats.value?.userCount || '0' },
  { name: 'Exams Published', value: realStats.value?.examCount || '0' },
  { name: 'Total Attempts Today', value: realStats.value?.sessionsToday || '0' },
  { name: 'Average Pass Rate', value: realStats.value?.passRate || '0%' },
  { name: 'Open Module Requests', value: realStats.value?.pendingModuleRequests || '0' }
])
</script>
