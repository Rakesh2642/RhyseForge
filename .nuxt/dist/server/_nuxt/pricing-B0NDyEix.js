import __nuxt_component_0 from "./Container-BN6VrUpB.js";
import { u as useAuth, d as useToast, _ as __nuxt_component_2, b as __nuxt_component_3, n as navigateTo } from "../server.mjs";
import __nuxt_component_3$1 from "./Accordion-5PAt2eGS.js";
import __nuxt_component_6 from "./Modal-CHUfZEA4.js";
import __nuxt_component_2$1 from "./Card-CgPQDjgh.js";
import { computed, ref, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, isRef, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { u as useDeviceFingerprint } from "./useDeviceFingerprint-OUZPhd3k.js";
import "tailwind-merge";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/hookable/dist/index.mjs";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/unctx/dist/index.mjs";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/h3/dist/index.mjs";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/ufo/dist/index.mjs";
import "vue-router";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/defu/dist/defu.mjs";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/klona/dist/index.mjs";
import "requrl";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/destr/dist/index.mjs";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "@vueuse/core";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "ohash/utils";
import "./keyboard-BCt0ZeLv.js";
import "./use-resolve-button-type-CCTzT7JK.js";
import "./open-closed-DaveoKA1.js";
import "./transition-CXfcTVM0.js";
import "./portal-BvWS8jLA.js";
import "./focus-management-CclPs0xY.js";
import "./use-outside-click-cNhWs2ZY.js";
import "./hidden-e5tlhUcy.js";
import "./active-element-history-Cer4cSOw.js";
import "./micro-task-B6uncIso.js";
import "./description-CG6lMCGz.js";
const _sfc_main = {
  __name: "pricing",
  __ssrInlineRender: true,
  setup(__props) {
    const { status, data, getSession } = useAuth();
    const { getDeviceId } = useDeviceFingerprint();
    const toast = useToast();
    const PLANS = {
      BEGINNING: { price: 200, name: "Beginning" },
      ADVANCED: { price: 500, name: "Advanced" },
      ENTERPRISE: { price: 5e3, name: "Enterprise" }
    };
    const PLAN_RANK = { FREE: 0, BEGINNING: 1, ADVANCED: 2, ENTERPRISE: 3 };
    const currentPlan = computed(() => data.value?.user?.plan || "FREE");
    const purchasingPlan = ref("");
    const selectedPlan = ref("");
    const showConfirmModal = ref(false);
    const showSuccessModal = ref(false);
    const confirmingPurchase = ref(false);
    const purchaseError = ref("");
    const selectedPlanDetails = computed(
      () => selectedPlan.value ? PLANS[selectedPlan.value] : null
    );
    const maskedDeviceId = computed(() => {
      return "••••••••";
    });
    const isCurrentOrLower = (plan) => {
      const currentRank = PLAN_RANK[currentPlan.value] || 0;
      const checkRank = PLAN_RANK[plan] || 0;
      return checkRank <= currentRank && currentRank > 0;
    };
    const handlePurchase = (plan) => {
      if (status.value !== "authenticated") {
        navigateTo("/register");
        return;
      }
      selectedPlan.value = plan;
      purchaseError.value = "";
      showConfirmModal.value = true;
    };
    const confirmPurchase = async () => {
      confirmingPurchase.value = true;
      purchaseError.value = "";
      purchasingPlan.value = selectedPlan.value;
      try {
        const deviceId = getDeviceId();
        await $fetch("/api/subscription/purchase", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth:token")?.replace(/"/g, "") || ""}`
          },
          body: {
            plan: selectedPlan.value,
            deviceId
          }
        });
        showConfirmModal.value = false;
        showSuccessModal.value = true;
        await getSession();
        toast.add({
          title: "Plan Activated!",
          description: `Your ${PLANS[selectedPlan.value].name} plan is now active.`,
          icon: "i-heroicons-check-circle",
          color: "green"
        });
      } catch (e) {
        purchaseError.value = e?.data?.statusMessage || e?.message || "Purchase failed. Please try again.";
      } finally {
        confirmingPurchase.value = false;
        purchasingPlan.value = "";
      }
    };
    const faqItems = [
      {
        label: "What certifications are available?",
        content: "RhyseForge currently supports Databricks Data Engineer Associate, AWS AI Practitioner, Databricks Gen AI Engineer, and SAP ABAP Cloud. New modules are added regularly and included free with the Advanced plan.",
        defaultOpen: true
      },
      {
        label: "Why is my subscription locked to one device?",
        content: "To prevent unauthorized credential sharing, each subscription is bound to your User ID + Device Fingerprint. This means even if someone gets your login credentials, they cannot use your subscription on a different device. This protects your investment and ensures fair pricing for everyone."
      },
      {
        label: "What if I get a new device?",
        content: "Contact support@rhyseforge.com with your registered email. Our admin team can reset your device binding so you can log in from your new device. The process typically takes less than 24 hours."
      },
      {
        label: "Can I upgrade from Beginning to Advanced?",
        content: "Yes! You can upgrade at any time directly from this page. Your subscription will be upgraded and the new plan will take effect immediately."
      },
      {
        label: "Is there a refund policy?",
        content: "We offer a 7-day money-back guarantee on all plans. If you are not satisfied with RhyseForge, contact us within 7 days for a full refund."
      },
      {
        label: "How does the mock exam timer work?",
        content: "Mock exams simulate real certification conditions with a countdown timer. When time runs out, your exam is automatically submitted — just like the real test. Practice mode has no time limit."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0;
      const _component_UIcon = __nuxt_component_2;
      const _component_UButton = __nuxt_component_3;
      const _component_UAccordion = __nuxt_component_3$1;
      const _component_UModal = __nuxt_component_6;
      const _component_UCard = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden" }, _attrs))}><div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none"></div>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "py-12 md:py-20 relative z-10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center mb-16 md:mb-24 px-4"${_scopeId}><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-500 mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-sparkles" }, null, _parent2, _scopeId));
            _push2(`<span class="text-[10px] font-black uppercase tracking-[0.3em]"${_scopeId}>Simple, Transparent Pricing</span></div><h1 class="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter mb-4 leading-[1.1]"${_scopeId}> Invest in Your <span class="text-primary-500"${_scopeId}>Certification</span></h1><p class="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium"${_scopeId}> Choose the plan that matches your ambition. Every plan includes our AI-powered exam engine and performance analytics. </p>`);
            if (unref(currentPlan) && unref(currentPlan) !== "FREE") {
              _push2(`<div class="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-check-badge",
                class: "text-lg"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-sm font-black"${_scopeId}>Your current plan: ${ssrInterpolate(unref(currentPlan))}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 mb-20"${_scopeId}><div class="bg-white dark:bg-gray-900 rounded-[2rem] p-6 sm:p-8 ring-1 ring-gray-200 dark:ring-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col"${_scopeId}><div class="mb-8"${_scopeId}><div class="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-academic-cap",
              class: "text-2xl text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-xl font-black text-gray-900 dark:text-white mb-1"${_scopeId}>Beginning</h3><p class="text-sm text-gray-500"${_scopeId}>Access a single certification module</p></div><div class="mb-8"${_scopeId}><div class="flex items-baseline gap-1"${_scopeId}><span class="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white"${_scopeId}>₹200</span><span class="text-gray-400 font-bold text-sm"${_scopeId}>/module</span></div><p class="text-xs text-gray-400 mt-1"${_scopeId}>One-time purchase</p></div><div class="space-y-4 mb-8 flex-1"${_scopeId}><div class="flex items-start gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-check-circle",
              class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-600 dark:text-gray-300"${_scopeId}>Access to <strong${_scopeId}>1 Certification Exam</strong> module of your choice</span></div><div class="flex items-start gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-check-circle",
              class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-600 dark:text-gray-300"${_scopeId}>Unlimited practice &amp; mock exams</span></div><div class="flex items-start gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-check-circle",
              class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-600 dark:text-gray-300"${_scopeId}>Detailed explanations for every question</span></div><div class="flex items-start gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-check-circle",
              class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-600 dark:text-gray-300"${_scopeId}>Personal performance dashboard</span></div><div class="flex items-start gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-x-circle",
              class: "text-gray-300 dark:text-gray-600 text-lg flex-shrink-0 mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-400"${_scopeId}>No access to other modules</span></div></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              block: "",
              color: "gray",
              variant: "solid",
              size: "xl",
              class: "rounded-2xl h-14 font-black",
              loading: unref(purchasingPlan) === "BEGINNING",
              disabled: isCurrentOrLower("BEGINNING"),
              onClick: ($event) => handlePurchase("BEGINNING")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(isCurrentOrLower("BEGINNING") ? "Current Plan" : "Get Started — ₹200")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(isCurrentOrLower("BEGINNING") ? "Current Plan" : "Get Started — ₹200"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="bg-gradient-to-b from-primary-500 to-primary-700 rounded-[2rem] p-6 sm:p-8 shadow-2xl shadow-primary-500/20 ring-2 ring-primary-400 hover:-translate-y-2 transition-all duration-500 flex flex-col relative overflow-hidden"${_scopeId}><div class="absolute top-0 right-0 bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-bl-2xl text-[10px] font-black uppercase tracking-widest"${_scopeId}> Most Popular </div><div class="mb-8"${_scopeId}><div class="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-fire",
              class: "text-2xl text-white"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-xl font-black text-white mb-1"${_scopeId}>Advanced</h3><p class="text-sm text-primary-100"${_scopeId}>Lifetime access to all exam modules</p></div><div class="mb-8"${_scopeId}><div class="flex items-baseline gap-1"${_scopeId}><span class="text-4xl sm:text-5xl font-black text-white"${_scopeId}>₹500</span><span class="text-primary-200 font-bold text-sm"${_scopeId}>/lifetime</span></div><p class="text-xs text-primary-200 mt-1"${_scopeId}>Pay once, access forever</p></div><div class="space-y-4 mb-8 flex-1"${_scopeId}><div class="flex items-start gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-check-circle",
              class: "text-white text-lg flex-shrink-0 mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-white/90"${_scopeId}><strong${_scopeId}>All current &amp; future</strong> certification modules</span></div><div class="flex items-start gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-check-circle",
              class: "text-white text-lg flex-shrink-0 mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-white/90"${_scopeId}>Unlimited practice &amp; mock exams</span></div><div class="flex items-start gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-check-circle",
              class: "text-white text-lg flex-shrink-0 mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-white/90"${_scopeId}>Priority access to new exam content</span></div><div class="flex items-start gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-check-circle",
              class: "text-white text-lg flex-shrink-0 mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-white/90"${_scopeId}>Advanced analytics &amp; weak area drills</span></div><div class="flex items-start gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-check-circle",
              class: "text-white text-lg flex-shrink-0 mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-white/90"${_scopeId}>Global Leaderboard ranking</span></div><div class="flex items-start gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-check-circle",
              class: "text-white text-lg flex-shrink-0 mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-white/90"${_scopeId}>Email support</span></div></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              block: "",
              color: "white",
              size: "xl",
              class: "rounded-2xl h-14 font-black text-primary-600",
              loading: unref(purchasingPlan) === "ADVANCED",
              disabled: isCurrentOrLower("ADVANCED"),
              onClick: ($event) => handlePurchase("ADVANCED")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(isCurrentOrLower("ADVANCED") ? "Current Plan" : "Unlock All Exams — ₹500")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(isCurrentOrLower("ADVANCED") ? "Current Plan" : "Unlock All Exams — ₹500"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="bg-white dark:bg-gray-900 rounded-[2rem] p-6 sm:p-8 ring-1 ring-gray-200 dark:ring-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col"${_scopeId}><div class="mb-8"${_scopeId}><div class="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-building-office-2",
              class: "text-2xl text-purple-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-xl font-black text-gray-900 dark:text-white mb-1"${_scopeId}>Enterprise</h3><p class="text-sm text-gray-500"${_scopeId}>Your own branded exam platform</p></div><div class="mb-8"${_scopeId}><div class="flex items-baseline gap-1"${_scopeId}><span class="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white"${_scopeId}>₹5,000</span><span class="text-gray-400 font-bold text-sm"${_scopeId}>/license</span></div><p class="text-xs text-gray-400 mt-1"${_scopeId}>Full source code + deployment</p></div><div class="space-y-4 mb-8 flex-1"${_scopeId}><div class="flex items-start gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-check-circle",
              class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-600 dark:text-gray-300"${_scopeId}><strong${_scopeId}>Complete source code</strong> of the platform</span></div><div class="flex items-start gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-check-circle",
              class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-600 dark:text-gray-300"${_scopeId}>Custom branding &amp; white-label license</span></div><div class="flex items-start gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-check-circle",
              class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-600 dark:text-gray-300"${_scopeId}>AI-powered question parser included</span></div><div class="flex items-start gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-check-circle",
              class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-600 dark:text-gray-300"${_scopeId}>Admin panel, user management, analytics</span></div><div class="flex items-start gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-check-circle",
              class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-600 dark:text-gray-300"${_scopeId}>Deploy on your own infrastructure</span></div><div class="flex items-start gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-check-circle",
              class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-600 dark:text-gray-300"${_scopeId}>1-on-1 setup assistance &amp; training</span></div></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              block: "",
              color: "gray",
              variant: "outline",
              size: "xl",
              class: "rounded-2xl h-14 font-black",
              loading: unref(purchasingPlan) === "ENTERPRISE",
              disabled: isCurrentOrLower("ENTERPRISE"),
              onClick: ($event) => handlePurchase("ENTERPRISE")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(isCurrentOrLower("ENTERPRISE") ? "Current Plan" : "Get Enterprise — ₹5,000")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(isCurrentOrLower("ENTERPRISE") ? "Current Plan" : "Get Enterprise — ₹5,000"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="max-w-3xl mx-auto px-4 mb-16"${_scopeId}><div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-3xl p-6 md:p-8 border border-blue-100 dark:border-blue-900/30"${_scopeId}><div class="flex items-start gap-4"${_scopeId}><div class="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-shield-check",
              class: "text-2xl text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h3 class="text-lg font-black text-gray-900 dark:text-white mb-2"${_scopeId}>Device-Locked Security</h3><p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"${_scopeId}> All subscriptions are securely bound to your <strong${_scopeId}>User ID + Device ID</strong>. Even if someone gets your login credentials, they <strong${_scopeId}>cannot access your subscription from another device</strong>. This protects your investment and ensures fair usage. Need to change devices? Contact our support team. </p></div></div></div></div><div class="max-w-3xl mx-auto px-4"${_scopeId}><h2 class="text-2xl md:text-3xl font-black text-center text-gray-900 dark:text-white mb-10"${_scopeId}>Frequently Asked Questions</h2>`);
            _push2(ssrRenderComponent(_component_UAccordion, {
              items: faqItems,
              ui: { wrapper: "space-y-4" }
            }, {
              default: withCtx(({ item, open }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    class: "w-full rounded-2xl px-6 py-5",
                    ui: { rounded: "rounded-2xl" }
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="font-bold text-left flex-1"${_scopeId3}>${ssrInterpolate(item.label)}</span>`);
                        _push4(ssrRenderComponent(_component_UIcon, {
                          name: open ? "i-heroicons-chevron-up" : "i-heroicons-chevron-down",
                          class: "flex-shrink-0"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { class: "font-bold text-left flex-1" }, toDisplayString(item.label), 1),
                          createVNode(_component_UIcon, {
                            name: open ? "i-heroicons-chevron-up" : "i-heroicons-chevron-down",
                            class: "flex-shrink-0"
                          }, null, 8, ["name"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      class: "w-full rounded-2xl px-6 py-5",
                      ui: { rounded: "rounded-2xl" }
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "font-bold text-left flex-1" }, toDisplayString(item.label), 1),
                        createVNode(_component_UIcon, {
                          name: open ? "i-heroicons-chevron-up" : "i-heroicons-chevron-down",
                          class: "flex-shrink-0"
                        }, null, 8, ["name"])
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              item: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="px-6 pb-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed"${_scopeId2}>${ssrInterpolate(item.content)}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "px-6 pb-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed" }, toDisplayString(item.content), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center mb-16 md:mb-24 px-4" }, [
                createVNode("div", { class: "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-500 mb-6" }, [
                  createVNode(_component_UIcon, { name: "i-heroicons-sparkles" }),
                  createVNode("span", { class: "text-[10px] font-black uppercase tracking-[0.3em]" }, "Simple, Transparent Pricing")
                ]),
                createVNode("h1", { class: "text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter mb-4 leading-[1.1]" }, [
                  createTextVNode(" Invest in Your "),
                  createVNode("span", { class: "text-primary-500" }, "Certification")
                ]),
                createVNode("p", { class: "text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium" }, " Choose the plan that matches your ambition. Every plan includes our AI-powered exam engine and performance analytics. "),
                unref(currentPlan) && unref(currentPlan) !== "FREE" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"
                }, [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-check-badge",
                    class: "text-lg"
                  }),
                  createVNode("span", { class: "text-sm font-black" }, "Your current plan: " + toDisplayString(unref(currentPlan)), 1)
                ])) : createCommentVNode("", true)
              ]),
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 mb-20" }, [
                createVNode("div", { class: "bg-white dark:bg-gray-900 rounded-[2rem] p-6 sm:p-8 ring-1 ring-gray-200 dark:ring-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col" }, [
                  createVNode("div", { class: "mb-8" }, [
                    createVNode("div", { class: "w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-academic-cap",
                        class: "text-2xl text-blue-500"
                      })
                    ]),
                    createVNode("h3", { class: "text-xl font-black text-gray-900 dark:text-white mb-1" }, "Beginning"),
                    createVNode("p", { class: "text-sm text-gray-500" }, "Access a single certification module")
                  ]),
                  createVNode("div", { class: "mb-8" }, [
                    createVNode("div", { class: "flex items-baseline gap-1" }, [
                      createVNode("span", { class: "text-4xl sm:text-5xl font-black text-gray-900 dark:text-white" }, "₹200"),
                      createVNode("span", { class: "text-gray-400 font-bold text-sm" }, "/module")
                    ]),
                    createVNode("p", { class: "text-xs text-gray-400 mt-1" }, "One-time purchase")
                  ]),
                  createVNode("div", { class: "space-y-4 mb-8 flex-1" }, [
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
                      }),
                      createVNode("span", { class: "text-sm text-gray-600 dark:text-gray-300" }, [
                        createTextVNode("Access to "),
                        createVNode("strong", null, "1 Certification Exam"),
                        createTextVNode(" module of your choice")
                      ])
                    ]),
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
                      }),
                      createVNode("span", { class: "text-sm text-gray-600 dark:text-gray-300" }, "Unlimited practice & mock exams")
                    ]),
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
                      }),
                      createVNode("span", { class: "text-sm text-gray-600 dark:text-gray-300" }, "Detailed explanations for every question")
                    ]),
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
                      }),
                      createVNode("span", { class: "text-sm text-gray-600 dark:text-gray-300" }, "Personal performance dashboard")
                    ]),
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-x-circle",
                        class: "text-gray-300 dark:text-gray-600 text-lg flex-shrink-0 mt-0.5"
                      }),
                      createVNode("span", { class: "text-sm text-gray-400" }, "No access to other modules")
                    ])
                  ]),
                  createVNode(_component_UButton, {
                    block: "",
                    color: "gray",
                    variant: "solid",
                    size: "xl",
                    class: "rounded-2xl h-14 font-black",
                    loading: unref(purchasingPlan) === "BEGINNING",
                    disabled: isCurrentOrLower("BEGINNING"),
                    onClick: ($event) => handlePurchase("BEGINNING")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(isCurrentOrLower("BEGINNING") ? "Current Plan" : "Get Started — ₹200"), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled", "onClick"])
                ]),
                createVNode("div", { class: "bg-gradient-to-b from-primary-500 to-primary-700 rounded-[2rem] p-6 sm:p-8 shadow-2xl shadow-primary-500/20 ring-2 ring-primary-400 hover:-translate-y-2 transition-all duration-500 flex flex-col relative overflow-hidden" }, [
                  createVNode("div", { class: "absolute top-0 right-0 bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-bl-2xl text-[10px] font-black uppercase tracking-widest" }, " Most Popular "),
                  createVNode("div", { class: "mb-8" }, [
                    createVNode("div", { class: "w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-fire",
                        class: "text-2xl text-white"
                      })
                    ]),
                    createVNode("h3", { class: "text-xl font-black text-white mb-1" }, "Advanced"),
                    createVNode("p", { class: "text-sm text-primary-100" }, "Lifetime access to all exam modules")
                  ]),
                  createVNode("div", { class: "mb-8" }, [
                    createVNode("div", { class: "flex items-baseline gap-1" }, [
                      createVNode("span", { class: "text-4xl sm:text-5xl font-black text-white" }, "₹500"),
                      createVNode("span", { class: "text-primary-200 font-bold text-sm" }, "/lifetime")
                    ]),
                    createVNode("p", { class: "text-xs text-primary-200 mt-1" }, "Pay once, access forever")
                  ]),
                  createVNode("div", { class: "space-y-4 mb-8 flex-1" }, [
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "text-white text-lg flex-shrink-0 mt-0.5"
                      }),
                      createVNode("span", { class: "text-sm text-white/90" }, [
                        createVNode("strong", null, "All current & future"),
                        createTextVNode(" certification modules")
                      ])
                    ]),
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "text-white text-lg flex-shrink-0 mt-0.5"
                      }),
                      createVNode("span", { class: "text-sm text-white/90" }, "Unlimited practice & mock exams")
                    ]),
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "text-white text-lg flex-shrink-0 mt-0.5"
                      }),
                      createVNode("span", { class: "text-sm text-white/90" }, "Priority access to new exam content")
                    ]),
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "text-white text-lg flex-shrink-0 mt-0.5"
                      }),
                      createVNode("span", { class: "text-sm text-white/90" }, "Advanced analytics & weak area drills")
                    ]),
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "text-white text-lg flex-shrink-0 mt-0.5"
                      }),
                      createVNode("span", { class: "text-sm text-white/90" }, "Global Leaderboard ranking")
                    ]),
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "text-white text-lg flex-shrink-0 mt-0.5"
                      }),
                      createVNode("span", { class: "text-sm text-white/90" }, "Email support")
                    ])
                  ]),
                  createVNode(_component_UButton, {
                    block: "",
                    color: "white",
                    size: "xl",
                    class: "rounded-2xl h-14 font-black text-primary-600",
                    loading: unref(purchasingPlan) === "ADVANCED",
                    disabled: isCurrentOrLower("ADVANCED"),
                    onClick: ($event) => handlePurchase("ADVANCED")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(isCurrentOrLower("ADVANCED") ? "Current Plan" : "Unlock All Exams — ₹500"), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled", "onClick"])
                ]),
                createVNode("div", { class: "bg-white dark:bg-gray-900 rounded-[2rem] p-6 sm:p-8 ring-1 ring-gray-200 dark:ring-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col" }, [
                  createVNode("div", { class: "mb-8" }, [
                    createVNode("div", { class: "w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-building-office-2",
                        class: "text-2xl text-purple-500"
                      })
                    ]),
                    createVNode("h3", { class: "text-xl font-black text-gray-900 dark:text-white mb-1" }, "Enterprise"),
                    createVNode("p", { class: "text-sm text-gray-500" }, "Your own branded exam platform")
                  ]),
                  createVNode("div", { class: "mb-8" }, [
                    createVNode("div", { class: "flex items-baseline gap-1" }, [
                      createVNode("span", { class: "text-4xl sm:text-5xl font-black text-gray-900 dark:text-white" }, "₹5,000"),
                      createVNode("span", { class: "text-gray-400 font-bold text-sm" }, "/license")
                    ]),
                    createVNode("p", { class: "text-xs text-gray-400 mt-1" }, "Full source code + deployment")
                  ]),
                  createVNode("div", { class: "space-y-4 mb-8 flex-1" }, [
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
                      }),
                      createVNode("span", { class: "text-sm text-gray-600 dark:text-gray-300" }, [
                        createVNode("strong", null, "Complete source code"),
                        createTextVNode(" of the platform")
                      ])
                    ]),
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
                      }),
                      createVNode("span", { class: "text-sm text-gray-600 dark:text-gray-300" }, "Custom branding & white-label license")
                    ]),
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
                      }),
                      createVNode("span", { class: "text-sm text-gray-600 dark:text-gray-300" }, "AI-powered question parser included")
                    ]),
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
                      }),
                      createVNode("span", { class: "text-sm text-gray-600 dark:text-gray-300" }, "Admin panel, user management, analytics")
                    ]),
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
                      }),
                      createVNode("span", { class: "text-sm text-gray-600 dark:text-gray-300" }, "Deploy on your own infrastructure")
                    ]),
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "text-green-500 text-lg flex-shrink-0 mt-0.5"
                      }),
                      createVNode("span", { class: "text-sm text-gray-600 dark:text-gray-300" }, "1-on-1 setup assistance & training")
                    ])
                  ]),
                  createVNode(_component_UButton, {
                    block: "",
                    color: "gray",
                    variant: "outline",
                    size: "xl",
                    class: "rounded-2xl h-14 font-black",
                    loading: unref(purchasingPlan) === "ENTERPRISE",
                    disabled: isCurrentOrLower("ENTERPRISE"),
                    onClick: ($event) => handlePurchase("ENTERPRISE")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(isCurrentOrLower("ENTERPRISE") ? "Current Plan" : "Get Enterprise — ₹5,000"), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled", "onClick"])
                ])
              ]),
              createVNode("div", { class: "max-w-3xl mx-auto px-4 mb-16" }, [
                createVNode("div", { class: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-3xl p-6 md:p-8 border border-blue-100 dark:border-blue-900/30" }, [
                  createVNode("div", { class: "flex items-start gap-4" }, [
                    createVNode("div", { class: "w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-shield-check",
                        class: "text-2xl text-blue-500"
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-lg font-black text-gray-900 dark:text-white mb-2" }, "Device-Locked Security"),
                      createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400 leading-relaxed" }, [
                        createTextVNode(" All subscriptions are securely bound to your "),
                        createVNode("strong", null, "User ID + Device ID"),
                        createTextVNode(". Even if someone gets your login credentials, they "),
                        createVNode("strong", null, "cannot access your subscription from another device"),
                        createTextVNode(". This protects your investment and ensures fair usage. Need to change devices? Contact our support team. ")
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "max-w-3xl mx-auto px-4" }, [
                createVNode("h2", { class: "text-2xl md:text-3xl font-black text-center text-gray-900 dark:text-white mb-10" }, "Frequently Asked Questions"),
                createVNode(_component_UAccordion, {
                  items: faqItems,
                  ui: { wrapper: "space-y-4" }
                }, {
                  default: withCtx(({ item, open }) => [
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      class: "w-full rounded-2xl px-6 py-5",
                      ui: { rounded: "rounded-2xl" }
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "font-bold text-left flex-1" }, toDisplayString(item.label), 1),
                        createVNode(_component_UIcon, {
                          name: open ? "i-heroicons-chevron-up" : "i-heroicons-chevron-down",
                          class: "flex-shrink-0"
                        }, null, 8, ["name"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  item: withCtx(({ item }) => [
                    createVNode("div", { class: "px-6 pb-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed" }, toDisplayString(item.content), 1)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(showConfirmModal),
        "onUpdate:modelValue": ($event) => isRef(showConfirmModal) ? showConfirmModal.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { class: "rounded-2xl" }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-3"${_scopeId2}><div class="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-credit-card",
                    class: "text-xl text-primary-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}><h3 class="text-lg font-black text-gray-900 dark:text-white"${_scopeId2}>Confirm Purchase</h3><p class="text-xs text-gray-500"${_scopeId2}>Subscription locked to your device</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode("div", { class: "w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-credit-card",
                          class: "text-xl text-primary-500"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-lg font-black text-gray-900 dark:text-white" }, "Confirm Purchase"),
                        createVNode("p", { class: "text-xs text-gray-500" }, "Subscription locked to your device")
                      ])
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    class: "flex-1 rounded-xl",
                    onClick: ($event) => showConfirmModal.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Cancel `);
                      } else {
                        return [
                          createTextVNode(" Cancel ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "primary",
                    class: "flex-1 rounded-xl font-black",
                    loading: unref(confirmingPurchase),
                    onClick: confirmPurchase
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Confirm &amp; Pay ₹${ssrInterpolate(unref(selectedPlanDetails)?.price?.toLocaleString("en-IN"))}`);
                      } else {
                        return [
                          createTextVNode(" Confirm & Pay ₹" + toDisplayString(unref(selectedPlanDetails)?.price?.toLocaleString("en-IN")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex gap-3" }, [
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "ghost",
                        class: "flex-1 rounded-xl",
                        onClick: ($event) => showConfirmModal.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        color: "primary",
                        class: "flex-1 rounded-xl font-black",
                        loading: unref(confirmingPurchase),
                        onClick: confirmPurchase
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Confirm & Pay ₹" + toDisplayString(unref(selectedPlanDetails)?.price?.toLocaleString("en-IN")), 1)
                        ]),
                        _: 2
                      }, 1032, ["loading"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-4"${_scopeId2}><div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700"${_scopeId2}><div class="flex justify-between items-center mb-2"${_scopeId2}><span class="text-sm font-bold text-gray-600 dark:text-gray-300"${_scopeId2}>Plan</span><span class="text-sm font-black text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(unref(selectedPlanDetails)?.name)}</span></div><div class="flex justify-between items-center mb-2"${_scopeId2}><span class="text-sm font-bold text-gray-600 dark:text-gray-300"${_scopeId2}>Price</span><span class="text-xl font-black text-primary-500"${_scopeId2}>₹${ssrInterpolate(unref(selectedPlanDetails)?.price?.toLocaleString("en-IN"))}</span></div><div class="flex justify-between items-center"${_scopeId2}><span class="text-sm font-bold text-gray-600 dark:text-gray-300"${_scopeId2}>Device Bound</span><span class="text-xs font-mono text-gray-500"${_scopeId2}>${ssrInterpolate(unref(maskedDeviceId))}</span></div></div><div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800"${_scopeId2}><p class="text-xs text-amber-700 dark:text-amber-400 flex items-start gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-exclamation-triangle",
                    class: "flex-shrink-0 mt-0.5"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>This subscription will be permanently bound to your current device. It cannot be transferred to another device without contacting support.</span></p></div>`);
                  if (unref(purchaseError)) {
                    _push3(`<div class="p-3 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800"${_scopeId2}><p class="text-xs text-red-600 dark:text-red-400 flex items-start gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "i-heroicons-x-circle",
                      class: "flex-shrink-0 mt-0.5"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span${_scopeId2}>${ssrInterpolate(unref(purchaseError))}</span></p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700" }, [
                        createVNode("div", { class: "flex justify-between items-center mb-2" }, [
                          createVNode("span", { class: "text-sm font-bold text-gray-600 dark:text-gray-300" }, "Plan"),
                          createVNode("span", { class: "text-sm font-black text-gray-900 dark:text-white" }, toDisplayString(unref(selectedPlanDetails)?.name), 1)
                        ]),
                        createVNode("div", { class: "flex justify-between items-center mb-2" }, [
                          createVNode("span", { class: "text-sm font-bold text-gray-600 dark:text-gray-300" }, "Price"),
                          createVNode("span", { class: "text-xl font-black text-primary-500" }, "₹" + toDisplayString(unref(selectedPlanDetails)?.price?.toLocaleString("en-IN")), 1)
                        ]),
                        createVNode("div", { class: "flex justify-between items-center" }, [
                          createVNode("span", { class: "text-sm font-bold text-gray-600 dark:text-gray-300" }, "Device Bound"),
                          createVNode("span", { class: "text-xs font-mono text-gray-500" }, toDisplayString(unref(maskedDeviceId)), 1)
                        ])
                      ]),
                      createVNode("div", { class: "p-3 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800" }, [
                        createVNode("p", { class: "text-xs text-amber-700 dark:text-amber-400 flex items-start gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-exclamation-triangle",
                            class: "flex-shrink-0 mt-0.5"
                          }),
                          createVNode("span", null, "This subscription will be permanently bound to your current device. It cannot be transferred to another device without contacting support.")
                        ])
                      ]),
                      unref(purchaseError) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "p-3 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800"
                      }, [
                        createVNode("p", { class: "text-xs text-red-600 dark:text-red-400 flex items-start gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-x-circle",
                            class: "flex-shrink-0 mt-0.5"
                          }),
                          createVNode("span", null, toDisplayString(unref(purchaseError)), 1)
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { class: "rounded-2xl" }, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex items-center gap-3" }, [
                    createVNode("div", { class: "w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-credit-card",
                        class: "text-xl text-primary-500"
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-lg font-black text-gray-900 dark:text-white" }, "Confirm Purchase"),
                      createVNode("p", { class: "text-xs text-gray-500" }, "Subscription locked to your device")
                    ])
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode("div", { class: "flex gap-3" }, [
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      class: "flex-1 rounded-xl",
                      onClick: ($event) => showConfirmModal.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Cancel ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      color: "primary",
                      class: "flex-1 rounded-xl font-black",
                      loading: unref(confirmingPurchase),
                      onClick: confirmPurchase
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Confirm & Pay ₹" + toDisplayString(unref(selectedPlanDetails)?.price?.toLocaleString("en-IN")), 1)
                      ]),
                      _: 2
                    }, 1032, ["loading"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode("div", { class: "p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700" }, [
                      createVNode("div", { class: "flex justify-between items-center mb-2" }, [
                        createVNode("span", { class: "text-sm font-bold text-gray-600 dark:text-gray-300" }, "Plan"),
                        createVNode("span", { class: "text-sm font-black text-gray-900 dark:text-white" }, toDisplayString(unref(selectedPlanDetails)?.name), 1)
                      ]),
                      createVNode("div", { class: "flex justify-between items-center mb-2" }, [
                        createVNode("span", { class: "text-sm font-bold text-gray-600 dark:text-gray-300" }, "Price"),
                        createVNode("span", { class: "text-xl font-black text-primary-500" }, "₹" + toDisplayString(unref(selectedPlanDetails)?.price?.toLocaleString("en-IN")), 1)
                      ]),
                      createVNode("div", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-sm font-bold text-gray-600 dark:text-gray-300" }, "Device Bound"),
                        createVNode("span", { class: "text-xs font-mono text-gray-500" }, toDisplayString(unref(maskedDeviceId)), 1)
                      ])
                    ]),
                    createVNode("div", { class: "p-3 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800" }, [
                      createVNode("p", { class: "text-xs text-amber-700 dark:text-amber-400 flex items-start gap-2" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-exclamation-triangle",
                          class: "flex-shrink-0 mt-0.5"
                        }),
                        createVNode("span", null, "This subscription will be permanently bound to your current device. It cannot be transferred to another device without contacting support.")
                      ])
                    ]),
                    unref(purchaseError) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "p-3 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800"
                    }, [
                      createVNode("p", { class: "text-xs text-red-600 dark:text-red-400 flex items-start gap-2" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-x-circle",
                          class: "flex-shrink-0 mt-0.5"
                        }),
                        createVNode("span", null, toDisplayString(unref(purchaseError)), 1)
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(showSuccessModal),
        "onUpdate:modelValue": ($event) => isRef(showSuccessModal) ? showSuccessModal.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { class: "rounded-2xl text-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="py-6"${_scopeId2}><div class="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-check-circle",
                    class: "text-4xl text-green-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><h3 class="text-2xl font-black text-gray-900 dark:text-white mb-2"${_scopeId2}>Purchase Successful!</h3><p class="text-sm text-gray-500 mb-6"${_scopeId2}> Your <strong${_scopeId2}>${ssrInterpolate(unref(selectedPlanDetails)?.name)}</strong> plan is now active and bound to this device. </p>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "primary",
                    size: "lg",
                    class: "rounded-xl font-black px-8",
                    to: "/dashboard"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Go to Dashboard `);
                      } else {
                        return [
                          createTextVNode(" Go to Dashboard ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "py-6" }, [
                      createVNode("div", { class: "w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-check-circle",
                          class: "text-4xl text-green-500"
                        })
                      ]),
                      createVNode("h3", { class: "text-2xl font-black text-gray-900 dark:text-white mb-2" }, "Purchase Successful!"),
                      createVNode("p", { class: "text-sm text-gray-500 mb-6" }, [
                        createTextVNode(" Your "),
                        createVNode("strong", null, toDisplayString(unref(selectedPlanDetails)?.name), 1),
                        createTextVNode(" plan is now active and bound to this device. ")
                      ]),
                      createVNode(_component_UButton, {
                        color: "primary",
                        size: "lg",
                        class: "rounded-xl font-black px-8",
                        to: "/dashboard"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Go to Dashboard ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { class: "rounded-2xl text-center" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "py-6" }, [
                    createVNode("div", { class: "w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "text-4xl text-green-500"
                      })
                    ]),
                    createVNode("h3", { class: "text-2xl font-black text-gray-900 dark:text-white mb-2" }, "Purchase Successful!"),
                    createVNode("p", { class: "text-sm text-gray-500 mb-6" }, [
                      createTextVNode(" Your "),
                      createVNode("strong", null, toDisplayString(unref(selectedPlanDetails)?.name), 1),
                      createTextVNode(" plan is now active and bound to this device. ")
                    ]),
                    createVNode(_component_UButton, {
                      color: "primary",
                      size: "lg",
                      class: "rounded-xl font-black px-8",
                      to: "/dashboard"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Go to Dashboard ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=pricing-B0NDyEix.js.map
