<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 dark:bg-gray-900 transition-colors duration-300">
    <div class="sm:mx-auto sm:w-full sm:max-w-md text-center">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-blue-600 dark:text-blue-400">
        Admin Login
      </h2>
    </div>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <UCard>
        <form class="space-y-6" @submit.prevent="handleLogin">
          <UFormGroup label="Admin Email" name="email">
            <UInput v-model="email" type="email" placeholder="admin@examforge.com" required />
          </UFormGroup>

          <UFormGroup label="Password" name="password">
            <UInput v-model="password" type="password" required />
          </UFormGroup>

          <div>
            <UButton type="submit" block color="blue">
              Access Dashboard
            </UButton>
          </div>
        </form>
      </UCard>
      <div class="mt-4 text-center">
        <ULink to="/" class="text-sm font-medium text-blue-600 hover:text-blue-500">Back to home</ULink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const { signIn } = useAuth()
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    await signIn({ email: email.value, password: password.value }, { callbackUrl: '/admin/dashboard' })
  } catch (e) {
    console.error('Login failed:', e)
  }
}
</script>
