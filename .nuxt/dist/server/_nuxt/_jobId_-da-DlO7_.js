import { b as __nuxt_component_3, _ as __nuxt_component_2 } from "../server.mjs";
import __nuxt_component_2$1 from "./Card-CgPQDjgh.js";
import __nuxt_component_3$1 from "./Badge-CzftAi4r.js";
import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
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
import "tailwind-merge";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "ohash/utils";
const _sfc_main = {
  __name: "[jobId]",
  __ssrInlineRender: true,
  setup(__props) {
    const questions = ref([]);
    const pending = ref(true);
    const getConfidenceColor = (score) => {
      if (score >= 0.95) return "green";
      if (score >= 0.85) return "yellow";
      return "red";
    };
    const getConfidenceBorder = (score) => {
      if (score >= 0.95) return "border-green-500";
      if (score >= 0.85) return "border-yellow-500";
      return "border-red-500";
    };
    const approve = async (id) => {
      await $fetch(`/api/admin/questions/${id}/approve`, { method: "POST" });
      questions.value = questions.value.filter((q) => q.id !== id);
    };
    const reject = async (id) => {
      await $fetch(`/api/admin/questions/${id}`, { method: "DELETE" });
      questions.value = questions.value.filter((q) => q.id !== id);
    };
    const edit = (id) => {
      alert("Edit logic not implemented in Phase 2 mock yet");
    };
    const bulkApprove = async () => {
      if (questions.value.length === 0) return;
      const ids = questions.value.map((q) => q.id);
      try {
        await $fetch("/api/admin/questions/bulk-approve", {
          method: "POST",
          body: { ids }
        });
        questions.value = [];
      } catch (err) {
        alert("Bulk approval failed: " + err.message);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_3;
      const _component_UIcon = __nuxt_component_2;
      const _component_UCard = __nuxt_component_2$1;
      const _component_UBadge = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-100 dark:bg-gray-800 p-8 transition-colors duration-300" }, _attrs))}><div class="max-w-7xl mx-auto"><div class="flex justify-between items-center mb-8"><div><h1 class="text-3xl font-bold text-gray-900 dark:text-white">Review Queue</h1><p class="text-sm text-gray-500 mt-1">Review questions extracted via AI before publishing them.</p></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "green",
        icon: "i-heroicons-check-circle",
        onClick: bulkApprove
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Bulk Approve All`);
          } else {
            return [
              createTextVNode("Bulk Approve All")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (pending.value) {
        _push(`<div class="flex justify-center h-64 items-center">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-arrow-path",
          class: "animate-spin text-4xl text-primary-500"
        }, null, _parent));
        _push(`</div>`);
      } else if (questions.value.length === 0) {
        _push(`<div class="text-center py-16 bg-white dark:bg-gray-900 rounded-lg shadow">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-clipboard-document-check",
          class: "text-6xl text-green-500 mb-4"
        }, null, _parent));
        _push(`<h3 class="text-xl text-gray-900 dark:text-white">All caught up!</h3><p class="text-gray-500">No pending questions in the review queue.</p></div>`);
      } else {
        _push(`<div class="space-y-6"><!--[-->`);
        ssrRenderList(questions.value, (q, idx) => {
          _push(ssrRenderComponent(_component_UCard, {
            key: q.id,
            class: ["border-l-4", getConfidenceBorder(q.confidenceScore)]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex justify-between items-start mb-4"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="font-bold"${_scopeId}>Q${ssrInterpolate(idx + 1)}</span>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: getConfidenceColor(q.confidenceScore)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` AI Confidence: ${ssrInterpolate(Math.round((q.confidenceScore || 0) * 100))}% `);
                    } else {
                      return [
                        createTextVNode(" AI Confidence: " + toDisplayString(Math.round((q.confidenceScore || 0) * 100)) + "% ", 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                if (q.confidenceScore < 0.85) {
                  _push2(ssrRenderComponent(_component_UBadge, {
                    color: "red",
                    variant: "solid"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`Needs Review`);
                      } else {
                        return [
                          createTextVNode("Needs Review")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="space-x-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "sm",
                  color: "red",
                  variant: "soft",
                  icon: "i-heroicons-trash",
                  onClick: ($event) => reject(q.id)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Reject`);
                    } else {
                      return [
                        createTextVNode("Reject")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "sm",
                  color: "primary",
                  variant: "soft",
                  icon: "i-heroicons-pencil",
                  onClick: ($event) => edit(q.id)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Edit`);
                    } else {
                      return [
                        createTextVNode("Edit")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "sm",
                  color: "green",
                  variant: "solid",
                  icon: "i-heroicons-check",
                  onClick: ($event) => approve(q.id)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Approve`);
                    } else {
                      return [
                        createTextVNode("Approve")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div><div class="mb-4"${_scopeId}><h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-2"${_scopeId}>Question:</h4><p class="text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(q.question)}</p></div><div class="grid grid-cols-2 gap-4 mb-4"${_scopeId}><!--[-->`);
                ssrRenderList(q.options, (opt, optIdx) => {
                  _push2(`<div class="${ssrRenderClass([optIdx === q.answer ? "bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-800" : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700", "p-3 rounded border"])}"${_scopeId}><span class="font-mono text-xs mr-2 text-gray-500"${_scopeId}>${ssrInterpolate(String.fromCharCode(65 + optIdx))}</span> ${ssrInterpolate(opt)} `);
                  if (optIdx === q.answer) {
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: "i-heroicons-check-circle",
                      class: "text-green-500 ml-2"
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                });
                _push2(`<!--]--></div><div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded text-sm text-gray-700 dark:text-gray-300"${_scopeId}><span class="font-bold"${_scopeId}>Explanation:</span> ${ssrInterpolate(q.explanation)}</div>`);
              } else {
                return [
                  createVNode("div", { class: "flex justify-between items-start mb-4" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("span", { class: "font-bold" }, "Q" + toDisplayString(idx + 1), 1),
                      createVNode(_component_UBadge, {
                        color: getConfidenceColor(q.confidenceScore)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" AI Confidence: " + toDisplayString(Math.round((q.confidenceScore || 0) * 100)) + "% ", 1)
                        ]),
                        _: 2
                      }, 1032, ["color"]),
                      q.confidenceScore < 0.85 ? (openBlock(), createBlock(_component_UBadge, {
                        key: 0,
                        color: "red",
                        variant: "solid"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Needs Review")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "space-x-2" }, [
                      createVNode(_component_UButton, {
                        size: "sm",
                        color: "red",
                        variant: "soft",
                        icon: "i-heroicons-trash",
                        onClick: ($event) => reject(q.id)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Reject")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        size: "sm",
                        color: "primary",
                        variant: "soft",
                        icon: "i-heroicons-pencil",
                        onClick: ($event) => edit(q.id)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Edit")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        size: "sm",
                        color: "green",
                        variant: "solid",
                        icon: "i-heroicons-check",
                        onClick: ($event) => approve(q.id)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Approve")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "mb-4" }, [
                    createVNode("h4", { class: "font-semibold text-gray-800 dark:text-gray-200 mb-2" }, "Question:"),
                    createVNode("p", { class: "text-gray-700 dark:text-gray-300" }, toDisplayString(q.question), 1)
                  ]),
                  createVNode("div", { class: "grid grid-cols-2 gap-4 mb-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(q.options, (opt, optIdx) => {
                      return openBlock(), createBlock("div", {
                        key: optIdx,
                        class: ["p-3 rounded border", optIdx === q.answer ? "bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-800" : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"]
                      }, [
                        createVNode("span", { class: "font-mono text-xs mr-2 text-gray-500" }, toDisplayString(String.fromCharCode(65 + optIdx)), 1),
                        createTextVNode(" " + toDisplayString(opt) + " ", 1),
                        optIdx === q.answer ? (openBlock(), createBlock(_component_UIcon, {
                          key: 0,
                          name: "i-heroicons-check-circle",
                          class: "text-green-500 ml-2"
                        })) : createCommentVNode("", true)
                      ], 2);
                    }), 128))
                  ]),
                  createVNode("div", { class: "bg-blue-50 dark:bg-blue-900/30 p-4 rounded text-sm text-gray-700 dark:text-gray-300" }, [
                    createVNode("span", { class: "font-bold" }, "Explanation:"),
                    createTextVNode(" " + toDisplayString(q.explanation), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/review/[jobId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_jobId_-da-DlO7_.js.map
