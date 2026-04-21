<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 py-8 md:py-16 relative overflow-hidden">
    <!-- Decorative Glow -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none"></div>

    <UContainer class="max-w-5xl relative z-10">
      <div class="text-center mb-10 md:mb-16 px-4">
        <div class="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-500 mb-4 md:mb-6 group cursor-default">
           <UIcon name="i-heroicons-globe-alt" class="animate-spin-slow" />
           <span class="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Live Global Rankings</span>
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-3 md:mb-4">
          Hall of <span class="text-primary-500">Forge</span>
        </h1>
        <p class="text-sm md:text-lg text-gray-500 dark:text-gray-400 font-medium max-w-xl mx-auto">
          The elite ranks of certification masters. Ranking is calculated based on cumulative XP and accuracy.
        </p>
      </div>

      <!-- Podium Section -->
      <div v-if="!pending && leaderboard?.length >= 3" class="hidden sm:grid grid-cols-3 gap-3 md:gap-4 mb-12 md:mb-20 items-end max-w-3xl mx-auto px-4">
        <!-- 2nd Place -->
        <div class="flex flex-col items-center group">
          <div class="relative mb-4">
             <UAvatar 
               :src="leaderboard[1].image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${leaderboard[1].name}`" 
               size="xl" 
               class="ring-4 ring-gray-300 dark:ring-gray-700 w-20 h-20 shadow-xl group-hover:scale-110 transition-transform" 
             />
             <div class="absolute -top-3 -right-3 bg-gray-200 dark:bg-gray-700 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center font-black text-xs">2</div>
          </div>
          <div class="text-center">
            <p class="font-black text-gray-900 dark:text-white truncate max-w-[120px]">{{ leaderboard[1].name }}</p>
            <p class="text-xs font-bold text-primary-500">{{ leaderboard[1].score }} XP</p>
          </div>
          <div class="w-full h-24 bg-gray-100 dark:bg-gray-800/50 mt-4 rounded-t-3xl border-t-2 border-gray-200 dark:border-gray-800"></div>
        </div>

        <!-- 1st Place -->
        <div class="flex flex-col items-center group -mt-10">
          <div class="relative mb-6">
             <div class="absolute inset-0 bg-yellow-500 blur-2xl opacity-20 animate-pulse"></div>
             <UAvatar 
               :src="leaderboard[0].image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${leaderboard[0].name}`" 
               size="3xl" 
               class="ring-8 ring-yellow-400 w-28 h-28 shadow-2xl group-hover:scale-110 transition-transform relative z-10" 
             />
             <div class="absolute -top-4 -right-4 bg-yellow-400 w-12 h-12 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center font-black text-xl text-white shadow-xl rotate-12">
               <UIcon name="i-heroicons-trophy" />
             </div>
          </div>
          <div class="text-center">
            <p class="font-black text-xl text-gray-900 dark:text-white truncate max-w-[150px]">{{ leaderboard[0].name }}</p>
            <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-400/10 rounded-full mt-1">
               <UIcon name="i-heroicons-fire" class="text-yellow-500" />
               <span class="text-xs font-black text-yellow-500">{{ leaderboard[0].score }} XP</span>
            </div>
          </div>
          <div class="w-full h-40 bg-gradient-to-b from-primary-500 to-primary-600 mt-6 rounded-t-[3rem] shadow-2xl flex items-start justify-center pt-8">
             <span class="text-6xl font-black text-white/20">1</span>
          </div>
        </div>

        <!-- 3rd Place -->
        <div class="flex flex-col items-center group">
          <div class="relative mb-4">
             <UAvatar 
               :src="leaderboard[2].image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${leaderboard[2].name}`" 
               size="xl" 
               class="ring-4 ring-orange-300 dark:ring-orange-800/40 w-16 h-16 shadow-xl group-hover:scale-110 transition-transform" 
             />
             <div class="absolute -top-2 -right-2 bg-orange-200 dark:bg-orange-800/60 w-7 h-7 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center font-black text-[10px]">3</div>
          </div>
          <div class="text-center">
            <p class="font-black text-gray-900 dark:text-white truncate max-w-[120px]">{{ leaderboard[2].name }}</p>
            <p class="text-xs font-bold text-primary-500">{{ leaderboard[2].score }} XP</p>
          </div>
          <div class="w-full h-16 bg-gray-50 dark:bg-gray-800/30 mt-4 rounded-t-2xl border-t-2 border-gray-100 dark:border-gray-800"></div>
        </div>
      </div>

      <!-- Rankings Table -->
      <UCard class="rounded-[2.5rem] border-none shadow-2xl shadow-black/10 ring-1 ring-gray-100 dark:ring-gray-800 overflow-hidden overflow-x-auto">
        <UTable :columns="columns" :rows="leaderboard" :loading="pending"
                :ui="{ 
                  tr: { base: 'group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300' },
                  td: { base: 'py-6 px-4' },
                  th: { base: 'py-4 px-4 text-xs font-black uppercase tracking-widest text-gray-400' }
                }">
          
          <template #rank-data="{ index }">
            <div class="flex items-center gap-3">
               <span class="text-lg font-black" :class="index < 3 ? 'text-primary-500' : 'text-gray-400'">
                 #{{ index + 1 }}
               </span>
               <UIcon v-if="index === 0" name="i-heroicons-star-20-solid" class="text-yellow-500" />
            </div>
          </template>
          
          <template #user-data="{ row }">
            <div class="flex items-center gap-4">
              <UAvatar 
                :src="row.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${row.name}`" 
                size="md" 
                class="ring-2 ring-gray-100 dark:ring-gray-800"
              />
              <div>
                 <p class="font-black text-gray-900 dark:text-white leading-none mb-1">{{ row.name }}</p>
                 <p class="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Verified Candidate</p>
              </div>
            </div>
          </template>
          
          <template #exams_taken-data="{ row }">
             <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-academic-cap" class="text-gray-400" />
                <span class="font-bold text-gray-700 dark:text-gray-300">{{ row.exams_taken }} Exams</span>
             </div>
          </template>
          
          <template #score-data="{ row }">
            <div class="flex flex-col items-end">
               <span class="font-black text-xl text-primary-600 dark:text-primary-400">{{ row.score.toLocaleString() }}</span>
               <span class="text-[8px] font-black text-gray-400 uppercase tracking-widest">Total Rating</span>
            </div>
          </template>
        </UTable>
      </UCard>
    </UContainer>
  </div>
</template>

<script setup>
const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'user', label: 'Candidate' },
  { key: 'exams_taken', label: 'Volume' },
  { key: 'score', label: 'Experience Point (XP)' }
]

const { data: leaderboard, pending } = useFetch('/api/leaderboard')
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 8s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
