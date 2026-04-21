import __nuxt_component_2 from "./Card-CgPQDjgh.js";
import __nuxt_component_7 from "./FormGroup-DAIqfz9h.js";
import __nuxt_component_4 from "./Input-CZAMts_N.js";
import { u as useAuth, b as __nuxt_component_3, g as __nuxt_component_0 } from "../server.mjs";
import { ref, mergeProps, withCtx, createVNode, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "tailwind-merge";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/defu/dist/defu.mjs";
import "./useFormGroup-DqE91r20.js";
import "@vueuse/core";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/hookable/dist/index.mjs";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/unctx/dist/index.mjs";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/h3/dist/index.mjs";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/ufo/dist/index.mjs";
import "vue-router";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/klona/dist/index.mjs";
import "requrl";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/destr/dist/index.mjs";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "ohash/utils";
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { signIn } = useAuth();
    const email = ref("");
    const password = ref("");
    const handleLogin = async () => {
      try {
        await signIn({ email: email.value, password: password.value }, { callbackUrl: "/admin/dashboard" });
      } catch (e) {
        console.error("Login failed:", e);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_2;
      const _component_UFormGroup = __nuxt_component_7;
      const _component_UInput = __nuxt_component_4;
      const _component_UButton = __nuxt_component_3;
      const _component_ULink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 dark:bg-gray-900 transition-colors duration-300" }, _attrs))}><div class="sm:mx-auto sm:w-full sm:max-w-md text-center"><h2 class="mt-6 text-center text-3xl font-extrabold text-blue-600 dark:text-blue-400"> Admin Login </h2></div><div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">`);
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="space-y-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Admin Email",
              name: "email"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: email.value,
                    "onUpdate:modelValue": ($event) => email.value = $event,
                    type: "email",
                    placeholder: "admin@examforge.com",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: email.value,
                      "onUpdate:modelValue": ($event) => email.value = $event,
                      type: "email",
                      placeholder: "admin@examforge.com",
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
                    modelValue: password.value,
                    "onUpdate:modelValue": ($event) => password.value = $event,
                    type: "password",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: password.value,
                      "onUpdate:modelValue": ($event) => password.value = $event,
                      type: "password",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              type: "submit",
              block: "",
              color: "blue"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Access Dashboard `);
                } else {
                  return [
                    createTextVNode(" Access Dashboard ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                class: "space-y-6",
                onSubmit: withModifiers(handleLogin, ["prevent"])
              }, [
                createVNode(_component_UFormGroup, {
                  label: "Admin Email",
                  name: "email"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: email.value,
                      "onUpdate:modelValue": ($event) => email.value = $event,
                      type: "email",
                      placeholder: "admin@examforge.com",
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
                      modelValue: password.value,
                      "onUpdate:modelValue": ($event) => password.value = $event,
                      type: "password",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_component_UButton, {
                    type: "submit",
                    block: "",
                    color: "blue"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Access Dashboard ")
                    ]),
                    _: 1
                  })
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-4 text-center">`);
      _push(ssrRenderComponent(_component_ULink, {
        to: "/",
        class: "text-sm font-medium text-blue-600 hover:text-blue-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Back to home`);
          } else {
            return [
              createTextVNode("Back to home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-8DQAWpdF.js.map
