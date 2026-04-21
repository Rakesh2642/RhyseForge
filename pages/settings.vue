<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-300">
    <div class="max-w-3xl mx-auto">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Account Settings</h1>
        <p class="text-sm text-gray-500 mt-1">Manage your notification preferences and account security.</p>
      </div>

      <div class="space-y-6">
        <UCard>
          <template #header>
            <h3 class="text-lg font-semibold">Preferences</h3>
          </template>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium">Dark Mode</p>
                <p class="text-xs text-gray-500">Enable high contrast dark theme</p>
              </div>
              <ColorModeButton />
            </div>
            <UDivider />
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium">Email Notifications</p>
                <p class="text-xs text-gray-500">Receive weekly performance summaries</p>
              </div>
              <UToggle v-model="notifications" />
            </div>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h3 class="text-lg font-semibold text-red-600">Danger Zone</h3>
          </template>
          <div>
            <p class="text-sm text-gray-500 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
            <UButton color="red" variant="soft">Deactivate Account</UButton>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const notifications = ref(true)
</script>
