import __nuxt_component_0 from "./Container-BN6VrUpB.js";
import { e as _export_sfc, d as useToast, b as __nuxt_component_3, f as __nuxt_component_6, _ as __nuxt_component_2 } from "../server.mjs";
import __nuxt_component_3$1 from "./Badge-CzftAi4r.js";
import __nuxt_component_4 from "./Input-CZAMts_N.js";
import __nuxt_component_2$1 from "./Card-CgPQDjgh.js";
import __nuxt_component_5 from "./Progress-Bp2H55JY.js";
import { ref, reactive, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { u as useFetch } from "./fetch-Dtzn_qiz.js";
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
import "./useFormGroup-DqE91r20.js";
import "@vue/shared";
const _sfc_main = {
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: user, refresh } = useFetch(
      "/api/user/me",
      "$ZFXApnRxkJ"
      /* nuxt-injected */
    );
    const toast = useToast();
    const fileInput = ref(null);
    const isEditing = ref(false);
    const isSaving = ref(false);
    const editForm = reactive({
      name: "",
      image: null
    });
    const startEditing = () => {
      editForm.name = user.value?.name || "";
      editForm.image = user.value?.image || null;
      isEditing.value = true;
    };
    const triggerFilePicker = () => {
      fileInput.value?.click();
    };
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (file.size > 1024 * 1024) {
        toast.add({
          title: "File Too Large",
          description: "Profile pictures must be under 1MB.",
          icon: "i-heroicons-exclamation-circle",
          color: "orange"
        });
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        editForm.image = event.target.result;
      };
      reader.readAsDataURL(file);
    };
    const saveProfile = async () => {
      if (!editForm.name.trim()) return;
      isSaving.value = true;
      try {
        await $fetch("/api/user/me", {
          method: "PATCH",
          body: {
            name: editForm.name,
            image: editForm.image
          }
        });
        await refresh();
        isEditing.value = false;
        toast.add({
          title: "Profile Updated",
          description: "Your changes have been saved successfully.",
          icon: "i-heroicons-check-circle",
          color: "green"
        });
      } catch (error) {
        toast.add({
          title: "Update Failed",
          description: "Could not save profile changes. Please try again.",
          icon: "i-heroicons-exclamation-circle",
          color: "red"
        });
      } finally {
        isSaving.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0;
      const _component_UButton = __nuxt_component_3;
      const _component_UAvatar = __nuxt_component_6;
      const _component_UIcon = __nuxt_component_2;
      const _component_UBadge = __nuxt_component_3$1;
      const _component_UInput = __nuxt_component_4;
      const _component_UCard = __nuxt_component_2$1;
      const _component_UProgress = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 py-6 md:py-12 relative overflow-hidden" }, _attrs))} data-v-c7f4e22e><div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" data-v-c7f4e22e></div><div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" data-v-c7f4e22e></div>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl mx-auto relative z-10" data-v-c7f4e22e${_scopeId}><div class="bg-white dark:bg-gray-900 rounded-2xl md:rounded-[2.5rem] shadow-2xl shadow-black/5 ring-1 ring-gray-200 dark:ring-gray-800 p-5 sm:p-8 md:p-12 mb-6 md:mb-10 overflow-hidden relative group" data-v-c7f4e22e${_scopeId}><div class="absolute top-0 right-0 p-4 md:p-8 z-30" data-v-c7f4e22e${_scopeId}>`);
            if (!unref(isEditing)) {
              _push2(ssrRenderComponent(_component_UButton, {
                icon: "i-heroicons-pencil-square",
                color: "primary",
                variant: "soft",
                size: "sm",
                class: "rounded-xl md:rounded-2xl px-3 md:px-6 font-bold hover:scale-105 transition-all text-xs md:text-sm",
                onClick: startEditing
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="hidden sm:inline" data-v-c7f4e22e${_scopeId2}>Edit Profile</span><span class="sm:hidden" data-v-c7f4e22e${_scopeId2}>Edit</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "hidden sm:inline" }, "Edit Profile"),
                      createVNode("span", { class: "sm:hidden" }, "Edit")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex flex-col md:flex-row items-center md:items-start gap-10" data-v-c7f4e22e${_scopeId}><div class="relative group/avatar" data-v-c7f4e22e${_scopeId}><div class="absolute inset-0 bg-primary-500 blur-2xl opacity-20 rounded-full animate-pulse" data-v-c7f4e22e${_scopeId}></div><div class="relative z-10 w-40 h-40" data-v-c7f4e22e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              src: unref(user)?.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${unref(user)?.name || "Felix"}`,
              size: "3xl",
              class: "ring-8 ring-white dark:ring-gray-800 shadow-2xl w-40 h-40 object-cover overflow-hidden"
            }, null, _parent2, _scopeId));
            if (unref(isEditing)) {
              _push2(`<div class="absolute inset-0 rounded-full bg-black/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity cursor-pointer border-4 border-dashed border-white/40" data-v-c7f4e22e${_scopeId}><div class="text-center" data-v-c7f4e22e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-camera",
                class: "text-white text-3xl mb-1"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-[10px] font-black text-white uppercase tracking-widest" data-v-c7f4e22e${_scopeId}>Change Photo</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="absolute bottom-2 right-2 z-20 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-gray-800" data-v-c7f4e22e${_scopeId}></div><input type="file" class="hidden" accept="image/*" data-v-c7f4e22e${_scopeId}></div><div class="flex-1 text-center md:text-left pt-4 space-y-4" data-v-c7f4e22e${_scopeId}>`);
            if (!unref(isEditing)) {
              _push2(`<div data-v-c7f4e22e${_scopeId}><h1 class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-2 leading-none" data-v-c7f4e22e${_scopeId}>${ssrInterpolate(unref(user)?.name || "Anonymous Forger")}</h1><div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-4" data-v-c7f4e22e${_scopeId}><p class="text-xl text-gray-500 font-medium tracking-tight" data-v-c7f4e22e${_scopeId}>${ssrInterpolate(unref(user)?.email)}</p><span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full" data-v-c7f4e22e${_scopeId}></span>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "primary",
                variant: "soft",
                class: "rounded-full px-3 py-1 font-black text-[10px] uppercase tracking-widest"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(user)?.role || "STUDENT")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(user)?.role || "STUDENT"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full" data-v-c7f4e22e${_scopeId}></span>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: unref(user)?.plan === "ENTERPRISE" ? "purple" : unref(user)?.plan === "ADVANCED" ? "green" : unref(user)?.plan === "BEGINNING" ? "blue" : "gray",
                variant: "soft",
                class: "rounded-full px-3 py-1 font-black text-[10px] uppercase tracking-widest"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(user)?.plan || "FREE")} Plan `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(user)?.plan || "FREE") + " Plan ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div class="space-y-6 pt-4 animate-fade-in" data-v-c7f4e22e${_scopeId}><div class="space-y-2" data-v-c7f4e22e${_scopeId}><p class="text-[10px] font-black text-primary-500 uppercase tracking-widest ml-1" data-v-c7f4e22e${_scopeId}>Your Full Name</p>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(editForm).name,
                "onUpdate:modelValue": ($event) => unref(editForm).name = $event,
                size: "xl",
                variant: "outline",
                class: "rounded-2xl",
                ui: { input: "text-2xl font-black h-16 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 focus:border-primary-500 h-16" },
                placeholder: "Enter your name..."
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(editForm).image) {
                _push2(`<div class="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700" data-v-c7f4e22e${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UAvatar, {
                  src: unref(editForm).image,
                  size: "sm"
                }, null, _parent2, _scopeId));
                _push2(`<p class="text-xs font-bold text-gray-500 truncate max-w-[150px]" data-v-c7f4e22e${_scopeId}>New Profile Photo Selected</p>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "red",
                  variant: "ghost",
                  icon: "i-heroicons-trash",
                  size: "xs",
                  onClick: ($event) => unref(editForm).image = null
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex items-center gap-3" data-v-c7f4e22e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                size: "xl",
                class: "rounded-2xl px-10 h-14 font-black shadow-xl shadow-primary-500/20",
                loading: unref(isSaving),
                onClick: saveProfile
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Save Changes `);
                  } else {
                    return [
                      createTextVNode(" Save Changes ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "gray",
                variant: "ghost",
                size: "xl",
                class: "rounded-2xl px-8 h-14 font-bold",
                onClick: ($event) => isEditing.value = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Cancel `);
                  } else {
                    return [
                      createTextVNode(" Cancel ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
            if (!unref(isEditing)) {
              _push2(`<p class="text-sm text-gray-400 dark:text-gray-500 font-medium" data-v-c7f4e22e${_scopeId}> &quot;Knowledge is forged through testing.&quot; </p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-v-c7f4e22e${_scopeId}><div class="lg:col-span-1 space-y-6" data-v-c7f4e22e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCard, { class: "rounded-[2rem] border-none shadow-xl ring-1 ring-gray-100 dark:ring-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl" }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2" data-v-c7f4e22e${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-bolt",
                    class: "text-primary-500 font-bold"
                  }, null, _parent3, _scopeId2));
                  _push3(`<h3 class="font-extrabold text-gray-900 dark:text-white" data-v-c7f4e22e${_scopeId2}>Performance</h3></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-bolt",
                        class: "text-primary-500 font-bold"
                      }),
                      createVNode("h3", { class: "font-extrabold text-gray-900 dark:text-white" }, "Performance")
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-6 py-2" data-v-c7f4e22e${_scopeId2}><div class="flex items-center justify-between" data-v-c7f4e22e${_scopeId2}><div data-v-c7f4e22e${_scopeId2}><p class="text-[10px] font-black text-gray-400 uppercase tracking-widest" data-v-c7f4e22e${_scopeId2}>Exams Completed</p><p class="text-3xl font-black text-gray-900 dark:text-white" data-v-c7f4e22e${_scopeId2}>${ssrInterpolate(unref(user)?._count?.sessions || 0)}</p></div><div class="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-2xl flex items-center justify-center" data-v-c7f4e22e${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-check-badge",
                    class: "text-primary-500 text-2xl"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="space-y-2" data-v-c7f4e22e${_scopeId2}><div class="flex justify-between items-end" data-v-c7f4e22e${_scopeId2}><p class="text-[10px] font-black text-gray-400 uppercase tracking-widest" data-v-c7f4e22e${_scopeId2}>Global Accuracy</p><p class="text-sm font-black text-green-500" data-v-c7f4e22e${_scopeId2}>82.4%</p></div>`);
                  _push3(ssrRenderComponent(_component_UProgress, {
                    value: 82.4,
                    color: "green",
                    size: "sm",
                    class: "rounded-full"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-6 py-2" }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("div", null, [
                          createVNode("p", { class: "text-[10px] font-black text-gray-400 uppercase tracking-widest" }, "Exams Completed"),
                          createVNode("p", { class: "text-3xl font-black text-gray-900 dark:text-white" }, toDisplayString(unref(user)?._count?.sessions || 0), 1)
                        ]),
                        createVNode("div", { class: "w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-2xl flex items-center justify-center" }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-check-badge",
                            class: "text-primary-500 text-2xl"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("div", { class: "flex justify-between items-end" }, [
                          createVNode("p", { class: "text-[10px] font-black text-gray-400 uppercase tracking-widest" }, "Global Accuracy"),
                          createVNode("p", { class: "text-sm font-black text-green-500" }, "82.4%")
                        ]),
                        createVNode(_component_UProgress, {
                          value: 82.4,
                          color: "green",
                          size: "sm",
                          class: "rounded-full"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              to: "/dashboard",
              block: "",
              variant: "ghost",
              color: "gray",
              size: "xl",
              icon: "i-heroicons-arrow-left",
              class: "rounded-2xl py-5 font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Return to Dashboard `);
                } else {
                  return [
                    createTextVNode(" Return to Dashboard ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="lg:col-span-2" data-v-c7f4e22e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCard, { class: "rounded-[2rem] border-none shadow-xl ring-1 ring-gray-100 dark:ring-gray-800 h-full" }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2" data-v-c7f4e22e${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-shield-check",
                    class: "text-blue-500 font-bold"
                  }, null, _parent3, _scopeId2));
                  _push3(`<h3 class="font-extrabold text-gray-900 dark:text-white" data-v-c7f4e22e${_scopeId2}>System Identification</h3></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-shield-check",
                        class: "text-blue-500 font-bold"
                      }),
                      createVNode("h3", { class: "font-extrabold text-gray-900 dark:text-white" }, "System Identification")
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-8 py-4" data-v-c7f4e22e${_scopeId2}><div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-v-c7f4e22e${_scopeId2}><div class="space-y-1" data-v-c7f4e22e${_scopeId2}><label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1" data-v-c7f4e22e${_scopeId2}>Platform UUID</label><div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl font-mono text-xs text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800" data-v-c7f4e22e${_scopeId2}>${ssrInterpolate(unref(user)?.id || "Generating...")}</div></div><div class="space-y-1" data-v-c7f4e22e${_scopeId2}><label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1" data-v-c7f4e22e${_scopeId2}>Origin Date</label><div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl font-bold text-gray-900 dark:text-white border border-gray-100 dark:border-gray-800" data-v-c7f4e22e${_scopeId2}>${ssrInterpolate(unref(user)?.createdAt ? new Date(unref(user).createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "Processing...")}</div></div></div><div class="p-6 bg-blue-50/50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-900 flex items-start gap-4" data-v-c7f4e22e${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-information-circle",
                    class: "text-blue-500 text-2xl mt-1"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div data-v-c7f4e22e${_scopeId2}><h4 class="font-bold text-blue-900 dark:text-blue-400" data-v-c7f4e22e${_scopeId2}>Security Note</h4><p class="text-sm text-blue-700/70 dark:text-blue-400/70 mt-1" data-v-c7f4e22e${_scopeId2}> Your credentials are encrypted using industry-standard hashing. Your subscription is device-locked for anti-sharing protection. </p></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-8 py-4" }, [
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-8" }, [
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode("label", { class: "text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1" }, "Platform UUID"),
                          createVNode("div", { class: "p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl font-mono text-xs text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800" }, toDisplayString(unref(user)?.id || "Generating..."), 1)
                        ]),
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode("label", { class: "text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1" }, "Origin Date"),
                          createVNode("div", { class: "p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl font-bold text-gray-900 dark:text-white border border-gray-100 dark:border-gray-800" }, toDisplayString(unref(user)?.createdAt ? new Date(unref(user).createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "Processing..."), 1)
                        ])
                      ]),
                      createVNode("div", { class: "p-6 bg-blue-50/50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-900 flex items-start gap-4" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-information-circle",
                          class: "text-blue-500 text-2xl mt-1"
                        }),
                        createVNode("div", null, [
                          createVNode("h4", { class: "font-bold text-blue-900 dark:text-blue-400" }, "Security Note"),
                          createVNode("p", { class: "text-sm text-blue-700/70 dark:text-blue-400/70 mt-1" }, " Your credentials are encrypted using industry-standard hashing. Your subscription is device-locked for anti-sharing protection. ")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="mt-6 md:mt-10" data-v-c7f4e22e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCard, { class: "rounded-[2rem] border-none shadow-xl ring-1 ring-gray-100 dark:ring-gray-800" }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2" data-v-c7f4e22e${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-finger-print",
                    class: "text-indigo-500 font-bold"
                  }, null, _parent3, _scopeId2));
                  _push3(`<h3 class="font-extrabold text-gray-900 dark:text-white" data-v-c7f4e22e${_scopeId2}>Subscription &amp; Device Security</h3></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-finger-print",
                        class: "text-indigo-500 font-bold"
                      }),
                      createVNode("h3", { class: "font-extrabold text-gray-900 dark:text-white" }, "Subscription & Device Security")
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-1 md:grid-cols-3 gap-6 py-4" data-v-c7f4e22e${_scopeId2}><div class="p-5 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl border border-primary-100 dark:border-primary-800" data-v-c7f4e22e${_scopeId2}><p class="text-[10px] font-black text-primary-500 uppercase tracking-widest mb-2" data-v-c7f4e22e${_scopeId2}>Active Plan</p><p class="text-2xl font-black text-gray-900 dark:text-white" data-v-c7f4e22e${_scopeId2}>${ssrInterpolate(unref(user)?.plan || "FREE")}</p><p class="text-xs text-gray-500 mt-1" data-v-c7f4e22e${_scopeId2}>`);
                  if (unref(user)?.plan === "BEGINNING") {
                    _push3(`<!--[-->₹200 — Single Module<!--]-->`);
                  } else if (unref(user)?.plan === "ADVANCED") {
                    _push3(`<!--[-->₹500 — All Modules<!--]-->`);
                  } else if (unref(user)?.plan === "ENTERPRISE") {
                    _push3(`<!--[-->₹5,000 — Full License<!--]-->`);
                  } else {
                    _push3(`<!--[-->No active subscription<!--]-->`);
                  }
                  _push3(`</p></div><div class="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800" data-v-c7f4e22e${_scopeId2}><p class="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-2" data-v-c7f4e22e${_scopeId2}>Bound Device</p><p class="text-lg font-mono font-black text-gray-900 dark:text-white" data-v-c7f4e22e${_scopeId2}>${ssrInterpolate(unref(user)?.boundDeviceId || "Not Bound")}</p><p class="text-xs text-gray-500 mt-1" data-v-c7f4e22e${_scopeId2}>Subscription locked to this device</p></div><div class="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-100 dark:border-green-800" data-v-c7f4e22e${_scopeId2}><p class="text-[10px] font-black text-green-500 uppercase tracking-widest mb-2" data-v-c7f4e22e${_scopeId2}>Status</p><div class="flex items-center gap-2" data-v-c7f4e22e${_scopeId2}><div class="${ssrRenderClass([unref(user)?.subscription ? "bg-green-500 animate-pulse" : "bg-gray-300", "w-3 h-3 rounded-full"])}" data-v-c7f4e22e${_scopeId2}></div><p class="text-lg font-black text-gray-900 dark:text-white" data-v-c7f4e22e${_scopeId2}>${ssrInterpolate(unref(user)?.subscription?.status || (unref(user)?.plan !== "FREE" ? "ACTIVE" : "NO SUBSCRIPTION"))}</p></div><p class="text-xs text-gray-500 mt-1" data-v-c7f4e22e${_scopeId2}>`);
                  if (unref(user)?.subscription?.purchasedAt) {
                    _push3(`<!--[--> Since ${ssrInterpolate(new Date(unref(user).subscription.purchasedAt).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" }))}<!--]-->`);
                  } else {
                    _push3(`<!--[-->—<!--]-->`);
                  }
                  _push3(`</p></div></div><div class="mt-4 flex flex-col sm:flex-row gap-3" data-v-c7f4e22e${_scopeId2}>`);
                  if (!unref(user)?.plan || unref(user)?.plan === "FREE") {
                    _push3(ssrRenderComponent(_component_UButton, {
                      to: "/pricing",
                      color: "primary",
                      size: "lg",
                      class: "rounded-xl font-black",
                      icon: "i-heroicons-arrow-up-circle"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Get a Subscription `);
                        } else {
                          return [
                            createTextVNode(" Get a Subscription ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else if (unref(user)?.plan !== "ENTERPRISE") {
                    _push3(ssrRenderComponent(_component_UButton, {
                      to: "/pricing",
                      color: "primary",
                      variant: "soft",
                      size: "lg",
                      class: "rounded-xl font-black",
                      icon: "i-heroicons-arrow-up-circle"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Upgrade Plan `);
                        } else {
                          return [
                            createTextVNode(" Upgrade Plan ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6 py-4" }, [
                      createVNode("div", { class: "p-5 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl border border-primary-100 dark:border-primary-800" }, [
                        createVNode("p", { class: "text-[10px] font-black text-primary-500 uppercase tracking-widest mb-2" }, "Active Plan"),
                        createVNode("p", { class: "text-2xl font-black text-gray-900 dark:text-white" }, toDisplayString(unref(user)?.plan || "FREE"), 1),
                        createVNode("p", { class: "text-xs text-gray-500 mt-1" }, [
                          unref(user)?.plan === "BEGINNING" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createTextVNode("₹200 — Single Module")
                          ], 64)) : unref(user)?.plan === "ADVANCED" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createTextVNode("₹500 — All Modules")
                          ], 64)) : unref(user)?.plan === "ENTERPRISE" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                            createTextVNode("₹5,000 — Full License")
                          ], 64)) : (openBlock(), createBlock(Fragment, { key: 3 }, [
                            createTextVNode("No active subscription")
                          ], 64))
                        ])
                      ]),
                      createVNode("div", { class: "p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800" }, [
                        createVNode("p", { class: "text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-2" }, "Bound Device"),
                        createVNode("p", { class: "text-lg font-mono font-black text-gray-900 dark:text-white" }, toDisplayString(unref(user)?.boundDeviceId || "Not Bound"), 1),
                        createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "Subscription locked to this device")
                      ]),
                      createVNode("div", { class: "p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-100 dark:border-green-800" }, [
                        createVNode("p", { class: "text-[10px] font-black text-green-500 uppercase tracking-widest mb-2" }, "Status"),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("div", {
                            class: ["w-3 h-3 rounded-full", unref(user)?.subscription ? "bg-green-500 animate-pulse" : "bg-gray-300"]
                          }, null, 2),
                          createVNode("p", { class: "text-lg font-black text-gray-900 dark:text-white" }, toDisplayString(unref(user)?.subscription?.status || (unref(user)?.plan !== "FREE" ? "ACTIVE" : "NO SUBSCRIPTION")), 1)
                        ]),
                        createVNode("p", { class: "text-xs text-gray-500 mt-1" }, [
                          unref(user)?.subscription?.purchasedAt ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createTextVNode(" Since " + toDisplayString(new Date(unref(user).subscription.purchasedAt).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })), 1)
                          ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createTextVNode("—")
                          ], 64))
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mt-4 flex flex-col sm:flex-row gap-3" }, [
                      !unref(user)?.plan || unref(user)?.plan === "FREE" ? (openBlock(), createBlock(_component_UButton, {
                        key: 0,
                        to: "/pricing",
                        color: "primary",
                        size: "lg",
                        class: "rounded-xl font-black",
                        icon: "i-heroicons-arrow-up-circle"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Get a Subscription ")
                        ]),
                        _: 1
                      })) : unref(user)?.plan !== "ENTERPRISE" ? (openBlock(), createBlock(_component_UButton, {
                        key: 1,
                        to: "/pricing",
                        color: "primary",
                        variant: "soft",
                        size: "lg",
                        class: "rounded-xl font-black",
                        icon: "i-heroicons-arrow-up-circle"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Upgrade Plan ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl mx-auto relative z-10" }, [
                createVNode("div", { class: "bg-white dark:bg-gray-900 rounded-2xl md:rounded-[2.5rem] shadow-2xl shadow-black/5 ring-1 ring-gray-200 dark:ring-gray-800 p-5 sm:p-8 md:p-12 mb-6 md:mb-10 overflow-hidden relative group" }, [
                  createVNode("div", { class: "absolute top-0 right-0 p-4 md:p-8 z-30" }, [
                    !unref(isEditing) ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      icon: "i-heroicons-pencil-square",
                      color: "primary",
                      variant: "soft",
                      size: "sm",
                      class: "rounded-xl md:rounded-2xl px-3 md:px-6 font-bold hover:scale-105 transition-all text-xs md:text-sm",
                      onClick: startEditing
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "hidden sm:inline" }, "Edit Profile"),
                        createVNode("span", { class: "sm:hidden" }, "Edit")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "flex flex-col md:flex-row items-center md:items-start gap-10" }, [
                    createVNode("div", { class: "relative group/avatar" }, [
                      createVNode("div", { class: "absolute inset-0 bg-primary-500 blur-2xl opacity-20 rounded-full animate-pulse" }),
                      createVNode("div", { class: "relative z-10 w-40 h-40" }, [
                        createVNode(_component_UAvatar, {
                          src: unref(user)?.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${unref(user)?.name || "Felix"}`,
                          size: "3xl",
                          class: "ring-8 ring-white dark:ring-gray-800 shadow-2xl w-40 h-40 object-cover overflow-hidden"
                        }, null, 8, ["src"]),
                        unref(isEditing) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "absolute inset-0 rounded-full bg-black/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity cursor-pointer border-4 border-dashed border-white/40",
                          onClick: triggerFilePicker
                        }, [
                          createVNode("div", { class: "text-center" }, [
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-camera",
                              class: "text-white text-3xl mb-1"
                            }),
                            createVNode("p", { class: "text-[10px] font-black text-white uppercase tracking-widest" }, "Change Photo")
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "absolute bottom-2 right-2 z-20 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-gray-800" }),
                      createVNode("input", {
                        ref_key: "fileInput",
                        ref: fileInput,
                        type: "file",
                        class: "hidden",
                        accept: "image/*",
                        onChange: handleFileChange
                      }, null, 544)
                    ]),
                    createVNode("div", { class: "flex-1 text-center md:text-left pt-4 space-y-4" }, [
                      !unref(isEditing) ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("h1", { class: "text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-2 leading-none" }, toDisplayString(unref(user)?.name || "Anonymous Forger"), 1),
                        createVNode("div", { class: "flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-4" }, [
                          createVNode("p", { class: "text-xl text-gray-500 font-medium tracking-tight" }, toDisplayString(unref(user)?.email), 1),
                          createVNode("span", { class: "w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full" }),
                          createVNode(_component_UBadge, {
                            color: "primary",
                            variant: "soft",
                            class: "rounded-full px-3 py-1 font-black text-[10px] uppercase tracking-widest"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(user)?.role || "STUDENT"), 1)
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full" }),
                          createVNode(_component_UBadge, {
                            color: unref(user)?.plan === "ENTERPRISE" ? "purple" : unref(user)?.plan === "ADVANCED" ? "green" : unref(user)?.plan === "BEGINNING" ? "blue" : "gray",
                            variant: "soft",
                            class: "rounded-full px-3 py-1 font-black text-[10px] uppercase tracking-widest"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(user)?.plan || "FREE") + " Plan ", 1)
                            ]),
                            _: 1
                          }, 8, ["color"])
                        ])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "space-y-6 pt-4 animate-fade-in"
                      }, [
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode("p", { class: "text-[10px] font-black text-primary-500 uppercase tracking-widest ml-1" }, "Your Full Name"),
                          createVNode(_component_UInput, {
                            modelValue: unref(editForm).name,
                            "onUpdate:modelValue": ($event) => unref(editForm).name = $event,
                            size: "xl",
                            variant: "outline",
                            class: "rounded-2xl",
                            ui: { input: "text-2xl font-black h-16 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 focus:border-primary-500 h-16" },
                            placeholder: "Enter your name..."
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        unref(editForm).image ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700"
                        }, [
                          createVNode(_component_UAvatar, {
                            src: unref(editForm).image,
                            size: "sm"
                          }, null, 8, ["src"]),
                          createVNode("p", { class: "text-xs font-bold text-gray-500 truncate max-w-[150px]" }, "New Profile Photo Selected"),
                          createVNode(_component_UButton, {
                            color: "red",
                            variant: "ghost",
                            icon: "i-heroicons-trash",
                            size: "xs",
                            onClick: ($event) => unref(editForm).image = null
                          }, null, 8, ["onClick"])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode(_component_UButton, {
                            color: "primary",
                            size: "xl",
                            class: "rounded-2xl px-10 h-14 font-black shadow-xl shadow-primary-500/20",
                            loading: unref(isSaving),
                            onClick: saveProfile
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Save Changes ")
                            ]),
                            _: 1
                          }, 8, ["loading"]),
                          createVNode(_component_UButton, {
                            color: "gray",
                            variant: "ghost",
                            size: "xl",
                            class: "rounded-2xl px-8 h-14 font-bold",
                            onClick: ($event) => isEditing.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cancel ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ])),
                      !unref(isEditing) ? (openBlock(), createBlock("p", {
                        key: 2,
                        class: "text-sm text-gray-400 dark:text-gray-500 font-medium"
                      }, ' "Knowledge is forged through testing." ')) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, [
                  createVNode("div", { class: "lg:col-span-1 space-y-6" }, [
                    createVNode(_component_UCard, { class: "rounded-[2rem] border-none shadow-xl ring-1 ring-gray-100 dark:ring-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl" }, {
                      header: withCtx(() => [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-bolt",
                            class: "text-primary-500 font-bold"
                          }),
                          createVNode("h3", { class: "font-extrabold text-gray-900 dark:text-white" }, "Performance")
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-6 py-2" }, [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("div", null, [
                              createVNode("p", { class: "text-[10px] font-black text-gray-400 uppercase tracking-widest" }, "Exams Completed"),
                              createVNode("p", { class: "text-3xl font-black text-gray-900 dark:text-white" }, toDisplayString(unref(user)?._count?.sessions || 0), 1)
                            ]),
                            createVNode("div", { class: "w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-2xl flex items-center justify-center" }, [
                              createVNode(_component_UIcon, {
                                name: "i-heroicons-check-badge",
                                class: "text-primary-500 text-2xl"
                              })
                            ])
                          ]),
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode("div", { class: "flex justify-between items-end" }, [
                              createVNode("p", { class: "text-[10px] font-black text-gray-400 uppercase tracking-widest" }, "Global Accuracy"),
                              createVNode("p", { class: "text-sm font-black text-green-500" }, "82.4%")
                            ]),
                            createVNode(_component_UProgress, {
                              value: 82.4,
                              color: "green",
                              size: "sm",
                              class: "rounded-full"
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UButton, {
                      to: "/dashboard",
                      block: "",
                      variant: "ghost",
                      color: "gray",
                      size: "xl",
                      icon: "i-heroicons-arrow-left",
                      class: "rounded-2xl py-5 font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Return to Dashboard ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "lg:col-span-2" }, [
                    createVNode(_component_UCard, { class: "rounded-[2rem] border-none shadow-xl ring-1 ring-gray-100 dark:ring-gray-800 h-full" }, {
                      header: withCtx(() => [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-shield-check",
                            class: "text-blue-500 font-bold"
                          }),
                          createVNode("h3", { class: "font-extrabold text-gray-900 dark:text-white" }, "System Identification")
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-8 py-4" }, [
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-8" }, [
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("label", { class: "text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1" }, "Platform UUID"),
                              createVNode("div", { class: "p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl font-mono text-xs text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800" }, toDisplayString(unref(user)?.id || "Generating..."), 1)
                            ]),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("label", { class: "text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1" }, "Origin Date"),
                              createVNode("div", { class: "p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl font-bold text-gray-900 dark:text-white border border-gray-100 dark:border-gray-800" }, toDisplayString(unref(user)?.createdAt ? new Date(unref(user).createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "Processing..."), 1)
                            ])
                          ]),
                          createVNode("div", { class: "p-6 bg-blue-50/50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-900 flex items-start gap-4" }, [
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-information-circle",
                              class: "text-blue-500 text-2xl mt-1"
                            }),
                            createVNode("div", null, [
                              createVNode("h4", { class: "font-bold text-blue-900 dark:text-blue-400" }, "Security Note"),
                              createVNode("p", { class: "text-sm text-blue-700/70 dark:text-blue-400/70 mt-1" }, " Your credentials are encrypted using industry-standard hashing. Your subscription is device-locked for anti-sharing protection. ")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "mt-6 md:mt-10" }, [
                  createVNode(_component_UCard, { class: "rounded-[2rem] border-none shadow-xl ring-1 ring-gray-100 dark:ring-gray-800" }, {
                    header: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-finger-print",
                          class: "text-indigo-500 font-bold"
                        }),
                        createVNode("h3", { class: "font-extrabold text-gray-900 dark:text-white" }, "Subscription & Device Security")
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6 py-4" }, [
                        createVNode("div", { class: "p-5 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl border border-primary-100 dark:border-primary-800" }, [
                          createVNode("p", { class: "text-[10px] font-black text-primary-500 uppercase tracking-widest mb-2" }, "Active Plan"),
                          createVNode("p", { class: "text-2xl font-black text-gray-900 dark:text-white" }, toDisplayString(unref(user)?.plan || "FREE"), 1),
                          createVNode("p", { class: "text-xs text-gray-500 mt-1" }, [
                            unref(user)?.plan === "BEGINNING" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createTextVNode("₹200 — Single Module")
                            ], 64)) : unref(user)?.plan === "ADVANCED" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createTextVNode("₹500 — All Modules")
                            ], 64)) : unref(user)?.plan === "ENTERPRISE" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                              createTextVNode("₹5,000 — Full License")
                            ], 64)) : (openBlock(), createBlock(Fragment, { key: 3 }, [
                              createTextVNode("No active subscription")
                            ], 64))
                          ])
                        ]),
                        createVNode("div", { class: "p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800" }, [
                          createVNode("p", { class: "text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-2" }, "Bound Device"),
                          createVNode("p", { class: "text-lg font-mono font-black text-gray-900 dark:text-white" }, toDisplayString(unref(user)?.boundDeviceId || "Not Bound"), 1),
                          createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "Subscription locked to this device")
                        ]),
                        createVNode("div", { class: "p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-100 dark:border-green-800" }, [
                          createVNode("p", { class: "text-[10px] font-black text-green-500 uppercase tracking-widest mb-2" }, "Status"),
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("div", {
                              class: ["w-3 h-3 rounded-full", unref(user)?.subscription ? "bg-green-500 animate-pulse" : "bg-gray-300"]
                            }, null, 2),
                            createVNode("p", { class: "text-lg font-black text-gray-900 dark:text-white" }, toDisplayString(unref(user)?.subscription?.status || (unref(user)?.plan !== "FREE" ? "ACTIVE" : "NO SUBSCRIPTION")), 1)
                          ]),
                          createVNode("p", { class: "text-xs text-gray-500 mt-1" }, [
                            unref(user)?.subscription?.purchasedAt ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createTextVNode(" Since " + toDisplayString(new Date(unref(user).subscription.purchasedAt).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })), 1)
                            ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createTextVNode("—")
                            ], 64))
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mt-4 flex flex-col sm:flex-row gap-3" }, [
                        !unref(user)?.plan || unref(user)?.plan === "FREE" ? (openBlock(), createBlock(_component_UButton, {
                          key: 0,
                          to: "/pricing",
                          color: "primary",
                          size: "lg",
                          class: "rounded-xl font-black",
                          icon: "i-heroicons-arrow-up-circle"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Get a Subscription ")
                          ]),
                          _: 1
                        })) : unref(user)?.plan !== "ENTERPRISE" ? (openBlock(), createBlock(_component_UButton, {
                          key: 1,
                          to: "/pricing",
                          color: "primary",
                          variant: "soft",
                          size: "lg",
                          class: "rounded-xl font-black",
                          icon: "i-heroicons-arrow-up-circle"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Upgrade Plan ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c7f4e22e"]]);
export {
  profile as default
};
//# sourceMappingURL=profile-C7TIvZeY.js.map
