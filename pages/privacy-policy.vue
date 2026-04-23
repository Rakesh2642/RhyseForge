<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none"></div>

    <UContainer class="py-12 md:py-16 relative z-10">
      <div class="max-w-5xl mx-auto">
        <UCard class="rounded-3xl border border-gray-200/70 dark:border-gray-800 shadow-xl">
          <template #header>
            <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-[11px] font-black uppercase tracking-widest mb-3">
                  <UIcon name="i-heroicons-lock-closed" />
                  Privacy & Trust
                </div>
                <h1 class="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white">Privacy Policy</h1>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Last updated: April 23, 2026</p>
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400">
                Questions? <a href="mailto:support@rhyseforge.com" class="text-primary-500 hover:underline">support@rhyseforge.com</a>
              </div>
            </div>
          </template>

          <div class="space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300">
            <section class="rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/40 p-4">
              <h2 class="text-base font-black text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-2">
                <UIcon name="i-heroicons-exclamation-triangle" />
                Important Notice
              </h2>
              <p>
                RhyseForge provides practice content for preparation support. We do not guarantee exam results,
                certification outcomes, or that practicing only these questions will be sufficient.
              </p>
            </section>

            <section>
              <h2 class="text-lg font-bold text-gray-900 dark:text-white">1. Information We Collect</h2>
              <ul class="list-disc pl-6 space-y-1 mt-2">
                <li>Account data: name, email, phone, and password hash.</li>
                <li>Usage data: attempts, scores, progress, and dashboard analytics.</li>
                <li>Security data: device identifier, browser metadata, IP metadata.</li>
                <li>Subscription data: plan request, approval status, timestamps.</li>
                <li>Module request data submitted through public forms.</li>
              </ul>
            </section>

            <section>
              <h2 class="text-lg font-bold text-gray-900 dark:text-white">2. How We Use Data</h2>
              <ul class="list-disc pl-6 space-y-1 mt-2">
                <li>Deliver exam practice, mock sessions, and performance analytics.</li>
                <li>Protect accounts using security controls like device validation.</li>
                <li>Operate subscription workflow and related support operations.</li>
                <li>Improve module quality and prioritize requested modules.</li>
              </ul>
            </section>

            <section>
              <h2 class="text-lg font-bold text-gray-900 dark:text-white">3. Payment and Billing Data</h2>
              <p class="mt-2">
                Payment-related information is used only for subscription processing, fraud prevention, and support.
                We do not sell your personal or billing information.
              </p>
            </section>

            <section>
              <h2 class="text-lg font-bold text-gray-900 dark:text-white">4. Question Content Disclaimer</h2>
              <p class="mt-2">
                Some practice questions may be inspired by patterns from historical or publicly discussed exam formats.
                Content is provided for training and revision purposes only. Users are responsible for how they use this material.
              </p>
            </section>

            <section>
              <h2 class="text-lg font-bold text-gray-900 dark:text-white">5. Retention, Security, and Rights</h2>
              <p class="mt-2">
                We retain data for service delivery, legal compliance, and security operations. You may request
                access, correction, or deletion of your data, subject to legal and security constraints.
              </p>
            </section>

            <section>
              <h2 class="text-lg font-bold text-gray-900 dark:text-white">6. Contact</h2>
              <p class="mt-2">
                For privacy requests, contact:
                <a href="mailto:support@rhyseforge.com" class="text-primary-500 hover:underline">support@rhyseforge.com</a>
              </p>
            </section>
          </div>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>
