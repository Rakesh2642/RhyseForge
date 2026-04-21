<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-300">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">User Management</h1>
          <p class="text-sm text-gray-500 mt-1">View and manage all registered accounts on RhyseForge.</p>
        </div>
        <UButton color="gray" variant="soft" to="/admin/dashboard" icon="i-heroicons-arrow-left">
          Back to Dashboard
        </UButton>
      </div>

      <UCard>
        <UTable :columns="columns" :rows="users" :loading="pending">
          <template #role-data="{ row }">
            <UBadge :color="row.role === 'ADMIN' ? 'purple' : 'blue'" variant="subtle">
              {{ row.role }}
            </UBadge>
          </template>

          <template #phone-data="{ row }">
             <span class="text-sm font-mono">{{ row.phone || 'N/A' }}</span>
          </template>

          <template #plan-data="{ row }">
             <div class="flex items-center gap-2">
                 <UBadge :color="row.plan === 'ENTERPRISE' ? 'amber' : row.plan === 'FREE' ? 'gray' : 'green'">
                   {{ row.plan }}
                 </UBadge>
                 <span v-if="row.subscriptions?.some(s => s.status === 'PENDING_APPROVAL')" class="text-xs font-black text-orange-500 animate-pulse">Request Pending</span>
             </div>
          </template>

          <template #boundDeviceId-data="{ row }">
             <span class="text-xs font-mono bg-gray-100 dark:bg-gray-800 p-1 rounded font-black tracking-widest text-gray-500" :title="row.boundDeviceId">
               {{ row.boundDeviceId ? row.boundDeviceId : 'Unbound' }}
             </span>
          </template>

          <template #createdAt-data="{ row }">
            <span class="text-xs text-gray-500">
              {{ new Date(row.createdAt).toLocaleDateString() }}
            </span>
          </template>

          <template #_count-data="{ row }">
            <UBadge color="gray" variant="soft">
              {{ row._count.sessions }} Attempts
            </UBadge>
          </template>

          <template #actions-data="{ row }">
            <div class="flex items-center gap-2">
              <UButton size="2xs" color="primary" variant="ghost" icon="i-heroicons-pencil-square" title="Edit / Approve" @click="openEditModal(row)" />
              <UButton v-if="row.role !== 'ADMIN'" size="2xs" color="gray" variant="ghost" icon="i-heroicons-shield-check" title="Make Admin" @click="promoteUser(row.id)" />
              <UButton size="2xs" color="red" variant="ghost" icon="i-heroicons-trash" title="Delete User" @click="deleteUser(row.id)" />
            </div>
          </template>
        </UTable>

        <!-- Edit / Approval Modal -->
        <UModal v-model="editModalOpen">
          <UCard class="p-4">
            <template #header>
              <h3 class="text-lg font-bold">Manage User: {{ selectedUser?.email }}</h3>
            </template>
            
            <div v-if="selectedUser" class="space-y-4">
              <div class="p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 rounded-lg" v-if="hasPendingSubscription">
                 <h4 class="font-bold text-orange-600 mb-2 flex items-center gap-2"><UIcon name="i-heroicons-bell-alert" /> Pending Subscription Request</h4>
                 <p class="text-xs text-gray-600 mb-3">This user requested to buy the <strong>{{ pendingSub.plan }}</strong> plan. Verify their payment offline, then approve.</p>
                 <div class="flex gap-2">
                    <UButton color="green" icon="i-heroicons-check" size="sm" @click="handleSubscriptionApprove(pendingSub.id, 'ACTIVE')">Approve Request</UButton>
                    <UButton color="red" variant="ghost" size="sm" @click="handleSubscriptionApprove(pendingSub.id, 'REJECTED')">Reject</UButton>
                 </div>
              </div>

              <UFormGroup label="System Role">
                 <USelect v-model="selectedUser.role" :options="['USER', 'ADMIN']" />
              </UFormGroup>

              <UFormGroup label="Active Plan">
                 <USelect v-model="selectedUser.plan" :options="['FREE', 'BEGINNING', 'ADVANCED', 'ENTERPRISE']" />
              </UFormGroup>
              
              <UFormGroup label="Bound Device (Hash)">
                 <UInput v-model="selectedUser.boundDeviceId" />
                 <p class="text-[10px] text-red-500 mt-1 mt-1 font-bold">Clear this to let them login on a new device.</p>
              </UFormGroup>
            </div>

            <template #footer>
              <div class="flex justify-end gap-2">
                <UButton color="gray" variant="ghost" @click="editModalOpen = false">Cancel</UButton>
                <UButton color="primary" @click="saveUserEdits" :loading="saving">Save Changes</UButton>
              </div>
            </template>
          </UCard>
        </UModal>
      </UCard>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from '#app'

const columns = [
  { key: 'email', label: 'Email Address' },
  { key: 'name', label: 'Display Name' },
  { key: 'phone', label: 'Phone' },
  { key: 'role', label: 'Role' },
  { key: 'plan', label: 'Subscription Plan' },
  { key: 'boundDeviceId', label: 'Device Hash' },
  { key: '_count', label: 'Activity' },
  { key: 'createdAt', label: 'Joined On' },
  { key: 'actions', label: 'Actions' }
]

const { data: users, pending, refresh } = useFetch('/api/admin/users')

const selectedUser = ref(null)
const editModalOpen = ref(false)
const saving = ref(false)

const openEditModal = (user) => {
  selectedUser.value = { ...user } // copy to edit without affecting list immediately
  editModalOpen.value = true
}

const hasPendingSubscription = computed(() => {
   return selectedUser.value?.subscriptions?.some(s => s.status === 'PENDING_APPROVAL')
})

const pendingSub = computed(() => {
   return selectedUser.value?.subscriptions?.find(s => s.status === 'PENDING_APPROVAL')
})

const saveUserEdits = async () => {
   saving.value = true
   try {
     await $fetch(`/api/admin/users/${selectedUser.value.id}`, {
        method: 'PATCH',
        body: {
           role: selectedUser.value.role,
           plan: selectedUser.value.plan,
           boundDeviceId: selectedUser.value.boundDeviceId
        }
     })
     editModalOpen.value = false
     refresh()
   } catch (e) {
     alert('Failed to update user: ' + (e.data?.statusMessage || e.message))
   } finally {
     saving.value = false
   }
}

const handleSubscriptionApprove = async (subId, status) => {
   try {
     await $fetch(`/api/admin/subscriptions/${subId}/approve`, {
        method: 'POST',
        body: { status, userId: selectedUser.value.id }
     })
     alert(`Subscription ${status === 'ACTIVE' ? 'Approved' : 'Rejected'}!`)
     editModalOpen.value = false
     refresh()
   } catch (e) {
     alert('Failed to update subscription status.')
   }
}

const promoteUser = async (id) => {
   // Legacy generic promote icon — handled by edit modal now, but fall back is here
   const user = users.value.find(u => u.id === id)
   if(user) openEditModal(user)
}

const deleteUser = async (id) => {
  if (!confirm('Are you sure you want to delete this user? All their data will be lost.')) return
  
  try {
    await $fetch(`/api/admin/users/${id}`, { method: 'DELETE' })
    refresh()
  } catch (err) {
    alert('Failed to delete user')
  }
}
</script>
