import __nuxt_component_0 from "./Container-BN6VrUpB.js";
import { e as _export_sfc, u as useAuth, a as useRouter, c as __nuxt_component_1, _ as __nuxt_component_2, b as __nuxt_component_3, f as __nuxt_component_6 } from "../server.mjs";
import { _ as _sfc_main$1 } from "./ColorModeButton-88PGhMlQ.js";
import __nuxt_component_5 from "./Dropdown-kfQ1nsxu.js";
import { ref, computed, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
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
import "./Kbd-_vf6Of4T.js";
import "./keyboard-BCt0ZeLv.js";
import "./use-outside-click-cNhWs2ZY.js";
import "./focus-management-CclPs0xY.js";
import "./use-resolve-button-type-CCTzT7JK.js";
import "./use-text-value-CScX7TKV.js";
import "./calculate-active-index-BN0T2bP2.js";
import "./open-closed-DaveoKA1.js";
import "./usePopper-BrvKSG9Z.js";
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { status, data, signOut } = useAuth();
    const router = useRouter();
    const mobileMenuOpen = ref(false);
    const isGuest = computed(() => status.value !== "authenticated");
    const handleAction = (url) => {
      if (status.value === "authenticated") {
        router.push(url);
      } else {
        router.push("/login");
      }
    };
    const userMenuItems = computed(() => {
      if (isGuest.value) return [];
      const items = [
        [{
          label: data.value?.user?.email || "",
          slot: "account",
          disabled: true
        }],
        [{
          label: "My Profile",
          icon: "i-heroicons-user",
          to: "/profile"
        }]
      ];
      const middleGroup = [];
      if (data.value?.user?.role === "ADMIN") {
        middleGroup.push({
          label: "Admin Board",
          icon: "i-heroicons-computer-desktop",
          to: "/admin/dashboard"
        });
      }
      middleGroup.push({
        label: "Settings",
        icon: "i-heroicons-cog-8-tooth",
        to: "/settings"
      });
      items.push(middleGroup);
      items.push([{
        label: "Sign out",
        icon: "i-heroicons-arrow-left-on-rectangle",
        click: () => signOut({ callbackUrl: "/login" })
      }]);
      return items;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_UIcon = __nuxt_component_2;
      const _component_UButton = __nuxt_component_3;
      const _component_ColorModeButton = _sfc_main$1;
      const _component_UDropdown = __nuxt_component_5;
      const _component_UAvatar = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300" }, _attrs))} data-v-36c3aa2c><nav class="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50" data-v-36c3aa2c>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between h-16 items-center" data-v-36c3aa2c${_scopeId}><div class="flex items-center gap-4 md:gap-8" data-v-36c3aa2c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "flex items-center gap-2 group flex-shrink-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-primary-500 rounded-lg p-1.5 group-hover:rotate-12 transition-transform" data-v-36c3aa2c${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-bolt-20-solid",
                    class: "text-white text-xl"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><span class="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400" data-v-36c3aa2c${_scopeId2}> RhyseForge </span>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-primary-500 rounded-lg p-1.5 group-hover:rotate-12 transition-transform" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-bolt-20-solid",
                        class: "text-white text-xl"
                      })
                    ]),
                    createVNode("span", { class: "text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400" }, " RhyseForge ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="hidden md:flex items-center gap-1" data-v-36c3aa2c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              color: "gray",
              onClick: ($event) => handleAction("/")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Home`);
                } else {
                  return [
                    createTextVNode("Home")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(data)?.user?.role === "ADMIN") {
              _push2(ssrRenderComponent(_component_UButton, {
                variant: "ghost",
                color: "primary",
                onClick: ($event) => handleAction("/admin/dashboard"),
                icon: "i-heroicons-shield-check"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Admin Panel`);
                  } else {
                    return [
                      createTextVNode("Admin Panel")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_UButton, {
                variant: "ghost",
                color: "gray",
                onClick: ($event) => handleAction("/dashboard")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`My Dashboard`);
                  } else {
                    return [
                      createTextVNode("My Dashboard")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              color: "gray",
              onClick: ($event) => handleAction("/leaderboard")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Leaderboard`);
                } else {
                  return [
                    createTextVNode("Leaderboard")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              color: "gray",
              onClick: ($event) => handleAction("/pricing")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Pricing`);
                } else {
                  return [
                    createTextVNode("Pricing")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center gap-2 md:gap-4" data-v-36c3aa2c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ColorModeButton, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              class: "md:hidden",
              icon: "i-heroicons-bars-3",
              color: "gray",
              variant: "ghost",
              size: "md",
              onClick: ($event) => mobileMenuOpen.value = !unref(mobileMenuOpen)
            }, null, _parent2, _scopeId));
            _push2(`<div class="hidden md:block" data-v-36c3aa2c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UDropdown, {
              items: unref(userMenuItems),
              popper: { placement: "bottom-end" }
            }, {
              account: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-left" data-v-36c3aa2c${_scopeId2}><p data-v-36c3aa2c${_scopeId2}>Signed in as</p><p class="truncate font-medium text-gray-900 dark:text-white" data-v-36c3aa2c${_scopeId2}>${ssrInterpolate(item.label)}</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-left" }, [
                      createVNode("p", null, "Signed in as"),
                      createVNode("p", { class: "truncate font-medium text-gray-900 dark:text-white" }, toDisplayString(item.label), 1)
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UAvatar, {
                    src: unref(data)?.user?.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${unref(data)?.user?.name || "Felix"}`,
                    alt: "Profile",
                    size: "sm",
                    class: "cursor-pointer border-2 border-primary-500/20"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UAvatar, {
                      src: unref(data)?.user?.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${unref(data)?.user?.name || "Felix"}`,
                      alt: "Profile",
                      size: "sm",
                      class: "cursor-pointer border-2 border-primary-500/20"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between h-16 items-center" }, [
                createVNode("div", { class: "flex items-center gap-4 md:gap-8" }, [
                  createVNode(_component_NuxtLink, {
                    to: "/",
                    class: "flex items-center gap-2 group flex-shrink-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "bg-primary-500 rounded-lg p-1.5 group-hover:rotate-12 transition-transform" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-bolt-20-solid",
                          class: "text-white text-xl"
                        })
                      ]),
                      createVNode("span", { class: "text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400" }, " RhyseForge ")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "hidden md:flex items-center gap-1" }, [
                    createVNode(_component_UButton, {
                      variant: "ghost",
                      color: "gray",
                      onClick: ($event) => handleAction("/")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Home")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    unref(data)?.user?.role === "ADMIN" ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      onClick: ($event) => handleAction("/admin/dashboard"),
                      icon: "i-heroicons-shield-check"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Admin Panel")
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : (openBlock(), createBlock(_component_UButton, {
                      key: 1,
                      variant: "ghost",
                      color: "gray",
                      onClick: ($event) => handleAction("/dashboard")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("My Dashboard")
                      ]),
                      _: 1
                    }, 8, ["onClick"])),
                    createVNode(_component_UButton, {
                      variant: "ghost",
                      color: "gray",
                      onClick: ($event) => handleAction("/leaderboard")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Leaderboard")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      variant: "ghost",
                      color: "gray",
                      onClick: ($event) => handleAction("/pricing")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Pricing")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-2 md:gap-4" }, [
                  createVNode(_component_ColorModeButton),
                  createVNode(_component_UButton, {
                    class: "md:hidden",
                    icon: "i-heroicons-bars-3",
                    color: "gray",
                    variant: "ghost",
                    size: "md",
                    onClick: ($event) => mobileMenuOpen.value = !unref(mobileMenuOpen)
                  }, null, 8, ["onClick"]),
                  createVNode("div", { class: "hidden md:block" }, [
                    createVNode(_component_UDropdown, {
                      items: unref(userMenuItems),
                      popper: { placement: "bottom-end" }
                    }, {
                      account: withCtx(({ item }) => [
                        createVNode("div", { class: "text-left" }, [
                          createVNode("p", null, "Signed in as"),
                          createVNode("p", { class: "truncate font-medium text-gray-900 dark:text-white" }, toDisplayString(item.label), 1)
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_UAvatar, {
                          src: unref(data)?.user?.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${unref(data)?.user?.name || "Felix"}`,
                          alt: "Profile",
                          size: "sm",
                          class: "cursor-pointer border-2 border-primary-500/20"
                        }, null, 8, ["src"])
                      ]),
                      _: 1
                    }, 8, ["items"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(mobileMenuOpen)) {
        _push(`<div class="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl" data-v-36c3aa2c><div class="px-4 py-4 space-y-1" data-v-36c3aa2c><button class="mobile-nav-link w-full text-left" data-v-36c3aa2c>`);
        _push(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-home" }, null, _parent));
        _push(` Home </button>`);
        if (unref(data)?.user?.role === "ADMIN") {
          _push(`<button class="mobile-nav-link text-primary-500 w-full text-left" data-v-36c3aa2c>`);
          _push(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-shield-check" }, null, _parent));
          _push(` Admin Panel </button>`);
        } else {
          _push(`<button class="mobile-nav-link w-full text-left" data-v-36c3aa2c>`);
          _push(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-squares-2x2" }, null, _parent));
          _push(` My Dashboard </button>`);
        }
        _push(`<button class="mobile-nav-link w-full text-left" data-v-36c3aa2c>`);
        _push(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-trophy" }, null, _parent));
        _push(` Leaderboard </button><button class="mobile-nav-link w-full text-left" data-v-36c3aa2c>`);
        _push(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-credit-card" }, null, _parent));
        _push(` Pricing </button><button class="mobile-nav-link w-full text-left" data-v-36c3aa2c>`);
        _push(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-user" }, null, _parent));
        _push(` My Profile </button><div class="pt-3 border-t border-gray-100 dark:border-gray-800 mt-3" data-v-36c3aa2c><button class="mobile-nav-link text-red-500 w-full" data-v-36c3aa2c>`);
        _push(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-arrow-left-on-rectangle" }, null, _parent));
        _push(` Sign Out </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav><main data-v-36c3aa2c>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="mt-20 border-t border-gray-200 dark:border-gray-800 py-8 md:py-12" data-v-36c3aa2c>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 text-sm text-gray-500 dark:text-gray-400" data-v-36c3aa2c${_scopeId}><div class="flex items-center gap-2" data-v-36c3aa2c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-bolt-20-solid",
              class: "text-primary-500"
            }, null, _parent2, _scopeId));
            _push2(`<span class="font-semibold text-gray-900 dark:text-white" data-v-36c3aa2c${_scopeId}>RhyseForge</span><span data-v-36c3aa2c${_scopeId}>© 2024. All rights reserved.</span></div><div class="flex gap-4 md:gap-6 text-xs md:text-sm" data-v-36c3aa2c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/pricing",
              class: "hover:text-primary-500 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Pricing`);
                } else {
                  return [
                    createTextVNode("Pricing")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<a href="#" class="hover:text-primary-500 transition-colors" data-v-36c3aa2c${_scopeId}>Privacy Policy</a><a href="#" class="hover:text-primary-500 transition-colors" data-v-36c3aa2c${_scopeId}>Terms of Service</a></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 text-sm text-gray-500 dark:text-gray-400" }, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-bolt-20-solid",
                    class: "text-primary-500"
                  }),
                  createVNode("span", { class: "font-semibold text-gray-900 dark:text-white" }, "RhyseForge"),
                  createVNode("span", null, "© 2024. All rights reserved.")
                ]),
                createVNode("div", { class: "flex gap-4 md:gap-6 text-xs md:text-sm" }, [
                  createVNode(_component_NuxtLink, {
                    to: "/pricing",
                    class: "hover:text-primary-500 transition-colors"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Pricing")
                    ]),
                    _: 1
                  }),
                  createVNode("a", {
                    href: "#",
                    class: "hover:text-primary-500 transition-colors"
                  }, "Privacy Policy"),
                  createVNode("a", {
                    href: "#",
                    class: "hover:text-primary-500 transition-colors"
                  }, "Terms of Service")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-36c3aa2c"]]);
export {
  _default as default
};
//# sourceMappingURL=default-BsewRDMW.js.map
