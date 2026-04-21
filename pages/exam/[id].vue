<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-8">
    <UContainer>
      <!-- Loading State -->
      <div v-if="pending" class="flex flex-col justify-center items-center h-[60vh]">
        <UIcon name="i-heroicons-arrow-path" class="animate-spin text-5xl text-primary-500 mb-4" />
        <p class="text-gray-500 font-medium animate-pulse">Preparing your session...</p>
      </div>
      
      <!-- Error State -->
      <div v-else-if="error" class="max-w-md mx-auto text-center py-20">
        <UIcon name="i-heroicons-exclamation-triangle" class="text-6xl text-red-500 mb-4" />
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Oops! Something went wrong</h2>
        <p class="text-gray-500 mb-6">{{ error.message || 'We couldn\'t load your exam. Please try again.' }}</p>
        <UButton color="gray" variant="ghost" to="/dashboard" icon="i-heroicons-arrow-left">Back to Dashboard</UButton>
      </div>

      <!-- Minimal Exam Setup Lobby -->
      <div v-else-if="!isStarted" class="max-w-xl mx-auto">
        <UCard class="shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800 rounded-3xl overflow-hidden border-none p-0">
          <!-- Header with Gradient -->
          <div class="h-40 bg-gradient-to-br from-primary-500 via-primary-600 to-blue-700 p-8 text-white relative">
            <div class="relative z-10 pt-2">
              <h1 class="text-3xl font-black tracking-tight leading-tight mb-1">{{ exam?.title }}</h1>
              <div class="flex items-center gap-2 text-white/80 text-sm font-semibold">
                <span class="bg-white/20 px-2 py-0.5 rounded uppercase">{{ exam?.certificationCode }}</span>
                <span>•</span>
                <span>{{ exam?.totalQuestions }} Questions Available</span>
                <template v-if="status === 'authenticated' && user?.plan === 'FREE'">
                  <span>•</span>
                  <span class="bg-amber-500/30 text-amber-100 px-2 py-0.5 rounded flex items-center gap-1">
                    <UIcon name="i-heroicons-sparkles" />
                    Free Sample Mode
                  </span>
                </template>
              </div>
            </div>
            <!-- Decorative Icon -->
            <UIcon name="i-heroicons-academic-cap" class="absolute right-[-10px] top-[-10px] text-[160px] text-white/10 rotate-12 pointer-events-none" />
          </div>

          <div class="p-8 space-y-8">
            <!-- Mode Selector -->
            <div>
              <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1">Session Mode</p>
              <div class="flex p-1.5 bg-gray-100 dark:bg-gray-800/50 rounded-2xl">
                <button 
                  @click="sessionMode = 'practice'"
                  class="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl transition-all duration-300"
                  :class="sessionMode === 'practice' ? 'bg-white dark:bg-gray-700 shadow-md text-primary-600 scale-[1.02] ring-1 ring-black/5' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'"
                >
                  <UIcon name="i-heroicons-academic-cap" class="text-lg" />
                  <span class="font-bold">Practice</span>
                </button>
                <button 
                  @click="sessionMode = 'mock'"
                  class="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl transition-all duration-300"
                  :class="sessionMode === 'mock' ? 'bg-white dark:bg-gray-700 shadow-md text-primary-600 scale-[1.02] ring-1 ring-black/5' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'"
                >
                  <UIcon name="i-heroicons-clock" class="text-lg" />
                  <span class="font-bold">Mock Exam</span>
                </button>
              </div>
            </div>

            <!-- Question Selection Chips -->
            <div>
              <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1">Session Length</p>
              <div class="flex flex-wrap gap-2">
                <button 
                  v-for="count in [5, 10, 25, 50, 'All']" 
                  :key="count"
                  @click="selectionType = 'count'; questionLimit = count"
                  class="px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 border-2"
                  :class="selectionType === 'count' && questionLimit === count 
                    ? 'bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/30' 
                    : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-primary-200'"
                >
                  {{ count }}
                </button>
                <button 
                   @click="selectionType = 'range'"
                   class="px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 border-2 inline-flex items-center gap-2"
                   :class="selectionType === 'range' 
                    ? 'bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/30' 
                    : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-primary-200'"
                >
                  <UIcon name="i-heroicons-adjustments-horizontal" />
                  Range
                </button>
              </div>

              <!-- Range Inputs (Revealed) -->
              <Transition name="slide-down">
                <div v-if="selectionType === 'range'" class="mt-4 p-5 bg-primary-50/50 dark:bg-primary-900/10 rounded-2xl border-2 border-dashed border-primary-200 dark:border-primary-800">
                  <div class="flex items-center gap-4">
                    <div class="flex-1">
                      <p class="text-[10px] font-bold text-primary-600 dark:text-primary-400 mb-1 ml-1">FROM #</p>
                      <UInput v-model.number="rangeStart" type="number" size="md" variant="outline" color="white" class="rounded-lg" :ui="{ input: 'text-black font-black text-lg bg-white' }" />
                    </div>
                    <div class="pt-5 text-primary-300 font-bold">→</div>
                    <div class="flex-1">
                      <p class="text-[10px] font-bold text-primary-600 dark:text-primary-400 mb-1 ml-1">TO #</p>
                      <UInput v-model.number="rangeEnd" type="number" size="md" variant="outline" color="white" class="rounded-lg" :ui="{ input: 'text-black font-black text-lg bg-white' }" />
                    </div>
                  </div>
                  <p class="text-[10px] text-primary-500 mt-3 font-medium flex items-center gap-1">
                    <UIcon name="i-heroicons-information-circle" /> Sequential order (shuffle disabled)
                  </p>
                </div>
              </Transition>
            </div>

            <!-- Toggles Section -->
            <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/30 rounded-2xl">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-sm">
                  <UIcon name="i-heroicons-arrows-right-left" class="text-gray-500" />
                </div>
                <div>
                  <p class="font-bold text-sm text-gray-800 dark:text-gray-200">Shuffle Questions</p>
                  <p class="text-[10px] text-gray-400">Randomized for every new attempt</p>
                </div>
              </div>
              <UToggle v-model="shouldShuffle" />
            </div>

            <!-- Empty Question Bank Warning -->
            <div v-if="exam?.totalQuestions === 0" class="p-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900 rounded-2xl flex items-start gap-3">
              <UIcon name="i-heroicons-exclamation-circle" class="text-orange-500 text-xl flex-shrink-0 mt-0.5" />
              <div>
                <p class="text-sm font-bold text-orange-800 dark:text-orange-400">Study Material Pending</p>
                <p class="text-xs text-orange-700/70 dark:text-orange-500/70">Our AI is still forging the questions for this certification. Please check back later!</p>
              </div>
            </div>

            <!-- Action Button -->
            <UButton 
              block 
              size="xl" 
              color="primary" 
              :disabled="exam?.totalQuestions === 0"
              :loading="isStarting"
              class="rounded-2xl h-16 text-xl font-black shadow-primary-500/25 shadow-2xl hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed" 
              :icon="exam?.totalQuestions === 0 ? 'i-heroicons-lock-closed' : 'i-heroicons-play'"
              @click="startExamSession"
            >
              {{ exam?.totalQuestions === 0 ? 'Questions Locked' : 'Start Session' }}
            </UButton>
          </div>
        </UCard>
      </div>
      
      <!-- Ongoing Exam -->
      <div v-else-if="!isFinished && currentQuestion">
        <div class="mb-8 max-w-3xl mx-auto">
          <div class="flex justify-between items-end mb-4">
            <div>
              <p class="text-xs font-black text-primary-500 uppercase tracking-widest mb-1">
                {{ sessionMode === 'mock' ? '🔥 Mock Exam Mode' : '🎓 Practice Session' }}
              </p>
              <h2 class="text-3xl font-black text-gray-900 dark:text-white">
                Question <span class="text-primary-500">{{ currentIndex + 1 }}</span> <span class="text-gray-300 dark:text-gray-700 font-light">of</span> {{ questions.length }}
              </h2>
            </div>
            
            <!-- Volumetric Timer Bubble -->
            <div v-if="sessionMode === 'mock'" class="flex flex-col items-end">
               <div 
                 class="px-4 py-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-gray-100 dark:border-gray-800 flex items-center gap-3 transition-colors duration-500"
                 :class="timeLeft < 60 ? 'border-red-500/50' : 'border-gray-100'"
               >
                 <UIcon name="i-heroicons-clock" :class="timerUrgencyClass" class="text-2xl" />
                 <span class="font-black text-2xl tabular-nums tracking-tighter" :class="timerUrgencyClass">
                   {{ formattedTime }}
                 </span>
               </div>
               <p class="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-tighter">Time Remaining</p>
            </div>

            <div v-else class="text-right">
               <span class="text-sm font-bold text-gray-400">{{ Math.round((currentIndex / questions.length) * 100) }}% Complete</span>
            </div>
          </div>
          <UProgress :value="(currentIndex / questions.length) * 100" color="primary" size="md" class="rounded-full shadow-inner" />
        </div>

        <div class="max-w-3xl mx-auto space-y-6">
          <UCard class="shadow-xl rounded-3xl border-none ring-1 ring-gray-200 dark:ring-gray-800">
            <div class="text-xl leading-relaxed text-gray-800 dark:text-gray-100 mb-8 font-semibold whitespace-pre-wrap">
              {{ currentQuestion.question }}
            </div>

            <div class="space-y-4">
              <div 
                v-for="(option, index) in currentQuestion.options" 
                :key="index"
                @click="handleAnswerSelection(currentQuestion.id, index)"
                :class="[
                  'p-5 border-2 rounded-2xl transition-all duration-300 relative overflow-hidden group',
                  // Interaction styling
                  answers[currentQuestion.id] === undefined 
                    ? 'border-gray-100 dark:border-gray-800 hover:border-primary-400 dark:hover:border-primary-600 cursor-pointer bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl hover:scale-[1.01]' 
                    : '',
                  // Result styling
                  answers[currentQuestion.id] !== undefined
                    ? sessionMode === 'practice'
                      ? index === currentQuestion.answer
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                        : answers[currentQuestion.id] === index
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                          : 'border-transparent opacity-40 grayscale-[0.5]'
                      : answers[currentQuestion.id] === index
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                        : 'border-transparent opacity-40'
                    : ''
                ]"
              >
                <div class="flex items-center relative z-10">
                  <div 
                    class="w-12 h-12 rounded-xl border-2 flex items-center justify-center mr-5 transition-all duration-300 font-black text-lg"
                    :class="[
                      answers[currentQuestion.id] === undefined ? 'border-gray-200 text-gray-400 group-hover:border-primary-400 group-hover:text-primary-500' : '',
                      answers[currentQuestion.id] !== undefined 
                        ? sessionMode === 'practice'
                          ? index === currentQuestion.answer
                            ? 'border-green-500 bg-green-500 text-white rotate-[360deg]'
                            : answers[currentQuestion.id] === index
                              ? 'border-red-500 bg-red-500 text-white'
                              : 'border-gray-200 text-gray-300'
                          : answers[currentQuestion.id] === index
                            ? 'border-primary-500 bg-primary-500 text-white'
                            : 'border-gray-200 text-gray-300'
                        : ''
                    ]"
                  >
                    <template v-if="answers[currentQuestion.id] !== undefined && sessionMode === 'practice'">
                      <UIcon v-if="index === currentQuestion.answer" name="i-heroicons-check" />
                      <UIcon v-else-if="answers[currentQuestion.id] === index" name="i-heroicons-x-mark" />
                      <span v-else>{{ String.fromCharCode(65 + index) }}</span>
                    </template>
                    <template v-else>
                       {{ String.fromCharCode(65 + index) }}
                    </template>
                  </div>
                  <span class="flex-1 text-gray-700 dark:text-gray-200 font-bold text-lg leading-snug">{{ option }}</span>
                </div>
                <!-- Selection Indicator -->
                <div v-if="answers[currentQuestion.id] === index" class="absolute inset-0 bg-primary-500/5 dark:bg-primary-400/5 pointer-events-none"></div>
              </div>
            </div>
          </UCard>

          <!-- Explanation Slide-In -->
          <Transition name="fade">
            <div v-if="answers[currentQuestion.id] !== undefined && sessionMode === 'practice' && currentQuestion.explanation" class="p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border-none ring-1 ring-gray-200 dark:ring-gray-700">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600">
                  <UIcon name="i-heroicons-light-bulb" class="text-3xl" />
                </div>
                <div class="flex-1">
                  <h3 class="font-black text-gray-900 dark:text-white text-xl mb-2">Detailed Explanation</h3>
                  <div class="text-gray-600 dark:text-gray-400 text-md leading-relaxed whitespace-pre-wrap">
                    {{ currentQuestion.explanation }}
                  </div>
                </div>
              </div>
            </div>
          </Transition>

          <!-- Navigation Controls -->
          <div class="flex justify-between items-center pt-4">
            <UButton 
              v-if="currentIndex > 0" 
              @click="handlePrev" 
              color="gray" 
              variant="ghost" 
              size="lg" 
              class="rounded-xl px-6"
              icon="i-heroicons-arrow-left"
            >
              Previous
            </UButton>
            <div v-else></div>

            <div class="flex gap-3">
               <UButton 
                v-if="currentIndex < questions.length - 1" 
                @click="handleNext" 
                color="primary" 
                size="xl" 
                class="rounded-xl px-10 font-bold shadow-lg h-14"
                trailing-icon="i-heroicons-arrow-right"
              >
                Next
              </UButton>
              <UButton 
                v-else 
                @click="finishExam(70)" 
                color="green" 
                size="xl" 
                class="rounded-xl px-12 font-black shadow-lg h-14"
                icon="i-heroicons-flag"
              >
                Submit Exam
              </UButton>
            </div>
          </div>
        </div>
      </div>

      <!-- Professional Results Dashboard -->
      <div v-else-if="isFinished" class="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
        <UCard class="text-center rounded-3xl shadow-2xl border-none overflow-hidden p-0 ring-1 ring-gray-200 dark:ring-gray-800">
          <div class="h-2 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500"></div>
          <div class="p-12">
            <div class="inline-flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-full mb-6">
              <UIcon 
                :name="score >= 70 ? 'i-heroicons-trophy' : 'i-heroicons-bolt'" 
                class="text-8xl"
                :class="score >= 70 ? 'text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]' : 'text-primary-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]'"
              />
            </div>
            <h2 class="text-5xl font-black mb-4 text-gray-900 dark:text-white">
              {{ score >= 70 ? 'Certified Excellence!' : 'Almost There!' }}
            </h2>
            <div class="flex items-center justify-center gap-4 mb-10">
              <div class="text-center px-8 border-r border-gray-200 dark:border-gray-700">
                <p class="text-gray-400 uppercase text-[10px] font-black tracking-widest mb-1">Final Score</p>
                <p class="text-4xl font-black text-gray-900 dark:text-white">{{ score.toFixed(1) }}%</p>
              </div>
              <div class="text-center px-8">
                <p class="text-gray-400 uppercase text-[10px] font-black tracking-widest mb-1">Status</p>
                <p class="text-4xl font-black" :class="score >= 70 ? 'text-green-500' : 'text-red-500'">{{ score >= 70 ? 'PASSED' : 'FAILED' }}</p>
              </div>
            </div>
            
            <div class="flex justify-center gap-4">
              <UButton color="gray" variant="soft" to="/dashboard" size="xl" class="rounded-2xl px-10 h-14 font-bold">Lobby</UButton>
              <UButton color="primary" @click="restartExam" size="xl" class="rounded-2xl px-12 h-14 font-black shadow-xl shadow-primary-500/20">Try Again</UButton>
            </div>

            <!-- Upgrade Prompt for Free Users -->
            <div v-if="questions.length < (exam?._count?.questions || 0)" class="mt-10 p-6 bg-primary-50 dark:bg-primary-900/10 rounded-3xl border border-primary-100 dark:border-primary-800">
              <div class="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 mb-3">
                <UIcon name="i-heroicons-sparkles" class="text-2xl" />
                <h3 class="font-black">Unlock {{ (exam?._count?.questions || 0) - questions.length }} more questions!</h3>
              </div>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-5">You are currently using the **Free Sample** mode. Upgrade your plan to access the full database of certification questions.</p>
              <UButton color="primary" block size="lg" to="/pricing" class="rounded-2xl font-black">Upgrade Now — From ₹200</UButton>
            </div>
          </div>
        </UCard>

        <!-- Detailed Review List -->
        <div class="space-y-6">
          <div class="flex items-center justify-between px-2">
            <h3 class="text-2xl font-black flex items-center gap-3">
              <UIcon name="i-heroicons-magnifying-glass-circle" class="text-primary-500 shadow-sm" /> 
              Performance Review
            </h3>
            <span class="text-sm font-bold text-gray-400">{{ questions.length }} Questions Analyzed</span>
          </div>
          
          <div class="space-y-6">
            <UCard 
              v-for="(q, idx) in visibleQuestions" 
              :key="q.id" 
              class="rounded-3xl shadow-sm border-none ring-1 ring-gray-100 dark:ring-gray-800 transition-all hover:ring-2"
              :class="answers[q.id] === q.answer ? 'ring-green-100 dark:ring-green-900/20' : 'ring-red-100 dark:ring-red-900/20'"
            >
              <!-- ... content remains the same ... -->
               <div class="flex gap-6">
                 <div class="w-12 h-12 flex-shrink-0 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center font-black text-gray-400 text-lg">
                   {{ idx + 1 }}
                 </div>
                 <div class="flex-1 space-y-6">
                   <p class="text-lg font-bold text-gray-900 dark:text-white leading-relaxed">{{ q.question }}</p>
                   
                   <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                     <div v-for="(opt, oIdx) in q.options" :key="oIdx" 
                       class="p-4 rounded-2xl border-2 transition-all flex items-center gap-3 font-semibold text-sm"
                       :class="[
                         oIdx === q.answer ? 'bg-green-50/50 border-green-500 text-green-700 dark:bg-green-900/10' : '',
                         answers[q.id] === oIdx && oIdx !== q.answer ? 'bg-red-50/50 border-red-500 text-red-700 dark:bg-red-900/10' : '',
                         answers[q.id] !== oIdx && oIdx !== q.answer ? 'bg-gray-50/50 border-gray-100 text-gray-400 dark:bg-gray-800/10 opacity-60' : ''
                       ]"
                     >
                       <div 
                         class="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                         :class="oIdx === q.answer ? 'bg-green-500 border-green-500 text-white' : oIdx === answers[q.id] ? 'bg-red-500 border-red-500 text-white' : 'border-gray-300'"
                       >
                          <UIcon v-if="oIdx === q.answer" name="i-heroicons-check" class="text-xs" />
                          <UIcon v-else-if="oIdx === answers[q.id]" name="i-heroicons-x-mark" class="text-xs" />
                          <span v-else class="text-[10px]">{{ String.fromCharCode(65 + oIdx) }}</span>
                       </div>
                       <span class="flex-1">{{ opt }}</span>
                     </div>
                   </div>
                   
                   <div v-if="q.explanation" class="p-5 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                      <div class="flex items-center gap-2 mb-2 font-black text-xs text-gray-400 uppercase tracking-widest">
                        <UIcon name="i-heroicons-chat-bubble-bottom-center-text" /> 
                        Solution Insight
                      </div>
                      <p class="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed">{{ q.explanation }}</p>
                   </div>
                 </div>
               </div>
            </UCard>
          </div>

          <div v-if="questions.length > visibleCount && !showAllResults" class="text-center py-8">
            <UButton 
              @click="showAllResults = true" 
              color="gray" 
              variant="solid" 
              size="lg" 
              class="rounded-2xl px-12 h-14 font-black shadow-xl"
            >
              Show All {{ questions.length }} Detailed Results
            </UButton>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useExam } from '~/composables/useExam'

const { status, data: authData } = useAuth()
const user = computed(() => authData.value?.user)
const route = useRoute()
const examId = route.params.id

// Setup States
const isStarted = ref(false)
const isStarting = ref(false)
const sessionMode = ref(route.query.mode || 'practice')
const selectionType = ref('count')
const questionLimit = ref('All')
const rangeStart = ref(1)
const rangeEnd = ref(10)
const shouldShuffle = ref(true)

// Results state
const showAllResults = ref(false)
const visibleCount = ref(10)

// Timer state
const timeLeft = ref(0)
const timerInterval = ref(null)

const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60)
  const seconds = timeLeft.value % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

const timerUrgencyClass = computed(() => {
  if (timeLeft.value < 60) return 'text-red-500 animate-pulse'
  if (timeLeft.value < 300) return 'text-orange-500'
  return 'text-primary-600'
})

const {
  questions,
  currentIndex,
  currentQuestion,
  answers,
  isFinished,
  score,
  loadQuestions,
  startSession,
  submitAnswer,
  nextQuestion,
  prevQuestion,
  finishExam
} = useExam(examId)

const visibleQuestions = computed(() => {
  return showAllResults.value ? questions.value : questions.value.slice(0, visibleCount.value)
})

const autoAdvanceTimeout = ref(null)

// Performance: Use Nuxt top-level data fetching
const { data: examData, pending, error } = await useFetch(`/api/exams/${examId}`, {
  lazy: false,
  server: true
})

const exam = computed(() => examData.value)

watchEffect(() => {
  if (examData.value?.totalQuestions) {
    rangeEnd.value = examData.value.totalQuestions
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleKeyboard)
})

const startExamSession = async () => {
  if (isStarting.value) return
  isStarting.value = true
  
  try {
    let limit = null
    let offset = 0
    let shuffle = shouldShuffle.value

    if (selectionType.value === 'range') {
      offset = Math.max(0, rangeStart.value - 1)
      limit = Math.max(1, rangeEnd.value - offset)
      shuffle = false 
    } else {
      if (questionLimit.value !== 'All') {
        limit = parseInt(questionLimit.value)
      }
    }

    await loadQuestions({ shuffle, limit, offset })
    await startSession('dummy-user-1234-5678', sessionMode.value)
    
    // Initialize Timer for Mock Mode (90 seconds per question)
    if (sessionMode.value === 'mock') {
      timeLeft.value = questions.value.length * 90
      timerInterval.value = setInterval(() => {
        if (timeLeft.value > 0) {
          timeLeft.value--
        } else {
          handleFinish()
        }
      }, 1000)
    }

    isStarted.value = true
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch (err) {
    console.error('Failed to start session:', err)
  } finally {
    isStarting.value = false
  }
}

const handleAnswerSelection = (id, index) => {
  if (sessionMode.value === 'practice' && answers.value[id] !== undefined) return
  
  submitAnswer(id, index)
  
  if (sessionMode.value === 'practice' && index === currentQuestion.value.answer) {
    autoAdvanceTimeout.value = setTimeout(() => {
      if (currentIndex.value < questions.value.length - 1) {
        handleNext()
      }
    }, 2000)
  }
}

const handleNext = () => {
  if (autoAdvanceTimeout.value) clearTimeout(autoAdvanceTimeout.value)
  nextQuestion()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handlePrev = () => {
  if (autoAdvanceTimeout.value) clearTimeout(autoAdvanceTimeout.value)
  prevQuestion()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleKeyboard = (e) => {
  if (!isStarted.value || isFinished.value) return
  if (e.key === 'ArrowRight' && currentIndex.value < questions.value.length - 1) {
    handleNext()
  } else if (e.key === 'ArrowLeft' && currentIndex.value > 0) {
    handlePrev()
  }
}

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyboard)
  if (autoAdvanceTimeout.value) clearTimeout(autoAdvanceTimeout.value)
  if (timerInterval.value) clearInterval(timerInterval.value)
})

const handleFinish = async () => {
  if (timerInterval.value) clearInterval(timerInterval.value)
  await finishExam()
}

const restartExam = () => {
  isFinished.value = false
  isStarted.value = false
  showAllResults.value = false
  answers.value = {}
  currentIndex.value = 0
  score.value = 0
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;
  transform: translateZ(0); 
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px) translateZ(0);
}

.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.3s ease-out;
  max-height: 200px;
  will-change: max-height, opacity;
}
.slide-down-enter-from, .slide-down-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transform: translateY(-10px);
}

/* Optimize list rendering */
.group {
  backface-visibility: hidden;
  transform: translateZ(0);
}
</style>
