import { a as useRouter, b as __nuxt_component_3 } from "../server.mjs";
import __nuxt_component_2 from "./Card-CgPQDjgh.js";
import __nuxt_component_2$1 from "./Form-C7ZW1TTK.js";
import __nuxt_component_7 from "./FormGroup-DAIqfz9h.js";
import __nuxt_component_4 from "./Input-CZAMts_N.js";
import __nuxt_component_10 from "./Select-BiIxaLPN.js";
import { ref, reactive, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/hookable/dist/index.mjs";
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
import "./useFormGroup-DqE91r20.js";
const _sfc_main = {
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const loading = ref(false);
    const state = reactive({
      title: "",
      provider: "AWS",
      certificationCode: "",
      passingScore: 70,
      timeLimit: 120,
      tags: ""
    });
    const onSubmit = async () => {
      loading.value = true;
      try {
        const response = await $fetch("/api/admin/exams", {
          method: "POST",
          body: {
            ...state,
            categoryTags: JSON.stringify(state.tags.split(",").map((t) => t.trim()))
          }
        });
        router.push("/admin/exams");
      } catch (err) {
        alert("Failed to create exam: " + (err.message || "Unknown error"));
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_3;
      const _component_UCard = __nuxt_component_2;
      const _component_UForm = __nuxt_component_2$1;
      const _component_UFormGroup = __nuxt_component_7;
      const _component_UInput = __nuxt_component_4;
      const _component_USelect = __nuxt_component_10;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-300" }, _attrs))}><div class="max-w-3xl mx-auto"><div class="flex items-center gap-4 mb-8">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "gray",
        variant: "ghost",
        icon: "i-heroicons-arrow-left",
        to: "/admin/exams"
      }, null, _parent));
      _push(`<h1 class="text-3xl font-bold text-gray-900 dark:text-white">Create New Exam</h1></div>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UForm, {
              schema: _ctx.schema,
              state,
              class: "space-y-6",
              onSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Exam Title",
                    name: "title",
                    required: "",
                    help: "e.g. AWS Certified Solutions Architect - Associate"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: state.title,
                          "onUpdate:modelValue": ($event) => state.title = $event,
                          placeholder: "Enter exam name..."
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: state.title,
                            "onUpdate:modelValue": ($event) => state.title = $event,
                            placeholder: "Enter exam name..."
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="grid grid-cols-2 gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Provider",
                    name: "provider"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_USelect, {
                          modelValue: state.provider,
                          "onUpdate:modelValue": ($event) => state.provider = $event,
                          options: ["AWS", "Azure", "GCP", "SAP", "CompTIA", "Other"]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_USelect, {
                            modelValue: state.provider,
                            "onUpdate:modelValue": ($event) => state.provider = $event,
                            options: ["AWS", "Azure", "GCP", "SAP", "CompTIA", "Other"]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Certification Code",
                    name: "certificationCode"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: state.certificationCode,
                          "onUpdate:modelValue": ($event) => state.certificationCode = $event,
                          placeholder: "e.g. SAA-C03"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: state.certificationCode,
                            "onUpdate:modelValue": ($event) => state.certificationCode = $event,
                            placeholder: "e.g. SAA-C03"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-2 gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Passing Score (%)",
                    name: "passingScore"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: state.passingScore,
                          "onUpdate:modelValue": ($event) => state.passingScore = $event,
                          type: "number"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: state.passingScore,
                            "onUpdate:modelValue": ($event) => state.passingScore = $event,
                            type: "number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Time Limit (minutes)",
                    name: "timeLimit"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: state.timeLimit,
                          "onUpdate:modelValue": ($event) => state.timeLimit = $event,
                          type: "number"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: state.timeLimit,
                            "onUpdate:modelValue": ($event) => state.timeLimit = $event,
                            type: "number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Category Tags",
                    name: "tags",
                    help: "Comma separated values"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: state.tags,
                          "onUpdate:modelValue": ($event) => state.tags = $event,
                          placeholder: "Cloud, Solutions, Architect..."
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: state.tags,
                            "onUpdate:modelValue": ($event) => state.tags = $event,
                            placeholder: "Cloud, Solutions, Architect..."
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-800"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "soft",
                    to: "/admin/exams"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Cancel`);
                      } else {
                        return [
                          createTextVNode("Cancel")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    type: "submit",
                    color: "primary",
                    icon: "i-heroicons-check",
                    loading: loading.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Create Exam `);
                      } else {
                        return [
                          createTextVNode(" Create Exam ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_UFormGroup, {
                      label: "Exam Title",
                      name: "title",
                      required: "",
                      help: "e.g. AWS Certified Solutions Architect - Associate"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: state.title,
                          "onUpdate:modelValue": ($event) => state.title = $event,
                          placeholder: "Enter exam name..."
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                      createVNode(_component_UFormGroup, {
                        label: "Provider",
                        name: "provider"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_USelect, {
                            modelValue: state.provider,
                            "onUpdate:modelValue": ($event) => state.provider = $event,
                            options: ["AWS", "Azure", "GCP", "SAP", "CompTIA", "Other"]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        label: "Certification Code",
                        name: "certificationCode"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: state.certificationCode,
                            "onUpdate:modelValue": ($event) => state.certificationCode = $event,
                            placeholder: "e.g. SAA-C03"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                      createVNode(_component_UFormGroup, {
                        label: "Passing Score (%)",
                        name: "passingScore"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: state.passingScore,
                            "onUpdate:modelValue": ($event) => state.passingScore = $event,
                            type: "number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        label: "Time Limit (minutes)",
                        name: "timeLimit"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: state.timeLimit,
                            "onUpdate:modelValue": ($event) => state.timeLimit = $event,
                            type: "number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_UFormGroup, {
                      label: "Category Tags",
                      name: "tags",
                      help: "Comma separated values"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: state.tags,
                          "onUpdate:modelValue": ($event) => state.tags = $event,
                          placeholder: "Cloud, Solutions, Architect..."
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-800" }, [
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "soft",
                        to: "/admin/exams"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancel")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UButton, {
                        type: "submit",
                        color: "primary",
                        icon: "i-heroicons-check",
                        loading: loading.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Create Exam ")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UForm, {
                schema: _ctx.schema,
                state,
                class: "space-y-6",
                onSubmit
              }, {
                default: withCtx(() => [
                  createVNode(_component_UFormGroup, {
                    label: "Exam Title",
                    name: "title",
                    required: "",
                    help: "e.g. AWS Certified Solutions Architect - Associate"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: state.title,
                        "onUpdate:modelValue": ($event) => state.title = $event,
                        placeholder: "Enter exam name..."
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                    createVNode(_component_UFormGroup, {
                      label: "Provider",
                      name: "provider"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: state.provider,
                          "onUpdate:modelValue": ($event) => state.provider = $event,
                          options: ["AWS", "Azure", "GCP", "SAP", "CompTIA", "Other"]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormGroup, {
                      label: "Certification Code",
                      name: "certificationCode"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: state.certificationCode,
                          "onUpdate:modelValue": ($event) => state.certificationCode = $event,
                          placeholder: "e.g. SAA-C03"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                    createVNode(_component_UFormGroup, {
                      label: "Passing Score (%)",
                      name: "passingScore"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: state.passingScore,
                          "onUpdate:modelValue": ($event) => state.passingScore = $event,
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormGroup, {
                      label: "Time Limit (minutes)",
                      name: "timeLimit"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: state.timeLimit,
                          "onUpdate:modelValue": ($event) => state.timeLimit = $event,
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_UFormGroup, {
                    label: "Category Tags",
                    name: "tags",
                    help: "Comma separated values"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: state.tags,
                        "onUpdate:modelValue": ($event) => state.tags = $event,
                        placeholder: "Cloud, Solutions, Architect..."
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-800" }, [
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "soft",
                      to: "/admin/exams"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Cancel")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UButton, {
                      type: "submit",
                      color: "primary",
                      icon: "i-heroicons-check",
                      loading: loading.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Create Exam ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])
                ]),
                _: 1
              }, 8, ["schema", "state"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/exams/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=create-HhiZvjLW.js.map
