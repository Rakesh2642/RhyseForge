<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="sm:mx-auto sm:w-full sm:max-w-md text-center relative z-10">
      <NuxtLink to="/" class="inline-flex items-center gap-2 mb-6">
        <div class="bg-primary-500 rounded-lg p-1.5">
          <UIcon name="i-heroicons-bolt-20-solid" class="text-white text-xl" />
        </div>
        <span class="text-xl font-bold text-primary-500">RhyseForge</span>
      </NuxtLink>
      <h2 class="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
        Welcome Back
      </h2>
      <p class="mt-2 text-sm text-gray-500">Sign in to continue your certification journey</p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
      <UCard class="rounded-2xl md:rounded-3xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800">
        <form class="space-y-5" @submit.prevent="handleLogin">
          <UFormGroup label="Email Address" name="email">
            <UInput v-model="email" type="email" placeholder="you@example.com" size="lg" class="rounded-xl" required />
          </UFormGroup>

          <UFormGroup label="Password" name="password">
            <UInput v-model="password" type="password" placeholder="••••••••" size="lg" class="rounded-xl" required />
          </UFormGroup>

          <!-- Error Message -->
          <div v-if="errorMsg" class="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
            <p class="text-sm text-red-600 dark:text-red-400 font-medium flex items-center gap-2">
              <UIcon name="i-heroicons-exclamation-triangle" />
              {{ errorMsg }}
            </p>
          </div>

          <!-- Device Mismatch Warning -->
          <div v-if="isDeviceMismatch" class="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
            <p class="text-xs text-amber-700 dark:text-amber-400 font-medium flex items-start gap-2">
              <UIcon name="i-heroicons-shield-exclamation" class="flex-shrink-0 mt-0.5 text-base" />
              <span>Your subscription is locked to another device. Contact <strong>support@rhyseforge.com</strong> to transfer your account to this device.</span>
            </p>
          </div>

          <UButton type="submit" block color="primary" size="xl" class="rounded-xl h-12 font-black" :loading="loading">
            Sign In
          </UButton>
        </form>

        <div class="mt-6 text-center border-t border-gray-100 dark:border-gray-800 pt-6">
          <p class="text-sm text-gray-500">
            Don't have an account?
            <NuxtLink to="/register" class="font-bold text-primary-500 hover:text-primary-600">Create Account</NuxtLink>
          </p>
        </div>
      </UCard>

      <div class="mt-4 text-center">
        <NuxtLink to="/" class="text-sm font-medium text-gray-400 hover:text-primary-500 transition-colors">← Back to home</NuxtLink>
      </div>

      <!-- Device Security Notice -->
      <div class="mt-6 p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30 text-center">
        <div class="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 mb-1">
          <UIcon name="i-heroicons-finger-print" class="text-lg" />
          <span class="text-xs font-black uppercase tracking-widest">Device Protection</span>
        </div>
        <p class="text-[11px] text-blue-500/70">Your subscription is securely bound to this device. Unauthorized sharing will be blocked automatically.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: false })

const { signIn } = useAuth()
const { getDeviceId } = useDeviceFingerprint()

const email = ref('')
const password = ref('')
const errorMsg = ref('')
const loading = ref(false)
const isDeviceMismatch = ref(false)

const handleLogin = async () => {
  errorMsg.value = ''
  isDeviceMismatch.value = false
  loading.value = true

  try {
    const deviceId = getDeviceId()

    await signIn(
      { email: email.value, password: password.value, deviceId },
      { callbackUrl: '/dashboard' }
    )
  } catch (e) {
    const msg = e?.data?.statusMessage || e?.message || 'Login failed. Please check your credentials.'
    errorMsg.value = msg

    // Detect device mismatch errors to show extra guidance
    if (msg.toLowerCase().includes('device') || msg.toLowerCase().includes('bound')) {
      isDeviceMismatch.value = true
    }
  } finally {
    loading.value = false
  }
}
</script>
