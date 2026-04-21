import __nuxt_component_0 from "./Container-BN6VrUpB.js";
import { e as _export_sfc, u as useAuth, a as useRouter, b as __nuxt_component_3, _ as __nuxt_component_2$1 } from "../server.mjs";
import __nuxt_component_2 from "./Card-CgPQDjgh.js";
import __nuxt_component_3$1 from "./Table-BEEiCEEU.js";
import __nuxt_component_5 from "./Progress-Bp2H55JY.js";
import { watchEffect, computed, mergeProps, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/hookable/dist/index.mjs";
import { u as useFetch } from "./fetch-Dtzn_qiz.js";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/klona/dist/index.mjs";
import "#internal/nuxt/paths";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/defu/dist/defu.mjs";
import "tailwind-merge";
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
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "ohash/utils";
import "./Checkbox-Cf2Up8nx.js";
import "./useFormGroup-DqE91r20.js";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/scule/dist/index.mjs";
import "@vue/shared";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { status, data: authData } = useAuth();
    const router = useRouter();
    watchEffect(() => {
      if (status.value === "authenticated" && authData.value?.user?.role === "ADMIN") {
        router.push("/admin/dashboard");
      } else if (status.value === "unauthenticated") {
        router.push("/login");
      }
    });
    const historyColumns = [
      { key: "exam", label: "Exam" },
      { key: "mode", label: "Mode" },
      { key: "score", label: "Score" },
      { key: "date", label: "Date" }
    ];
    const { data: sessions, pending } = useFetch(
      "/api/sessions/me",
      "$-Z8hO_pY48"
      /* nuxt-injected */
    );
    const avgScore = computed(() => {
      if (!sessions.value || sessions.value.length === 0) return 0;
      const total = sessions.value.reduce((acc, s) => acc + (s.score || 0), 0);
      return (total / sessions.value.length).toFixed(1);
    });
    const examMastery = computed(() => {
      if (!sessions.value) return [];
      const examMap = {};
      sessions.value.forEach((s) => {
        if (!examMap[s.exam.title] || examMap[s.exam.title].score < s.score) {
          examMap[s.exam.title] = {
            title: s.exam.title,
            score: s.score || 0,
            color: s.score >= 70 ? "green" : s.score >= 50 ? "yellow" : "red"
          };
        }
      });
      return Object.values(examMap).slice(0, 4);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0;
      const _component_UButton = __nuxt_component_3;
      const _component_UCard = __nuxt_component_2;
      const _component_UIcon = __nuxt_component_2$1;
      const _component_UTable = __nuxt_component_3$1;
      const _component_UProgress = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-8" }, _attrs))} data-v-e11fa174>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center mb-8" data-v-e11fa174${_scopeId}><div data-v-e11fa174${_scopeId}><h1 class="text-3xl font-bold text-gray-900 dark:text-white" data-v-e11fa174${_scopeId}>My Dashboard</h1><p class="text-sm text-gray-600 dark:text-gray-400 mt-1" data-v-e11fa174${_scopeId}>Track your progress, streaks, and review past exams.</p></div><div class="flex gap-2" data-v-e11fa174${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "white",
              variant: "soft",
              to: "/profile",
              icon: "i-heroicons-user"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Profile`);
                } else {
                  return [
                    createTextVNode("Profile")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              variant: "soft",
              to: "/"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Browse Catalog`);
                } else {
                  return [
                    createTextVNode("Browse Catalog")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-v-e11fa174${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCard, { class: "bg-gradient-to-br from-orange-500 to-red-600 text-white border-none" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center space-x-4" data-v-e11fa174${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-fire",
                    class: "text-5xl opacity-80"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div data-v-e11fa174${_scopeId2}><p class="text-orange-100 text-sm font-medium" data-v-e11fa174${_scopeId2}>Study Streak</p><h2 class="text-4xl font-extrabold" data-v-e11fa174${_scopeId2}>3 Days</h2></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center space-x-4" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-fire",
                        class: "text-5xl opacity-80"
                      }),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-orange-100 text-sm font-medium" }, "Study Streak"),
                        createVNode("h2", { class: "text-4xl font-extrabold" }, "3 Days")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UCard, { class: "bg-gradient-to-br from-blue-500 to-cyan-600 text-white border-none" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center space-x-4" data-v-e11fa174${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-academic-cap",
                    class: "text-5xl opacity-80"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div data-v-e11fa174${_scopeId2}><p class="text-blue-100 text-sm font-medium" data-v-e11fa174${_scopeId2}>Exams Taken</p><h2 class="text-4xl font-extrabold" data-v-e11fa174${_scopeId2}>${ssrInterpolate(unref(sessions)?.length || 0)}</h2></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center space-x-4" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-academic-cap",
                        class: "text-5xl opacity-80"
                      }),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-blue-100 text-sm font-medium" }, "Exams Taken"),
                        createVNode("h2", { class: "text-4xl font-extrabold" }, toDisplayString(unref(sessions)?.length || 0), 1)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UCard, { class: "bg-gradient-to-br from-green-500 to-emerald-600 text-white border-none" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center space-x-4" data-v-e11fa174${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-chart-bar",
                    class: "text-5xl opacity-80"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div data-v-e11fa174${_scopeId2}><p class="text-green-100 text-sm font-medium" data-v-e11fa174${_scopeId2}>Average Score</p><h2 class="text-4xl font-extrabold" data-v-e11fa174${_scopeId2}>${ssrInterpolate(avgScore.value)}%</h2></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center space-x-4" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-chart-bar",
                        class: "text-5xl opacity-80"
                      }),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-green-100 text-sm font-medium" }, "Average Score"),
                        createVNode("h2", { class: "text-4xl font-extrabold" }, toDisplayString(avgScore.value) + "%", 1)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-v-e11fa174${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCard, { class: "lg:col-span-2" }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="text-xl font-bold" data-v-e11fa174${_scopeId2}>Recent Activity</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "text-xl font-bold" }, "Recent Activity")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(pending)) {
                    _push3(`<div class="flex justify-center p-4" data-v-e11fa174${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "i-heroicons-arrow-path",
                      class: "animate-spin text-2xl text-primary-500"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (!unref(sessions) || unref(sessions).length === 0) {
                    _push3(`<div class="text-center p-8 text-gray-500" data-v-e11fa174${_scopeId2}> No exams taken yet. Start practicing! </div>`);
                  } else {
                    _push3(ssrRenderComponent(_component_UTable, {
                      columns: historyColumns,
                      rows: unref(sessions)
                    }, {
                      "exam-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="font-medium text-gray-900 dark:text-white" data-v-e11fa174${_scopeId3}>${ssrInterpolate(row.exam.title)}</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "font-medium text-gray-900 dark:text-white" }, toDisplayString(row.exam.title), 1)
                          ];
                        }
                      }),
                      "score-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="${ssrRenderClass(row.passed ? "text-green-600 font-bold" : "text-red-500")}" data-v-e11fa174${_scopeId3}>${ssrInterpolate(row.score !== null ? row.score.toFixed(1) + "%" : "N/A")}</span>`);
                        } else {
                          return [
                            createVNode("span", {
                              class: row.passed ? "text-green-600 font-bold" : "text-red-500"
                            }, toDisplayString(row.score !== null ? row.score.toFixed(1) + "%" : "N/A"), 3)
                          ];
                        }
                      }),
                      "date-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(new Date(row.endTime || row.startTime).toLocaleDateString())}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(new Date(row.endTime || row.startTime).toLocaleDateString()), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    unref(pending) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex justify-center p-4"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-arrow-path",
                        class: "animate-spin text-2xl text-primary-500"
                      })
                    ])) : !unref(sessions) || unref(sessions).length === 0 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-center p-8 text-gray-500"
                    }, " No exams taken yet. Start practicing! ")) : (openBlock(), createBlock(_component_UTable, {
                      key: 2,
                      columns: historyColumns,
                      rows: unref(sessions)
                    }, {
                      "exam-data": withCtx(({ row }) => [
                        createVNode("span", { class: "font-medium text-gray-900 dark:text-white" }, toDisplayString(row.exam.title), 1)
                      ]),
                      "score-data": withCtx(({ row }) => [
                        createVNode("span", {
                          class: row.passed ? "text-green-600 font-bold" : "text-red-500"
                        }, toDisplayString(row.score !== null ? row.score.toFixed(1) + "%" : "N/A"), 3)
                      ]),
                      "date-data": withCtx(({ row }) => [
                        createTextVNode(toDisplayString(new Date(row.endTime || row.startTime).toLocaleDateString()), 1)
                      ]),
                      _: 1
                    }, 8, ["rows"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="text-xl font-bold" data-v-e11fa174${_scopeId2}>Certification Readiness</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "text-xl font-bold" }, "Certification Readiness")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (examMastery.value.length === 0) {
                    _push3(`<div class="flex flex-col items-center justify-center py-10 opacity-40" data-v-e11fa174${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "i-heroicons-document-magnifying-glass",
                      class: "text-5xl mb-2"
                    }, null, _parent3, _scopeId2));
                    _push3(`<p class="text-xs font-black uppercase tracking-widest" data-v-e11fa174${_scopeId2}>No Exam Data Yet</p></div>`);
                  } else {
                    _push3(`<div class="space-y-6" data-v-e11fa174${_scopeId2}><!--[-->`);
                    ssrRenderList(examMastery.value, (exam) => {
                      _push3(`<div data-v-e11fa174${_scopeId2}><div class="flex justify-between mb-2" data-v-e11fa174${_scopeId2}><span class="text-xs font-black text-gray-400 uppercase tracking-tight truncate max-w-[150px]" data-v-e11fa174${_scopeId2}>${ssrInterpolate(exam.title)}</span><span class="${ssrRenderClass([`text-${exam.color}-500`, "text-xs font-black"])}" data-v-e11fa174${_scopeId2}>${ssrInterpolate(Math.round(exam.score))}%</span></div>`);
                      _push3(ssrRenderComponent(_component_UProgress, {
                        value: exam.score,
                        color: exam.color,
                        size: "sm",
                        class: "rounded-full"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    });
                    _push3(`<!--]--></div>`);
                  }
                  _push3(`<div class="mt-8 text-center" data-v-e11fa174${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    block: "",
                    color: "gray",
                    variant: "soft",
                    icon: "i-heroicons-arrow-path",
                    class: "rounded-xl font-bold"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Update Stats`);
                      } else {
                        return [
                          createTextVNode("Update Stats")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    examMastery.value.length === 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col items-center justify-center py-10 opacity-40"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-document-magnifying-glass",
                        class: "text-5xl mb-2"
                      }),
                      createVNode("p", { class: "text-xs font-black uppercase tracking-widest" }, "No Exam Data Yet")
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "space-y-6"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(examMastery.value, (exam) => {
                        return openBlock(), createBlock("div", {
                          key: exam.title
                        }, [
                          createVNode("div", { class: "flex justify-between mb-2" }, [
                            createVNode("span", { class: "text-xs font-black text-gray-400 uppercase tracking-tight truncate max-w-[150px]" }, toDisplayString(exam.title), 1),
                            createVNode("span", {
                              class: ["text-xs font-black", `text-${exam.color}-500`]
                            }, toDisplayString(Math.round(exam.score)) + "%", 3)
                          ]),
                          createVNode(_component_UProgress, {
                            value: exam.score,
                            color: exam.color,
                            size: "sm",
                            class: "rounded-full"
                          }, null, 8, ["value", "color"])
                        ]);
                      }), 128))
                    ])),
                    createVNode("div", { class: "mt-8 text-center" }, [
                      createVNode(_component_UButton, {
                        block: "",
                        color: "gray",
                        variant: "soft",
                        icon: "i-heroicons-arrow-path",
                        class: "rounded-xl font-bold"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Update Stats")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center mb-8" }, [
                createVNode("div", null, [
                  createVNode("h1", { class: "text-3xl font-bold text-gray-900 dark:text-white" }, "My Dashboard"),
                  createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400 mt-1" }, "Track your progress, streaks, and review past exams.")
                ]),
                createVNode("div", { class: "flex gap-2" }, [
                  createVNode(_component_UButton, {
                    color: "white",
                    variant: "soft",
                    to: "/profile",
                    icon: "i-heroicons-user"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Profile")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UButton, {
                    color: "primary",
                    variant: "soft",
                    to: "/"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Browse Catalog")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" }, [
                createVNode(_component_UCard, { class: "bg-gradient-to-br from-orange-500 to-red-600 text-white border-none" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center space-x-4" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-fire",
                        class: "text-5xl opacity-80"
                      }),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-orange-100 text-sm font-medium" }, "Study Streak"),
                        createVNode("h2", { class: "text-4xl font-extrabold" }, "3 Days")
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_UCard, { class: "bg-gradient-to-br from-blue-500 to-cyan-600 text-white border-none" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center space-x-4" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-academic-cap",
                        class: "text-5xl opacity-80"
                      }),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-blue-100 text-sm font-medium" }, "Exams Taken"),
                        createVNode("h2", { class: "text-4xl font-extrabold" }, toDisplayString(unref(sessions)?.length || 0), 1)
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_UCard, { class: "bg-gradient-to-br from-green-500 to-emerald-600 text-white border-none" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center space-x-4" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-chart-bar",
                        class: "text-5xl opacity-80"
                      }),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-green-100 text-sm font-medium" }, "Average Score"),
                        createVNode("h2", { class: "text-4xl font-extrabold" }, toDisplayString(avgScore.value) + "%", 1)
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, [
                createVNode(_component_UCard, { class: "lg:col-span-2" }, {
                  header: withCtx(() => [
                    createVNode("h3", { class: "text-xl font-bold" }, "Recent Activity")
                  ]),
                  default: withCtx(() => [
                    unref(pending) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex justify-center p-4"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-arrow-path",
                        class: "animate-spin text-2xl text-primary-500"
                      })
                    ])) : !unref(sessions) || unref(sessions).length === 0 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-center p-8 text-gray-500"
                    }, " No exams taken yet. Start practicing! ")) : (openBlock(), createBlock(_component_UTable, {
                      key: 2,
                      columns: historyColumns,
                      rows: unref(sessions)
                    }, {
                      "exam-data": withCtx(({ row }) => [
                        createVNode("span", { class: "font-medium text-gray-900 dark:text-white" }, toDisplayString(row.exam.title), 1)
                      ]),
                      "score-data": withCtx(({ row }) => [
                        createVNode("span", {
                          class: row.passed ? "text-green-600 font-bold" : "text-red-500"
                        }, toDisplayString(row.score !== null ? row.score.toFixed(1) + "%" : "N/A"), 3)
                      ]),
                      "date-data": withCtx(({ row }) => [
                        createTextVNode(toDisplayString(new Date(row.endTime || row.startTime).toLocaleDateString()), 1)
                      ]),
                      _: 1
                    }, 8, ["rows"]))
                  ]),
                  _: 1
                }),
                createVNode(_component_UCard, null, {
                  header: withCtx(() => [
                    createVNode("h3", { class: "text-xl font-bold" }, "Certification Readiness")
                  ]),
                  default: withCtx(() => [
                    examMastery.value.length === 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col items-center justify-center py-10 opacity-40"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-document-magnifying-glass",
                        class: "text-5xl mb-2"
                      }),
                      createVNode("p", { class: "text-xs font-black uppercase tracking-widest" }, "No Exam Data Yet")
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "space-y-6"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(examMastery.value, (exam) => {
                        return openBlock(), createBlock("div", {
                          key: exam.title
                        }, [
                          createVNode("div", { class: "flex justify-between mb-2" }, [
                            createVNode("span", { class: "text-xs font-black text-gray-400 uppercase tracking-tight truncate max-w-[150px]" }, toDisplayString(exam.title), 1),
                            createVNode("span", {
                              class: ["text-xs font-black", `text-${exam.color}-500`]
                            }, toDisplayString(Math.round(exam.score)) + "%", 3)
                          ]),
                          createVNode(_component_UProgress, {
                            value: exam.score,
                            color: exam.color,
                            size: "sm",
                            class: "rounded-full"
                          }, null, 8, ["value", "color"])
                        ]);
                      }), 128))
                    ])),
                    createVNode("div", { class: "mt-8 text-center" }, [
                      createVNode(_component_UButton, {
                        block: "",
                        color: "gray",
                        variant: "soft",
                        icon: "i-heroicons-arrow-path",
                        class: "rounded-xl font-bold"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Update Stats")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e11fa174"]]);
export {
  index as default
};
//# sourceMappingURL=index-vLNc2fqQ.js.map
