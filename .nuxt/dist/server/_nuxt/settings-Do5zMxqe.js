import __nuxt_component_2 from "./Card-CgPQDjgh.js";
import { _ as _sfc_main$1 } from "./ColorModeButton-88PGhMlQ.js";
import __nuxt_component_4 from "./Divider-B73cfw3m.js";
import __nuxt_component_6 from "./Toggle-CA1O4bV-.js";
import { b as __nuxt_component_3 } from "../server.mjs";
import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "tailwind-merge";
import "./form-DsUILy5F.js";
import "./keyboard-BCt0ZeLv.js";
import "./use-resolve-button-type-CCTzT7JK.js";
import "./hidden-e5tlhUcy.js";
import "./description-CG6lMCGz.js";
import "./useFormGroup-DqE91r20.js";
import "@vueuse/core";
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
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "ohash/utils";
const _sfc_main = {
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    const notifications = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_2;
      const _component_ColorModeButton = _sfc_main$1;
      const _component_UDivider = __nuxt_component_4;
      const _component_UToggle = __nuxt_component_6;
      const _component_UButton = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-300" }, _attrs))}><div class="max-w-3xl mx-auto"><div class="mb-8"><h1 class="text-3xl font-bold text-gray-900 dark:text-white">Account Settings</h1><p class="text-sm text-gray-500 mt-1">Manage your notification preferences and account security.</p></div><div class="space-y-6">`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg font-semibold"${_scopeId}>Preferences</h3>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg font-semibold" }, "Preferences")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><p class="font-medium"${_scopeId}>Dark Mode</p><p class="text-xs text-gray-500"${_scopeId}>Enable high contrast dark theme</p></div>`);
            _push2(ssrRenderComponent(_component_ColorModeButton, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UDivider, null, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><p class="font-medium"${_scopeId}>Email Notifications</p><p class="text-xs text-gray-500"${_scopeId}>Receive weekly performance summaries</p></div>`);
            _push2(ssrRenderComponent(_component_UToggle, {
              modelValue: notifications.value,
              "onUpdate:modelValue": ($event) => notifications.value = $event
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("p", { class: "font-medium" }, "Dark Mode"),
                    createVNode("p", { class: "text-xs text-gray-500" }, "Enable high contrast dark theme")
                  ]),
                  createVNode(_component_ColorModeButton)
                ]),
                createVNode(_component_UDivider),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("p", { class: "font-medium" }, "Email Notifications"),
                    createVNode("p", { class: "text-xs text-gray-500" }, "Receive weekly performance summaries")
                  ]),
                  createVNode(_component_UToggle, {
                    modelValue: notifications.value,
                    "onUpdate:modelValue": ($event) => notifications.value = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg font-semibold text-red-600"${_scopeId}>Danger Zone</h3>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg font-semibold text-red-600" }, "Danger Zone")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-sm text-gray-500 mb-4"${_scopeId}>Once you delete your account, there is no going back. Please be certain.</p>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "red",
              variant: "soft"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Deactivate Account`);
                } else {
                  return [
                    createTextVNode("Deactivate Account")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-sm text-gray-500 mb-4" }, "Once you delete your account, there is no going back. Please be certain."),
                createVNode(_component_UButton, {
                  color: "red",
                  variant: "soft"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Deactivate Account")
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=settings-Do5zMxqe.js.map
