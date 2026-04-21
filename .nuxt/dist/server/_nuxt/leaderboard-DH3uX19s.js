import __nuxt_component_0 from "./Container-BN6VrUpB.js";
import { e as _export_sfc, _ as __nuxt_component_2, f as __nuxt_component_6 } from "../server.mjs";
import __nuxt_component_2$1 from "./Card-CgPQDjgh.js";
import __nuxt_component_3 from "./Table-BEEiCEEU.js";
import { mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from "vue";
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
import "./Checkbox-Cf2Up8nx.js";
import "./useFormGroup-DqE91r20.js";
import "./Progress-Bp2H55JY.js";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/scule/dist/index.mjs";
import "@vue/shared";
const _sfc_main = {
  __name: "leaderboard",
  __ssrInlineRender: true,
  setup(__props) {
    const columns = [
      { key: "rank", label: "Rank" },
      { key: "user", label: "Candidate" },
      { key: "exams_taken", label: "Volume" },
      { key: "score", label: "Experience Point (XP)" }
    ];
    const { data: leaderboard2, pending } = useFetch(
      "/api/leaderboard",
      "$8JeQ5jXADu"
      /* nuxt-injected */
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0;
      const _component_UIcon = __nuxt_component_2;
      const _component_UAvatar = __nuxt_component_6;
      const _component_UCard = __nuxt_component_2$1;
      const _component_UTable = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 py-8 md:py-16 relative overflow-hidden" }, _attrs))} data-v-d5636b52><div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" data-v-d5636b52></div>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "max-w-5xl relative z-10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center mb-10 md:mb-16 px-4" data-v-d5636b52${_scopeId}><div class="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-500 mb-4 md:mb-6 group cursor-default" data-v-d5636b52${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-globe-alt",
              class: "animate-spin-slow"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]" data-v-d5636b52${_scopeId}>Live Global Rankings</span></div><h1 class="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-3 md:mb-4" data-v-d5636b52${_scopeId}> Hall of <span class="text-primary-500" data-v-d5636b52${_scopeId}>Forge</span></h1><p class="text-sm md:text-lg text-gray-500 dark:text-gray-400 font-medium max-w-xl mx-auto" data-v-d5636b52${_scopeId}> The elite ranks of certification masters. Ranking is calculated based on cumulative XP and accuracy. </p></div>`);
            if (!unref(pending) && unref(leaderboard2)?.length >= 3) {
              _push2(`<div class="hidden sm:grid grid-cols-3 gap-3 md:gap-4 mb-12 md:mb-20 items-end max-w-3xl mx-auto px-4" data-v-d5636b52${_scopeId}><div class="flex flex-col items-center group" data-v-d5636b52${_scopeId}><div class="relative mb-4" data-v-d5636b52${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UAvatar, {
                src: unref(leaderboard2)[1].image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${unref(leaderboard2)[1].name}`,
                size: "xl",
                class: "ring-4 ring-gray-300 dark:ring-gray-700 w-20 h-20 shadow-xl group-hover:scale-110 transition-transform"
              }, null, _parent2, _scopeId));
              _push2(`<div class="absolute -top-3 -right-3 bg-gray-200 dark:bg-gray-700 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center font-black text-xs" data-v-d5636b52${_scopeId}>2</div></div><div class="text-center" data-v-d5636b52${_scopeId}><p class="font-black text-gray-900 dark:text-white truncate max-w-[120px]" data-v-d5636b52${_scopeId}>${ssrInterpolate(unref(leaderboard2)[1].name)}</p><p class="text-xs font-bold text-primary-500" data-v-d5636b52${_scopeId}>${ssrInterpolate(unref(leaderboard2)[1].score)} XP</p></div><div class="w-full h-24 bg-gray-100 dark:bg-gray-800/50 mt-4 rounded-t-3xl border-t-2 border-gray-200 dark:border-gray-800" data-v-d5636b52${_scopeId}></div></div><div class="flex flex-col items-center group -mt-10" data-v-d5636b52${_scopeId}><div class="relative mb-6" data-v-d5636b52${_scopeId}><div class="absolute inset-0 bg-yellow-500 blur-2xl opacity-20 animate-pulse" data-v-d5636b52${_scopeId}></div>`);
              _push2(ssrRenderComponent(_component_UAvatar, {
                src: unref(leaderboard2)[0].image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${unref(leaderboard2)[0].name}`,
                size: "3xl",
                class: "ring-8 ring-yellow-400 w-28 h-28 shadow-2xl group-hover:scale-110 transition-transform relative z-10"
              }, null, _parent2, _scopeId));
              _push2(`<div class="absolute -top-4 -right-4 bg-yellow-400 w-12 h-12 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center font-black text-xl text-white shadow-xl rotate-12" data-v-d5636b52${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-trophy" }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="text-center" data-v-d5636b52${_scopeId}><p class="font-black text-xl text-gray-900 dark:text-white truncate max-w-[150px]" data-v-d5636b52${_scopeId}>${ssrInterpolate(unref(leaderboard2)[0].name)}</p><div class="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-400/10 rounded-full mt-1" data-v-d5636b52${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-fire",
                class: "text-yellow-500"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-xs font-black text-yellow-500" data-v-d5636b52${_scopeId}>${ssrInterpolate(unref(leaderboard2)[0].score)} XP</span></div></div><div class="w-full h-40 bg-gradient-to-b from-primary-500 to-primary-600 mt-6 rounded-t-[3rem] shadow-2xl flex items-start justify-center pt-8" data-v-d5636b52${_scopeId}><span class="text-6xl font-black text-white/20" data-v-d5636b52${_scopeId}>1</span></div></div><div class="flex flex-col items-center group" data-v-d5636b52${_scopeId}><div class="relative mb-4" data-v-d5636b52${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UAvatar, {
                src: unref(leaderboard2)[2].image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${unref(leaderboard2)[2].name}`,
                size: "xl",
                class: "ring-4 ring-orange-300 dark:ring-orange-800/40 w-16 h-16 shadow-xl group-hover:scale-110 transition-transform"
              }, null, _parent2, _scopeId));
              _push2(`<div class="absolute -top-2 -right-2 bg-orange-200 dark:bg-orange-800/60 w-7 h-7 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center font-black text-[10px]" data-v-d5636b52${_scopeId}>3</div></div><div class="text-center" data-v-d5636b52${_scopeId}><p class="font-black text-gray-900 dark:text-white truncate max-w-[120px]" data-v-d5636b52${_scopeId}>${ssrInterpolate(unref(leaderboard2)[2].name)}</p><p class="text-xs font-bold text-primary-500" data-v-d5636b52${_scopeId}>${ssrInterpolate(unref(leaderboard2)[2].score)} XP</p></div><div class="w-full h-16 bg-gray-50 dark:bg-gray-800/30 mt-4 rounded-t-2xl border-t-2 border-gray-100 dark:border-gray-800" data-v-d5636b52${_scopeId}></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UCard, { class: "rounded-[2.5rem] border-none shadow-2xl shadow-black/10 ring-1 ring-gray-100 dark:ring-gray-800 overflow-hidden overflow-x-auto" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTable, {
                    columns,
                    rows: unref(leaderboard2),
                    loading: unref(pending),
                    ui: {
                      tr: { base: "group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300" },
                      td: { base: "py-6 px-4" },
                      th: { base: "py-4 px-4 text-xs font-black uppercase tracking-widest text-gray-400" }
                    }
                  }, {
                    "rank-data": withCtx(({ index }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center gap-3" data-v-d5636b52${_scopeId3}><span class="${ssrRenderClass([index < 3 ? "text-primary-500" : "text-gray-400", "text-lg font-black"])}" data-v-d5636b52${_scopeId3}> #${ssrInterpolate(index + 1)}</span>`);
                        if (index === 0) {
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: "i-heroicons-star-20-solid",
                            class: "text-yellow-500"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode("span", {
                              class: ["text-lg font-black", index < 3 ? "text-primary-500" : "text-gray-400"]
                            }, " #" + toDisplayString(index + 1), 3),
                            index === 0 ? (openBlock(), createBlock(_component_UIcon, {
                              key: 0,
                              name: "i-heroicons-star-20-solid",
                              class: "text-yellow-500"
                            })) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    "user-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center gap-4" data-v-d5636b52${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UAvatar, {
                          src: row.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${row.name}`,
                          size: "md",
                          class: "ring-2 ring-gray-100 dark:ring-gray-800"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div data-v-d5636b52${_scopeId3}><p class="font-black text-gray-900 dark:text-white leading-none mb-1" data-v-d5636b52${_scopeId3}>${ssrInterpolate(row.name)}</p><p class="text-[10px] font-bold text-gray-400 uppercase tracking-tighter" data-v-d5636b52${_scopeId3}>Verified Candidate</p></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-4" }, [
                            createVNode(_component_UAvatar, {
                              src: row.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${row.name}`,
                              size: "md",
                              class: "ring-2 ring-gray-100 dark:ring-gray-800"
                            }, null, 8, ["src"]),
                            createVNode("div", null, [
                              createVNode("p", { class: "font-black text-gray-900 dark:text-white leading-none mb-1" }, toDisplayString(row.name), 1),
                              createVNode("p", { class: "text-[10px] font-bold text-gray-400 uppercase tracking-tighter" }, "Verified Candidate")
                            ])
                          ])
                        ];
                      }
                    }),
                    "exams_taken-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center gap-2" data-v-d5636b52${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UIcon, {
                          name: "i-heroicons-academic-cap",
                          class: "text-gray-400"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="font-bold text-gray-700 dark:text-gray-300" data-v-d5636b52${_scopeId3}>${ssrInterpolate(row.exams_taken)} Exams</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-academic-cap",
                              class: "text-gray-400"
                            }),
                            createVNode("span", { class: "font-bold text-gray-700 dark:text-gray-300" }, toDisplayString(row.exams_taken) + " Exams", 1)
                          ])
                        ];
                      }
                    }),
                    "score-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col items-end" data-v-d5636b52${_scopeId3}><span class="font-black text-xl text-primary-600 dark:text-primary-400" data-v-d5636b52${_scopeId3}>${ssrInterpolate(row.score.toLocaleString())}</span><span class="text-[8px] font-black text-gray-400 uppercase tracking-widest" data-v-d5636b52${_scopeId3}>Total Rating</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex flex-col items-end" }, [
                            createVNode("span", { class: "font-black text-xl text-primary-600 dark:text-primary-400" }, toDisplayString(row.score.toLocaleString()), 1),
                            createVNode("span", { class: "text-[8px] font-black text-gray-400 uppercase tracking-widest" }, "Total Rating")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTable, {
                      columns,
                      rows: unref(leaderboard2),
                      loading: unref(pending),
                      ui: {
                        tr: { base: "group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300" },
                        td: { base: "py-6 px-4" },
                        th: { base: "py-4 px-4 text-xs font-black uppercase tracking-widest text-gray-400" }
                      }
                    }, {
                      "rank-data": withCtx(({ index }) => [
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode("span", {
                            class: ["text-lg font-black", index < 3 ? "text-primary-500" : "text-gray-400"]
                          }, " #" + toDisplayString(index + 1), 3),
                          index === 0 ? (openBlock(), createBlock(_component_UIcon, {
                            key: 0,
                            name: "i-heroicons-star-20-solid",
                            class: "text-yellow-500"
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      "user-data": withCtx(({ row }) => [
                        createVNode("div", { class: "flex items-center gap-4" }, [
                          createVNode(_component_UAvatar, {
                            src: row.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${row.name}`,
                            size: "md",
                            class: "ring-2 ring-gray-100 dark:ring-gray-800"
                          }, null, 8, ["src"]),
                          createVNode("div", null, [
                            createVNode("p", { class: "font-black text-gray-900 dark:text-white leading-none mb-1" }, toDisplayString(row.name), 1),
                            createVNode("p", { class: "text-[10px] font-bold text-gray-400 uppercase tracking-tighter" }, "Verified Candidate")
                          ])
                        ])
                      ]),
                      "exams_taken-data": withCtx(({ row }) => [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-academic-cap",
                            class: "text-gray-400"
                          }),
                          createVNode("span", { class: "font-bold text-gray-700 dark:text-gray-300" }, toDisplayString(row.exams_taken) + " Exams", 1)
                        ])
                      ]),
                      "score-data": withCtx(({ row }) => [
                        createVNode("div", { class: "flex flex-col items-end" }, [
                          createVNode("span", { class: "font-black text-xl text-primary-600 dark:text-primary-400" }, toDisplayString(row.score.toLocaleString()), 1),
                          createVNode("span", { class: "text-[8px] font-black text-gray-400 uppercase tracking-widest" }, "Total Rating")
                        ])
                      ]),
                      _: 2
                    }, 1032, ["rows", "loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "text-center mb-10 md:mb-16 px-4" }, [
                createVNode("div", { class: "inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-500 mb-4 md:mb-6 group cursor-default" }, [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-globe-alt",
                    class: "animate-spin-slow"
                  }),
                  createVNode("span", { class: "text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]" }, "Live Global Rankings")
                ]),
                createVNode("h1", { class: "text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-3 md:mb-4" }, [
                  createTextVNode(" Hall of "),
                  createVNode("span", { class: "text-primary-500" }, "Forge")
                ]),
                createVNode("p", { class: "text-sm md:text-lg text-gray-500 dark:text-gray-400 font-medium max-w-xl mx-auto" }, " The elite ranks of certification masters. Ranking is calculated based on cumulative XP and accuracy. ")
              ]),
              !unref(pending) && unref(leaderboard2)?.length >= 3 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "hidden sm:grid grid-cols-3 gap-3 md:gap-4 mb-12 md:mb-20 items-end max-w-3xl mx-auto px-4"
              }, [
                createVNode("div", { class: "flex flex-col items-center group" }, [
                  createVNode("div", { class: "relative mb-4" }, [
                    createVNode(_component_UAvatar, {
                      src: unref(leaderboard2)[1].image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${unref(leaderboard2)[1].name}`,
                      size: "xl",
                      class: "ring-4 ring-gray-300 dark:ring-gray-700 w-20 h-20 shadow-xl group-hover:scale-110 transition-transform"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "absolute -top-3 -right-3 bg-gray-200 dark:bg-gray-700 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center font-black text-xs" }, "2")
                  ]),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("p", { class: "font-black text-gray-900 dark:text-white truncate max-w-[120px]" }, toDisplayString(unref(leaderboard2)[1].name), 1),
                    createVNode("p", { class: "text-xs font-bold text-primary-500" }, toDisplayString(unref(leaderboard2)[1].score) + " XP", 1)
                  ]),
                  createVNode("div", { class: "w-full h-24 bg-gray-100 dark:bg-gray-800/50 mt-4 rounded-t-3xl border-t-2 border-gray-200 dark:border-gray-800" })
                ]),
                createVNode("div", { class: "flex flex-col items-center group -mt-10" }, [
                  createVNode("div", { class: "relative mb-6" }, [
                    createVNode("div", { class: "absolute inset-0 bg-yellow-500 blur-2xl opacity-20 animate-pulse" }),
                    createVNode(_component_UAvatar, {
                      src: unref(leaderboard2)[0].image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${unref(leaderboard2)[0].name}`,
                      size: "3xl",
                      class: "ring-8 ring-yellow-400 w-28 h-28 shadow-2xl group-hover:scale-110 transition-transform relative z-10"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "absolute -top-4 -right-4 bg-yellow-400 w-12 h-12 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center font-black text-xl text-white shadow-xl rotate-12" }, [
                      createVNode(_component_UIcon, { name: "i-heroicons-trophy" })
                    ])
                  ]),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("p", { class: "font-black text-xl text-gray-900 dark:text-white truncate max-w-[150px]" }, toDisplayString(unref(leaderboard2)[0].name), 1),
                    createVNode("div", { class: "inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-400/10 rounded-full mt-1" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-fire",
                        class: "text-yellow-500"
                      }),
                      createVNode("span", { class: "text-xs font-black text-yellow-500" }, toDisplayString(unref(leaderboard2)[0].score) + " XP", 1)
                    ])
                  ]),
                  createVNode("div", { class: "w-full h-40 bg-gradient-to-b from-primary-500 to-primary-600 mt-6 rounded-t-[3rem] shadow-2xl flex items-start justify-center pt-8" }, [
                    createVNode("span", { class: "text-6xl font-black text-white/20" }, "1")
                  ])
                ]),
                createVNode("div", { class: "flex flex-col items-center group" }, [
                  createVNode("div", { class: "relative mb-4" }, [
                    createVNode(_component_UAvatar, {
                      src: unref(leaderboard2)[2].image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${unref(leaderboard2)[2].name}`,
                      size: "xl",
                      class: "ring-4 ring-orange-300 dark:ring-orange-800/40 w-16 h-16 shadow-xl group-hover:scale-110 transition-transform"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "absolute -top-2 -right-2 bg-orange-200 dark:bg-orange-800/60 w-7 h-7 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center font-black text-[10px]" }, "3")
                  ]),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("p", { class: "font-black text-gray-900 dark:text-white truncate max-w-[120px]" }, toDisplayString(unref(leaderboard2)[2].name), 1),
                    createVNode("p", { class: "text-xs font-bold text-primary-500" }, toDisplayString(unref(leaderboard2)[2].score) + " XP", 1)
                  ]),
                  createVNode("div", { class: "w-full h-16 bg-gray-50 dark:bg-gray-800/30 mt-4 rounded-t-2xl border-t-2 border-gray-100 dark:border-gray-800" })
                ])
              ])) : createCommentVNode("", true),
              createVNode(_component_UCard, { class: "rounded-[2.5rem] border-none shadow-2xl shadow-black/10 ring-1 ring-gray-100 dark:ring-gray-800 overflow-hidden overflow-x-auto" }, {
                default: withCtx(() => [
                  createVNode(_component_UTable, {
                    columns,
                    rows: unref(leaderboard2),
                    loading: unref(pending),
                    ui: {
                      tr: { base: "group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300" },
                      td: { base: "py-6 px-4" },
                      th: { base: "py-4 px-4 text-xs font-black uppercase tracking-widest text-gray-400" }
                    }
                  }, {
                    "rank-data": withCtx(({ index }) => [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("span", {
                          class: ["text-lg font-black", index < 3 ? "text-primary-500" : "text-gray-400"]
                        }, " #" + toDisplayString(index + 1), 3),
                        index === 0 ? (openBlock(), createBlock(_component_UIcon, {
                          key: 0,
                          name: "i-heroicons-star-20-solid",
                          class: "text-yellow-500"
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    "user-data": withCtx(({ row }) => [
                      createVNode("div", { class: "flex items-center gap-4" }, [
                        createVNode(_component_UAvatar, {
                          src: row.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${row.name}`,
                          size: "md",
                          class: "ring-2 ring-gray-100 dark:ring-gray-800"
                        }, null, 8, ["src"]),
                        createVNode("div", null, [
                          createVNode("p", { class: "font-black text-gray-900 dark:text-white leading-none mb-1" }, toDisplayString(row.name), 1),
                          createVNode("p", { class: "text-[10px] font-bold text-gray-400 uppercase tracking-tighter" }, "Verified Candidate")
                        ])
                      ])
                    ]),
                    "exams_taken-data": withCtx(({ row }) => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-academic-cap",
                          class: "text-gray-400"
                        }),
                        createVNode("span", { class: "font-bold text-gray-700 dark:text-gray-300" }, toDisplayString(row.exams_taken) + " Exams", 1)
                      ])
                    ]),
                    "score-data": withCtx(({ row }) => [
                      createVNode("div", { class: "flex flex-col items-end" }, [
                        createVNode("span", { class: "font-black text-xl text-primary-600 dark:text-primary-400" }, toDisplayString(row.score.toLocaleString()), 1),
                        createVNode("span", { class: "text-[8px] font-black text-gray-400 uppercase tracking-widest" }, "Total Rating")
                      ])
                    ]),
                    _: 2
                  }, 1032, ["rows", "loading"])
                ]),
                _: 2
              }, 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/leaderboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const leaderboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d5636b52"]]);
export {
  leaderboard as default
};
//# sourceMappingURL=leaderboard-DH3uX19s.js.map
