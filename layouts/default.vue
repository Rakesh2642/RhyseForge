<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <nav class="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
      <UContainer>
        <div class="flex justify-between h-16 items-center">
          <div class="flex items-center gap-4 md:gap-8">
            <NuxtLink to="/" class="flex items-center gap-2 group flex-shrink-0">
              <div class="bg-primary-500 rounded-lg p-1.5 group-hover:rotate-12 transition-transform">
                <UIcon name="i-heroicons-bolt-20-solid" class="text-white text-xl" />
              </div>
              <span class="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400">
                RhyseForge
              </span>
            </NuxtLink>
            
            <!-- Desktop Nav -->
            <div class="hidden md:flex items-center gap-1">
              <UButton variant="ghost" color="gray" @click="handleAction('/')">Home</UButton>
              <UButton v-if="data?.user?.role === 'ADMIN'" variant="ghost" color="primary" @click="handleAction('/admin/dashboard')" icon="i-heroicons-shield-check">Admin Panel</UButton>
              <UButton v-else variant="ghost" color="gray" @click="handleAction('/dashboard')">My Dashboard</UButton>
              <UButton variant="ghost" color="gray" @click="handleAction('/leaderboard')">Leaderboard</UButton>
              <UButton variant="ghost" color="gray" @click="handleAction('/pricing')">Pricing</UButton>
            </div>
          </div>

          <div class="flex items-center gap-2 md:gap-4">
            <ColorModeButton />
            
            <!-- Mobile Hamburger -->
            <UButton 
              class="md:hidden" 
              icon="i-heroicons-bars-3" 
              color="gray" 
              variant="ghost" 
              size="md"
              @click="mobileMenuOpen = !mobileMenuOpen" 
            />
            
            <!-- Desktop Avatar -->
            <div class="hidden md:block">
              <UDropdown :items="userMenuItems" :popper="{ placement: 'bottom-end' }">
                <UAvatar 
                  :src="data?.user?.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${data?.user?.name || 'Felix'}`"
                  alt="Profile"
                  size="sm"
                  class="cursor-pointer border-2 border-primary-500/20"
                />
                
                <template #account="{ item }">
                  <div class="text-left">
                    <p>Signed in as</p>
                    <p class="truncate font-medium text-gray-900 dark:text-white">
                      {{ item.label }}
                    </p>
                  </div>
                </template>
              </UDropdown>
            </div>
          </div>
        </div>
      </UContainer>

      <!-- Mobile Slide-Down Menu -->
      <Transition name="slide">
        <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl">
          <div class="px-4 py-4 space-y-1">
            <button class="mobile-nav-link w-full text-left" @click="handleAction('/'); mobileMenuOpen = false">
              <UIcon name="i-heroicons-home" /> Home
            </button>
            <button v-if="data?.user?.role === 'ADMIN'" class="mobile-nav-link text-primary-500 w-full text-left" @click="handleAction('/admin/dashboard'); mobileMenuOpen = false">
              <UIcon name="i-heroicons-shield-check" /> Admin Panel
            </button>
            <button v-else class="mobile-nav-link w-full text-left" @click="handleAction('/dashboard'); mobileMenuOpen = false">
              <UIcon name="i-heroicons-squares-2x2" /> My Dashboard
            </button>
            <button class="mobile-nav-link w-full text-left" @click="handleAction('/leaderboard'); mobileMenuOpen = false">
              <UIcon name="i-heroicons-trophy" /> Leaderboard
            </button>
            <button class="mobile-nav-link w-full text-left" @click="handleAction('/pricing'); mobileMenuOpen = false">
              <UIcon name="i-heroicons-credit-card" /> Pricing
            </button>
            <button class="mobile-nav-link w-full text-left" @click="handleAction('/profile'); mobileMenuOpen = false">
              <UIcon name="i-heroicons-user" /> My Profile
            </button>
            <div class="pt-3 border-t border-gray-100 dark:border-gray-800 mt-3">
              <button class="mobile-nav-link text-red-500 w-full" @click="signOut({ callbackUrl: '/login' })">
                <UIcon name="i-heroicons-arrow-left-on-rectangle" /> Sign Out
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </nav>

    <main>
      <slot />
    </main>

    <footer class="mt-20 border-t border-gray-200 dark:border-gray-800 py-8 md:py-12">
      <UContainer>
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 text-sm text-gray-500 dark:text-gray-400">
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-bolt-20-solid" class="text-primary-500" />
            <span class="font-semibold text-gray-900 dark:text-white">RhyseForge</span>
            <span>&copy; 2024. All rights reserved.</span>
          </div>
          <div class="flex gap-4 md:gap-6 text-xs md:text-sm">
            <NuxtLink to="/pricing" class="hover:text-primary-500 transition-colors">Pricing</NuxtLink>
            <NuxtLink to="/privacy-policy" class="hover:text-primary-500 transition-colors">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms-of-service" class="hover:text-primary-500 transition-colors">Terms of Service</NuxtLink>
          </div>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script setup>
const { status, data, signOut } = useAuth()
const router = useRouter()
const mobileMenuOpen = ref(false)

const isGuest = computed(() => status.value !== 'authenticated')

const handleAction = (url) => {
  if (status.value === 'authenticated') {
    router.push(url)
  } else {
    router.push('/login')
  }
}

const userMenuItems = computed(() => {
  if (isGuest.value) return []

  const items = [
    [{
      label: data.value?.user?.email || '',
      slot: 'account',
      disabled: true
    }],
    [{
      label: 'My Profile',
      icon: 'i-heroicons-user',
      to: '/profile'
    }]
  ]

  const middleGroup = []
  
  if (data.value?.user?.role === 'ADMIN') {
    middleGroup.push({
      label: 'Admin Board',
      icon: 'i-heroicons-computer-desktop',
      to: '/admin/dashboard'
    })
    middleGroup.push({
      label: 'Module Requests',
      icon: 'i-heroicons-megaphone',
      to: '/admin/module-requests'
    })
  }

  middleGroup.push({
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth',
    to: '/settings'
  })

  items.push(middleGroup)
  
  items.push([{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: () => signOut({ callbackUrl: '/login' })
  }])

  return items
})
</script>

<style scoped>
.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  border-radius: 1rem;
  font-weight: 700;
  font-size: 0.875rem;
  color: inherit;
  transition: background-color 0.2s;
}

.mobile-nav-link:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

:root.dark .mobile-nav-link:hover {
  background-color: rgba(255, 255, 255, 0.06);
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  overflow: hidden;
}
.slide-enter-from, .slide-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
