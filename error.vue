<template>
  <div class="min-h-screen bg-[#00040a] flex flex-col items-center justify-center text-center p-6 relative overflow-hidden selection:bg-cyan-500/30">
    <!-- Volumetric Light Source (The Glow behind 404) -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] pointer-events-none z-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.15)_0%,transparent_60%)]"></div>
      <!-- Light Rays -->
      <div class="rays absolute inset-0 opacity-40"></div>
    </div>

    <!-- MAIN 404 SECTION -->
    <div class="relative z-10 flex flex-col items-center justify-center">
      
      <!-- ULTRA GLASSY 404 WITH RADIANT RAYS -->
      <div class="relative group cursor-default">
        <!-- Glowing Backglow -->
        <div class="absolute inset-0 blur-[80px] bg-cyan-400/20 rounded-full scale-150 animate-pulse"></div>
        
        <h1 class="glass-404 text-[16rem] md:text-[26rem] font-bold leading-none tracking-[0.2em] relative z-10 select-none ml-[0.2em]">
          404
        </h1>
        
        <!-- Long Light Rays Overlay -->
        <div class="absolute inset-0 z-20 mix-blend-screen pointer-events-none opacity-60">
           <div class="ray-effect"></div>
        </div>
      </div>

      <!-- MINIMAL CONTENT (More General for Net/Deploy issues) -->
      <div class="mt-[-20px] md:mt-[-40px] space-y-8 animate-fade-in">
        <div class="space-y-4 px-4">
          <h2 class="text-2xl md:text-4xl font-black text-white/90 tracking-[0.3em] uppercase">Service Disruption</h2>
          <p class="text-cyan-400/60 text-[10px] md:text-sm font-black tracking-[0.5em] uppercase">Check connection or synchronize console</p>
        </div>

        <div class="flex flex-col sm:flex-row gap-6 justify-center pt-4">
          <UButton 
            variant="ghost"
            color="white" 
            size="xl" 
            class="rounded-2xl px-12 h-16 text-lg font-black border border-white/5 hover:bg-white/5 backdrop-blur-sm transition-all"
            icon="i-heroicons-arrow-path"
            @click="handleError"
          >
            RECONNECT
          </UButton>
          <UButton 
            to="/" 
            variant="ghost" 
            color="cyan" 
            size="xl" 
            class="rounded-2xl px-12 h-16 text-lg font-black border border-cyan-500/10 hover:bg-cyan-500/5 backdrop-blur-sm transition-all"
          >
            DASHBOARD
          </UButton>
        </div>
      </div>
    </div>

    <!-- FOOTER NAV LINK style -->
    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
      <NuxtLink to="/" class="flex items-center gap-3 group text-gray-500 hover:text-white transition-colors duration-500">
        <span class="text-[10px] uppercase tracking-[0.4em] font-black opacity-40">Architected by</span>
        <div class="flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md group-hover:border-primary-500/30 transition-all">
          <UIcon name="i-heroicons-bolt-20-solid" class="text-primary-500 group-hover:scale-125 transition-transform" />
          <span class="text-sm font-bold tracking-widest">RHYSE FORGE</span>
        </div>
      </NuxtLink>
    </div>

    <!-- Global Noise/Dust -->
    <div class="fixed inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/dashboard' })
</script>

<style scoped>
/* GLASSY 404 EFFECT */
.glass-404 {
  background: linear-gradient(
    180deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(255, 255, 255, 0.3) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 0.5px rgba(255, 255, 255, 0.4);
  filter: drop-shadow(0 0 10px rgba(45, 212, 191, 0.2));
}

/* VOLUMETRIC RAYS */
.rays {
  background: conic-gradient(
    from 0deg at 50% 50%,
    transparent 0deg,
    rgba(45, 212, 191, 0.1) 10deg,
    transparent 20deg,
    rgba(45, 212, 191, 0.05) 50deg,
    transparent 80deg,
    rgba(45, 212, 191, 0.1) 120deg,
    transparent 150deg,
    rgba(45, 212, 191, 0.05) 200deg,
    transparent 240deg,
    rgba(45, 212, 191, 0.1) 300deg,
    transparent 360deg
  );
  animation: rotate-rays 120s linear infinite;
  transform-origin: center;
}

@keyframes rotate-rays {
  to { transform: rotate(360deg); }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* FOOTER STYLING */
.nav-link-style {
  font-family: 'Inter', sans-serif;
}
</style>
