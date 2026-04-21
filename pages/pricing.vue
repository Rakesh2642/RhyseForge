<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
    <!-- Decorative Glows -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none"></div>

    <UContainer class="py-12 md:py-20 relative z-10">
      <!-- Hero Section -->
      <div class="text-center mb-16 md:mb-24 px-4">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-500 mb-6">
          <UIcon name="i-heroicons-sparkles" />
          <span class="text-[10px] font-black uppercase tracking-[0.3em]">Simple, Transparent Pricing</span>
        </div>
        <h1 class="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter mb-4 leading-[1.1]">
          Invest in Your <span class="text-primary-500">Certification</span>
        </h1>
        <p class="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
          Choose the plan that matches your ambition. Every plan includes our AI-powered exam engine and performance analytics.
        </p>

        <!-- Current Plan Badge (if logged in) -->
        <div v-if="currentPlan && currentPlan !== 'FREE'" class="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
          <UIcon name="i-heroicons-check-badge" class="text-lg" />
          <span class="text-sm font-black">Your current plan: {{ currentPlan }}</span>
        </div>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 mb-20">

        <!-- BEGINNING Plan — ₹200 -->
        <div class="bg-white dark:bg-gray-900 rounded-[2rem] p-6 sm:p-8 ring-1 ring-gray-200 dark:ring-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col">
          <div class="mb-8">
            <div class="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-academic-cap" class="text-2xl text-blue-500" />
            </div>
            <h3 class="text-xl font-black text-gray-900 dark:text-white mb-1">Beginning</h3>
            <p class="text-sm text-gray-500">Access a single certification module</p>
          </div>

          <div class="mb-8">
            <div class="flex items-baseline gap-1">
              <span class="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">₹200</span>
              <span class="text-gray-400 font-bold text-sm">/module</span>
            </div>
            <p class="text-xs text-gray-400 mt-1">One-time purchase</p>
          </div>

          <div class="space-y-4 mb-8 flex-1">
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">Access to <strong>1 Certification Exam</strong> module of your choice</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">Unlimited practice & mock exams</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">Detailed explanations for every question</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">Personal performance dashboard</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-x-circle" class="text-gray-300 dark:text-gray-600 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-400">No access to other modules</span>
            </div>
          </div>

          <UButton
            block
            color="gray"
            variant="solid"
            size="xl"
            class="rounded-2xl h-14 font-black"
            :loading="purchasingPlan === 'BEGINNING'"
            :disabled="isCurrentOrLower('BEGINNING')"
            @click="handlePurchase('BEGINNING')"
          >
            {{ isCurrentOrLower('BEGINNING') ? 'Current Plan' : 'Get Started — ₹200' }}
          </UButton>
        </div>

        <!-- ADVANCED Plan (Featured) — ₹500 -->
        <div class="bg-gradient-to-b from-primary-500 to-primary-700 rounded-[2rem] p-6 sm:p-8 shadow-2xl shadow-primary-500/20 ring-2 ring-primary-400 hover:-translate-y-2 transition-all duration-500 flex flex-col relative overflow-hidden">
          <!-- Popular Badge -->
          <div class="absolute top-0 right-0 bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-bl-2xl text-[10px] font-black uppercase tracking-widest">
            Most Popular
          </div>

          <div class="mb-8">
            <div class="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-fire" class="text-2xl text-white" />
            </div>
            <h3 class="text-xl font-black text-white mb-1">Advanced</h3>
            <p class="text-sm text-primary-100">Lifetime access to all exam modules</p>
          </div>

          <div class="mb-8">
            <div class="flex items-baseline gap-1">
              <span class="text-4xl sm:text-5xl font-black text-white">₹500</span>
              <span class="text-primary-200 font-bold text-sm">/lifetime</span>
            </div>
            <p class="text-xs text-primary-200 mt-1">Pay once, access forever</p>
          </div>

          <div class="space-y-4 mb-8 flex-1">
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-white text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-white/90"><strong>All current & future</strong> certification modules</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-white text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-white/90">Unlimited practice & mock exams</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-white text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-white/90">Priority access to new exam content</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-white text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-white/90">Advanced analytics & weak area drills</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-white text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-white/90">Global Leaderboard ranking</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-white text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-white/90">Email support</span>
            </div>
          </div>

          <UButton
            block
            color="white"
            size="xl"
            class="rounded-2xl h-14 font-black text-primary-600"
            :loading="purchasingPlan === 'ADVANCED'"
            :disabled="isCurrentOrLower('ADVANCED')"
            @click="handlePurchase('ADVANCED')"
          >
            {{ isCurrentOrLower('ADVANCED') ? 'Current Plan' : 'Unlock All Exams — ₹500' }}
          </UButton>
        </div>

        <!-- ENTERPRISE Plan — ₹5,000 -->
        <div class="bg-white dark:bg-gray-900 rounded-[2rem] p-6 sm:p-8 ring-1 ring-gray-200 dark:ring-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col">
          <div class="mb-8">
            <div class="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-building-office-2" class="text-2xl text-purple-500" />
            </div>
            <h3 class="text-xl font-black text-gray-900 dark:text-white mb-1">Enterprise</h3>
            <p class="text-sm text-gray-500">Your own branded exam platform</p>
          </div>

          <div class="mb-8">
            <div class="flex items-baseline gap-1">
              <span class="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">₹5,000</span>
              <span class="text-gray-400 font-bold text-sm">/license</span>
            </div>
            <p class="text-xs text-gray-400 mt-1">Full source code + deployment</p>
          </div>

          <div class="space-y-4 mb-8 flex-1">
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300"><strong>Complete source code</strong> of the platform</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">Custom branding & white-label license</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">AI-powered question parser included</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">Admin panel, user management, analytics</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">Deploy on your own infrastructure</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-gray-600 dark:text-gray-300">1-on-1 setup assistance & training</span>
            </div>
          </div>

          <UButton
            block
            color="gray"
            variant="outline"
            size="xl"
            class="rounded-2xl h-14 font-black"
            :loading="purchasingPlan === 'ENTERPRISE'"
            :disabled="isCurrentOrLower('ENTERPRISE')"
            @click="handlePurchase('ENTERPRISE')"
          >
            {{ isCurrentOrLower('ENTERPRISE') ? 'Current Plan' : 'Get Enterprise — ₹5,000' }}
          </UButton>
        </div>
      </div>

      <!-- Device Protection Info -->
      <div class="max-w-3xl mx-auto px-4 mb-16">
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-3xl p-6 md:p-8 border border-blue-100 dark:border-blue-900/30">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <UIcon name="i-heroicons-shield-check" class="text-2xl text-blue-500" />
            </div>
            <div>
              <h3 class="text-lg font-black text-gray-900 dark:text-white mb-2">Device-Locked Security</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                All subscriptions are securely bound to your <strong>User ID + Device ID</strong>. Even if someone gets your login
                credentials, they <strong>cannot access your subscription from another device</strong>. This protects your investment
                and ensures fair usage. Need to change devices? Contact our support team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="max-w-3xl mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-black text-center text-gray-900 dark:text-white mb-10">Frequently Asked Questions</h2>
        <UAccordion :items="faqItems" :ui="{ wrapper: 'space-y-4' }">
          <template #default="{ item, open }">
            <UButton color="gray" variant="ghost" class="w-full rounded-2xl px-6 py-5" :ui="{ rounded: 'rounded-2xl' }">
              <span class="font-bold text-left flex-1">{{ item.label }}</span>
              <UIcon :name="open ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'" class="flex-shrink-0" />
            </UButton>
          </template>
          <template #item="{ item }">
            <div class="px-6 pb-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {{ item.content }}
            </div>
          </template>
        </UAccordion>
      </div>
    </UContainer>

    <!-- Purchase Confirmation Modal -->
    <UModal v-model="showConfirmModal">
      <UCard class="rounded-2xl">
        <template #header>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
              <UIcon name="i-heroicons-credit-card" class="text-xl text-primary-500" />
            </div>
            <div>
              <h3 class="text-lg font-black text-gray-900 dark:text-white">Confirm Purchase</h3>
              <p class="text-xs text-gray-500">Subscription locked to your device</p>
            </div>
          </div>
        </template>

        <div class="space-y-4">
          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-bold text-gray-600 dark:text-gray-300">Plan</span>
              <span class="text-sm font-black text-gray-900 dark:text-white">{{ selectedPlanDetails?.name }}</span>
            </div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-bold text-gray-600 dark:text-gray-300">Price</span>
              <span class="text-xl font-black text-primary-500">₹{{ selectedPlanDetails?.price?.toLocaleString('en-IN') }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm font-bold text-gray-600 dark:text-gray-300">Device Bound</span>
              <span class="text-xs font-mono text-gray-500">{{ maskedDeviceId }}</span>
            </div>
          </div>

          <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800">
            <p class="text-xs text-amber-700 dark:text-amber-400 flex items-start gap-2">
              <UIcon name="i-heroicons-exclamation-triangle" class="flex-shrink-0 mt-0.5" />
              <span>This subscription will be permanently bound to your current device. It cannot be transferred to another device without contacting support.</span>
            </p>
          </div>

          <!-- Purchase Error -->
          <div v-if="purchaseError" class="p-3 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800">
            <p class="text-xs text-red-600 dark:text-red-400 flex items-start gap-2">
              <UIcon name="i-heroicons-x-circle" class="flex-shrink-0 mt-0.5" />
              <span>{{ purchaseError }}</span>
            </p>
          </div>
        </div>

        <template #footer>
          <div class="flex gap-3">
            <UButton
              color="gray"
              variant="ghost"
              class="flex-1 rounded-xl"
              @click="showConfirmModal = false"
            >
              Cancel
            </UButton>
            <UButton
              color="primary"
              class="flex-1 rounded-xl font-black"
              :loading="confirmingPurchase"
              @click="confirmPurchase"
            >
              Confirm & Pay ₹{{ selectedPlanDetails?.price?.toLocaleString('en-IN') }}
            </UButton>
          </div>
        </template>
      </UCard>
    </UModal>

    <!-- Success Modal -->
    <UModal v-model="showSuccessModal">
      <UCard class="rounded-2xl text-center">
        <div class="py-6">
          <div class="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
            <UIcon name="i-heroicons-check-circle" class="text-4xl text-green-500" />
          </div>
          <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-2">Purchase Successful!</h3>
          <p class="text-sm text-gray-500 mb-6">
            Your <strong>{{ selectedPlanDetails?.name }}</strong> plan is now active and bound to this device.
          </p>
          <UButton color="primary" size="lg" class="rounded-xl font-black px-8" to="/dashboard">
            Go to Dashboard
          </UButton>
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
const { status, data, getSession } = useAuth()
const { getDeviceId } = useDeviceFingerprint()
const toast = useToast()

const PLANS = {
  BEGINNING:  { price: 200,  name: 'Beginning' },
  ADVANCED:   { price: 500,  name: 'Advanced' },
  ENTERPRISE: { price: 5000, name: 'Enterprise' }
}

const PLAN_RANK = { FREE: 0, BEGINNING: 1, ADVANCED: 2, ENTERPRISE: 3 }

const currentPlan = computed(() => data.value?.user?.plan || 'FREE')
const purchasingPlan = ref('')
const selectedPlan = ref('')
const showConfirmModal = ref(false)
const showSuccessModal = ref(false)
const confirmingPurchase = ref(false)
const purchaseError = ref('')

const selectedPlanDetails = computed(() =>
  selectedPlan.value ? PLANS[selectedPlan.value] : null
)

const maskedDeviceId = computed(() => {
  if (typeof window === 'undefined') return '••••••••'
  const id = getDeviceId()
  return '••••' + id.slice(-4)
})

const isCurrentOrLower = (plan) => {
  const currentRank = PLAN_RANK[currentPlan.value] || 0
  const checkRank = PLAN_RANK[plan] || 0
  return checkRank <= currentRank && currentRank > 0
}

const handlePurchase = (plan) => {
  // If not logged in, redirect to register
  if (status.value !== 'authenticated') {
    navigateTo('/register')
    return
  }

  selectedPlan.value = plan
  purchaseError.value = ''
  showConfirmModal.value = true
}

const confirmPurchase = async () => {
  confirmingPurchase.value = true
  purchaseError.value = ''
  purchasingPlan.value = selectedPlan.value

  try {
    const deviceId = getDeviceId()

    await $fetch('/api/subscription/purchase', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('auth:token')?.replace(/"/g, '') || ''}`
      },
      body: {
        plan: selectedPlan.value,
        deviceId
      }
    })

    showConfirmModal.value = false
    showSuccessModal.value = true

    // Refresh session to update the user's plan in the UI
    await getSession()

    toast.add({
      title: 'Plan Activated!',
      description: `Your ${PLANS[selectedPlan.value].name} plan is now active.`,
      icon: 'i-heroicons-check-circle',
      color: 'green'
    })
  } catch (e) {
    purchaseError.value =
      e?.data?.statusMessage ||
      e?.message ||
      'Purchase failed. Please try again.'
  } finally {
    confirmingPurchase.value = false
    purchasingPlan.value = ''
  }
}

const faqItems = [
  {
    label: 'What certifications are available?',
    content: 'RhyseForge currently supports Databricks Data Engineer Associate, AWS AI Practitioner, Databricks Gen AI Engineer, and SAP ABAP Cloud. New modules are added regularly and included free with the Advanced plan.',
    defaultOpen: true
  },
  {
    label: 'Why is my subscription locked to one device?',
    content: 'To prevent unauthorized credential sharing, each subscription is bound to your User ID + Device Fingerprint. This means even if someone gets your login credentials, they cannot use your subscription on a different device. This protects your investment and ensures fair pricing for everyone.'
  },
  {
    label: 'What if I get a new device?',
    content: 'Contact support@rhyseforge.com with your registered email. Our admin team can reset your device binding so you can log in from your new device. The process typically takes less than 24 hours.'
  },
  {
    label: 'Can I upgrade from Beginning to Advanced?',
    content: 'Yes! You can upgrade at any time directly from this page. Your subscription will be upgraded and the new plan will take effect immediately.'
  },
  {
    label: 'Is there a refund policy?',
    content: 'We offer a 7-day money-back guarantee on all plans. If you are not satisfied with RhyseForge, contact us within 7 days for a full refund.'
  },
  {
    label: 'How does the mock exam timer work?',
    content: 'Mock exams simulate real certification conditions with a countdown timer. When time runs out, your exam is automatically submitted — just like the real test. Practice mode has no time limit.'
  }
]
</script>
