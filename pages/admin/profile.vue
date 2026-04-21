<template>
  <div class="py-12 bg-gray-50 dark:bg-gray-900 min-h-[calc(100vh-64px)]">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-8 border border-gray-100 dark:border-gray-700">
          <div class="h-32 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
          <div class="px-8 pb-8 -mt-16">
            <div class="flex flex-col md:flex-row items-end gap-6 mb-6">
              <UAvatar 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
                size="3xl"
                class="ring-4 ring-white dark:ring-gray-800 h-32 w-32 shadow-2xl"
              />
              <div class="flex-grow pb-2">
                <div class="flex items-center gap-3">
                  <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ user?.name || 'Administrator' }}</h1>
                  <UBadge color="red" variant="solid" class="text-[10px] px-2 py-0.5">ADMIN</UBadge>
                </div>
                <p class="text-gray-500">{{ user?.email }}</p>
              </div>
              <div class="pb-2">
                <UButton color="black" variant="solid" icon="i-heroicons-pencil-square">Edit Profile</UButton>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700">
                <div class="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">System Access</div>
                <div class="text-lg font-bold text-gray-900 dark:text-white">Full Privileges</div>
              </div>
              <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700">
                <div class="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Last Login</div>
                <div class="text-lg font-bold text-gray-900 dark:text-white">Today, 10:45 AM</div>
              </div>
              <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700">
                <div class="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Joined Date</div>
                <div class="text-lg font-bold text-gray-900 dark:text-white">Oct 12, 2023</div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-6">
            <UCard>
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-shield-check" class="text-blue-500 text-xl" />
                  <h3 class="font-bold">Security Settings</h3>
                </div>
              </template>
              <div class="space-y-4">
                <div class="flex items-center justify-between p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                  <div>
                    <div class="font-bold text-gray-900 dark:text-white">Two-Factor Authentication</div>
                    <div class="text-sm text-gray-500">Enhanced account security</div>
                  </div>
                  <UToggle :model-value="true" />
                </div>
                <div class="flex items-center justify-between p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                  <div>
                    <div class="font-bold text-gray-900 dark:text-white">API Key Access</div>
                    <div class="text-sm text-gray-500">Manage internal tool integrations</div>
                  </div>
                  <UButton color="gray" variant="soft" size="sm">Manage Keys</UButton>
                </div>
              </div>
            </UCard>
          </div>

          <div class="space-y-6">
            <UCard>
              <template #header>
                <h3 class="font-bold">Admin Activity</h3>
              </template>
              <div class="space-y-6">
                <div class="flex gap-4">
                  <div class="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <UIcon name="i-heroicons-arrow-up-tray" class="text-blue-600" />
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-900 dark:text-white">Uploaded AW-SCS Mock</div>
                    <div class="text-xs text-gray-500">2 hours ago</div>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <UIcon name="i-heroicons-check-circle" class="text-green-600" />
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-900 dark:text-white">Reviewed 45 questions</div>
                    <div class="text-xs text-gray-500">Yesterday</div>
                  </div>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const { data: authData } = useAuth()
// In a real app, you'd fetch specific admin details
const user = authData.value?.user
</script>
