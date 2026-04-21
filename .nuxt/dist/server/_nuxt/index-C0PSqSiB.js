import { u as useAuth, a as useRouter, _ as __nuxt_component_2, b as __nuxt_component_3$1 } from "../server.mjs";
import __nuxt_component_2$1 from "./Card-CgPQDjgh.js";
import __nuxt_component_3 from "./Badge-CzftAi4r.js";
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/hookable/dist/index.mjs";
import { u as useFetch } from "./fetch-Dtzn_qiz.js";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/klona/dist/index.mjs";
import "#internal/nuxt/paths";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/defu/dist/defu.mjs";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/ofetch/dist/node.mjs";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/unctx/dist/index.mjs";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/h3/dist/index.mjs";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/ufo/dist/index.mjs";
import "vue-router";
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
import "@vue/shared";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { data, pending, error } = useFetch(
      "/api/exams",
      "$iZrA3lPfaQ"
      /* nuxt-injected */
    );
    const { status } = useAuth();
    const router = useRouter();
    const handleAction = (url) => {
      if (status.value === "authenticated") {
        router.push(url);
      } else {
        router.push("/login");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_2;
      const _component_UCard = __nuxt_component_2$1;
      const _component_UBadge = __nuxt_component_3;
      const _component_UButton = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 flex flex-col py-8 md:py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900 transition-colors duration-300" }, _attrs))}><div class="sm:mx-auto sm:w-full sm:max-w-7xl"><div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"><div><h2 class="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white"> RhyseForge </h2><p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> Browse and start certification practice exams. </p></div></div>`);
      if (unref(pending)) {
        _push(`<div class="flex justify-center my-12">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-arrow-path",
          class: "animate-spin text-4xl text-primary-500"
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(error)) {
        _push(`<div class="text-center text-red-500 my-12"> Failed to load exams. Please check your database connection. </div>`);
      } else if (unref(data)?.exams) {
        _push(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(data).exams, (exam) => {
          _push(ssrRenderComponent(_component_UCard, {
            key: exam.id,
            class: "flex flex-col h-full hover:shadow-lg transition-shadow"
          }, {
            header: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex justify-between items-start"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: "gray",
                  variant: "solid",
                  class: "mb-2"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(exam.provider || "General")}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(exam.provider || "General"), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                if (exam.certificationCode) {
                  _push2(ssrRenderComponent(_component_UBadge, {
                    color: "primary",
                    variant: "subtle"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(exam.certificationCode)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(exam.certificationCode), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><h3 class="text-xl font-bold mt-2 text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(exam.title)}</h3>`);
              } else {
                return [
                  createVNode("div", { class: "flex justify-between items-start" }, [
                    createVNode(_component_UBadge, {
                      color: "gray",
                      variant: "solid",
                      class: "mb-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(exam.provider || "General"), 1)
                      ]),
                      _: 2
                    }, 1024),
                    exam.certificationCode ? (openBlock(), createBlock(_component_UBadge, {
                      key: 0,
                      color: "primary",
                      variant: "subtle"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(exam.certificationCode), 1)
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("", true)
                  ]),
                  createVNode("h3", { class: "text-xl font-bold mt-2 text-gray-900 dark:text-white" }, toDisplayString(exam.title), 1)
                ];
              }
            }),
            footer: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex flex-col sm:flex-row gap-2 w-full"${_scopeId}>`);
                if ((exam._count?.questions || 0) > 0) {
                  _push2(`<!--[-->`);
                  _push2(ssrRenderComponent(_component_UButton, {
                    class: "flex-1",
                    onClick: ($event) => handleAction(`/exam/${exam.id}?mode=practice`),
                    color: "primary",
                    variant: "solid",
                    icon: "i-heroicons-play"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` Practice `);
                      } else {
                        return [
                          createTextVNode(" Practice ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_UButton, {
                    class: "flex-1",
                    onClick: ($event) => handleAction(`/exam/${exam.id}?mode=mock`),
                    color: "gray",
                    variant: "outline",
                    icon: "i-heroicons-academic-cap"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` Mock Exam `);
                      } else {
                        return [
                          createTextVNode(" Mock Exam ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`<!--]-->`);
                } else {
                  _push2(ssrRenderComponent(_component_UButton, {
                    class: "flex-1",
                    disabled: "",
                    color: "gray",
                    variant: "soft",
                    icon: "i-heroicons-lock-closed"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` Coming Soon `);
                      } else {
                        return [
                          createTextVNode(" Coming Soon ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                }
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "flex flex-col sm:flex-row gap-2 w-full" }, [
                    (exam._count?.questions || 0) > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(_component_UButton, {
                        class: "flex-1",
                        onClick: ($event) => handleAction(`/exam/${exam.id}?mode=practice`),
                        color: "primary",
                        variant: "solid",
                        icon: "i-heroicons-play"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Practice ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        class: "flex-1",
                        onClick: ($event) => handleAction(`/exam/${exam.id}?mode=mock`),
                        color: "gray",
                        variant: "outline",
                        icon: "i-heroicons-academic-cap"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Mock Exam ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ], 64)) : (openBlock(), createBlock(_component_UButton, {
                      key: 1,
                      class: "flex-1",
                      disabled: "",
                      color: "gray",
                      variant: "soft",
                      icon: "i-heroicons-lock-closed"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Coming Soon ")
                      ]),
                      _: 1
                    }))
                  ])
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex-grow"${_scopeId}><div class="flex mt-2 mb-4 space-x-2 flex-wrap"${_scopeId}><!--[-->`);
                ssrRenderList(exam.categoryTags, (tag) => {
                  _push2(ssrRenderComponent(_component_UBadge, {
                    key: tag,
                    color: "gray",
                    variant: "soft",
                    size: "sm",
                    class: "mr-1 mb-1"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(tag)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(tag), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--></div><div class="text-sm border-t border-gray-100 dark:border-gray-800 pt-4 flex justify-between text-gray-600 dark:text-gray-400"${_scopeId}><span class="flex items-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "i-heroicons-document-text",
                  class: "mr-1"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(exam._count?.questions || 0)} Questions</span>`);
                if (exam.timeLimit) {
                  _push2(`<span class="flex items-center"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-clock",
                    class: "mr-1"
                  }, null, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(exam.timeLimit)} min</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex-grow" }, [
                    createVNode("div", { class: "flex mt-2 mb-4 space-x-2 flex-wrap" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(exam.categoryTags, (tag) => {
                        return openBlock(), createBlock(_component_UBadge, {
                          key: tag,
                          color: "gray",
                          variant: "soft",
                          size: "sm",
                          class: "mr-1 mb-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(tag), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    createVNode("div", { class: "text-sm border-t border-gray-100 dark:border-gray-800 pt-4 flex justify-between text-gray-600 dark:text-gray-400" }, [
                      createVNode("span", { class: "flex items-center" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-document-text",
                          class: "mr-1"
                        }),
                        createTextVNode(" " + toDisplayString(exam._count?.questions || 0) + " Questions", 1)
                      ]),
                      exam.timeLimit ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "flex items-center"
                      }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-clock",
                          class: "mr-1"
                        }),
                        createTextVNode(" " + toDisplayString(exam.timeLimit) + " min", 1)
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data)?.exams && unref(data).exams.length === 0) {
        _push(`<div class="text-center py-12">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-inbox",
          class: "text-6xl text-gray-300 dark:text-gray-600 mb-4"
        }, null, _parent));
        _push(`<h3 class="text-xl text-gray-500 dark:text-gray-400">No published exams found.</h3><p class="text-sm text-gray-400 mt-2">Log in as admin to create or extract exams from images.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-C0PSqSiB.js.map
