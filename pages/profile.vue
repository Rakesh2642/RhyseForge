<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 py-6 md:py-12 relative overflow-hidden">
    <!-- Decorative Glow -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

    <UContainer>
      <div class="max-w-4xl mx-auto relative z-10">
        <!-- Profile Header Card -->
        <div class="bg-white dark:bg-gray-900 rounded-2xl md:rounded-[2.5rem] shadow-2xl shadow-black/5 ring-1 ring-gray-200 dark:ring-gray-800 p-5 sm:p-8 md:p-12 mb-6 md:mb-10 overflow-hidden relative group">
          <div class="absolute top-0 right-0 p-4 md:p-8 z-30">
             <UButton 
               v-if="!isEditing"
               icon="i-heroicons-pencil-square" 
               color="primary" 
               variant="soft" 
               size="sm" 
               class="rounded-xl md:rounded-2xl px-3 md:px-6 font-bold hover:scale-105 transition-all text-xs md:text-sm"
               @click="startEditing"
             >
               <span class="hidden sm:inline">Edit Profile</span>
               <span class="sm:hidden">Edit</span>
             </UButton>
          </div>

          <div class="flex flex-col md:flex-row items-center md:items-start gap-10">
            <!-- Avatar / Photo Section -->
            <div class="relative group/avatar">
              <div class="absolute inset-0 bg-primary-500 blur-2xl opacity-20 rounded-full animate-pulse"></div>
              
              <div class="relative z-10 w-40 h-40">
                <UAvatar 
                  :src="user?.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name || 'Felix'}`"
                  size="3xl"
                  class="ring-8 ring-white dark:ring-gray-800 shadow-2xl w-40 h-40 object-cover overflow-hidden"
                />
                
                <!-- Overlay for upload (only in edit mode) -->
                <div 
                  v-if="isEditing"
                  class="absolute inset-0 rounded-full bg-black/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity cursor-pointer border-4 border-dashed border-white/40"
                  @click="triggerFilePicker"
                >
                  <div class="text-center">
                    <UIcon name="i-heroicons-camera" class="text-white text-3xl mb-1" />
                    <p class="text-[10px] font-black text-white uppercase tracking-widest">Change Photo</p>
                  </div>
                </div>
              </div>
              
              <div class="absolute bottom-2 right-2 z-20 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-gray-800"></div>
              
              <!-- Hidden File Input -->
              <input 
                ref="fileInput"
                type="file" 
                class="hidden" 
                accept="image/*"
                @change="handleFileChange"
              />
            </div>

            <!-- Identity Section -->
            <div class="flex-1 text-center md:text-left pt-4 space-y-4">
              <div v-if="!isEditing">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-2 leading-none">
                  {{ user?.name || 'Anonymous Forger' }}
                </h1>
                <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-4">
                  <p class="text-xl text-gray-500 font-medium tracking-tight">{{ user?.email }}</p>
                  <span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
                  <UBadge color="primary" variant="soft" class="rounded-full px-3 py-1 font-black text-[10px] uppercase tracking-widest">
                    {{ user?.role || 'STUDENT' }}
                  </UBadge>
                  <span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
                  <UBadge 
                    :color="user?.plan === 'ENTERPRISE' ? 'purple' : user?.plan === 'ADVANCED' ? 'green' : user?.plan === 'BEGINNING' ? 'blue' : 'gray'" 
                    variant="soft" 
                    class="rounded-full px-3 py-1 font-black text-[10px] uppercase tracking-widest"
                  >
                    {{ user?.plan || 'FREE' }} Plan
                  </UBadge>
                </div>
              </div>
              
              <!-- Edit Form -->
              <div v-else class="space-y-6 pt-4 animate-fade-in">
                <div class="space-y-2">
                  <p class="text-[10px] font-black text-primary-500 uppercase tracking-widest ml-1">Your Full Name</p>
                  <UInput 
                    v-model="editForm.name" 
                    size="xl" 
                    variant="outline" 
                    class="rounded-2xl"
                    :ui="{ input: 'text-2xl font-black h-16 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 focus:border-primary-500 h-16' }"
                    placeholder="Enter your name..."
                  />
                </div>
                
                <div v-if="editForm.image" class="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                   <UAvatar :src="editForm.image" size="sm" />
                   <p class="text-xs font-bold text-gray-500 truncate max-w-[150px]">New Profile Photo Selected</p>
                   <UButton color="red" variant="ghost" icon="i-heroicons-trash" size="xs" @click="editForm.image = null" />
                </div>

                <div class="flex items-center gap-3">
                  <UButton 
                    color="primary" 
                    size="xl" 
                    class="rounded-2xl px-10 h-14 font-black shadow-xl shadow-primary-500/20"
                    :loading="isSaving"
                    @click="saveProfile"
                  >
                    Save Changes
                  </UButton>
                  <UButton 
                    color="gray" 
                    variant="ghost" 
                    size="xl" 
                    class="rounded-2xl px-8 h-14 font-bold"
                    @click="isEditing = false"
                  >
                    Cancel
                  </UButton>
                </div>
              </div>

              <!-- Status Message -->
              <p v-if="!isEditing" class="text-sm text-gray-400 dark:text-gray-500 font-medium">
                "Knowledge is forged through testing."
              </p>
            </div>
          </div>
        </div>

        <!-- Meta Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Stats Panel -->
          <div class="lg:col-span-1 space-y-6">
            <UCard class="rounded-[2rem] border-none shadow-xl ring-1 ring-gray-100 dark:ring-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-bolt" class="text-primary-500 font-bold" />
                  <h3 class="font-extrabold text-gray-900 dark:text-white">Performance</h3>
                </div>
              </template>
              <div class="space-y-6 py-2">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Exams Completed</p>
                    <p class="text-3xl font-black text-gray-900 dark:text-white">{{ user?._count?.sessions || 0 }}</p>
                  </div>
                  <div class="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-2xl flex items-center justify-center">
                    <UIcon name="i-heroicons-check-badge" class="text-primary-500 text-2xl" />
                  </div>
                </div>
                
                <div class="space-y-2">
                  <div class="flex justify-between items-end">
                    <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Global Accuracy</p>
                    <p class="text-sm font-black text-green-500">82.4%</p>
                  </div>
                  <UProgress :value="82.4" color="green" size="sm" class="rounded-full" />
                </div>
              </div>
            </UCard>

            <UButton 
               to="/dashboard" 
               block 
               variant="ghost" 
               color="gray" 
               size="xl" 
               icon="i-heroicons-arrow-left" 
               class="rounded-2xl py-5 font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Return to Dashboard
            </UButton>
          </div>

          <!-- Account System Details -->
          <div class="lg:col-span-2">
            <UCard class="rounded-[2rem] border-none shadow-xl ring-1 ring-gray-100 dark:ring-gray-800 h-full">
              <template #header>
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-shield-check" class="text-blue-500 font-bold" />
                  <h3 class="font-extrabold text-gray-900 dark:text-white">System Identification</h3>
                </div>
              </template>
              
              <div class="space-y-8 py-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="space-y-1">
                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Platform UUID</label>
                    <div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl font-mono text-xs text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800">
                      {{ user?.id || 'Generating...' }}
                    </div>
                  </div>
                  <div class="space-y-1">
                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Origin Date</label>
                    <div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl font-bold text-gray-900 dark:text-white border border-gray-100 dark:border-gray-800">
                      {{ user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Processing...' }}
                    </div>
                  </div>
                </div>

                <div class="p-6 bg-blue-50/50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-900 flex items-start gap-4">
                  <UIcon name="i-heroicons-information-circle" class="text-blue-500 text-2xl mt-1" />
                  <div>
                    <h4 class="font-bold text-blue-900 dark:text-blue-400">Security Note</h4>
                    <p class="text-sm text-blue-700/70 dark:text-blue-400/70 mt-1">
                      Your credentials are encrypted using industry-standard hashing. Your subscription is device-locked for anti-sharing protection.
                    </p>
                  </div>
                </div>
              </div>
            </UCard>
          </div>
        </div>

        <!-- Subscription & Device Security Card -->
        <div class="mt-6 md:mt-10">
          <UCard class="rounded-[2rem] border-none shadow-xl ring-1 ring-gray-100 dark:ring-gray-800">
            <template #header>
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-finger-print" class="text-indigo-500 font-bold" />
                <h3 class="font-extrabold text-gray-900 dark:text-white">Subscription & Device Security</h3>
              </div>
            </template>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
              <!-- Active Plan -->
              <div class="p-5 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl border border-primary-100 dark:border-primary-800">
                <p class="text-[10px] font-black text-primary-500 uppercase tracking-widest mb-2">Active Plan</p>
                <p class="text-2xl font-black text-gray-900 dark:text-white">{{ user?.plan || 'FREE' }}</p>
                <p class="text-xs text-gray-500 mt-1">
                  <template v-if="user?.plan === 'BEGINNING'">₹200 — Single Module</template>
                  <template v-else-if="user?.plan === 'ADVANCED'">₹500 — All Modules</template>
                  <template v-else-if="user?.plan === 'ENTERPRISE'">₹5,000 — Full License</template>
                  <template v-else>No active subscription</template>
                </p>
              </div>

              <!-- Bound Device -->
              <div class="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800">
                <p class="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-2">Bound Device</p>
                <p class="text-lg font-mono font-black text-gray-900 dark:text-white">{{ user?.boundDeviceId || 'Not Bound' }}</p>
                <p class="text-xs text-gray-500 mt-1">Subscription locked to this device</p>
              </div>

              <!-- Subscription Status -->
              <div class="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-100 dark:border-green-800">
                <p class="text-[10px] font-black text-green-500 uppercase tracking-widest mb-2">Status</p>
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full" :class="user?.subscription ? 'bg-green-500 animate-pulse' : 'bg-gray-300'"></div>
                  <p class="text-lg font-black text-gray-900 dark:text-white">{{ user?.subscription?.status || (user?.plan !== 'FREE' ? 'ACTIVE' : 'NO SUBSCRIPTION') }}</p>
                </div>
                <p class="text-xs text-gray-500 mt-1">
                  <template v-if="user?.subscription?.purchasedAt">
                    Since {{ new Date(user.subscription.purchasedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' }) }}
                  </template>
                  <template v-else>—</template>
                </p>
              </div>
            </div>

            <div class="mt-4 flex flex-col sm:flex-row gap-3">
              <UButton
                v-if="!user?.plan || user?.plan === 'FREE'"
                to="/pricing"
                color="primary"
                size="lg"
                class="rounded-xl font-black"
                icon="i-heroicons-arrow-up-circle"
              >
                Get a Subscription
              </UButton>
              <UButton
                v-else-if="user?.plan !== 'ENTERPRISE'"
                to="/pricing"
                color="primary"
                variant="soft"
                size="lg"
                class="rounded-xl font-black"
                icon="i-heroicons-arrow-up-circle"
              >
                Upgrade Plan
              </UButton>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const { data: user, refresh } = useFetch('/api/user/me')
const toast = useToast()
const fileInput = ref(null)

const isEditing = ref(false)
const isSaving = ref(false)
const editForm = reactive({
  name: '',
  image: null
})

const startEditing = () => {
  editForm.name = user.value?.name || ''
  editForm.image = user.value?.image || null
  isEditing.value = true
}

const triggerFilePicker = () => {
  fileInput.value?.click()
}

const handleFileChange = (e) => {
  const file = e.target.files[0]
  if (!file) return

  // Limit file size to 1MB for Base64 storage
  if (file.size > 1024 * 1024) {
    toast.add({
      title: 'File Too Large',
      description: 'Profile pictures must be under 1MB.',
      icon: 'i-heroicons-exclamation-circle',
      color: 'orange'
    })
    return
  }

  const reader = new FileReader()
  reader.onload = (event) => {
    editForm.image = event.target.result
  }
  reader.readAsDataURL(file)
}

const saveProfile = async () => {
  if (!editForm.name.trim()) return
  
  isSaving.value = true
  try {
    await $fetch('/api/user/me', {
      method: 'PATCH',
      body: { 
        name: editForm.name,
        image: editForm.image
      }
    })
    
    await refresh()
    isEditing.value = false
    toast.add({
      title: 'Profile Updated',
      description: 'Your changes have been saved successfully.',
      icon: 'i-heroicons-check-circle',
      color: 'green'
    })
  } catch (error) {
    toast.add({
      title: 'Update Failed',
      description: 'Could not save profile changes. Please try again.',
      icon: 'i-heroicons-exclamation-circle',
      color: 'red'
    })
  } finally {
    isSaving.value = false
  }
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.object-cover {
  object-fit: cover;
}
</style>
