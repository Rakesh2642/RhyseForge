import { u as useAuth, a as useRouter, b as __nuxt_component_3 } from "../server.mjs";
import __nuxt_component_2 from "./Card-CgPQDjgh.js";
import { watchEffect, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
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
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const { status, data, signOut } = useAuth();
    const router = useRouter();
    watchEffect(() => {
      if (status.value === "unauthenticated") {
        router.push("/admin/login");
      } else if (status.value === "authenticated" && data.value?.user?.role !== "ADMIN") {
        router.push("/dashboard");
      }
    });
    const { data: realStats, pending } = useFetch(
      "/api/admin/stats",
      "$bbxbtFnZFf"
      /* nuxt-injected */
    );
    const stats = computed(() => [
      { name: "Total Users", value: realStats.value?.userCount || "0" },
      { name: "Exams Published", value: realStats.value?.examCount || "0" },
      { name: "Total Attempts Today", value: realStats.value?.sessionsToday || "0" },
      { name: "Average Pass Rate", value: realStats.value?.passRate || "0%" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_3;
      const _component_UCard = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-100 dark:bg-gray-800 p-4 md:p-8 transition-colors duration-300" }, _attrs))}><div class="max-w-7xl mx-auto"><div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8"><h1 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "red",
        variant: "soft",
        onClick: ($event) => unref(signOut)({ callbackUrl: "/login" }),
        class: "w-full sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Logout`);
          } else {
            return [
              createTextVNode("Logout")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8"><!--[-->`);
      ssrRenderList(unref(stats), (stat, index) => {
        _push(ssrRenderComponent(_component_UCard, { key: index }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col"${_scopeId}><span class="text-gray-500 dark:text-gray-400 text-xs md:text-sm font-medium"${_scopeId}>${ssrInterpolate(stat.name)}</span><span class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-1 md:mt-2"${_scopeId}>${ssrInterpolate(stat.value)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("span", { class: "text-gray-500 dark:text-gray-400 text-xs md:text-sm font-medium" }, toDisplayString(stat.name), 1),
                  createVNode("span", { class: "text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-1 md:mt-2" }, toDisplayString(stat.value), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold"${_scopeId}>Quick Actions</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold" }, "Quick Actions")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-plus",
              color: "primary",
              variant: "soft",
              to: "/admin/exams/create"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Create New Exam`);
                } else {
                  return [
                    createTextVNode("Create New Exam")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-book-open",
              color: "primary",
              variant: "soft",
              to: "/admin/exams"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Global Exam Catalog`);
                } else {
                  return [
                    createTextVNode("Global Exam Catalog")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-cloud-arrow-up",
              color: "primary",
              variant: "soft",
              to: "/admin/upload"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Upload Image for AI Parsing`);
                } else {
                  return [
                    createTextVNode("Upload Image for AI Parsing")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-users",
              color: "gray",
              variant: "soft",
              to: "/admin/users"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Manage Users`);
                } else {
                  return [
                    createTextVNode("Manage Users")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col space-y-4" }, [
                createVNode(_component_UButton, {
                  icon: "i-heroicons-plus",
                  color: "primary",
                  variant: "soft",
                  to: "/admin/exams/create"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Create New Exam")
                  ]),
                  _: 1
                }),
                createVNode(_component_UButton, {
                  icon: "i-heroicons-book-open",
                  color: "primary",
                  variant: "soft",
                  to: "/admin/exams"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Global Exam Catalog")
                  ]),
                  _: 1
                }),
                createVNode(_component_UButton, {
                  icon: "i-heroicons-cloud-arrow-up",
                  color: "primary",
                  variant: "soft",
                  to: "/admin/upload"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Upload Image for AI Parsing")
                  ]),
                  _: 1
                }),
                createVNode(_component_UButton, {
                  icon: "i-heroicons-users",
                  color: "gray",
                  variant: "soft",
                  to: "/admin/users"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Manage Users")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold"${_scopeId}>Recent AI Parse Jobs</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold" }, "Recent AI Parse Jobs")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-gray-500 dark:text-gray-400 text-sm"${_scopeId}><p${_scopeId}>No recent jobs found. Upload an exam image to get started.</p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-gray-500 dark:text-gray-400 text-sm" }, [
                createVNode("p", null, "No recent jobs found. Upload an exam image to get started.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=dashboard-BMqnFSzr.js.map
