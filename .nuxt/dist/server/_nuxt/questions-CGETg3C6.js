import { b as __nuxt_component_3, _ as __nuxt_component_2$1 } from "../server.mjs";
import __nuxt_component_3$1 from "./Badge-CzftAi4r.js";
import __nuxt_component_2 from "./Card-CgPQDjgh.js";
import __nuxt_component_4 from "./Divider-B73cfw3m.js";
import __nuxt_component_4$1 from "./Input-CZAMts_N.js";
import __nuxt_component_6 from "./Modal-CHUfZEA4.js";
import __nuxt_component_7 from "./FormGroup-DAIqfz9h.js";
import __nuxt_component_8 from "./Textarea-Dp5yVEuD.js";
import { _ as __nuxt_component_0 } from "./Radio-C9H56Pal.js";
import __nuxt_component_10 from "./Select-BiIxaLPN.js";
import { ref, reactive, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { u as useFetch } from "./fetch-Dtzn_qiz.js";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/hookable/dist/index.mjs";
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
import "tailwind-merge";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "ohash/utils";
import "./useFormGroup-DqE91r20.js";
import "./transition-CXfcTVM0.js";
import "./portal-BvWS8jLA.js";
import "./focus-management-CclPs0xY.js";
import "./keyboard-BCt0ZeLv.js";
import "./use-outside-click-cNhWs2ZY.js";
import "./hidden-e5tlhUcy.js";
import "./active-element-history-Cer4cSOw.js";
import "./micro-task-B6uncIso.js";
import "./open-closed-DaveoKA1.js";
import "./description-CG6lMCGz.js";
import "@vue/shared";
const _sfc_main = {
  __name: "questions",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const examId = route.params.id;
    const search = ref("");
    const isModalOpen = ref(false);
    const isEditing = ref(false);
    const saving = ref(false);
    const editingId = ref(null);
    const form = reactive({
      question: "",
      options: ["", "", "", ""],
      answer: 0,
      explanation: "",
      topic: "",
      difficulty: "medium"
    });
    const { data: exam } = useFetch(
      `/api/exams/${examId}`,
      "$QK89UgpB3s"
      /* nuxt-injected */
    );
    const { data: questions, pending, refresh } = useFetch(
      `/api/exams/${examId}/questions?admin=true`,
      "$2g92Qz2q3p"
      /* nuxt-injected */
    );
    const getOptions = (options) => {
      if (Array.isArray(options)) return options;
      try {
        return JSON.parse(options);
      } catch (e) {
        return [];
      }
    };
    const filteredQuestions = computed(() => {
      if (!questions.value) return [];
      if (!search.value) return questions.value;
      const s = search.value.toLowerCase();
      return questions.value.filter((q) => q.question.toLowerCase().includes(s));
    });
    const resetForm = () => {
      form.question = "";
      form.options = ["", "", "", ""];
      form.answer = 0;
      form.explanation = "";
      form.topic = "";
      form.difficulty = "medium";
      isEditing.value = false;
      editingId.value = null;
    };
    const openAddModal = () => {
      resetForm();
      isModalOpen.value = true;
    };
    const openEditModal = (q) => {
      isEditing.value = true;
      editingId.value = q.id;
      form.question = q.question;
      form.options = [...getOptions(q.options)];
      form.answer = q.answer;
      form.explanation = q.explanation || "";
      form.topic = q.topic || "";
      form.difficulty = q.difficulty || "medium";
      isModalOpen.value = true;
    };
    const handleSave = async () => {
      if (!form.question || form.options.some((o) => !o)) {
        alert("Please complete all required fields");
        return;
      }
      saving.value = true;
      try {
        const url = isEditing.value ? `/api/admin/questions/${editingId.value}` : "/api/admin/questions";
        await $fetch(url, {
          method: isEditing.value ? "PATCH" : "POST",
          body: {
            ...form,
            examId,
            status: "published"
          }
        });
        isModalOpen.value = false;
        refresh();
        resetForm();
      } catch (err) {
        alert("Failed to save question");
      } finally {
        saving.value = false;
      }
    };
    const confirmDelete = async (id) => {
      if (!confirm("Are you sure you want to delete this question? This cannot be undone.")) return;
      try {
        await $fetch(`/api/admin/questions/${id}`, { method: "DELETE" });
        refresh();
      } catch (err) {
        alert("Failed to delete question");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_3;
      const _component_UBadge = __nuxt_component_3$1;
      const _component_UCard = __nuxt_component_2;
      const _component_UDivider = __nuxt_component_4;
      const _component_UInput = __nuxt_component_4$1;
      const _component_UIcon = __nuxt_component_2$1;
      const _component_UModal = __nuxt_component_6;
      const _component_UFormGroup = __nuxt_component_7;
      const _component_UTextarea = __nuxt_component_8;
      const _component_URadio = __nuxt_component_0;
      const _component_USelect = __nuxt_component_10;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-300" }, _attrs))}><div class="max-w-7xl mx-auto"><div class="flex items-center gap-4 mb-8">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "gray",
        variant: "ghost",
        icon: "i-heroicons-arrow-left",
        to: "/admin/exams"
      }, null, _parent));
      _push(`<div class="flex-1"><div class="flex items-center gap-3"><h1 class="text-3xl font-bold text-gray-900 dark:text-white">${ssrInterpolate(unref(exam)?.title || "Loading Exam...")}</h1>`);
      if (unref(exam)) {
        _push(ssrRenderComponent(_component_UBadge, {
          color: unref(exam).status === "published" ? "green" : "orange",
          variant: "subtle"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(exam).status)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(exam).status), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="text-sm text-gray-500 mt-1">Manage, edit, and review questions for this certification.</p></div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "blue",
        variant: "soft",
        icon: "i-heroicons-cloud-arrow-up",
        to: `/admin/upload?examId=${unref(examId)}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` AI Extract Questions `);
          } else {
            return [
              createTextVNode(" AI Extract Questions ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        icon: "i-heroicons-plus",
        onClick: openAddModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Manual Add `);
          } else {
            return [
              createTextVNode(" Manual Add ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-4 gap-6"><div class="lg:col-span-1 space-y-6">`);
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div${_scopeId}><p class="text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>Total Questions</p><p class="text-2xl font-bold text-primary-600"${_scopeId}>${ssrInterpolate(unref(questions)?.length || 0)}</p></div>`);
            _push2(ssrRenderComponent(_component_UDivider, null, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>Passing Score</p><p class="text-lg font-semibold"${_scopeId}>${ssrInterpolate(unref(exam)?.passingScore || 70)}%</p></div><div${_scopeId}><p class="text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>Time Limit</p><p class="text-lg font-semibold"${_scopeId}>${ssrInterpolate(unref(exam)?.timeLimit || 0)} min</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", null, [
                  createVNode("p", { class: "text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Total Questions"),
                  createVNode("p", { class: "text-2xl font-bold text-primary-600" }, toDisplayString(unref(questions)?.length || 0), 1)
                ]),
                createVNode(_component_UDivider),
                createVNode("div", null, [
                  createVNode("p", { class: "text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Passing Score"),
                  createVNode("p", { class: "text-lg font-semibold" }, toDisplayString(unref(exam)?.passingScore || 70) + "%", 1)
                ]),
                createVNode("div", null, [
                  createVNode("p", { class: "text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Time Limit"),
                  createVNode("p", { class: "text-lg font-semibold" }, toDisplayString(unref(exam)?.timeLimit || 0) + " min", 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="lg:col-span-3">`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center"${_scopeId}><h2 class="text-xl font-bold"${_scopeId}>Exam Questions</h2>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: search.value,
              "onUpdate:modelValue": ($event) => search.value = $event,
              icon: "i-heroicons-magnifying-glass",
              placeholder: "Search questions..."
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center" }, [
                createVNode("h2", { class: "text-xl font-bold" }, "Exam Questions"),
                createVNode(_component_UInput, {
                  modelValue: search.value,
                  "onUpdate:modelValue": ($event) => search.value = $event,
                  icon: "i-heroicons-magnifying-glass",
                  placeholder: "Search questions..."
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(pending)) {
              _push2(`<div class="flex justify-center p-12"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-arrow-path",
                class: "animate-spin text-4xl text-primary-500"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (!unref(questions) || unref(questions).length === 0) {
              _push2(`<div class="text-center p-12 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-document-text",
                class: "text-5xl text-gray-300 mb-4"
              }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-lg font-medium text-gray-400"${_scopeId}>No questions found</h3><p class="text-sm text-gray-500 mt-2"${_scopeId}>Start by uploading images or adding questions manually.</p></div>`);
            } else {
              _push2(`<div class="space-y-4"${_scopeId}><!--[-->`);
              ssrRenderList(filteredQuestions.value, (q, idx) => {
                _push2(ssrRenderComponent(_component_UCard, {
                  key: q.id,
                  class: "relative group hover:border-primary-500 transition-colors"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex gap-4"${_scopeId2}><div class="flex-none"${_scopeId2}><span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 text-sm font-bold"${_scopeId2}>${ssrInterpolate(idx + 1)}</span></div><div class="flex-1 min-w-0"${_scopeId2}><p class="text-gray-900 dark:text-white font-medium break-words leading-relaxed"${_scopeId2}>${ssrInterpolate(q.question)}</p><div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3"${_scopeId2}><!--[-->`);
                      ssrRenderList(getOptions(q.options), (opt, oIdx) => {
                        _push3(`<div class="${ssrRenderClass([oIdx === q.answer ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400" : "bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400", "p-3 rounded-lg text-sm flex gap-3 items-start"])}"${_scopeId2}><span class="font-bold opacity-60"${_scopeId2}>${ssrInterpolate(String.fromCharCode(65 + oIdx))}.</span><span${_scopeId2}>${ssrInterpolate(opt)}</span>`);
                        if (oIdx === q.answer) {
                          _push3(ssrRenderComponent(_component_UIcon, {
                            name: "i-heroicons-check-circle",
                            class: "ml-auto flex-none text-green-500"
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</div>`);
                      });
                      _push3(`<!--]--></div>`);
                      if (q.explanation) {
                        _push3(`<div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-xs text-blue-700 dark:text-blue-400"${_scopeId2}><p class="font-bold mb-1 flex items-center gap-1"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-information-circle" }, null, _parent3, _scopeId2));
                        _push3(` Explanation </p> ${ssrInterpolate(q.explanation)}</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div><div class="flex-none opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_UButton, {
                        size: "xs",
                        color: "primary",
                        variant: "soft",
                        icon: "i-heroicons-pencil",
                        onClick: ($event) => openEditModal(q)
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_UButton, {
                        size: "xs",
                        color: "red",
                        variant: "soft",
                        icon: "i-heroicons-trash",
                        onClick: ($event) => confirmDelete(q.id)
                      }, null, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex gap-4" }, [
                          createVNode("div", { class: "flex-none" }, [
                            createVNode("span", { class: "inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 text-sm font-bold" }, toDisplayString(idx + 1), 1)
                          ]),
                          createVNode("div", { class: "flex-1 min-w-0" }, [
                            createVNode("p", { class: "text-gray-900 dark:text-white font-medium break-words leading-relaxed" }, toDisplayString(q.question), 1),
                            createVNode("div", { class: "mt-4 grid grid-cols-1 md:grid-cols-2 gap-3" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(getOptions(q.options), (opt, oIdx) => {
                                return openBlock(), createBlock("div", {
                                  key: oIdx,
                                  class: ["p-3 rounded-lg text-sm flex gap-3 items-start", oIdx === q.answer ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400" : "bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400"]
                                }, [
                                  createVNode("span", { class: "font-bold opacity-60" }, toDisplayString(String.fromCharCode(65 + oIdx)) + ".", 1),
                                  createVNode("span", null, toDisplayString(opt), 1),
                                  oIdx === q.answer ? (openBlock(), createBlock(_component_UIcon, {
                                    key: 0,
                                    name: "i-heroicons-check-circle",
                                    class: "ml-auto flex-none text-green-500"
                                  })) : createCommentVNode("", true)
                                ], 2);
                              }), 128))
                            ]),
                            q.explanation ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-xs text-blue-700 dark:text-blue-400"
                            }, [
                              createVNode("p", { class: "font-bold mb-1 flex items-center gap-1" }, [
                                createVNode(_component_UIcon, { name: "i-heroicons-information-circle" }),
                                createTextVNode(" Explanation ")
                              ]),
                              createTextVNode(" " + toDisplayString(q.explanation), 1)
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "flex-none opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2" }, [
                            createVNode(_component_UButton, {
                              size: "xs",
                              color: "primary",
                              variant: "soft",
                              icon: "i-heroicons-pencil",
                              onClick: ($event) => openEditModal(q)
                            }, null, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              size: "xs",
                              color: "red",
                              variant: "soft",
                              icon: "i-heroicons-trash",
                              onClick: ($event) => confirmDelete(q.id)
                            }, null, 8, ["onClick"])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            }
          } else {
            return [
              unref(pending) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex justify-center p-12"
              }, [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-arrow-path",
                  class: "animate-spin text-4xl text-primary-500"
                })
              ])) : !unref(questions) || unref(questions).length === 0 ? (openBlock(), createBlock("div", {
                key: 1,
                class: "text-center p-12 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg"
              }, [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-document-text",
                  class: "text-5xl text-gray-300 mb-4"
                }),
                createVNode("h3", { class: "text-lg font-medium text-gray-400" }, "No questions found"),
                createVNode("p", { class: "text-sm text-gray-500 mt-2" }, "Start by uploading images or adding questions manually.")
              ])) : (openBlock(), createBlock("div", {
                key: 2,
                class: "space-y-4"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(filteredQuestions.value, (q, idx) => {
                  return openBlock(), createBlock(_component_UCard, {
                    key: q.id,
                    class: "relative group hover:border-primary-500 transition-colors"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex gap-4" }, [
                        createVNode("div", { class: "flex-none" }, [
                          createVNode("span", { class: "inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 text-sm font-bold" }, toDisplayString(idx + 1), 1)
                        ]),
                        createVNode("div", { class: "flex-1 min-w-0" }, [
                          createVNode("p", { class: "text-gray-900 dark:text-white font-medium break-words leading-relaxed" }, toDisplayString(q.question), 1),
                          createVNode("div", { class: "mt-4 grid grid-cols-1 md:grid-cols-2 gap-3" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(getOptions(q.options), (opt, oIdx) => {
                              return openBlock(), createBlock("div", {
                                key: oIdx,
                                class: ["p-3 rounded-lg text-sm flex gap-3 items-start", oIdx === q.answer ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400" : "bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400"]
                              }, [
                                createVNode("span", { class: "font-bold opacity-60" }, toDisplayString(String.fromCharCode(65 + oIdx)) + ".", 1),
                                createVNode("span", null, toDisplayString(opt), 1),
                                oIdx === q.answer ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: "i-heroicons-check-circle",
                                  class: "ml-auto flex-none text-green-500"
                                })) : createCommentVNode("", true)
                              ], 2);
                            }), 128))
                          ]),
                          q.explanation ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-xs text-blue-700 dark:text-blue-400"
                          }, [
                            createVNode("p", { class: "font-bold mb-1 flex items-center gap-1" }, [
                              createVNode(_component_UIcon, { name: "i-heroicons-information-circle" }),
                              createTextVNode(" Explanation ")
                            ]),
                            createTextVNode(" " + toDisplayString(q.explanation), 1)
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex-none opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2" }, [
                          createVNode(_component_UButton, {
                            size: "xs",
                            color: "primary",
                            variant: "soft",
                            icon: "i-heroicons-pencil",
                            onClick: ($event) => openEditModal(q)
                          }, null, 8, ["onClick"]),
                          createVNode(_component_UButton, {
                            size: "xs",
                            color: "red",
                            variant: "soft",
                            icon: "i-heroicons-trash",
                            onClick: ($event) => confirmDelete(q.id)
                          }, null, 8, ["onClick"])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: isModalOpen.value,
        "onUpdate:modelValue": ($event) => isModalOpen.value = $event,
        ui: { width: "sm:max-w-2xl" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><h3 class="text-xl font-bold"${_scopeId2}>${ssrInterpolate(isEditing.value ? "Edit Question" : "Add Manual Question")}</h3>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    icon: "i-heroicons-x-mark",
                    onClick: ($event) => isModalOpen.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("h3", { class: "text-xl font-bold" }, toDisplayString(isEditing.value ? "Edit Question" : "Add Manual Question"), 1),
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "ghost",
                        icon: "i-heroicons-x-mark",
                        onClick: ($event) => isModalOpen.value = false
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-end gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    onClick: ($event) => isModalOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Cancel`);
                      } else {
                        return [
                          createTextVNode("Cancel")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "primary",
                    loading: saving.value,
                    icon: "i-heroicons-check",
                    onClick: handleSave
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(isEditing.value ? "Save Changes" : "Add Question")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(isEditing.value ? "Save Changes" : "Add Question"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-end gap-3" }, [
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "ghost",
                        onClick: ($event) => isModalOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancel")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        color: "primary",
                        loading: saving.value,
                        icon: "i-heroicons-check",
                        onClick: handleSave
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(isEditing.value ? "Save Changes" : "Add Question"), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-4 max-h-[70vh] overflow-y-auto pr-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Question Text",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UTextarea, {
                          modelValue: form.question,
                          "onUpdate:modelValue": ($event) => form.question = $event,
                          placeholder: "Enter the question here...",
                          autoresize: "",
                          rows: 3
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UTextarea, {
                            modelValue: form.question,
                            "onUpdate:modelValue": ($event) => form.question = $event,
                            placeholder: "Enter the question here...",
                            autoresize: "",
                            rows: 3
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="space-y-3"${_scopeId2}><p class="text-sm font-medium text-gray-700 dark:text-gray-300"${_scopeId2}>Answer Options</p><!--[-->`);
                  ssrRenderList(4, (opt, idx) => {
                    _push3(`<div class="flex gap-2 items-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_URadio, {
                      modelValue: form.answer,
                      "onUpdate:modelValue": ($event) => form.answer = $event,
                      value: idx,
                      name: "correct-answer",
                      class: "mt-1",
                      ui: { base: "h-5 w-5 text-green-600" }
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: form.options[idx],
                      "onUpdate:modelValue": ($event) => form.options[idx] = $event,
                      class: "flex-1",
                      placeholder: `Option ${String.fromCharCode(65 + idx)}`,
                      color: form.answer === idx ? "green" : "gray"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--><p class="text-xs text-gray-500"${_scopeId2}>Select the radio button next to the correct answer.</p></div>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, { label: "Explanation (Optional)" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UTextarea, {
                          modelValue: form.explanation,
                          "onUpdate:modelValue": ($event) => form.explanation = $event,
                          placeholder: "Provide context on why the answer is correct...",
                          autoresize: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UTextarea, {
                            modelValue: form.explanation,
                            "onUpdate:modelValue": ($event) => form.explanation = $event,
                            placeholder: "Provide context on why the answer is correct...",
                            autoresize: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="grid grid-cols-2 gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, { label: "Topic" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: form.topic,
                          "onUpdate:modelValue": ($event) => form.topic = $event,
                          placeholder: "e.g. EC2, IAM"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: form.topic,
                            "onUpdate:modelValue": ($event) => form.topic = $event,
                            placeholder: "e.g. EC2, IAM"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, { label: "Difficulty" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_USelect, {
                          modelValue: form.difficulty,
                          "onUpdate:modelValue": ($event) => form.difficulty = $event,
                          options: ["easy", "medium", "hard"]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_USelect, {
                            modelValue: form.difficulty,
                            "onUpdate:modelValue": ($event) => form.difficulty = $event,
                            options: ["easy", "medium", "hard"]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-4 max-h-[70vh] overflow-y-auto pr-2" }, [
                      createVNode(_component_UFormGroup, {
                        label: "Question Text",
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UTextarea, {
                            modelValue: form.question,
                            "onUpdate:modelValue": ($event) => form.question = $event,
                            placeholder: "Enter the question here...",
                            autoresize: "",
                            rows: 3
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "space-y-3" }, [
                        createVNode("p", { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, "Answer Options"),
                        (openBlock(), createBlock(Fragment, null, renderList(4, (opt, idx) => {
                          return createVNode("div", {
                            key: idx,
                            class: "flex gap-2 items-center"
                          }, [
                            createVNode(_component_URadio, {
                              modelValue: form.answer,
                              "onUpdate:modelValue": ($event) => form.answer = $event,
                              value: idx,
                              name: "correct-answer",
                              class: "mt-1",
                              ui: { base: "h-5 w-5 text-green-600" }
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                            createVNode(_component_UInput, {
                              modelValue: form.options[idx],
                              "onUpdate:modelValue": ($event) => form.options[idx] = $event,
                              class: "flex-1",
                              placeholder: `Option ${String.fromCharCode(65 + idx)}`,
                              color: form.answer === idx ? "green" : "gray"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "color"])
                          ]);
                        }), 64)),
                        createVNode("p", { class: "text-xs text-gray-500" }, "Select the radio button next to the correct answer.")
                      ]),
                      createVNode(_component_UFormGroup, { label: "Explanation (Optional)" }, {
                        default: withCtx(() => [
                          createVNode(_component_UTextarea, {
                            modelValue: form.explanation,
                            "onUpdate:modelValue": ($event) => form.explanation = $event,
                            placeholder: "Provide context on why the answer is correct...",
                            autoresize: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                        createVNode(_component_UFormGroup, { label: "Topic" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: form.topic,
                              "onUpdate:modelValue": ($event) => form.topic = $event,
                              placeholder: "e.g. EC2, IAM"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Difficulty" }, {
                          default: withCtx(() => [
                            createVNode(_component_USelect, {
                              modelValue: form.difficulty,
                              "onUpdate:modelValue": ($event) => form.difficulty = $event,
                              options: ["easy", "medium", "hard"]
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, null, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("h3", { class: "text-xl font-bold" }, toDisplayString(isEditing.value ? "Edit Question" : "Add Manual Question"), 1),
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-x-mark",
                      onClick: ($event) => isModalOpen.value = false
                    }, null, 8, ["onClick"])
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode("div", { class: "flex justify-end gap-3" }, [
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      onClick: ($event) => isModalOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Cancel")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      color: "primary",
                      loading: saving.value,
                      icon: "i-heroicons-check",
                      onClick: handleSave
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(isEditing.value ? "Save Changes" : "Add Question"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-4 max-h-[70vh] overflow-y-auto pr-2" }, [
                    createVNode(_component_UFormGroup, {
                      label: "Question Text",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UTextarea, {
                          modelValue: form.question,
                          "onUpdate:modelValue": ($event) => form.question = $event,
                          placeholder: "Enter the question here...",
                          autoresize: "",
                          rows: 3
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "space-y-3" }, [
                      createVNode("p", { class: "text-sm font-medium text-gray-700 dark:text-gray-300" }, "Answer Options"),
                      (openBlock(), createBlock(Fragment, null, renderList(4, (opt, idx) => {
                        return createVNode("div", {
                          key: idx,
                          class: "flex gap-2 items-center"
                        }, [
                          createVNode(_component_URadio, {
                            modelValue: form.answer,
                            "onUpdate:modelValue": ($event) => form.answer = $event,
                            value: idx,
                            name: "correct-answer",
                            class: "mt-1",
                            ui: { base: "h-5 w-5 text-green-600" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                          createVNode(_component_UInput, {
                            modelValue: form.options[idx],
                            "onUpdate:modelValue": ($event) => form.options[idx] = $event,
                            class: "flex-1",
                            placeholder: `Option ${String.fromCharCode(65 + idx)}`,
                            color: form.answer === idx ? "green" : "gray"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "color"])
                        ]);
                      }), 64)),
                      createVNode("p", { class: "text-xs text-gray-500" }, "Select the radio button next to the correct answer.")
                    ]),
                    createVNode(_component_UFormGroup, { label: "Explanation (Optional)" }, {
                      default: withCtx(() => [
                        createVNode(_component_UTextarea, {
                          modelValue: form.explanation,
                          "onUpdate:modelValue": ($event) => form.explanation = $event,
                          placeholder: "Provide context on why the answer is correct...",
                          autoresize: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                      createVNode(_component_UFormGroup, { label: "Topic" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: form.topic,
                            "onUpdate:modelValue": ($event) => form.topic = $event,
                            placeholder: "e.g. EC2, IAM"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Difficulty" }, {
                        default: withCtx(() => [
                          createVNode(_component_USelect, {
                            modelValue: form.difficulty,
                            "onUpdate:modelValue": ($event) => form.difficulty = $event,
                            options: ["easy", "medium", "hard"]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/exams/[id]/questions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=questions-CGETg3C6.js.map
