<template>
  <div class="antialiased font-sans text-gray-900 bg-white dark:bg-gray-950 dark:text-gray-100">
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#3b82f6 0%,#2dd4bf 50%,#3b82f6 100%)" :height="3" />
    <UNotifications />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(5px);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, filter;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* Force smooth scrolling globally */
html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom Scrollbar for Smooth Feeling */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}
.dark ::-webkit-scrollbar-thumb {
  background: #334155;
}
::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
