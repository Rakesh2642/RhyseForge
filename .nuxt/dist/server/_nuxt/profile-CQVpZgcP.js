import __nuxt_component_0 from "./Container-BN6VrUpB.js";
import { u as useAuth, f as __nuxt_component_6, b as __nuxt_component_3$1, _ as __nuxt_component_2$1 } from "../server.mjs";
import __nuxt_component_3 from "./Badge-CzftAi4r.js";
import __nuxt_component_2 from "./Card-CgPQDjgh.js";
import __nuxt_component_6$1 from "./Toggle-CA1O4bV-.js";
import { mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
import "./form-DsUILy5F.js";
import "./keyboard-BCt0ZeLv.js";
import "./use-resolve-button-type-CCTzT7JK.js";
import "./hidden-e5tlhUcy.js";
import "./description-CG6lMCGz.js";
import "./useFormGroup-DqE91r20.js";
const _sfc_main = {
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: authData } = useAuth();
    const user = authData.value?.user;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0;
      const _component_UAvatar = __nuxt_component_6;
      const _component_UBadge = __nuxt_component_3;
      const _component_UButton = __nuxt_component_3$1;
      const _component_UCard = __nuxt_component_2;
      const _component_UIcon = __nuxt_component_2$1;
      const _component_UToggle = __nuxt_component_6$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12 bg-gray-50 dark:bg-gray-900 min-h-[calc(100vh-64px)]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl mx-auto"${_scopeId}><div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-8 border border-gray-100 dark:border-gray-700"${_scopeId}><div class="h-32 bg-gradient-to-r from-blue-600 to-indigo-700"${_scopeId}></div><div class="px-8 pb-8 -mt-16"${_scopeId}><div class="flex flex-col md:flex-row items-end gap-6 mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
              size: "3xl",
              class: "ring-4 ring-white dark:ring-gray-800 h-32 w-32 shadow-2xl"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex-grow pb-2"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><h1 class="text-3xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(user)?.name || "Administrator")}</h1>`);
            _push2(ssrRenderComponent(_component_UBadge, {
              color: "red",
              variant: "solid",
              class: "text-[10px] px-2 py-0.5"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`ADMIN`);
                } else {
                  return [
                    createTextVNode("ADMIN")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><p class="text-gray-500"${_scopeId}>${ssrInterpolate(unref(user)?.email)}</p></div><div class="pb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "black",
              variant: "solid",
              icon: "i-heroicons-pencil-square"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Edit Profile`);
                } else {
                  return [
                    createTextVNode("Edit Profile")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"${_scopeId}><div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700"${_scopeId}><div class="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1"${_scopeId}>System Access</div><div class="text-lg font-bold text-gray-900 dark:text-white"${_scopeId}>Full Privileges</div></div><div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700"${_scopeId}><div class="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1"${_scopeId}>Last Login</div><div class="text-lg font-bold text-gray-900 dark:text-white"${_scopeId}>Today, 10:45 AM</div></div><div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700"${_scopeId}><div class="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1"${_scopeId}>Joined Date</div><div class="text-lg font-bold text-gray-900 dark:text-white"${_scopeId}>Oct 12, 2023</div></div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"${_scopeId}><div class="lg:col-span-2 space-y-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-shield-check",
                    class: "text-blue-500 text-xl"
                  }, null, _parent3, _scopeId2));
                  _push3(`<h3 class="font-bold"${_scopeId2}>Security Settings</h3></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-shield-check",
                        class: "text-blue-500 text-xl"
                      }),
                      createVNode("h3", { class: "font-bold" }, "Security Settings")
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-4"${_scopeId2}><div class="flex items-center justify-between p-4 rounded-lg border border-gray-100 dark:border-gray-700"${_scopeId2}><div${_scopeId2}><div class="font-bold text-gray-900 dark:text-white"${_scopeId2}>Two-Factor Authentication</div><div class="text-sm text-gray-500"${_scopeId2}>Enhanced account security</div></div>`);
                  _push3(ssrRenderComponent(_component_UToggle, { "model-value": true }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex items-center justify-between p-4 rounded-lg border border-gray-100 dark:border-gray-700"${_scopeId2}><div${_scopeId2}><div class="font-bold text-gray-900 dark:text-white"${_scopeId2}>API Key Access</div><div class="text-sm text-gray-500"${_scopeId2}>Manage internal tool integrations</div></div>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "soft",
                    size: "sm"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Manage Keys`);
                      } else {
                        return [
                          createTextVNode("Manage Keys")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "flex items-center justify-between p-4 rounded-lg border border-gray-100 dark:border-gray-700" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "font-bold text-gray-900 dark:text-white" }, "Two-Factor Authentication"),
                          createVNode("div", { class: "text-sm text-gray-500" }, "Enhanced account security")
                        ]),
                        createVNode(_component_UToggle, { "model-value": true })
                      ]),
                      createVNode("div", { class: "flex items-center justify-between p-4 rounded-lg border border-gray-100 dark:border-gray-700" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "font-bold text-gray-900 dark:text-white" }, "API Key Access"),
                          createVNode("div", { class: "text-sm text-gray-500" }, "Manage internal tool integrations")
                        ]),
                        createVNode(_component_UButton, {
                          color: "gray",
                          variant: "soft",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Manage Keys")
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
            _push2(`</div><div class="space-y-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="font-bold"${_scopeId2}>Admin Activity</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "font-bold" }, "Admin Activity")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-6"${_scopeId2}><div class="flex gap-4"${_scopeId2}><div class="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-arrow-up-tray",
                    class: "text-blue-600"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}><div class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId2}>Uploaded AW-SCS Mock</div><div class="text-xs text-gray-500"${_scopeId2}>2 hours ago</div></div></div><div class="flex gap-4"${_scopeId2}><div class="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-check-circle",
                    class: "text-green-600"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}><div class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId2}>Reviewed 45 questions</div><div class="text-xs text-gray-500"${_scopeId2}>Yesterday</div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", { class: "flex gap-4" }, [
                        createVNode("div", { class: "h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0" }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-arrow-up-tray",
                            class: "text-blue-600"
                          })
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-sm font-medium text-gray-900 dark:text-white" }, "Uploaded AW-SCS Mock"),
                          createVNode("div", { class: "text-xs text-gray-500" }, "2 hours ago")
                        ])
                      ]),
                      createVNode("div", { class: "flex gap-4" }, [
                        createVNode("div", { class: "h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0" }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-check-circle",
                            class: "text-green-600"
                          })
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-sm font-medium text-gray-900 dark:text-white" }, "Reviewed 45 questions"),
                          createVNode("div", { class: "text-xs text-gray-500" }, "Yesterday")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl mx-auto" }, [
                createVNode("div", { class: "bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-8 border border-gray-100 dark:border-gray-700" }, [
                  createVNode("div", { class: "h-32 bg-gradient-to-r from-blue-600 to-indigo-700" }),
                  createVNode("div", { class: "px-8 pb-8 -mt-16" }, [
                    createVNode("div", { class: "flex flex-col md:flex-row items-end gap-6 mb-6" }, [
                      createVNode(_component_UAvatar, {
                        src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
                        size: "3xl",
                        class: "ring-4 ring-white dark:ring-gray-800 h-32 w-32 shadow-2xl"
                      }),
                      createVNode("div", { class: "flex-grow pb-2" }, [
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode("h1", { class: "text-3xl font-bold text-gray-900 dark:text-white" }, toDisplayString(unref(user)?.name || "Administrator"), 1),
                          createVNode(_component_UBadge, {
                            color: "red",
                            variant: "solid",
                            class: "text-[10px] px-2 py-0.5"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("ADMIN")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("p", { class: "text-gray-500" }, toDisplayString(unref(user)?.email), 1)
                      ]),
                      createVNode("div", { class: "pb-2" }, [
                        createVNode(_component_UButton, {
                          color: "black",
                          variant: "solid",
                          icon: "i-heroicons-pencil-square"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Edit Profile")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6" }, [
                      createVNode("div", { class: "p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700" }, [
                        createVNode("div", { class: "text-gray-500 text-xs font-bold uppercase tracking-wider mb-1" }, "System Access"),
                        createVNode("div", { class: "text-lg font-bold text-gray-900 dark:text-white" }, "Full Privileges")
                      ]),
                      createVNode("div", { class: "p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700" }, [
                        createVNode("div", { class: "text-gray-500 text-xs font-bold uppercase tracking-wider mb-1" }, "Last Login"),
                        createVNode("div", { class: "text-lg font-bold text-gray-900 dark:text-white" }, "Today, 10:45 AM")
                      ]),
                      createVNode("div", { class: "p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700" }, [
                        createVNode("div", { class: "text-gray-500 text-xs font-bold uppercase tracking-wider mb-1" }, "Joined Date"),
                        createVNode("div", { class: "text-lg font-bold text-gray-900 dark:text-white" }, "Oct 12, 2023")
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-8" }, [
                  createVNode("div", { class: "lg:col-span-2 space-y-6" }, [
                    createVNode(_component_UCard, null, {
                      header: withCtx(() => [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-shield-check",
                            class: "text-blue-500 text-xl"
                          }),
                          createVNode("h3", { class: "font-bold" }, "Security Settings")
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", { class: "flex items-center justify-between p-4 rounded-lg border border-gray-100 dark:border-gray-700" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "font-bold text-gray-900 dark:text-white" }, "Two-Factor Authentication"),
                              createVNode("div", { class: "text-sm text-gray-500" }, "Enhanced account security")
                            ]),
                            createVNode(_component_UToggle, { "model-value": true })
                          ]),
                          createVNode("div", { class: "flex items-center justify-between p-4 rounded-lg border border-gray-100 dark:border-gray-700" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "font-bold text-gray-900 dark:text-white" }, "API Key Access"),
                              createVNode("div", { class: "text-sm text-gray-500" }, "Manage internal tool integrations")
                            ]),
                            createVNode(_component_UButton, {
                              color: "gray",
                              variant: "soft",
                              size: "sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Manage Keys")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "space-y-6" }, [
                    createVNode(_component_UCard, null, {
                      header: withCtx(() => [
                        createVNode("h3", { class: "font-bold" }, "Admin Activity")
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-6" }, [
                          createVNode("div", { class: "flex gap-4" }, [
                            createVNode("div", { class: "h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0" }, [
                              createVNode(_component_UIcon, {
                                name: "i-heroicons-arrow-up-tray",
                                class: "text-blue-600"
                              })
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "text-sm font-medium text-gray-900 dark:text-white" }, "Uploaded AW-SCS Mock"),
                              createVNode("div", { class: "text-xs text-gray-500" }, "2 hours ago")
                            ])
                          ]),
                          createVNode("div", { class: "flex gap-4" }, [
                            createVNode("div", { class: "h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0" }, [
                              createVNode(_component_UIcon, {
                                name: "i-heroicons-check-circle",
                                class: "text-green-600"
                              })
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "text-sm font-medium text-gray-900 dark:text-white" }, "Reviewed 45 questions"),
                              createVNode("div", { class: "text-xs text-gray-500" }, "Yesterday")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=profile-CQVpZgcP.js.map
