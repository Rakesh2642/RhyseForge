<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-8">
    <UContainer>
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">My Dashboard</h1>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Track your progress, streaks, and review past exams.</p>
        </div>
        <div class="flex gap-2">
          <UButton color="white" variant="soft" to="/profile" icon="i-heroicons-user">Profile</UButton>
          <UButton color="primary" variant="soft" to="/">Browse Catalog</UButton>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <!-- Streak Widget -->
        <UCard class="bg-gradient-to-br from-orange-500 to-red-600 text-white border-none">
          <div class="flex items-center space-x-4">
            <UIcon name="i-heroicons-fire" class="text-5xl opacity-80" />
            <div>
              <p class="text-orange-100 text-sm font-medium">Study Streak</p>
              <h2 class="text-4xl font-extrabold">{{ studyStreak }} Days</h2>
            </div>
          </div>
        </UCard>
        
        <!-- Total Attempts -->
        <UCard class="bg-gradient-to-br from-blue-500 to-cyan-600 text-white border-none">
          <div class="flex items-center space-x-4">
            <UIcon name="i-heroicons-academic-cap" class="text-5xl opacity-80" />
            <div>
              <p class="text-blue-100 text-sm font-medium">Exams Taken</p>
              <h2 class="text-4xl font-extrabold">{{ sessions?.length || 0 }}</h2>
            </div>
          </div>
        </UCard>

        <!-- Average Score -->
        <UCard class="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-none">
          <div class="flex items-center space-x-4">
            <UIcon name="i-heroicons-chart-bar" class="text-5xl opacity-80" />
            <div>
              <p class="text-green-100 text-sm font-medium">Average Score</p>
              <h2 class="text-4xl font-extrabold">{{ avgScore }}%</h2>
            </div>
          </div>
        </UCard>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Recent History -->
        <UCard class="lg:col-span-2">
          <template #header>
            <h3 class="text-xl font-bold">Recent Activity</h3>
          </template>
          
          <div v-if="pending" class="flex justify-center p-4">
            <UIcon name="i-heroicons-arrow-path" class="animate-spin text-2xl text-primary-500" />
          </div>
          
          <div v-else-if="!sessions || sessions.length === 0" class="text-center p-8 text-gray-500">
            No exams taken yet. Start practicing!
          </div>

          <UTable v-else :columns="historyColumns" :rows="recentSessions">
            <template #exam-data="{ row }">
              <span class="font-medium text-gray-900 dark:text-white">{{ row.exam.title }}</span>
            </template>
            <template #score-data="{ row }">
              <span :class="row.passed ? 'text-green-600 font-bold' : 'text-red-500'">{{ row.score !== null ? row.score.toFixed(1) + '%' : 'N/A' }}</span>
            </template>
            <template #date-data="{ row }">
              {{ new Date(row.endTime || row.startTime).toLocaleDateString() }}
            </template>
          </UTable>
        </UCard>

        <!-- Certification Readiness -->
        <UCard>
          <template #header>
            <h3 class="text-xl font-bold">Certification Readiness</h3>
          </template>
          
          <div v-if="examMastery.length === 0" class="flex flex-col items-center justify-center py-10 opacity-40">
             <UIcon name="i-heroicons-document-magnifying-glass" class="text-5xl mb-2" />
             <p class="text-xs font-black uppercase tracking-widest">No Exam Data Yet</p>
          </div>

          <div v-else class="space-y-6">
            <div v-for="exam in examMastery" :key="exam.title">
              <div class="flex justify-between mb-2">
                <span class="text-xs font-black text-gray-400 uppercase tracking-tight truncate max-w-[150px]">{{ exam.title }}</span>
                <span class="text-xs font-black" :class="`text-${exam.color}-500`">{{ Math.round(exam.score) }}%</span>
              </div>
              <UProgress :value="exam.score" :color="exam.color" size="sm" class="rounded-full" />
            </div>
          </div>
          
          <div class="mt-8 text-center">
            <UButton block color="gray" variant="soft" icon="i-heroicons-arrow-path" class="rounded-xl font-bold" @click="refresh()">Update Stats</UButton>
          </div>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { useFetch, useRouter } from '#app'

const { status, data: authData } = useAuth()
const router = useRouter()

// Redirect admins to their specific board if they land here
watchEffect(() => {
  if (status.value === 'authenticated' && authData.value?.user?.role === 'ADMIN') {
    router.push('/admin/dashboard')
  } else if (status.value === 'unauthenticated') {
    router.push('/login')
  }
})

const historyColumns = [
  { key: 'exam', label: 'Exam' },
  { key: 'mode', label: 'Mode' },
  { key: 'score', label: 'Score' },
  { key: 'date', label: 'Date' }
]

const { data: sessions, pending, refresh } = useFetch('/api/sessions/me')

const recentSessions = computed(() => {
  if (!sessions.value) return []
  return sessions.value.slice(0, 10)
})

const avgScore = computed(() => {
  if (!sessions.value || sessions.value.length === 0) return 0
  const total = sessions.value.reduce((acc, s) => acc + (s.score || 0), 0)
  return (total / sessions.value.length).toFixed(1)
})

const examMastery = computed(() => {
  if (!sessions.value) return []
  
  const examMap = {}
  sessions.value.forEach(s => {
    if (!examMap[s.exam.title] || examMap[s.exam.title].score < s.score) {
      examMap[s.exam.title] = {
        title: s.exam.title,
        score: s.score || 0,
        color: s.score >= 70 ? 'green' : s.score >= 50 ? 'yellow' : 'red'
      }
    }
  })
  
  return Object.values(examMap).slice(0, 4)
})

const studyStreak = computed(() => {
  if (!sessions.value || sessions.value.length === 0) return 0

  const daySet = new Set(
    sessions.value
      .map((s) => new Date(s.endTime || s.startTime).toISOString().slice(0, 10))
  )

  const sortedDays = [...daySet].sort((a, b) => b.localeCompare(a))
  let streak = 0
  let cursor = new Date()
  cursor.setHours(0, 0, 0, 0)

  for (const day of sortedDays) {
    const dayStr = cursor.toISOString().slice(0, 10)
    if (day === dayStr) {
      streak++
      cursor.setDate(cursor.getDate() - 1)
    } else if (day > dayStr) {
      continue
    } else {
      break
    }
  }
  return streak
})
</script>

<style scoped>
/* Add any specific animations if needed */
</style>
