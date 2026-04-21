import { b as __nuxt_component_3, _ as __nuxt_component_2$1 } from "../server.mjs";
import __nuxt_component_4 from "./Input-CZAMts_N.js";
import __nuxt_component_2 from "./Card-CgPQDjgh.js";
import __nuxt_component_3$1 from "./Table-BEEiCEEU.js";
import __nuxt_component_3$2 from "./Badge-CzftAi4r.js";
import __nuxt_component_6 from "./Modal-CHUfZEA4.js";
import __nuxt_component_7 from "./FormGroup-DAIqfz9h.js";
import __nuxt_component_10 from "./Select-BiIxaLPN.js";
import { ref, reactive, computed, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, withKeys, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
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
import "./useFormGroup-DqE91r20.js";
import "./Checkbox-Cf2Up8nx.js";
import "./Progress-Bp2H55JY.js";
import "R:/Company Portal/products/3.Certificatation_preparation/node_modules/scule/dist/index.mjs";
import "./transition-CXfcTVM0.js";
import "./portal-BvWS8jLA.js";
import "./focus-management-CclPs0xY.js";
import "./keyboard-BCt0ZeLv.js";
import "./use-outside-click-cNhWs2ZY.js";
import "./hidden-e5tlhUcy.js";
import "./active-element-history-Cer4cSOw.js";
import "./micro-task-B6uncIso.js";
import "./open-closed-DaveoKA1.js";
import "./description-CG6lMCGz.js";
import "@vue/shared";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: exams, pending, refresh } = useFetch(
      "/api/admin/exams",
      "$1riqBf2roQ"
      /* nuxt-injected */
    );
    const searchQuery = ref("");
    const isDeleteModalOpen = ref(false);
    const isEditModalOpen = ref(false);
    const examToDelete = ref(null);
    const examToEdit = ref(null);
    const confirmPassword = ref("");
    const deleting = ref(false);
    const updating = ref(false);
    const editForm = reactive({
      title: "",
      provider: "",
      certificationCode: "",
      status: ""
    });
    const filteredExams = computed(() => {
      if (!exams.value) return [];
      if (!searchQuery.value) return exams.value;
      const query = searchQuery.value.toLowerCase();
      return exams.value.filter(
        (exam) => exam.title.toLowerCase().includes(query) || exam.provider?.toLowerCase().includes(query) || exam.certificationCode?.toLowerCase().includes(query)
      );
    });
    const columns = [
      { key: "title", label: "Exam Title" },
      { key: "provider", label: "Provider" },
      { key: "certificationCode", label: "Code" },
      { key: "_count.questions", label: "Questions" },
      { key: "status", label: "Status" },
      { key: "actions", label: "Actions" }
    ];
    const openEditModal = (exam) => {
      examToEdit.value = exam;
      editForm.title = exam.title;
      editForm.provider = exam.provider;
      editForm.certificationCode = exam.certificationCode;
      editForm.status = exam.status;
      isEditModalOpen.value = true;
    };
    const handleUpdate = async () => {
      updating.value = true;
      try {
        await $fetch(`/api/admin/exams/${examToEdit.value.id}`, {
          method: "PATCH",
          body: editForm
        });
        isEditModalOpen.value = false;
        refresh();
      } catch (err) {
        alert("Failed to update exam");
      } finally {
        updating.value = false;
      }
    };
    const toggleStatus = async (exam) => {
      const newStatus = exam.status === "published" ? "draft" : "published";
      try {
        await $fetch(`/api/admin/exams/${exam.id}`, {
          method: "PATCH",
          body: { ...exam, status: newStatus }
        });
        refresh();
      } catch (err) {
        alert("Failed to toggle status");
      }
    };
    const openDeleteModal = (exam) => {
      examToDelete.value = exam;
      confirmPassword.value = "";
      isDeleteModalOpen.value = true;
    };
    const handleDelete = async () => {
      if (!examToDelete.value || !confirmPassword.value) return;
      deleting.value = true;
      try {
        await $fetch(`/api/admin/exams/${examToDelete.value.id}`, {
          method: "DELETE",
          body: { password: confirmPassword.value }
        });
        isDeleteModalOpen.value = false;
        refresh();
      } catch (err) {
        alert(err.statusMessage || "Failed to delete exam");
      } finally {
        deleting.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_3;
      const _component_UInput = __nuxt_component_4;
      const _component_UCard = __nuxt_component_2;
      const _component_UTable = __nuxt_component_3$1;
      const _component_UBadge = __nuxt_component_3$2;
      const _component_UModal = __nuxt_component_6;
      const _component_UIcon = __nuxt_component_2$1;
      const _component_UFormGroup = __nuxt_component_7;
      const _component_USelect = __nuxt_component_10;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-100 dark:bg-gray-800 p-8 transition-colors duration-300" }, _attrs))}><div class="max-w-7xl mx-auto"><div class="flex justify-between items-center mb-8"><div><h1 class="text-3xl font-bold text-gray-900 dark:text-white">Exam Catalog</h1><p class="text-sm text-gray-500 mt-1">Manage, add, and publish your certification exams.</p></div><div class="space-x-3">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "gray",
        variant: "soft",
        to: "/admin/dashboard"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Back to Dashboard`);
          } else {
            return [
              createTextVNode("Back to Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        icon: "i-heroicons-plus",
        to: "/admin/exams/create"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`New Exam`);
          } else {
            return [
              createTextVNode("New Exam")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: searchQuery.value,
        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
        icon: "i-heroicons-magnifying-glass",
        placeholder: "Search exams...",
        class: "w-full md:w-96",
        size: "lg"
      }, null, _parent));
      _push(`<div class="text-sm font-medium text-gray-500"> Showing ${ssrInterpolate(unref(filteredExams).length)} exams </div></div>`);
      _push(ssrRenderComponent(_component_UCard, {
        ui: { body: { padding: "p-0" }, rounded: "rounded-2xl" },
        class: "overflow-hidden shadow-xl border-none ring-1 ring-gray-200 dark:ring-gray-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(pending)) {
              _push2(`<div class="divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><!--[-->`);
              ssrRenderList(5, (i) => {
                _push2(`<div class="p-4 flex items-center justify-between animate-pulse"${_scopeId}><div class="space-y-2"${_scopeId}><div class="h-4 w-64 bg-gray-200 dark:bg-gray-700 rounded"${_scopeId}></div><div class="h-3 w-32 bg-gray-100 dark:bg-gray-800 rounded"${_scopeId}></div></div><div class="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg"${_scopeId}></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(ssrRenderComponent(_component_UTable, {
                columns,
                rows: unref(filteredExams),
                ui: { tr: { base: "hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors" } }
              }, {
                "title-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="max-w-[300px] truncate"${_scopeId2}><p class="font-bold text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(row.title)}</p><p class="text-[10px] text-gray-400 uppercase tracking-widest font-black"${_scopeId2}>${ssrInterpolate(row.provider)}</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "max-w-[300px] truncate" }, [
                        createVNode("p", { class: "font-bold text-gray-900 dark:text-white" }, toDisplayString(row.title), 1),
                        createVNode("p", { class: "text-[10px] text-gray-400 uppercase tracking-widest font-black" }, toDisplayString(row.provider), 1)
                      ])
                    ];
                  }
                }),
                "status-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UBadge, {
                      color: row.status === "published" ? "green" : "orange",
                      variant: "soft",
                      class: "cursor-pointer font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider",
                      onClick: ($event) => toggleStatus(row)
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(row.status)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(row.status), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UBadge, {
                        color: row.status === "published" ? "green" : "orange",
                        variant: "soft",
                        class: "cursor-pointer font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider",
                        onClick: ($event) => toggleStatus(row)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(row.status), 1)
                        ]),
                        _: 2
                      }, 1032, ["color", "onClick"])
                    ];
                  }
                }),
                "actions-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex space-x-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      size: "sm",
                      color: "primary",
                      variant: "ghost",
                      icon: "i-heroicons-pencil-square",
                      onClick: ($event) => openEditModal(row)
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UButton, {
                      size: "sm",
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-queue-list",
                      to: `/admin/exams/${row.id}/questions`
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UButton, {
                      size: "sm",
                      color: "blue",
                      variant: "ghost",
                      icon: "i-heroicons-arrow-up-tray",
                      to: `/admin/upload?examId=${row.id}`
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UButton, {
                      size: "sm",
                      color: "red",
                      variant: "ghost",
                      icon: "i-heroicons-trash",
                      onClick: ($event) => openDeleteModal(row)
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex space-x-1" }, [
                        createVNode(_component_UButton, {
                          size: "sm",
                          color: "primary",
                          variant: "ghost",
                          icon: "i-heroicons-pencil-square",
                          onClick: ($event) => openEditModal(row)
                        }, null, 8, ["onClick"]),
                        createVNode(_component_UButton, {
                          size: "sm",
                          color: "gray",
                          variant: "ghost",
                          icon: "i-heroicons-queue-list",
                          to: `/admin/exams/${row.id}/questions`
                        }, null, 8, ["to"]),
                        createVNode(_component_UButton, {
                          size: "sm",
                          color: "blue",
                          variant: "ghost",
                          icon: "i-heroicons-arrow-up-tray",
                          to: `/admin/upload?examId=${row.id}`
                        }, null, 8, ["to"]),
                        createVNode(_component_UButton, {
                          size: "sm",
                          color: "red",
                          variant: "ghost",
                          icon: "i-heroicons-trash",
                          onClick: ($event) => openDeleteModal(row)
                        }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
          } else {
            return [
              unref(pending) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "divide-y divide-gray-100 dark:divide-gray-800"
              }, [
                (openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
                  return createVNode("div", {
                    key: i,
                    class: "p-4 flex items-center justify-between animate-pulse"
                  }, [
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("div", { class: "h-4 w-64 bg-gray-200 dark:bg-gray-700 rounded" }),
                      createVNode("div", { class: "h-3 w-32 bg-gray-100 dark:bg-gray-800 rounded" })
                    ]),
                    createVNode("div", { class: "h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg" })
                  ]);
                }), 64))
              ])) : (openBlock(), createBlock(_component_UTable, {
                key: 1,
                columns,
                rows: unref(filteredExams),
                ui: { tr: { base: "hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors" } }
              }, {
                "title-data": withCtx(({ row }) => [
                  createVNode("div", { class: "max-w-[300px] truncate" }, [
                    createVNode("p", { class: "font-bold text-gray-900 dark:text-white" }, toDisplayString(row.title), 1),
                    createVNode("p", { class: "text-[10px] text-gray-400 uppercase tracking-widest font-black" }, toDisplayString(row.provider), 1)
                  ])
                ]),
                "status-data": withCtx(({ row }) => [
                  createVNode(_component_UBadge, {
                    color: row.status === "published" ? "green" : "orange",
                    variant: "soft",
                    class: "cursor-pointer font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider",
                    onClick: ($event) => toggleStatus(row)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(row.status), 1)
                    ]),
                    _: 2
                  }, 1032, ["color", "onClick"])
                ]),
                "actions-data": withCtx(({ row }) => [
                  createVNode("div", { class: "flex space-x-1" }, [
                    createVNode(_component_UButton, {
                      size: "sm",
                      color: "primary",
                      variant: "ghost",
                      icon: "i-heroicons-pencil-square",
                      onClick: ($event) => openEditModal(row)
                    }, null, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      size: "sm",
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-queue-list",
                      to: `/admin/exams/${row.id}/questions`
                    }, null, 8, ["to"]),
                    createVNode(_component_UButton, {
                      size: "sm",
                      color: "blue",
                      variant: "ghost",
                      icon: "i-heroicons-arrow-up-tray",
                      to: `/admin/upload?examId=${row.id}`
                    }, null, 8, ["to"]),
                    createVNode(_component_UButton, {
                      size: "sm",
                      color: "red",
                      variant: "ghost",
                      icon: "i-heroicons-trash",
                      onClick: ($event) => openDeleteModal(row)
                    }, null, 8, ["onClick"])
                  ])
                ]),
                _: 1
              }, 8, ["rows"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: isEditModalOpen.value,
        "onUpdate:modelValue": ($event) => isEditModalOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-pencil-square",
                    class: "text-2xl text-primary-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`<h3 class="text-xl font-bold"${_scopeId2}>Edit Exam Details</h3></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-pencil-square",
                        class: "text-2xl text-primary-500"
                      }),
                      createVNode("h3", { class: "text-xl font-bold" }, "Edit Exam Details")
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-end gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    onClick: ($event) => isEditModalOpen.value = false
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
                    color: "primary",
                    loading: updating.value,
                    onClick: handleUpdate
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Save Changes`);
                      } else {
                        return [
                          createTextVNode("Save Changes")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-end gap-3" }, [
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "ghost",
                        onClick: ($event) => isEditModalOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancel")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        color: "primary",
                        loading: updating.value,
                        onClick: handleUpdate
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Save Changes")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-4 py-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Exam Title",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: editForm.title,
                          "onUpdate:modelValue": ($event) => editForm.title = $event,
                          placeholder: "e.g. AWS Certified AI Practitioner"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: editForm.title,
                            "onUpdate:modelValue": ($event) => editForm.title = $event,
                            placeholder: "e.g. AWS Certified AI Practitioner"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="grid grid-cols-2 gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Provider",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: editForm.provider,
                          "onUpdate:modelValue": ($event) => editForm.provider = $event,
                          placeholder: "e.g. AWS, Azure, GCP"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: editForm.provider,
                            "onUpdate:modelValue": ($event) => editForm.provider = $event,
                            placeholder: "e.g. AWS, Azure, GCP"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, { label: "Certification Code" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: editForm.certificationCode,
                          "onUpdate:modelValue": ($event) => editForm.certificationCode = $event,
                          placeholder: "e.g. AI1-C01"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: editForm.certificationCode,
                            "onUpdate:modelValue": ($event) => editForm.certificationCode = $event,
                            placeholder: "e.g. AI1-C01"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, { label: "Publication Status" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_USelect, {
                          modelValue: editForm.status,
                          "onUpdate:modelValue": ($event) => editForm.status = $event,
                          options: ["draft", "published"]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_USelect, {
                            modelValue: editForm.status,
                            "onUpdate:modelValue": ($event) => editForm.status = $event,
                            options: ["draft", "published"]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-4 py-2" }, [
                      createVNode(_component_UFormGroup, {
                        label: "Exam Title",
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: editForm.title,
                            "onUpdate:modelValue": ($event) => editForm.title = $event,
                            placeholder: "e.g. AWS Certified AI Practitioner"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                        createVNode(_component_UFormGroup, {
                          label: "Provider",
                          required: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: editForm.provider,
                              "onUpdate:modelValue": ($event) => editForm.provider = $event,
                              placeholder: "e.g. AWS, Azure, GCP"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Certification Code" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: editForm.certificationCode,
                              "onUpdate:modelValue": ($event) => editForm.certificationCode = $event,
                              placeholder: "e.g. AI1-C01"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_UFormGroup, { label: "Publication Status" }, {
                        default: withCtx(() => [
                          createVNode(_component_USelect, {
                            modelValue: editForm.status,
                            "onUpdate:modelValue": ($event) => editForm.status = $event,
                            options: ["draft", "published"]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, null, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-pencil-square",
                      class: "text-2xl text-primary-500"
                    }),
                    createVNode("h3", { class: "text-xl font-bold" }, "Edit Exam Details")
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode("div", { class: "flex justify-end gap-3" }, [
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      onClick: ($event) => isEditModalOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Cancel")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      color: "primary",
                      loading: updating.value,
                      onClick: handleUpdate
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Save Changes")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-4 py-2" }, [
                    createVNode(_component_UFormGroup, {
                      label: "Exam Title",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editForm.title,
                          "onUpdate:modelValue": ($event) => editForm.title = $event,
                          placeholder: "e.g. AWS Certified AI Practitioner"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                      createVNode(_component_UFormGroup, {
                        label: "Provider",
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: editForm.provider,
                            "onUpdate:modelValue": ($event) => editForm.provider = $event,
                            placeholder: "e.g. AWS, Azure, GCP"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Certification Code" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: editForm.certificationCode,
                            "onUpdate:modelValue": ($event) => editForm.certificationCode = $event,
                            placeholder: "e.g. AI1-C01"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_UFormGroup, { label: "Publication Status" }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: editForm.status,
                          "onUpdate:modelValue": ($event) => editForm.status = $event,
                          options: ["draft", "published"]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: isDeleteModalOpen.value,
        "onUpdate:modelValue": ($event) => isDeleteModalOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2 text-red-600"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-exclamation-triangle",
                    class: "text-2xl"
                  }, null, _parent3, _scopeId2));
                  _push3(`<h3 class="text-xl font-bold"${_scopeId2}>Confirm Deletion</h3></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2 text-red-600" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-exclamation-triangle",
                        class: "text-2xl"
                      }),
                      createVNode("h3", { class: "text-xl font-bold" }, "Confirm Deletion")
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-end gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    onClick: ($event) => isDeleteModalOpen.value = false
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
                    color: "red",
                    loading: deleting.value,
                    disabled: !confirmPassword.value,
                    onClick: handleDelete
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Permanently Delete `);
                      } else {
                        return [
                          createTextVNode(" Permanently Delete ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-end gap-3" }, [
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "ghost",
                        onClick: ($event) => isDeleteModalOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancel")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        color: "red",
                        loading: deleting.value,
                        disabled: !confirmPassword.value,
                        onClick: handleDelete
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Permanently Delete ")
                        ]),
                        _: 1
                      }, 8, ["loading", "disabled"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-4 py-2"${_scopeId2}><p class="text-gray-600 dark:text-gray-400"${_scopeId2}> You are about to delete <span class="font-bold text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(examToDelete.value?.title)}</span>. This will permanently remove all associated questions and student attempt history. </p>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Enter Admin Password to Confirm",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: confirmPassword.value,
                          "onUpdate:modelValue": ($event) => confirmPassword.value = $event,
                          type: "password",
                          placeholder: "Admin Password",
                          onKeyup: handleDelete
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: confirmPassword.value,
                            "onUpdate:modelValue": ($event) => confirmPassword.value = $event,
                            type: "password",
                            placeholder: "Admin Password",
                            onKeyup: withKeys(handleDelete, ["enter"])
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-4 py-2" }, [
                      createVNode("p", { class: "text-gray-600 dark:text-gray-400" }, [
                        createTextVNode(" You are about to delete "),
                        createVNode("span", { class: "font-bold text-gray-900 dark:text-white" }, toDisplayString(examToDelete.value?.title), 1),
                        createTextVNode(". This will permanently remove all associated questions and student attempt history. ")
                      ]),
                      createVNode(_component_UFormGroup, {
                        label: "Enter Admin Password to Confirm",
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: confirmPassword.value,
                            "onUpdate:modelValue": ($event) => confirmPassword.value = $event,
                            type: "password",
                            placeholder: "Admin Password",
                            onKeyup: withKeys(handleDelete, ["enter"])
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { ui: { ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex items-center gap-2 text-red-600" }, [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-exclamation-triangle",
                      class: "text-2xl"
                    }),
                    createVNode("h3", { class: "text-xl font-bold" }, "Confirm Deletion")
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode("div", { class: "flex justify-end gap-3" }, [
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      onClick: ($event) => isDeleteModalOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Cancel")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      color: "red",
                      loading: deleting.value,
                      disabled: !confirmPassword.value,
                      onClick: handleDelete
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Permanently Delete ")
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-4 py-2" }, [
                    createVNode("p", { class: "text-gray-600 dark:text-gray-400" }, [
                      createTextVNode(" You are about to delete "),
                      createVNode("span", { class: "font-bold text-gray-900 dark:text-white" }, toDisplayString(examToDelete.value?.title), 1),
                      createTextVNode(". This will permanently remove all associated questions and student attempt history. ")
                    ]),
                    createVNode(_component_UFormGroup, {
                      label: "Enter Admin Password to Confirm",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: confirmPassword.value,
                          "onUpdate:modelValue": ($event) => confirmPassword.value = $event,
                          type: "password",
                          placeholder: "Admin Password",
                          onKeyup: withKeys(handleDelete, ["enter"])
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/exams/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index--fOjdTJu.js.map
