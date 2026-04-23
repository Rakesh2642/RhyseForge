<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

    <UContainer class="py-12 md:py-16 relative z-10">
      <div class="max-w-5xl mx-auto">
        <UCard class="rounded-3xl border border-gray-200/70 dark:border-gray-800 shadow-xl">
          <template #header>
            <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[11px] font-black uppercase tracking-widest mb-3">
                  <UIcon name="i-heroicons-document-text" />
                  Legal Agreement
                </div>
                <h1 class="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white">Terms of Service</h1>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Last updated: April 23, 2026</p>
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400">
                Contact: <a href="mailto:support@rhyseforge.com" class="text-primary-500 hover:underline">support@rhyseforge.com</a>
              </div>
            </div>
          </template>

          <div class="space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300">
            <section class="rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/40 p-4">
              <h2 class="text-base font-black text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
                <UIcon name="i-heroicons-exclamation-triangle" />
                Read Before Purchase
              </h2>
              <p>
                RhyseForge is a preparation platform. Buying a plan does not guarantee that you will pass any certification exam.
                You are responsible for your exam strategy and final decisions.
              </p>
            </section>

            <section>
              <h2 class="text-lg font-bold text-gray-900 dark:text-white">1. Acceptance</h2>
              <p class="mt-2">
                By using RhyseForge, you agree to these terms. If you do not agree, you must not use the platform.
              </p>
            </section>

            <section>
              <h2 class="text-lg font-bold text-gray-900 dark:text-white">2. Account Responsibility</h2>
              <ul class="list-disc pl-6 space-y-1 mt-2">
                <li>You must provide accurate details.</li>
                <li>You are responsible for all account activity.</li>
                <li>You must keep your credentials private and secure.</li>
              </ul>
            </section>

            <section>
              <h2 class="text-lg font-bold text-gray-900 dark:text-white">3. Payment Terms</h2>
              <ul class="list-disc pl-6 space-y-1 mt-2">
                <li>Plan activation may require manual verification/approval.</li>
                <li>Pricing and plan scope are shown on the Pricing page at purchase time.</li>
                <li>Except where required by law, payments are generally non-refundable once access is granted.</li>
                <li>Duplicate payments or technical billing errors will be reviewed and corrected by support.</li>
              </ul>
            </section>

            <section>
              <h2 class="text-lg font-bold text-gray-900 dark:text-white">4. Question Source and Practice Disclaimer</h2>
              <ul class="list-disc pl-6 space-y-1 mt-2">
                <li>Practice questions may be based on historical patterns and prior exam-style material.</li>
                <li>Content is for training and practice, not an official exam dump or guarantee.</li>
                <li>The real exam can differ in wording, format, and difficulty.</li>
                <li>Relying only on this content is at your own risk.</li>
              </ul>
            </section>

            <section>
              <h2 class="text-lg font-bold text-gray-900 dark:text-white">5. Fair Use and Security</h2>
              <p class="mt-2">
                Users must not misuse the platform, bypass security, scrape protected content, or share paid access.
                We may suspend accounts for abuse or policy violations.
              </p>
            </section>

            <section>
              <h2 class="text-lg font-bold text-gray-900 dark:text-white">6. Limitation of Liability</h2>
              <p class="mt-2">
                RhyseForge is not liable for indirect or consequential losses, failed certification outcomes, or decisions made by users based on platform content.
              </p>
            </section>

            <section>
              <h2 class="text-lg font-bold text-gray-900 dark:text-white">7. Updates to Terms</h2>
              <p class="mt-2">
                We may update these terms as our product evolves. Continued use after updates means you accept the revised version.
              </p>
            </section>
          </div>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>
