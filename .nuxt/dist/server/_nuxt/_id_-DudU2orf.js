import __nuxt_component_0 from "./Container-BN6VrUpB.js";
import { e as _export_sfc, u as useAuth, _ as __nuxt_component_2, b as __nuxt_component_3 } from "../server.mjs";
import __nuxt_component_2$1 from "./Card-CgPQDjgh.js";
import __nuxt_component_4 from "./Input-CZAMts_N.js";
import __nuxt_component_6 from "./Toggle-CA1O4bV-.js";
import __nuxt_component_5 from "./Progress-Bp2H55JY.js";
import { ref, computed, withAsyncContext, watchEffect, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, createCommentVNode, renderList, Transition, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { u as useFetch } from "./fetch-Dtzn_qiz.js";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/hookable/dist/index.mjs";
import "tailwind-merge";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/unctx/dist/index.mjs";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/h3/dist/index.mjs";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/ufo/dist/index.mjs";
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
import "./useFormGroup-DqE91r20.js";
import "./form-DsUILy5F.js";
import "./keyboard-BCt0ZeLv.js";
import "./use-resolve-button-type-CCTzT7JK.js";
import "./hidden-e5tlhUcy.js";
import "./description-CG6lMCGz.js";
import "@vue/shared";
const useExam = (examId) => {
  const questions = ref([]);
  const currentIndex = ref(0);
  const currentQuestion = computed(() => questions.value[currentIndex.value]);
  const answers = ref({});
  const isFinished = ref(false);
  const score = ref(0);
  const sessionId = ref(null);
  const loadQuestions = async (options = { shuffle: false }) => {
    try {
      const data = await $fetch(`/api/exams/${examId}/questions`, {
        params: options
      });
      questions.value = data;
    } catch (error) {
      console.error("Failed to load questions:", error);
      throw error;
    }
  };
  const startSession = async (userId, mode = "practice") => {
    try {
      const session = await $fetch("/api/sessions", {
        method: "POST",
        body: { examId, userId, mode }
      });
      sessionId.value = session.id;
    } catch (error) {
      console.error("Failed to start session:", error);
      throw error;
    }
  };
  const submitAnswer = (questionId, optionIndex) => {
    answers.value[questionId] = optionIndex;
  };
  const nextQuestion = () => {
    if (currentIndex.value < questions.value.length - 1) {
      currentIndex.value++;
    }
  };
  const prevQuestion = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--;
    }
  };
  const finishExam = async (passingScore = 70) => {
    if (questions.value.length === 0) return;
    let correctCount = 0;
    questions.value.forEach((q) => {
      if (answers.value[q.id] === q.answer) {
        correctCount++;
      }
    });
    score.value = correctCount / questions.value.length * 100;
    const passed = score.value >= passingScore;
    isFinished.value = true;
    if (sessionId.value) {
      try {
        await $fetch(`/api/sessions/${sessionId.value}`, {
          method: "PATCH",
          body: {
            score: score.value,
            passed
          }
        });
      } catch (error) {
        console.error("Failed to update session:", error);
      }
    }
  };
  return {
    questions,
    currentIndex,
    currentQuestion,
    answers,
    isFinished,
    score,
    loadQuestions,
    startSession,
    submitAnswer,
    nextQuestion,
    prevQuestion,
    finishExam
  };
};
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = (() => {
  console.error(intervalError);
});
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { status, data: authData } = useAuth();
    const user = computed(() => authData.value?.user);
    const route = useRoute();
    const examId = route.params.id;
    const isStarted = ref(false);
    const isStarting = ref(false);
    const sessionMode = ref(route.query.mode || "practice");
    const selectionType = ref("count");
    const questionLimit = ref("All");
    const rangeStart = ref(1);
    const rangeEnd = ref(10);
    const shouldShuffle = ref(true);
    const showAllResults = ref(false);
    const visibleCount = ref(10);
    const timeLeft = ref(0);
    const timerInterval = ref(null);
    const formattedTime = computed(() => {
      const minutes = Math.floor(timeLeft.value / 60);
      const seconds = timeLeft.value % 60;
      return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    });
    const timerUrgencyClass = computed(() => {
      if (timeLeft.value < 60) return "text-red-500 animate-pulse";
      if (timeLeft.value < 300) return "text-orange-500";
      return "text-primary-600";
    });
    const {
      questions,
      currentIndex,
      currentQuestion,
      answers,
      isFinished,
      score,
      loadQuestions,
      startSession,
      submitAnswer,
      nextQuestion,
      prevQuestion,
      finishExam
    } = useExam(examId);
    const visibleQuestions = computed(() => {
      return showAllResults.value ? questions.value : questions.value.slice(0, visibleCount.value);
    });
    const autoAdvanceTimeout = ref(null);
    const { data: examData, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `/api/exams/${examId}`,
      {
        lazy: false,
        server: true
      },
      "$vJNcmTGsQC"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const exam = computed(() => examData.value);
    watchEffect(() => {
      if (examData.value?.totalQuestions) {
        rangeEnd.value = examData.value.totalQuestions;
      }
    });
    const startExamSession = async () => {
      if (isStarting.value) return;
      isStarting.value = true;
      try {
        let limit = null;
        let offset = 0;
        let shuffle = shouldShuffle.value;
        if (selectionType.value === "range") {
          offset = Math.max(0, rangeStart.value - 1);
          limit = Math.max(1, rangeEnd.value - offset);
          shuffle = false;
        } else {
          if (questionLimit.value !== "All") {
            limit = parseInt(questionLimit.value);
          }
        }
        await loadQuestions({ shuffle, limit, offset });
        await startSession("dummy-user-1234-5678", sessionMode.value);
        if (sessionMode.value === "mock") {
          timeLeft.value = questions.value.length * 90;
          timerInterval.value = setInterval(() => {
            if (timeLeft.value > 0) {
              timeLeft.value--;
            } else {
              handleFinish();
            }
          }, 1e3);
        }
        isStarted.value = true;
        (void 0).scrollTo({ top: 0, behavior: "smooth" });
      } catch (err) {
        console.error("Failed to start session:", err);
      } finally {
        isStarting.value = false;
      }
    };
    const handleAnswerSelection = (id, index) => {
      if (sessionMode.value === "practice" && answers.value[id] !== void 0) return;
      submitAnswer(id, index);
      if (sessionMode.value === "practice" && index === currentQuestion.value.answer) {
        autoAdvanceTimeout.value = setTimeout(() => {
          if (currentIndex.value < questions.value.length - 1) {
            handleNext();
          }
        }, 2e3);
      }
    };
    const handleNext = () => {
      if (autoAdvanceTimeout.value) clearTimeout(autoAdvanceTimeout.value);
      nextQuestion();
      (void 0).scrollTo({ top: 0, behavior: "smooth" });
    };
    const handlePrev = () => {
      if (autoAdvanceTimeout.value) clearTimeout(autoAdvanceTimeout.value);
      prevQuestion();
      (void 0).scrollTo({ top: 0, behavior: "smooth" });
    };
    const handleFinish = async () => {
      if (timerInterval.value) clearInterval(timerInterval.value);
      await finishExam();
    };
    const restartExam = () => {
      isFinished.value = false;
      isStarted.value = false;
      showAllResults.value = false;
      answers.value = {};
      currentIndex.value = 0;
      score.value = 0;
      (void 0).scrollTo({ top: 0, behavior: "smooth" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0;
      const _component_UIcon = __nuxt_component_2;
      const _component_UButton = __nuxt_component_3;
      const _component_UCard = __nuxt_component_2$1;
      const _component_UInput = __nuxt_component_4;
      const _component_UToggle = __nuxt_component_6;
      const _component_UProgress = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-8" }, _attrs))} data-v-e0ed170e>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(pending)) {
              _push2(`<div class="flex flex-col justify-center items-center h-[60vh]" data-v-e0ed170e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-arrow-path",
                class: "animate-spin text-5xl text-primary-500 mb-4"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-gray-500 font-medium animate-pulse" data-v-e0ed170e${_scopeId}>Preparing your session...</p></div>`);
            } else if (unref(error)) {
              _push2(`<div class="max-w-md mx-auto text-center py-20" data-v-e0ed170e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-exclamation-triangle",
                class: "text-6xl text-red-500 mb-4"
              }, null, _parent2, _scopeId));
              _push2(`<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2" data-v-e0ed170e${_scopeId}>Oops! Something went wrong</h2><p class="text-gray-500 mb-6" data-v-e0ed170e${_scopeId}>${ssrInterpolate(unref(error).message || "We couldn't load your exam. Please try again.")}</p>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "gray",
                variant: "ghost",
                to: "/dashboard",
                icon: "i-heroicons-arrow-left"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Back to Dashboard`);
                  } else {
                    return [
                      createTextVNode("Back to Dashboard")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (!isStarted.value) {
              _push2(`<div class="max-w-xl mx-auto" data-v-e0ed170e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UCard, { class: "shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800 rounded-3xl overflow-hidden border-none p-0" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="h-40 bg-gradient-to-br from-primary-500 via-primary-600 to-blue-700 p-8 text-white relative" data-v-e0ed170e${_scopeId2}><div class="relative z-10 pt-2" data-v-e0ed170e${_scopeId2}><h1 class="text-3xl font-black tracking-tight leading-tight mb-1" data-v-e0ed170e${_scopeId2}>${ssrInterpolate(exam.value?.title)}</h1><div class="flex items-center gap-2 text-white/80 text-sm font-semibold" data-v-e0ed170e${_scopeId2}><span class="bg-white/20 px-2 py-0.5 rounded uppercase" data-v-e0ed170e${_scopeId2}>${ssrInterpolate(exam.value?.certificationCode)}</span><span data-v-e0ed170e${_scopeId2}>•</span><span data-v-e0ed170e${_scopeId2}>${ssrInterpolate(exam.value?.totalQuestions)} Questions Available</span>`);
                    if (unref(status) === "authenticated" && user.value?.plan === "FREE") {
                      _push3(`<!--[--><span data-v-e0ed170e${_scopeId2}>•</span><span class="bg-amber-500/30 text-amber-100 px-2 py-0.5 rounded flex items-center gap-1" data-v-e0ed170e${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-sparkles" }, null, _parent3, _scopeId2));
                      _push3(` Free Sample Mode </span><!--]-->`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "i-heroicons-academic-cap",
                      class: "absolute right-[-10px] top-[-10px] text-[160px] text-white/10 rotate-12 pointer-events-none"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="p-8 space-y-8" data-v-e0ed170e${_scopeId2}><div data-v-e0ed170e${_scopeId2}><p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1" data-v-e0ed170e${_scopeId2}>Session Mode</p><div class="flex p-1.5 bg-gray-100 dark:bg-gray-800/50 rounded-2xl" data-v-e0ed170e${_scopeId2}><button class="${ssrRenderClass([sessionMode.value === "practice" ? "bg-white dark:bg-gray-700 shadow-md text-primary-600 scale-[1.02] ring-1 ring-black/5" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300", "flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl transition-all duration-300"])}" data-v-e0ed170e${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "i-heroicons-academic-cap",
                      class: "text-lg"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="font-bold" data-v-e0ed170e${_scopeId2}>Practice</span></button><button class="${ssrRenderClass([sessionMode.value === "mock" ? "bg-white dark:bg-gray-700 shadow-md text-primary-600 scale-[1.02] ring-1 ring-black/5" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300", "flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl transition-all duration-300"])}" data-v-e0ed170e${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "i-heroicons-clock",
                      class: "text-lg"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="font-bold" data-v-e0ed170e${_scopeId2}>Mock Exam</span></button></div></div><div data-v-e0ed170e${_scopeId2}><p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1" data-v-e0ed170e${_scopeId2}>Session Length</p><div class="flex flex-wrap gap-2" data-v-e0ed170e${_scopeId2}><!--[-->`);
                    ssrRenderList([5, 10, 25, 50, "All"], (count) => {
                      _push3(`<button class="${ssrRenderClass([selectionType.value === "count" && questionLimit.value === count ? "bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/30" : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-primary-200", "px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 border-2"])}" data-v-e0ed170e${_scopeId2}>${ssrInterpolate(count)}</button>`);
                    });
                    _push3(`<!--]--><button class="${ssrRenderClass([selectionType.value === "range" ? "bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/30" : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-primary-200", "px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 border-2 inline-flex items-center gap-2"])}" data-v-e0ed170e${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-adjustments-horizontal" }, null, _parent3, _scopeId2));
                    _push3(` Range </button></div>`);
                    if (selectionType.value === "range") {
                      _push3(`<div class="mt-4 p-5 bg-primary-50/50 dark:bg-primary-900/10 rounded-2xl border-2 border-dashed border-primary-200 dark:border-primary-800" data-v-e0ed170e${_scopeId2}><div class="flex items-center gap-4" data-v-e0ed170e${_scopeId2}><div class="flex-1" data-v-e0ed170e${_scopeId2}><p class="text-[10px] font-bold text-primary-600 dark:text-primary-400 mb-1 ml-1" data-v-e0ed170e${_scopeId2}>FROM #</p>`);
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: rangeStart.value,
                        "onUpdate:modelValue": ($event) => rangeStart.value = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        size: "md",
                        variant: "outline",
                        color: "white",
                        class: "rounded-lg",
                        ui: { input: "text-black font-black text-lg bg-white" }
                      }, null, _parent3, _scopeId2));
                      _push3(`</div><div class="pt-5 text-primary-300 font-bold" data-v-e0ed170e${_scopeId2}>→</div><div class="flex-1" data-v-e0ed170e${_scopeId2}><p class="text-[10px] font-bold text-primary-600 dark:text-primary-400 mb-1 ml-1" data-v-e0ed170e${_scopeId2}>TO #</p>`);
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: rangeEnd.value,
                        "onUpdate:modelValue": ($event) => rangeEnd.value = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        size: "md",
                        variant: "outline",
                        color: "white",
                        class: "rounded-lg",
                        ui: { input: "text-black font-black text-lg bg-white" }
                      }, null, _parent3, _scopeId2));
                      _push3(`</div></div><p class="text-[10px] text-primary-500 mt-3 font-medium flex items-center gap-1" data-v-e0ed170e${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-information-circle" }, null, _parent3, _scopeId2));
                      _push3(` Sequential order (shuffle disabled) </p></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/30 rounded-2xl" data-v-e0ed170e${_scopeId2}><div class="flex items-center gap-3" data-v-e0ed170e${_scopeId2}><div class="w-10 h-10 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-sm" data-v-e0ed170e${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "i-heroicons-arrows-right-left",
                      class: "text-gray-500"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div data-v-e0ed170e${_scopeId2}><p class="font-bold text-sm text-gray-800 dark:text-gray-200" data-v-e0ed170e${_scopeId2}>Shuffle Questions</p><p class="text-[10px] text-gray-400" data-v-e0ed170e${_scopeId2}>Randomized for every new attempt</p></div></div>`);
                    _push3(ssrRenderComponent(_component_UToggle, {
                      modelValue: shouldShuffle.value,
                      "onUpdate:modelValue": ($event) => shouldShuffle.value = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                    if (exam.value?.totalQuestions === 0) {
                      _push3(`<div class="p-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900 rounded-2xl flex items-start gap-3" data-v-e0ed170e${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "i-heroicons-exclamation-circle",
                        class: "text-orange-500 text-xl flex-shrink-0 mt-0.5"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div data-v-e0ed170e${_scopeId2}><p class="text-sm font-bold text-orange-800 dark:text-orange-400" data-v-e0ed170e${_scopeId2}>Study Material Pending</p><p class="text-xs text-orange-700/70 dark:text-orange-500/70" data-v-e0ed170e${_scopeId2}>Our AI is still forging the questions for this certification. Please check back later!</p></div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_UButton, {
                      block: "",
                      size: "xl",
                      color: "primary",
                      disabled: exam.value?.totalQuestions === 0,
                      loading: isStarting.value,
                      class: "rounded-2xl h-16 text-xl font-black shadow-primary-500/25 shadow-2xl hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed",
                      icon: exam.value?.totalQuestions === 0 ? "i-heroicons-lock-closed" : "i-heroicons-play",
                      onClick: startExamSession
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(exam.value?.totalQuestions === 0 ? "Questions Locked" : "Start Session")}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(exam.value?.totalQuestions === 0 ? "Questions Locked" : "Start Session"), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "h-40 bg-gradient-to-br from-primary-500 via-primary-600 to-blue-700 p-8 text-white relative" }, [
                        createVNode("div", { class: "relative z-10 pt-2" }, [
                          createVNode("h1", { class: "text-3xl font-black tracking-tight leading-tight mb-1" }, toDisplayString(exam.value?.title), 1),
                          createVNode("div", { class: "flex items-center gap-2 text-white/80 text-sm font-semibold" }, [
                            createVNode("span", { class: "bg-white/20 px-2 py-0.5 rounded uppercase" }, toDisplayString(exam.value?.certificationCode), 1),
                            createVNode("span", null, "•"),
                            createVNode("span", null, toDisplayString(exam.value?.totalQuestions) + " Questions Available", 1),
                            unref(status) === "authenticated" && user.value?.plan === "FREE" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createVNode("span", null, "•"),
                              createVNode("span", { class: "bg-amber-500/30 text-amber-100 px-2 py-0.5 rounded flex items-center gap-1" }, [
                                createVNode(_component_UIcon, { name: "i-heroicons-sparkles" }),
                                createTextVNode(" Free Sample Mode ")
                              ])
                            ], 64)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-academic-cap",
                          class: "absolute right-[-10px] top-[-10px] text-[160px] text-white/10 rotate-12 pointer-events-none"
                        })
                      ]),
                      createVNode("div", { class: "p-8 space-y-8" }, [
                        createVNode("div", null, [
                          createVNode("p", { class: "text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1" }, "Session Mode"),
                          createVNode("div", { class: "flex p-1.5 bg-gray-100 dark:bg-gray-800/50 rounded-2xl" }, [
                            createVNode("button", {
                              onClick: ($event) => sessionMode.value = "practice",
                              class: ["flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl transition-all duration-300", sessionMode.value === "practice" ? "bg-white dark:bg-gray-700 shadow-md text-primary-600 scale-[1.02] ring-1 ring-black/5" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"]
                            }, [
                              createVNode(_component_UIcon, {
                                name: "i-heroicons-academic-cap",
                                class: "text-lg"
                              }),
                              createVNode("span", { class: "font-bold" }, "Practice")
                            ], 10, ["onClick"]),
                            createVNode("button", {
                              onClick: ($event) => sessionMode.value = "mock",
                              class: ["flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl transition-all duration-300", sessionMode.value === "mock" ? "bg-white dark:bg-gray-700 shadow-md text-primary-600 scale-[1.02] ring-1 ring-black/5" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"]
                            }, [
                              createVNode(_component_UIcon, {
                                name: "i-heroicons-clock",
                                class: "text-lg"
                              }),
                              createVNode("span", { class: "font-bold" }, "Mock Exam")
                            ], 10, ["onClick"])
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("p", { class: "text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1" }, "Session Length"),
                          createVNode("div", { class: "flex flex-wrap gap-2" }, [
                            (openBlock(), createBlock(Fragment, null, renderList([5, 10, 25, 50, "All"], (count) => {
                              return createVNode("button", {
                                key: count,
                                onClick: ($event) => {
                                  selectionType.value = "count";
                                  questionLimit.value = count;
                                },
                                class: ["px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 border-2", selectionType.value === "count" && questionLimit.value === count ? "bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/30" : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-primary-200"]
                              }, toDisplayString(count), 11, ["onClick"]);
                            }), 64)),
                            createVNode("button", {
                              onClick: ($event) => selectionType.value = "range",
                              class: ["px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 border-2 inline-flex items-center gap-2", selectionType.value === "range" ? "bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/30" : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-primary-200"]
                            }, [
                              createVNode(_component_UIcon, { name: "i-heroicons-adjustments-horizontal" }),
                              createTextVNode(" Range ")
                            ], 10, ["onClick"])
                          ]),
                          createVNode(Transition, { name: "slide-down" }, {
                            default: withCtx(() => [
                              selectionType.value === "range" ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "mt-4 p-5 bg-primary-50/50 dark:bg-primary-900/10 rounded-2xl border-2 border-dashed border-primary-200 dark:border-primary-800"
                              }, [
                                createVNode("div", { class: "flex items-center gap-4" }, [
                                  createVNode("div", { class: "flex-1" }, [
                                    createVNode("p", { class: "text-[10px] font-bold text-primary-600 dark:text-primary-400 mb-1 ml-1" }, "FROM #"),
                                    createVNode(_component_UInput, {
                                      modelValue: rangeStart.value,
                                      "onUpdate:modelValue": ($event) => rangeStart.value = $event,
                                      modelModifiers: { number: true },
                                      type: "number",
                                      size: "md",
                                      variant: "outline",
                                      color: "white",
                                      class: "rounded-lg",
                                      ui: { input: "text-black font-black text-lg bg-white" }
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "pt-5 text-primary-300 font-bold" }, "→"),
                                  createVNode("div", { class: "flex-1" }, [
                                    createVNode("p", { class: "text-[10px] font-bold text-primary-600 dark:text-primary-400 mb-1 ml-1" }, "TO #"),
                                    createVNode(_component_UInput, {
                                      modelValue: rangeEnd.value,
                                      "onUpdate:modelValue": ($event) => rangeEnd.value = $event,
                                      modelModifiers: { number: true },
                                      type: "number",
                                      size: "md",
                                      variant: "outline",
                                      color: "white",
                                      class: "rounded-lg",
                                      ui: { input: "text-black font-black text-lg bg-white" }
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("p", { class: "text-[10px] text-primary-500 mt-3 font-medium flex items-center gap-1" }, [
                                  createVNode(_component_UIcon, { name: "i-heroicons-information-circle" }),
                                  createTextVNode(" Sequential order (shuffle disabled) ")
                                ])
                              ])) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/30 rounded-2xl" }, [
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode("div", { class: "w-10 h-10 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-sm" }, [
                              createVNode(_component_UIcon, {
                                name: "i-heroicons-arrows-right-left",
                                class: "text-gray-500"
                              })
                            ]),
                            createVNode("div", null, [
                              createVNode("p", { class: "font-bold text-sm text-gray-800 dark:text-gray-200" }, "Shuffle Questions"),
                              createVNode("p", { class: "text-[10px] text-gray-400" }, "Randomized for every new attempt")
                            ])
                          ]),
                          createVNode(_component_UToggle, {
                            modelValue: shouldShuffle.value,
                            "onUpdate:modelValue": ($event) => shouldShuffle.value = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        exam.value?.totalQuestions === 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "p-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900 rounded-2xl flex items-start gap-3"
                        }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-exclamation-circle",
                            class: "text-orange-500 text-xl flex-shrink-0 mt-0.5"
                          }),
                          createVNode("div", null, [
                            createVNode("p", { class: "text-sm font-bold text-orange-800 dark:text-orange-400" }, "Study Material Pending"),
                            createVNode("p", { class: "text-xs text-orange-700/70 dark:text-orange-500/70" }, "Our AI is still forging the questions for this certification. Please check back later!")
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode(_component_UButton, {
                          block: "",
                          size: "xl",
                          color: "primary",
                          disabled: exam.value?.totalQuestions === 0,
                          loading: isStarting.value,
                          class: "rounded-2xl h-16 text-xl font-black shadow-primary-500/25 shadow-2xl hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed",
                          icon: exam.value?.totalQuestions === 0 ? "i-heroicons-lock-closed" : "i-heroicons-play",
                          onClick: startExamSession
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(exam.value?.totalQuestions === 0 ? "Questions Locked" : "Start Session"), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled", "loading", "icon"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (!unref(isFinished) && unref(currentQuestion)) {
              _push2(`<div data-v-e0ed170e${_scopeId}><div class="mb-8 max-w-3xl mx-auto" data-v-e0ed170e${_scopeId}><div class="flex justify-between items-end mb-4" data-v-e0ed170e${_scopeId}><div data-v-e0ed170e${_scopeId}><p class="text-xs font-black text-primary-500 uppercase tracking-widest mb-1" data-v-e0ed170e${_scopeId}>${ssrInterpolate(sessionMode.value === "mock" ? "🔥 Mock Exam Mode" : "🎓 Practice Session")}</p><h2 class="text-3xl font-black text-gray-900 dark:text-white" data-v-e0ed170e${_scopeId}> Question <span class="text-primary-500" data-v-e0ed170e${_scopeId}>${ssrInterpolate(unref(currentIndex) + 1)}</span> <span class="text-gray-300 dark:text-gray-700 font-light" data-v-e0ed170e${_scopeId}>of</span> ${ssrInterpolate(unref(questions).length)}</h2></div>`);
              if (sessionMode.value === "mock") {
                _push2(`<div class="flex flex-col items-end" data-v-e0ed170e${_scopeId}><div class="${ssrRenderClass([timeLeft.value < 60 ? "border-red-500/50" : "border-gray-100", "px-4 py-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-gray-100 dark:border-gray-800 flex items-center gap-3 transition-colors duration-500"])}" data-v-e0ed170e${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "i-heroicons-clock",
                  class: [timerUrgencyClass.value, "text-2xl"]
                }, null, _parent2, _scopeId));
                _push2(`<span class="${ssrRenderClass([timerUrgencyClass.value, "font-black text-2xl tabular-nums tracking-tighter"])}" data-v-e0ed170e${_scopeId}>${ssrInterpolate(formattedTime.value)}</span></div><p class="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-tighter" data-v-e0ed170e${_scopeId}>Time Remaining</p></div>`);
              } else {
                _push2(`<div class="text-right" data-v-e0ed170e${_scopeId}><span class="text-sm font-bold text-gray-400" data-v-e0ed170e${_scopeId}>${ssrInterpolate(Math.round(unref(currentIndex) / unref(questions).length * 100))}% Complete</span></div>`);
              }
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UProgress, {
                value: unref(currentIndex) / unref(questions).length * 100,
                color: "primary",
                size: "md",
                class: "rounded-full shadow-inner"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="max-w-3xl mx-auto space-y-6" data-v-e0ed170e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UCard, { class: "shadow-xl rounded-3xl border-none ring-1 ring-gray-200 dark:ring-gray-800" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-xl leading-relaxed text-gray-800 dark:text-gray-100 mb-8 font-semibold whitespace-pre-wrap" data-v-e0ed170e${_scopeId2}>${ssrInterpolate(unref(currentQuestion).question)}</div><div class="space-y-4" data-v-e0ed170e${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(currentQuestion).options, (option, index) => {
                      _push3(`<div class="${ssrRenderClass([
                        "p-5 border-2 rounded-2xl transition-all duration-300 relative overflow-hidden group",
                        // Interaction styling
                        unref(answers)[unref(currentQuestion).id] === void 0 ? "border-gray-100 dark:border-gray-800 hover:border-primary-400 dark:hover:border-primary-600 cursor-pointer bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl hover:scale-[1.01]" : "",
                        // Result styling
                        unref(answers)[unref(currentQuestion).id] !== void 0 ? sessionMode.value === "practice" ? index === unref(currentQuestion).answer ? "border-green-500 bg-green-50 dark:bg-green-900/20" : unref(answers)[unref(currentQuestion).id] === index ? "border-red-500 bg-red-50 dark:bg-red-900/20" : "border-transparent opacity-40 grayscale-[0.5]" : unref(answers)[unref(currentQuestion).id] === index ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20" : "border-transparent opacity-40" : ""
                      ])}" data-v-e0ed170e${_scopeId2}><div class="flex items-center relative z-10" data-v-e0ed170e${_scopeId2}><div class="${ssrRenderClass([[
                        unref(answers)[unref(currentQuestion).id] === void 0 ? "border-gray-200 text-gray-400 group-hover:border-primary-400 group-hover:text-primary-500" : "",
                        unref(answers)[unref(currentQuestion).id] !== void 0 ? sessionMode.value === "practice" ? index === unref(currentQuestion).answer ? "border-green-500 bg-green-500 text-white rotate-[360deg]" : unref(answers)[unref(currentQuestion).id] === index ? "border-red-500 bg-red-500 text-white" : "border-gray-200 text-gray-300" : unref(answers)[unref(currentQuestion).id] === index ? "border-primary-500 bg-primary-500 text-white" : "border-gray-200 text-gray-300" : ""
                      ], "w-12 h-12 rounded-xl border-2 flex items-center justify-center mr-5 transition-all duration-300 font-black text-lg"])}" data-v-e0ed170e${_scopeId2}>`);
                      if (unref(answers)[unref(currentQuestion).id] !== void 0 && sessionMode.value === "practice") {
                        _push3(`<!--[-->`);
                        if (index === unref(currentQuestion).answer) {
                          _push3(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-check" }, null, _parent3, _scopeId2));
                        } else if (unref(answers)[unref(currentQuestion).id] === index) {
                          _push3(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-x-mark" }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<span data-v-e0ed170e${_scopeId2}>${ssrInterpolate(String.fromCharCode(65 + index))}</span>`);
                        }
                        _push3(`<!--]-->`);
                      } else {
                        _push3(`<!--[-->${ssrInterpolate(String.fromCharCode(65 + index))}<!--]-->`);
                      }
                      _push3(`</div><span class="flex-1 text-gray-700 dark:text-gray-200 font-bold text-lg leading-snug" data-v-e0ed170e${_scopeId2}>${ssrInterpolate(option)}</span></div>`);
                      if (unref(answers)[unref(currentQuestion).id] === index) {
                        _push3(`<div class="absolute inset-0 bg-primary-500/5 dark:bg-primary-400/5 pointer-events-none" data-v-e0ed170e${_scopeId2}></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-xl leading-relaxed text-gray-800 dark:text-gray-100 mb-8 font-semibold whitespace-pre-wrap" }, toDisplayString(unref(currentQuestion).question), 1),
                      createVNode("div", { class: "space-y-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(currentQuestion).options, (option, index) => {
                          return openBlock(), createBlock("div", {
                            key: index,
                            onClick: ($event) => handleAnswerSelection(unref(currentQuestion).id, index),
                            class: [
                              "p-5 border-2 rounded-2xl transition-all duration-300 relative overflow-hidden group",
                              // Interaction styling
                              unref(answers)[unref(currentQuestion).id] === void 0 ? "border-gray-100 dark:border-gray-800 hover:border-primary-400 dark:hover:border-primary-600 cursor-pointer bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl hover:scale-[1.01]" : "",
                              // Result styling
                              unref(answers)[unref(currentQuestion).id] !== void 0 ? sessionMode.value === "practice" ? index === unref(currentQuestion).answer ? "border-green-500 bg-green-50 dark:bg-green-900/20" : unref(answers)[unref(currentQuestion).id] === index ? "border-red-500 bg-red-50 dark:bg-red-900/20" : "border-transparent opacity-40 grayscale-[0.5]" : unref(answers)[unref(currentQuestion).id] === index ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20" : "border-transparent opacity-40" : ""
                            ]
                          }, [
                            createVNode("div", { class: "flex items-center relative z-10" }, [
                              createVNode("div", {
                                class: ["w-12 h-12 rounded-xl border-2 flex items-center justify-center mr-5 transition-all duration-300 font-black text-lg", [
                                  unref(answers)[unref(currentQuestion).id] === void 0 ? "border-gray-200 text-gray-400 group-hover:border-primary-400 group-hover:text-primary-500" : "",
                                  unref(answers)[unref(currentQuestion).id] !== void 0 ? sessionMode.value === "practice" ? index === unref(currentQuestion).answer ? "border-green-500 bg-green-500 text-white rotate-[360deg]" : unref(answers)[unref(currentQuestion).id] === index ? "border-red-500 bg-red-500 text-white" : "border-gray-200 text-gray-300" : unref(answers)[unref(currentQuestion).id] === index ? "border-primary-500 bg-primary-500 text-white" : "border-gray-200 text-gray-300" : ""
                                ]]
                              }, [
                                unref(answers)[unref(currentQuestion).id] !== void 0 && sessionMode.value === "practice" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  index === unref(currentQuestion).answer ? (openBlock(), createBlock(_component_UIcon, {
                                    key: 0,
                                    name: "i-heroicons-check"
                                  })) : unref(answers)[unref(currentQuestion).id] === index ? (openBlock(), createBlock(_component_UIcon, {
                                    key: 1,
                                    name: "i-heroicons-x-mark"
                                  })) : (openBlock(), createBlock("span", { key: 2 }, toDisplayString(String.fromCharCode(65 + index)), 1))
                                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                  createTextVNode(toDisplayString(String.fromCharCode(65 + index)), 1)
                                ], 64))
                              ], 2),
                              createVNode("span", { class: "flex-1 text-gray-700 dark:text-gray-200 font-bold text-lg leading-snug" }, toDisplayString(option), 1)
                            ]),
                            unref(answers)[unref(currentQuestion).id] === index ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "absolute inset-0 bg-primary-500/5 dark:bg-primary-400/5 pointer-events-none"
                            })) : createCommentVNode("", true)
                          ], 10, ["onClick"]);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (unref(answers)[unref(currentQuestion).id] !== void 0 && sessionMode.value === "practice" && unref(currentQuestion).explanation) {
                _push2(`<div class="p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border-none ring-1 ring-gray-200 dark:ring-gray-700" data-v-e0ed170e${_scopeId}><div class="flex items-start gap-4" data-v-e0ed170e${_scopeId}><div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600" data-v-e0ed170e${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "i-heroicons-light-bulb",
                  class: "text-3xl"
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="flex-1" data-v-e0ed170e${_scopeId}><h3 class="font-black text-gray-900 dark:text-white text-xl mb-2" data-v-e0ed170e${_scopeId}>Detailed Explanation</h3><div class="text-gray-600 dark:text-gray-400 text-md leading-relaxed whitespace-pre-wrap" data-v-e0ed170e${_scopeId}>${ssrInterpolate(unref(currentQuestion).explanation)}</div></div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex justify-between items-center pt-4" data-v-e0ed170e${_scopeId}>`);
              if (unref(currentIndex) > 0) {
                _push2(ssrRenderComponent(_component_UButton, {
                  onClick: handlePrev,
                  color: "gray",
                  variant: "ghost",
                  size: "lg",
                  class: "rounded-xl px-6",
                  icon: "i-heroicons-arrow-left"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Previous `);
                    } else {
                      return [
                        createTextVNode(" Previous ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<div data-v-e0ed170e${_scopeId}></div>`);
              }
              _push2(`<div class="flex gap-3" data-v-e0ed170e${_scopeId}>`);
              if (unref(currentIndex) < unref(questions).length - 1) {
                _push2(ssrRenderComponent(_component_UButton, {
                  onClick: handleNext,
                  color: "primary",
                  size: "xl",
                  class: "rounded-xl px-10 font-bold shadow-lg h-14",
                  "trailing-icon": "i-heroicons-arrow-right"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Next `);
                    } else {
                      return [
                        createTextVNode(" Next ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_UButton, {
                  onClick: ($event) => unref(finishExam)(70),
                  color: "green",
                  size: "xl",
                  class: "rounded-xl px-12 font-black shadow-lg h-14",
                  icon: "i-heroicons-flag"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Submit Exam `);
                    } else {
                      return [
                        createTextVNode(" Submit Exam ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
              _push2(`</div></div></div></div>`);
            } else if (unref(isFinished)) {
              _push2(`<div class="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700" data-v-e0ed170e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UCard, { class: "text-center rounded-3xl shadow-2xl border-none overflow-hidden p-0 ring-1 ring-gray-200 dark:ring-gray-800" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="h-2 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500" data-v-e0ed170e${_scopeId2}></div><div class="p-12" data-v-e0ed170e${_scopeId2}><div class="inline-flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-full mb-6" data-v-e0ed170e${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: unref(score) >= 70 ? "i-heroicons-trophy" : "i-heroicons-bolt",
                      class: ["text-8xl", unref(score) >= 70 ? "text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]" : "text-primary-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]"]
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><h2 class="text-5xl font-black mb-4 text-gray-900 dark:text-white" data-v-e0ed170e${_scopeId2}>${ssrInterpolate(unref(score) >= 70 ? "Certified Excellence!" : "Almost There!")}</h2><div class="flex items-center justify-center gap-4 mb-10" data-v-e0ed170e${_scopeId2}><div class="text-center px-8 border-r border-gray-200 dark:border-gray-700" data-v-e0ed170e${_scopeId2}><p class="text-gray-400 uppercase text-[10px] font-black tracking-widest mb-1" data-v-e0ed170e${_scopeId2}>Final Score</p><p class="text-4xl font-black text-gray-900 dark:text-white" data-v-e0ed170e${_scopeId2}>${ssrInterpolate(unref(score).toFixed(1))}%</p></div><div class="text-center px-8" data-v-e0ed170e${_scopeId2}><p class="text-gray-400 uppercase text-[10px] font-black tracking-widest mb-1" data-v-e0ed170e${_scopeId2}>Status</p><p class="${ssrRenderClass([unref(score) >= 70 ? "text-green-500" : "text-red-500", "text-4xl font-black"])}" data-v-e0ed170e${_scopeId2}>${ssrInterpolate(unref(score) >= 70 ? "PASSED" : "FAILED")}</p></div></div><div class="flex justify-center gap-4" data-v-e0ed170e${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "gray",
                      variant: "soft",
                      to: "/dashboard",
                      size: "xl",
                      class: "rounded-2xl px-10 h-14 font-bold"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Lobby`);
                        } else {
                          return [
                            createTextVNode("Lobby")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "primary",
                      onClick: restartExam,
                      size: "xl",
                      class: "rounded-2xl px-12 h-14 font-black shadow-xl shadow-primary-500/20"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Try Again`);
                        } else {
                          return [
                            createTextVNode("Try Again")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    if (unref(questions).length < (exam.value?._count?.questions || 0)) {
                      _push3(`<div class="mt-10 p-6 bg-primary-50 dark:bg-primary-900/10 rounded-3xl border border-primary-100 dark:border-primary-800" data-v-e0ed170e${_scopeId2}><div class="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 mb-3" data-v-e0ed170e${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "i-heroicons-sparkles",
                        class: "text-2xl"
                      }, null, _parent3, _scopeId2));
                      _push3(`<h3 class="font-black" data-v-e0ed170e${_scopeId2}>Unlock ${ssrInterpolate((exam.value?._count?.questions || 0) - unref(questions).length)} more questions!</h3></div><p class="text-sm text-gray-500 dark:text-gray-400 mb-5" data-v-e0ed170e${_scopeId2}>You are currently using the **Free Sample** mode. Upgrade your plan to access the full database of certification questions.</p>`);
                      _push3(ssrRenderComponent(_component_UButton, {
                        color: "primary",
                        block: "",
                        size: "lg",
                        to: "/pricing",
                        class: "rounded-2xl font-black"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`Upgrade Now — From ₹200`);
                          } else {
                            return [
                              createTextVNode("Upgrade Now — From ₹200")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "h-2 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500" }),
                      createVNode("div", { class: "p-12" }, [
                        createVNode("div", { class: "inline-flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-full mb-6" }, [
                          createVNode(_component_UIcon, {
                            name: unref(score) >= 70 ? "i-heroicons-trophy" : "i-heroicons-bolt",
                            class: ["text-8xl", unref(score) >= 70 ? "text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]" : "text-primary-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]"]
                          }, null, 8, ["name", "class"])
                        ]),
                        createVNode("h2", { class: "text-5xl font-black mb-4 text-gray-900 dark:text-white" }, toDisplayString(unref(score) >= 70 ? "Certified Excellence!" : "Almost There!"), 1),
                        createVNode("div", { class: "flex items-center justify-center gap-4 mb-10" }, [
                          createVNode("div", { class: "text-center px-8 border-r border-gray-200 dark:border-gray-700" }, [
                            createVNode("p", { class: "text-gray-400 uppercase text-[10px] font-black tracking-widest mb-1" }, "Final Score"),
                            createVNode("p", { class: "text-4xl font-black text-gray-900 dark:text-white" }, toDisplayString(unref(score).toFixed(1)) + "%", 1)
                          ]),
                          createVNode("div", { class: "text-center px-8" }, [
                            createVNode("p", { class: "text-gray-400 uppercase text-[10px] font-black tracking-widest mb-1" }, "Status"),
                            createVNode("p", {
                              class: ["text-4xl font-black", unref(score) >= 70 ? "text-green-500" : "text-red-500"]
                            }, toDisplayString(unref(score) >= 70 ? "PASSED" : "FAILED"), 3)
                          ])
                        ]),
                        createVNode("div", { class: "flex justify-center gap-4" }, [
                          createVNode(_component_UButton, {
                            color: "gray",
                            variant: "soft",
                            to: "/dashboard",
                            size: "xl",
                            class: "rounded-2xl px-10 h-14 font-bold"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Lobby")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UButton, {
                            color: "primary",
                            onClick: restartExam,
                            size: "xl",
                            class: "rounded-2xl px-12 h-14 font-black shadow-xl shadow-primary-500/20"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Try Again")
                            ]),
                            _: 1
                          })
                        ]),
                        unref(questions).length < (exam.value?._count?.questions || 0) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mt-10 p-6 bg-primary-50 dark:bg-primary-900/10 rounded-3xl border border-primary-100 dark:border-primary-800"
                        }, [
                          createVNode("div", { class: "flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 mb-3" }, [
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-sparkles",
                              class: "text-2xl"
                            }),
                            createVNode("h3", { class: "font-black" }, "Unlock " + toDisplayString((exam.value?._count?.questions || 0) - unref(questions).length) + " more questions!", 1)
                          ]),
                          createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400 mb-5" }, "You are currently using the **Free Sample** mode. Upgrade your plan to access the full database of certification questions."),
                          createVNode(_component_UButton, {
                            color: "primary",
                            block: "",
                            size: "lg",
                            to: "/pricing",
                            class: "rounded-2xl font-black"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Upgrade Now — From ₹200")
                            ]),
                            _: 1
                          })
                        ])) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="space-y-6" data-v-e0ed170e${_scopeId}><div class="flex items-center justify-between px-2" data-v-e0ed170e${_scopeId}><h3 class="text-2xl font-black flex items-center gap-3" data-v-e0ed170e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-magnifying-glass-circle",
                class: "text-primary-500 shadow-sm"
              }, null, _parent2, _scopeId));
              _push2(` Performance Review </h3><span class="text-sm font-bold text-gray-400" data-v-e0ed170e${_scopeId}>${ssrInterpolate(unref(questions).length)} Questions Analyzed</span></div><div class="space-y-6" data-v-e0ed170e${_scopeId}><!--[-->`);
              ssrRenderList(visibleQuestions.value, (q, idx) => {
                _push2(ssrRenderComponent(_component_UCard, {
                  key: q.id,
                  class: ["rounded-3xl shadow-sm border-none ring-1 ring-gray-100 dark:ring-gray-800 transition-all hover:ring-2", unref(answers)[q.id] === q.answer ? "ring-green-100 dark:ring-green-900/20" : "ring-red-100 dark:ring-red-900/20"]
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex gap-6" data-v-e0ed170e${_scopeId2}><div class="w-12 h-12 flex-shrink-0 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center font-black text-gray-400 text-lg" data-v-e0ed170e${_scopeId2}>${ssrInterpolate(idx + 1)}</div><div class="flex-1 space-y-6" data-v-e0ed170e${_scopeId2}><p class="text-lg font-bold text-gray-900 dark:text-white leading-relaxed" data-v-e0ed170e${_scopeId2}>${ssrInterpolate(q.question)}</p><div class="grid grid-cols-1 md:grid-cols-2 gap-3" data-v-e0ed170e${_scopeId2}><!--[-->`);
                      ssrRenderList(q.options, (opt, oIdx) => {
                        _push3(`<div class="${ssrRenderClass([[
                          oIdx === q.answer ? "bg-green-50/50 border-green-500 text-green-700 dark:bg-green-900/10" : "",
                          unref(answers)[q.id] === oIdx && oIdx !== q.answer ? "bg-red-50/50 border-red-500 text-red-700 dark:bg-red-900/10" : "",
                          unref(answers)[q.id] !== oIdx && oIdx !== q.answer ? "bg-gray-50/50 border-gray-100 text-gray-400 dark:bg-gray-800/10 opacity-60" : ""
                        ], "p-4 rounded-2xl border-2 transition-all flex items-center gap-3 font-semibold text-sm"])}" data-v-e0ed170e${_scopeId2}><div class="${ssrRenderClass([oIdx === q.answer ? "bg-green-500 border-green-500 text-white" : oIdx === unref(answers)[q.id] ? "bg-red-500 border-red-500 text-white" : "border-gray-300", "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0"])}" data-v-e0ed170e${_scopeId2}>`);
                        if (oIdx === q.answer) {
                          _push3(ssrRenderComponent(_component_UIcon, {
                            name: "i-heroicons-check",
                            class: "text-xs"
                          }, null, _parent3, _scopeId2));
                        } else if (oIdx === unref(answers)[q.id]) {
                          _push3(ssrRenderComponent(_component_UIcon, {
                            name: "i-heroicons-x-mark",
                            class: "text-xs"
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<span class="text-[10px]" data-v-e0ed170e${_scopeId2}>${ssrInterpolate(String.fromCharCode(65 + oIdx))}</span>`);
                        }
                        _push3(`</div><span class="flex-1" data-v-e0ed170e${_scopeId2}>${ssrInterpolate(opt)}</span></div>`);
                      });
                      _push3(`<!--]--></div>`);
                      if (q.explanation) {
                        _push3(`<div class="p-5 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800" data-v-e0ed170e${_scopeId2}><div class="flex items-center gap-2 mb-2 font-black text-xs text-gray-400 uppercase tracking-widest" data-v-e0ed170e${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-chat-bubble-bottom-center-text" }, null, _parent3, _scopeId2));
                        _push3(` Solution Insight </div><p class="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed" data-v-e0ed170e${_scopeId2}>${ssrInterpolate(q.explanation)}</p></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex gap-6" }, [
                          createVNode("div", { class: "w-12 h-12 flex-shrink-0 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center font-black text-gray-400 text-lg" }, toDisplayString(idx + 1), 1),
                          createVNode("div", { class: "flex-1 space-y-6" }, [
                            createVNode("p", { class: "text-lg font-bold text-gray-900 dark:text-white leading-relaxed" }, toDisplayString(q.question), 1),
                            createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-3" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(q.options, (opt, oIdx) => {
                                return openBlock(), createBlock("div", {
                                  key: oIdx,
                                  class: ["p-4 rounded-2xl border-2 transition-all flex items-center gap-3 font-semibold text-sm", [
                                    oIdx === q.answer ? "bg-green-50/50 border-green-500 text-green-700 dark:bg-green-900/10" : "",
                                    unref(answers)[q.id] === oIdx && oIdx !== q.answer ? "bg-red-50/50 border-red-500 text-red-700 dark:bg-red-900/10" : "",
                                    unref(answers)[q.id] !== oIdx && oIdx !== q.answer ? "bg-gray-50/50 border-gray-100 text-gray-400 dark:bg-gray-800/10 opacity-60" : ""
                                  ]]
                                }, [
                                  createVNode("div", {
                                    class: ["w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0", oIdx === q.answer ? "bg-green-500 border-green-500 text-white" : oIdx === unref(answers)[q.id] ? "bg-red-500 border-red-500 text-white" : "border-gray-300"]
                                  }, [
                                    oIdx === q.answer ? (openBlock(), createBlock(_component_UIcon, {
                                      key: 0,
                                      name: "i-heroicons-check",
                                      class: "text-xs"
                                    })) : oIdx === unref(answers)[q.id] ? (openBlock(), createBlock(_component_UIcon, {
                                      key: 1,
                                      name: "i-heroicons-x-mark",
                                      class: "text-xs"
                                    })) : (openBlock(), createBlock("span", {
                                      key: 2,
                                      class: "text-[10px]"
                                    }, toDisplayString(String.fromCharCode(65 + oIdx)), 1))
                                  ], 2),
                                  createVNode("span", { class: "flex-1" }, toDisplayString(opt), 1)
                                ], 2);
                              }), 128))
                            ]),
                            q.explanation ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "p-5 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800"
                            }, [
                              createVNode("div", { class: "flex items-center gap-2 mb-2 font-black text-xs text-gray-400 uppercase tracking-widest" }, [
                                createVNode(_component_UIcon, { name: "i-heroicons-chat-bubble-bottom-center-text" }),
                                createTextVNode(" Solution Insight ")
                              ]),
                              createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed" }, toDisplayString(q.explanation), 1)
                            ])) : createCommentVNode("", true)
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
              if (unref(questions).length > visibleCount.value && !showAllResults.value) {
                _push2(`<div class="text-center py-8" data-v-e0ed170e${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  onClick: ($event) => showAllResults.value = true,
                  color: "gray",
                  variant: "solid",
                  size: "lg",
                  class: "rounded-2xl px-12 h-14 font-black shadow-xl"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Show All ${ssrInterpolate(unref(questions).length)} Detailed Results `);
                    } else {
                      return [
                        createTextVNode(" Show All " + toDisplayString(unref(questions).length) + " Detailed Results ", 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(pending) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-col justify-center items-center h-[60vh]"
              }, [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-arrow-path",
                  class: "animate-spin text-5xl text-primary-500 mb-4"
                }),
                createVNode("p", { class: "text-gray-500 font-medium animate-pulse" }, "Preparing your session...")
              ])) : unref(error) ? (openBlock(), createBlock("div", {
                key: 1,
                class: "max-w-md mx-auto text-center py-20"
              }, [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-exclamation-triangle",
                  class: "text-6xl text-red-500 mb-4"
                }),
                createVNode("h2", { class: "text-2xl font-bold text-gray-900 dark:text-white mb-2" }, "Oops! Something went wrong"),
                createVNode("p", { class: "text-gray-500 mb-6" }, toDisplayString(unref(error).message || "We couldn't load your exam. Please try again."), 1),
                createVNode(_component_UButton, {
                  color: "gray",
                  variant: "ghost",
                  to: "/dashboard",
                  icon: "i-heroicons-arrow-left"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Back to Dashboard")
                  ]),
                  _: 1
                })
              ])) : !isStarted.value ? (openBlock(), createBlock("div", {
                key: 2,
                class: "max-w-xl mx-auto"
              }, [
                createVNode(_component_UCard, { class: "shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800 rounded-3xl overflow-hidden border-none p-0" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "h-40 bg-gradient-to-br from-primary-500 via-primary-600 to-blue-700 p-8 text-white relative" }, [
                      createVNode("div", { class: "relative z-10 pt-2" }, [
                        createVNode("h1", { class: "text-3xl font-black tracking-tight leading-tight mb-1" }, toDisplayString(exam.value?.title), 1),
                        createVNode("div", { class: "flex items-center gap-2 text-white/80 text-sm font-semibold" }, [
                          createVNode("span", { class: "bg-white/20 px-2 py-0.5 rounded uppercase" }, toDisplayString(exam.value?.certificationCode), 1),
                          createVNode("span", null, "•"),
                          createVNode("span", null, toDisplayString(exam.value?.totalQuestions) + " Questions Available", 1),
                          unref(status) === "authenticated" && user.value?.plan === "FREE" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode("span", null, "•"),
                            createVNode("span", { class: "bg-amber-500/30 text-amber-100 px-2 py-0.5 rounded flex items-center gap-1" }, [
                              createVNode(_component_UIcon, { name: "i-heroicons-sparkles" }),
                              createTextVNode(" Free Sample Mode ")
                            ])
                          ], 64)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-academic-cap",
                        class: "absolute right-[-10px] top-[-10px] text-[160px] text-white/10 rotate-12 pointer-events-none"
                      })
                    ]),
                    createVNode("div", { class: "p-8 space-y-8" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1" }, "Session Mode"),
                        createVNode("div", { class: "flex p-1.5 bg-gray-100 dark:bg-gray-800/50 rounded-2xl" }, [
                          createVNode("button", {
                            onClick: ($event) => sessionMode.value = "practice",
                            class: ["flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl transition-all duration-300", sessionMode.value === "practice" ? "bg-white dark:bg-gray-700 shadow-md text-primary-600 scale-[1.02] ring-1 ring-black/5" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"]
                          }, [
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-academic-cap",
                              class: "text-lg"
                            }),
                            createVNode("span", { class: "font-bold" }, "Practice")
                          ], 10, ["onClick"]),
                          createVNode("button", {
                            onClick: ($event) => sessionMode.value = "mock",
                            class: ["flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl transition-all duration-300", sessionMode.value === "mock" ? "bg-white dark:bg-gray-700 shadow-md text-primary-600 scale-[1.02] ring-1 ring-black/5" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"]
                          }, [
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-clock",
                              class: "text-lg"
                            }),
                            createVNode("span", { class: "font-bold" }, "Mock Exam")
                          ], 10, ["onClick"])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-1" }, "Session Length"),
                        createVNode("div", { class: "flex flex-wrap gap-2" }, [
                          (openBlock(), createBlock(Fragment, null, renderList([5, 10, 25, 50, "All"], (count) => {
                            return createVNode("button", {
                              key: count,
                              onClick: ($event) => {
                                selectionType.value = "count";
                                questionLimit.value = count;
                              },
                              class: ["px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 border-2", selectionType.value === "count" && questionLimit.value === count ? "bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/30" : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-primary-200"]
                            }, toDisplayString(count), 11, ["onClick"]);
                          }), 64)),
                          createVNode("button", {
                            onClick: ($event) => selectionType.value = "range",
                            class: ["px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 border-2 inline-flex items-center gap-2", selectionType.value === "range" ? "bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/30" : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-primary-200"]
                          }, [
                            createVNode(_component_UIcon, { name: "i-heroicons-adjustments-horizontal" }),
                            createTextVNode(" Range ")
                          ], 10, ["onClick"])
                        ]),
                        createVNode(Transition, { name: "slide-down" }, {
                          default: withCtx(() => [
                            selectionType.value === "range" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mt-4 p-5 bg-primary-50/50 dark:bg-primary-900/10 rounded-2xl border-2 border-dashed border-primary-200 dark:border-primary-800"
                            }, [
                              createVNode("div", { class: "flex items-center gap-4" }, [
                                createVNode("div", { class: "flex-1" }, [
                                  createVNode("p", { class: "text-[10px] font-bold text-primary-600 dark:text-primary-400 mb-1 ml-1" }, "FROM #"),
                                  createVNode(_component_UInput, {
                                    modelValue: rangeStart.value,
                                    "onUpdate:modelValue": ($event) => rangeStart.value = $event,
                                    modelModifiers: { number: true },
                                    type: "number",
                                    size: "md",
                                    variant: "outline",
                                    color: "white",
                                    class: "rounded-lg",
                                    ui: { input: "text-black font-black text-lg bg-white" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "pt-5 text-primary-300 font-bold" }, "→"),
                                createVNode("div", { class: "flex-1" }, [
                                  createVNode("p", { class: "text-[10px] font-bold text-primary-600 dark:text-primary-400 mb-1 ml-1" }, "TO #"),
                                  createVNode(_component_UInput, {
                                    modelValue: rangeEnd.value,
                                    "onUpdate:modelValue": ($event) => rangeEnd.value = $event,
                                    modelModifiers: { number: true },
                                    type: "number",
                                    size: "md",
                                    variant: "outline",
                                    color: "white",
                                    class: "rounded-lg",
                                    ui: { input: "text-black font-black text-lg bg-white" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode("p", { class: "text-[10px] text-primary-500 mt-3 font-medium flex items-center gap-1" }, [
                                createVNode(_component_UIcon, { name: "i-heroicons-information-circle" }),
                                createTextVNode(" Sequential order (shuffle disabled) ")
                              ])
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/30 rounded-2xl" }, [
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode("div", { class: "w-10 h-10 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-sm" }, [
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-arrows-right-left",
                              class: "text-gray-500"
                            })
                          ]),
                          createVNode("div", null, [
                            createVNode("p", { class: "font-bold text-sm text-gray-800 dark:text-gray-200" }, "Shuffle Questions"),
                            createVNode("p", { class: "text-[10px] text-gray-400" }, "Randomized for every new attempt")
                          ])
                        ]),
                        createVNode(_component_UToggle, {
                          modelValue: shouldShuffle.value,
                          "onUpdate:modelValue": ($event) => shouldShuffle.value = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      exam.value?.totalQuestions === 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "p-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900 rounded-2xl flex items-start gap-3"
                      }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-exclamation-circle",
                          class: "text-orange-500 text-xl flex-shrink-0 mt-0.5"
                        }),
                        createVNode("div", null, [
                          createVNode("p", { class: "text-sm font-bold text-orange-800 dark:text-orange-400" }, "Study Material Pending"),
                          createVNode("p", { class: "text-xs text-orange-700/70 dark:text-orange-500/70" }, "Our AI is still forging the questions for this certification. Please check back later!")
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode(_component_UButton, {
                        block: "",
                        size: "xl",
                        color: "primary",
                        disabled: exam.value?.totalQuestions === 0,
                        loading: isStarting.value,
                        class: "rounded-2xl h-16 text-xl font-black shadow-primary-500/25 shadow-2xl hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed",
                        icon: exam.value?.totalQuestions === 0 ? "i-heroicons-lock-closed" : "i-heroicons-play",
                        onClick: startExamSession
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(exam.value?.totalQuestions === 0 ? "Questions Locked" : "Start Session"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "loading", "icon"])
                    ])
                  ]),
                  _: 1
                })
              ])) : !unref(isFinished) && unref(currentQuestion) ? (openBlock(), createBlock("div", { key: 3 }, [
                createVNode("div", { class: "mb-8 max-w-3xl mx-auto" }, [
                  createVNode("div", { class: "flex justify-between items-end mb-4" }, [
                    createVNode("div", null, [
                      createVNode("p", { class: "text-xs font-black text-primary-500 uppercase tracking-widest mb-1" }, toDisplayString(sessionMode.value === "mock" ? "🔥 Mock Exam Mode" : "🎓 Practice Session"), 1),
                      createVNode("h2", { class: "text-3xl font-black text-gray-900 dark:text-white" }, [
                        createTextVNode(" Question "),
                        createVNode("span", { class: "text-primary-500" }, toDisplayString(unref(currentIndex) + 1), 1),
                        createTextVNode(),
                        createVNode("span", { class: "text-gray-300 dark:text-gray-700 font-light" }, "of"),
                        createTextVNode(" " + toDisplayString(unref(questions).length), 1)
                      ])
                    ]),
                    sessionMode.value === "mock" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col items-end"
                    }, [
                      createVNode("div", {
                        class: ["px-4 py-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-gray-100 dark:border-gray-800 flex items-center gap-3 transition-colors duration-500", timeLeft.value < 60 ? "border-red-500/50" : "border-gray-100"]
                      }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-clock",
                          class: [timerUrgencyClass.value, "text-2xl"]
                        }, null, 8, ["class"]),
                        createVNode("span", {
                          class: ["font-black text-2xl tabular-nums tracking-tighter", timerUrgencyClass.value]
                        }, toDisplayString(formattedTime.value), 3)
                      ], 2),
                      createVNode("p", { class: "text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-tighter" }, "Time Remaining")
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-right"
                    }, [
                      createVNode("span", { class: "text-sm font-bold text-gray-400" }, toDisplayString(Math.round(unref(currentIndex) / unref(questions).length * 100)) + "% Complete", 1)
                    ]))
                  ]),
                  createVNode(_component_UProgress, {
                    value: unref(currentIndex) / unref(questions).length * 100,
                    color: "primary",
                    size: "md",
                    class: "rounded-full shadow-inner"
                  }, null, 8, ["value"])
                ]),
                createVNode("div", { class: "max-w-3xl mx-auto space-y-6" }, [
                  createVNode(_component_UCard, { class: "shadow-xl rounded-3xl border-none ring-1 ring-gray-200 dark:ring-gray-800" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-xl leading-relaxed text-gray-800 dark:text-gray-100 mb-8 font-semibold whitespace-pre-wrap" }, toDisplayString(unref(currentQuestion).question), 1),
                      createVNode("div", { class: "space-y-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(currentQuestion).options, (option, index) => {
                          return openBlock(), createBlock("div", {
                            key: index,
                            onClick: ($event) => handleAnswerSelection(unref(currentQuestion).id, index),
                            class: [
                              "p-5 border-2 rounded-2xl transition-all duration-300 relative overflow-hidden group",
                              // Interaction styling
                              unref(answers)[unref(currentQuestion).id] === void 0 ? "border-gray-100 dark:border-gray-800 hover:border-primary-400 dark:hover:border-primary-600 cursor-pointer bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl hover:scale-[1.01]" : "",
                              // Result styling
                              unref(answers)[unref(currentQuestion).id] !== void 0 ? sessionMode.value === "practice" ? index === unref(currentQuestion).answer ? "border-green-500 bg-green-50 dark:bg-green-900/20" : unref(answers)[unref(currentQuestion).id] === index ? "border-red-500 bg-red-50 dark:bg-red-900/20" : "border-transparent opacity-40 grayscale-[0.5]" : unref(answers)[unref(currentQuestion).id] === index ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20" : "border-transparent opacity-40" : ""
                            ]
                          }, [
                            createVNode("div", { class: "flex items-center relative z-10" }, [
                              createVNode("div", {
                                class: ["w-12 h-12 rounded-xl border-2 flex items-center justify-center mr-5 transition-all duration-300 font-black text-lg", [
                                  unref(answers)[unref(currentQuestion).id] === void 0 ? "border-gray-200 text-gray-400 group-hover:border-primary-400 group-hover:text-primary-500" : "",
                                  unref(answers)[unref(currentQuestion).id] !== void 0 ? sessionMode.value === "practice" ? index === unref(currentQuestion).answer ? "border-green-500 bg-green-500 text-white rotate-[360deg]" : unref(answers)[unref(currentQuestion).id] === index ? "border-red-500 bg-red-500 text-white" : "border-gray-200 text-gray-300" : unref(answers)[unref(currentQuestion).id] === index ? "border-primary-500 bg-primary-500 text-white" : "border-gray-200 text-gray-300" : ""
                                ]]
                              }, [
                                unref(answers)[unref(currentQuestion).id] !== void 0 && sessionMode.value === "practice" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  index === unref(currentQuestion).answer ? (openBlock(), createBlock(_component_UIcon, {
                                    key: 0,
                                    name: "i-heroicons-check"
                                  })) : unref(answers)[unref(currentQuestion).id] === index ? (openBlock(), createBlock(_component_UIcon, {
                                    key: 1,
                                    name: "i-heroicons-x-mark"
                                  })) : (openBlock(), createBlock("span", { key: 2 }, toDisplayString(String.fromCharCode(65 + index)), 1))
                                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                  createTextVNode(toDisplayString(String.fromCharCode(65 + index)), 1)
                                ], 64))
                              ], 2),
                              createVNode("span", { class: "flex-1 text-gray-700 dark:text-gray-200 font-bold text-lg leading-snug" }, toDisplayString(option), 1)
                            ]),
                            unref(answers)[unref(currentQuestion).id] === index ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "absolute inset-0 bg-primary-500/5 dark:bg-primary-400/5 pointer-events-none"
                            })) : createCommentVNode("", true)
                          ], 10, ["onClick"]);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(Transition, { name: "fade" }, {
                    default: withCtx(() => [
                      unref(answers)[unref(currentQuestion).id] !== void 0 && sessionMode.value === "practice" && unref(currentQuestion).explanation ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border-none ring-1 ring-gray-200 dark:ring-gray-700"
                      }, [
                        createVNode("div", { class: "flex items-start gap-4" }, [
                          createVNode("div", { class: "flex-shrink-0 w-12 h-12 rounded-2xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600" }, [
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-light-bulb",
                              class: "text-3xl"
                            })
                          ]),
                          createVNode("div", { class: "flex-1" }, [
                            createVNode("h3", { class: "font-black text-gray-900 dark:text-white text-xl mb-2" }, "Detailed Explanation"),
                            createVNode("div", { class: "text-gray-600 dark:text-gray-400 text-md leading-relaxed whitespace-pre-wrap" }, toDisplayString(unref(currentQuestion).explanation), 1)
                          ])
                        ])
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex justify-between items-center pt-4" }, [
                    unref(currentIndex) > 0 ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      onClick: handlePrev,
                      color: "gray",
                      variant: "ghost",
                      size: "lg",
                      class: "rounded-xl px-6",
                      icon: "i-heroicons-arrow-left"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Previous ")
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock("div", { key: 1 })),
                    createVNode("div", { class: "flex gap-3" }, [
                      unref(currentIndex) < unref(questions).length - 1 ? (openBlock(), createBlock(_component_UButton, {
                        key: 0,
                        onClick: handleNext,
                        color: "primary",
                        size: "xl",
                        class: "rounded-xl px-10 font-bold shadow-lg h-14",
                        "trailing-icon": "i-heroicons-arrow-right"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Next ")
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(_component_UButton, {
                        key: 1,
                        onClick: ($event) => unref(finishExam)(70),
                        color: "green",
                        size: "xl",
                        class: "rounded-xl px-12 font-black shadow-lg h-14",
                        icon: "i-heroicons-flag"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Submit Exam ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]))
                    ])
                  ])
                ])
              ])) : unref(isFinished) ? (openBlock(), createBlock("div", {
                key: 4,
                class: "max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700"
              }, [
                createVNode(_component_UCard, { class: "text-center rounded-3xl shadow-2xl border-none overflow-hidden p-0 ring-1 ring-gray-200 dark:ring-gray-800" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "h-2 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500" }),
                    createVNode("div", { class: "p-12" }, [
                      createVNode("div", { class: "inline-flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-full mb-6" }, [
                        createVNode(_component_UIcon, {
                          name: unref(score) >= 70 ? "i-heroicons-trophy" : "i-heroicons-bolt",
                          class: ["text-8xl", unref(score) >= 70 ? "text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]" : "text-primary-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]"]
                        }, null, 8, ["name", "class"])
                      ]),
                      createVNode("h2", { class: "text-5xl font-black mb-4 text-gray-900 dark:text-white" }, toDisplayString(unref(score) >= 70 ? "Certified Excellence!" : "Almost There!"), 1),
                      createVNode("div", { class: "flex items-center justify-center gap-4 mb-10" }, [
                        createVNode("div", { class: "text-center px-8 border-r border-gray-200 dark:border-gray-700" }, [
                          createVNode("p", { class: "text-gray-400 uppercase text-[10px] font-black tracking-widest mb-1" }, "Final Score"),
                          createVNode("p", { class: "text-4xl font-black text-gray-900 dark:text-white" }, toDisplayString(unref(score).toFixed(1)) + "%", 1)
                        ]),
                        createVNode("div", { class: "text-center px-8" }, [
                          createVNode("p", { class: "text-gray-400 uppercase text-[10px] font-black tracking-widest mb-1" }, "Status"),
                          createVNode("p", {
                            class: ["text-4xl font-black", unref(score) >= 70 ? "text-green-500" : "text-red-500"]
                          }, toDisplayString(unref(score) >= 70 ? "PASSED" : "FAILED"), 3)
                        ])
                      ]),
                      createVNode("div", { class: "flex justify-center gap-4" }, [
                        createVNode(_component_UButton, {
                          color: "gray",
                          variant: "soft",
                          to: "/dashboard",
                          size: "xl",
                          class: "rounded-2xl px-10 h-14 font-bold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Lobby")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UButton, {
                          color: "primary",
                          onClick: restartExam,
                          size: "xl",
                          class: "rounded-2xl px-12 h-14 font-black shadow-xl shadow-primary-500/20"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Try Again")
                          ]),
                          _: 1
                        })
                      ]),
                      unref(questions).length < (exam.value?._count?.questions || 0) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "mt-10 p-6 bg-primary-50 dark:bg-primary-900/10 rounded-3xl border border-primary-100 dark:border-primary-800"
                      }, [
                        createVNode("div", { class: "flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 mb-3" }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-sparkles",
                            class: "text-2xl"
                          }),
                          createVNode("h3", { class: "font-black" }, "Unlock " + toDisplayString((exam.value?._count?.questions || 0) - unref(questions).length) + " more questions!", 1)
                        ]),
                        createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400 mb-5" }, "You are currently using the **Free Sample** mode. Upgrade your plan to access the full database of certification questions."),
                        createVNode(_component_UButton, {
                          color: "primary",
                          block: "",
                          size: "lg",
                          to: "/pricing",
                          class: "rounded-2xl font-black"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Upgrade Now — From ₹200")
                          ]),
                          _: 1
                        })
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "space-y-6" }, [
                  createVNode("div", { class: "flex items-center justify-between px-2" }, [
                    createVNode("h3", { class: "text-2xl font-black flex items-center gap-3" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-magnifying-glass-circle",
                        class: "text-primary-500 shadow-sm"
                      }),
                      createTextVNode(" Performance Review ")
                    ]),
                    createVNode("span", { class: "text-sm font-bold text-gray-400" }, toDisplayString(unref(questions).length) + " Questions Analyzed", 1)
                  ]),
                  createVNode("div", { class: "space-y-6" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(visibleQuestions.value, (q, idx) => {
                      return openBlock(), createBlock(_component_UCard, {
                        key: q.id,
                        class: ["rounded-3xl shadow-sm border-none ring-1 ring-gray-100 dark:ring-gray-800 transition-all hover:ring-2", unref(answers)[q.id] === q.answer ? "ring-green-100 dark:ring-green-900/20" : "ring-red-100 dark:ring-red-900/20"]
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex gap-6" }, [
                            createVNode("div", { class: "w-12 h-12 flex-shrink-0 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center font-black text-gray-400 text-lg" }, toDisplayString(idx + 1), 1),
                            createVNode("div", { class: "flex-1 space-y-6" }, [
                              createVNode("p", { class: "text-lg font-bold text-gray-900 dark:text-white leading-relaxed" }, toDisplayString(q.question), 1),
                              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-3" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(q.options, (opt, oIdx) => {
                                  return openBlock(), createBlock("div", {
                                    key: oIdx,
                                    class: ["p-4 rounded-2xl border-2 transition-all flex items-center gap-3 font-semibold text-sm", [
                                      oIdx === q.answer ? "bg-green-50/50 border-green-500 text-green-700 dark:bg-green-900/10" : "",
                                      unref(answers)[q.id] === oIdx && oIdx !== q.answer ? "bg-red-50/50 border-red-500 text-red-700 dark:bg-red-900/10" : "",
                                      unref(answers)[q.id] !== oIdx && oIdx !== q.answer ? "bg-gray-50/50 border-gray-100 text-gray-400 dark:bg-gray-800/10 opacity-60" : ""
                                    ]]
                                  }, [
                                    createVNode("div", {
                                      class: ["w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0", oIdx === q.answer ? "bg-green-500 border-green-500 text-white" : oIdx === unref(answers)[q.id] ? "bg-red-500 border-red-500 text-white" : "border-gray-300"]
                                    }, [
                                      oIdx === q.answer ? (openBlock(), createBlock(_component_UIcon, {
                                        key: 0,
                                        name: "i-heroicons-check",
                                        class: "text-xs"
                                      })) : oIdx === unref(answers)[q.id] ? (openBlock(), createBlock(_component_UIcon, {
                                        key: 1,
                                        name: "i-heroicons-x-mark",
                                        class: "text-xs"
                                      })) : (openBlock(), createBlock("span", {
                                        key: 2,
                                        class: "text-[10px]"
                                      }, toDisplayString(String.fromCharCode(65 + oIdx)), 1))
                                    ], 2),
                                    createVNode("span", { class: "flex-1" }, toDisplayString(opt), 1)
                                  ], 2);
                                }), 128))
                              ]),
                              q.explanation ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "p-5 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800"
                              }, [
                                createVNode("div", { class: "flex items-center gap-2 mb-2 font-black text-xs text-gray-400 uppercase tracking-widest" }, [
                                  createVNode(_component_UIcon, { name: "i-heroicons-chat-bubble-bottom-center-text" }),
                                  createTextVNode(" Solution Insight ")
                                ]),
                                createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed" }, toDisplayString(q.explanation), 1)
                              ])) : createCommentVNode("", true)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["class"]);
                    }), 128))
                  ]),
                  unref(questions).length > visibleCount.value && !showAllResults.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-center py-8"
                  }, [
                    createVNode(_component_UButton, {
                      onClick: ($event) => showAllResults.value = true,
                      color: "gray",
                      variant: "solid",
                      size: "lg",
                      class: "rounded-2xl px-12 h-14 font-black shadow-xl"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Show All " + toDisplayString(unref(questions).length) + " Detailed Results ", 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : createCommentVNode("", true)
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/exam/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e0ed170e"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-DudU2orf.js.map
