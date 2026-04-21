import { u as useAuth, c as __nuxt_component_1, _ as __nuxt_component_2, b as __nuxt_component_3 } from "../server.mjs";
import __nuxt_component_2$1 from "./Card-CgPQDjgh.js";
import __nuxt_component_7 from "./FormGroup-DAIqfz9h.js";
import __nuxt_component_4 from "./Input-CZAMts_N.js";
import { ref, mergeProps, withCtx, createVNode, isRef, unref, createTextVNode, withModifiers, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/hookable/dist/index.mjs";
import { u as useDeviceFingerprint } from "./useDeviceFingerprint-OUZPhd3k.js";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
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
import "./useFormGroup-DqE91r20.js";
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { signIn } = useAuth();
    const { getDeviceId } = useDeviceFingerprint();
    const email = ref("");
    const password = ref("");
    const errorMsg = ref("");
    const loading = ref(false);
    const isDeviceMismatch = ref(false);
    const handleLogin = async () => {
      errorMsg.value = "";
      isDeviceMismatch.value = false;
      loading.value = true;
      try {
        const deviceId = getDeviceId();
        await signIn(
          { email: email.value, password: password.value, deviceId },
          { callbackUrl: "/dashboard" }
        );
      } catch (e) {
        const msg = e?.data?.statusMessage || e?.message || "Login failed. Please check your credentials.";
        errorMsg.value = msg;
        if (msg.toLowerCase().includes("device") || msg.toLowerCase().includes("bound")) {
          isDeviceMismatch.value = true;
        }
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      const _component_UIcon = __nuxt_component_2;
      const _component_UCard = __nuxt_component_2$1;
      const _component_UFormGroup = __nuxt_component_7;
      const _component_UInput = __nuxt_component_4;
      const _component_UButton = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden" }, _attrs))}><div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none"></div><div class="sm:mx-auto sm:w-full sm:max-w-md text-center relative z-10">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center gap-2 mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary-500 rounded-lg p-1.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-bolt-20-solid",
              class: "text-white text-xl"
            }, null, _parent2, _scopeId));
            _push2(`</div><span class="text-xl font-bold text-primary-500"${_scopeId}>RhyseForge</span>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary-500 rounded-lg p-1.5" }, [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-bolt-20-solid",
                  class: "text-white text-xl"
                })
              ]),
              createVNode("span", { class: "text-xl font-bold text-primary-500" }, "RhyseForge")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 class="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white"> Welcome Back </h2><p class="mt-2 text-sm text-gray-500">Sign in to continue your certification journey</p></div><div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">`);
      _push(ssrRenderComponent(_component_UCard, { class: "rounded-2xl md:rounded-3xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="space-y-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Email Address",
              name: "email"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(email),
                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                    type: "email",
                    placeholder: "you@example.com",
                    size: "lg",
                    class: "rounded-xl",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(email),
                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                      type: "email",
                      placeholder: "you@example.com",
                      size: "lg",
                      class: "rounded-xl",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Password",
              name: "password"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(password),
                    "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                    type: "password",
                    placeholder: "••••••••",
                    size: "lg",
                    class: "rounded-xl",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(password),
                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                      type: "password",
                      placeholder: "••••••••",
                      size: "lg",
                      class: "rounded-xl",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(errorMsg)) {
              _push2(`<div class="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"${_scopeId}><p class="text-sm text-red-600 dark:text-red-400 font-medium flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-exclamation-triangle" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(unref(errorMsg))}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(isDeviceMismatch)) {
              _push2(`<div class="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl"${_scopeId}><p class="text-xs text-amber-700 dark:text-amber-400 font-medium flex items-start gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-shield-exclamation",
                class: "flex-shrink-0 mt-0.5 text-base"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Your subscription is locked to another device. Contact <strong${_scopeId}>support@rhyseforge.com</strong> to transfer your account to this device.</span></p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UButton, {
              type: "submit",
              block: "",
              color: "primary",
              size: "xl",
              class: "rounded-xl h-12 font-black",
              loading: unref(loading)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sign In `);
                } else {
                  return [
                    createTextVNode(" Sign In ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form><div class="mt-6 text-center border-t border-gray-100 dark:border-gray-800 pt-6"${_scopeId}><p class="text-sm text-gray-500"${_scopeId}> Don&#39;t have an account? `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/register",
              class: "font-bold text-primary-500 hover:text-primary-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Create Account`);
                } else {
                  return [
                    createTextVNode("Create Account")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p></div>`);
          } else {
            return [
              createVNode("form", {
                class: "space-y-5",
                onSubmit: withModifiers(handleLogin, ["prevent"])
              }, [
                createVNode(_component_UFormGroup, {
                  label: "Email Address",
                  name: "email"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(email),
                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                      type: "email",
                      placeholder: "you@example.com",
                      size: "lg",
                      class: "rounded-xl",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormGroup, {
                  label: "Password",
                  name: "password"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(password),
                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                      type: "password",
                      placeholder: "••••••••",
                      size: "lg",
                      class: "rounded-xl",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                unref(errorMsg) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
                }, [
                  createVNode("p", { class: "text-sm text-red-600 dark:text-red-400 font-medium flex items-center gap-2" }, [
                    createVNode(_component_UIcon, { name: "i-heroicons-exclamation-triangle" }),
                    createTextVNode(" " + toDisplayString(unref(errorMsg)), 1)
                  ])
                ])) : createCommentVNode("", true),
                unref(isDeviceMismatch) ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl"
                }, [
                  createVNode("p", { class: "text-xs text-amber-700 dark:text-amber-400 font-medium flex items-start gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-shield-exclamation",
                      class: "flex-shrink-0 mt-0.5 text-base"
                    }),
                    createVNode("span", null, [
                      createTextVNode("Your subscription is locked to another device. Contact "),
                      createVNode("strong", null, "support@rhyseforge.com"),
                      createTextVNode(" to transfer your account to this device.")
                    ])
                  ])
                ])) : createCommentVNode("", true),
                createVNode(_component_UButton, {
                  type: "submit",
                  block: "",
                  color: "primary",
                  size: "xl",
                  class: "rounded-xl h-12 font-black",
                  loading: unref(loading)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Sign In ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ], 32),
              createVNode("div", { class: "mt-6 text-center border-t border-gray-100 dark:border-gray-800 pt-6" }, [
                createVNode("p", { class: "text-sm text-gray-500" }, [
                  createTextVNode(" Don't have an account? "),
                  createVNode(_component_NuxtLink, {
                    to: "/register",
                    class: "font-bold text-primary-500 hover:text-primary-600"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Create Account")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-4 text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-sm font-medium text-gray-400 hover:text-primary-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`← Back to home`);
          } else {
            return [
              createTextVNode("← Back to home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-6 p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30 text-center"><div class="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 mb-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-finger-print",
        class: "text-lg"
      }, null, _parent));
      _push(`<span class="text-xs font-black uppercase tracking-widest">Device Protection</span></div><p class="text-[11px] text-blue-500/70">Your subscription is securely bound to this device. Unauthorized sharing will be blocked automatically.</p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-DR-SxNNL.js.map
