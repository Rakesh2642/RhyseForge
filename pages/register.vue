<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-[400px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

    <div class="sm:mx-auto sm:w-full sm:max-w-md text-center relative z-10">
      <NuxtLink to="/" class="inline-flex items-center gap-2 mb-6">
        <div class="bg-primary-500 rounded-lg p-1.5">
          <UIcon name="i-heroicons-bolt-20-solid" class="text-white text-xl" />
        </div>
        <span class="text-xl font-bold text-primary-500">RhyseForge</span>
      </NuxtLink>
      <h2 class="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
        Create Your Account
      </h2>
      <p class="mt-2 text-sm text-gray-500">Start your certification journey today</p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
      <UCard class="rounded-2xl md:rounded-3xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800">
        <form class="space-y-4" @submit.prevent="handleRegister">
          <UFormGroup label="Full Name" name="name">
            <UInput v-model="formData.name" placeholder="John Doe" size="lg" class="rounded-xl" required />
          </UFormGroup>

          <UFormGroup label="Email Address" name="email">
            <UInput v-model="formData.email" type="email" placeholder="you@example.com" size="lg" class="rounded-xl" required />
          </UFormGroup>

          <UFormGroup label="Phone Number (optional)" name="phone">
            <UInput v-model="formData.phone" type="tel" placeholder="+91 98765 43210" size="lg" class="rounded-xl" />
          </UFormGroup>

          <UFormGroup label="Password" name="password" hint="Min. 6 characters">
            <UInput v-model="formData.password" type="password" placeholder="••••••••" size="lg" class="rounded-xl" required />
          </UFormGroup>

          <UFormGroup label="Confirm Password" name="confirmPassword">
            <UInput v-model="formData.confirmPassword" type="password" placeholder="••••••••" size="lg" class="rounded-xl" required />
          </UFormGroup>

          <!-- Error Message -->
          <div v-if="errorMsg" class="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
            <p class="text-sm text-red-600 dark:text-red-400 font-medium flex items-center gap-2">
              <UIcon name="i-heroicons-exclamation-triangle" />
              {{ errorMsg }}
            </p>
          </div>

          <!-- Success Message -->
          <div v-if="successMsg" class="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
            <p class="text-sm text-green-600 dark:text-green-400 font-medium flex items-center gap-2">
              <UIcon name="i-heroicons-check-circle" />
              {{ successMsg }}
            </p>
          </div>

          <UButton
            type="submit"
            block
            color="primary"
            size="xl"
            class="rounded-xl h-12 font-black"
            :loading="loading"
          >
            Create Account
          </UButton>
        </form>

        <div class="mt-6 text-center border-t border-gray-100 dark:border-gray-800 pt-6">
          <p class="text-sm text-gray-500">
            Already have an account?
            <NuxtLink to="/login" class="font-bold text-primary-500 hover:text-primary-600">Sign In</NuxtLink>
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
        <p class="text-[11px] text-blue-500/70">
          Your account will be securely linked to this device. This prevents unauthorized credential sharing and protects your subscription.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: false })

const { signIn } = useAuth()
const { getDeviceId } = useDeviceFingerprint()

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: ''
})

const errorMsg = ref('')
const successMsg = ref('')
const loading = ref(false)

const handleRegister = async () => {
  errorMsg.value = ''
  successMsg.value = ''
  loading.value = true

  try {
    // Client-side validation
    if (formData.password !== formData.confirmPassword) {
      throw new Error('Passwords do not match')
    }

    if (formData.password.length < 6) {
      throw new Error('Password must be at least 6 characters')
    }

    const deviceId = getDeviceId()

    // Register the user
    await $fetch('/api/auth/register', {
      method: 'POST',
      body: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        password: formData.password,
        deviceId
      }
    })

    successMsg.value = 'Account created successfully! Signing you in...'

    // Auto sign-in after successful registration
    await signIn(
      { email: formData.email, password: formData.password, deviceId },
      { callbackUrl: '/dashboard' }
    )
  } catch (e) {
    errorMsg.value =
      e?.data?.statusMessage ||
      e?.message ||
      'Registration failed. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>
