import { b as __nuxt_component_3, _ as __nuxt_component_2$1 } from "../server.mjs";
import __nuxt_component_2 from "./Card-CgPQDjgh.js";
import __nuxt_component_3$1 from "./Table-BEEiCEEU.js";
import __nuxt_component_3$2 from "./Badge-CzftAi4r.js";
import __nuxt_component_6 from "./Modal-CHUfZEA4.js";
import __nuxt_component_7 from "./FormGroup-DAIqfz9h.js";
import __nuxt_component_10 from "./Select-BiIxaLPN.js";
import __nuxt_component_4 from "./Input-CZAMts_N.js";
import { ref, computed, mergeProps, withCtx, createTextVNode, unref, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, isRef, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
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
import "./Checkbox-Cf2Up8nx.js";
import "./useFormGroup-DqE91r20.js";
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
  __name: "users",
  __ssrInlineRender: true,
  setup(__props) {
    const columns = [
      { key: "email", label: "Email Address" },
      { key: "name", label: "Display Name" },
      { key: "phone", label: "Phone" },
      { key: "role", label: "Role" },
      { key: "plan", label: "Subscription Plan" },
      { key: "boundDeviceId", label: "Device Hash" },
      { key: "_count", label: "Activity" },
      { key: "createdAt", label: "Joined On" },
      { key: "actions", label: "Actions" }
    ];
    const { data: users, pending, refresh } = useFetch(
      "/api/admin/users",
      "$1CTZI6X1gv"
      /* nuxt-injected */
    );
    const selectedUser = ref(null);
    const editModalOpen = ref(false);
    const saving = ref(false);
    const openEditModal = (user) => {
      selectedUser.value = { ...user };
      editModalOpen.value = true;
    };
    const hasPendingSubscription = computed(() => {
      return selectedUser.value?.subscriptions?.some((s) => s.status === "PENDING_APPROVAL");
    });
    const pendingSub = computed(() => {
      return selectedUser.value?.subscriptions?.find((s) => s.status === "PENDING_APPROVAL");
    });
    const saveUserEdits = async () => {
      saving.value = true;
      try {
        await $fetch(`/api/admin/users/${selectedUser.value.id}`, {
          method: "PATCH",
          body: {
            role: selectedUser.value.role,
            plan: selectedUser.value.plan,
            boundDeviceId: selectedUser.value.boundDeviceId
          }
        });
        editModalOpen.value = false;
        refresh();
      } catch (e) {
        alert("Failed to update user: " + (e.data?.statusMessage || e.message));
      } finally {
        saving.value = false;
      }
    };
    const handleSubscriptionApprove = async (subId, status) => {
      try {
        await $fetch(`/api/admin/subscriptions/${subId}/approve`, {
          method: "POST",
          body: { status, userId: selectedUser.value.id }
        });
        alert(`Subscription ${status === "ACTIVE" ? "Approved" : "Rejected"}!`);
        editModalOpen.value = false;
        refresh();
      } catch (e) {
        alert("Failed to update subscription status.");
      }
    };
    const promoteUser = async (id) => {
      const user = users.value.find((u) => u.id === id);
      if (user) openEditModal(user);
    };
    const deleteUser = async (id) => {
      if (!confirm("Are you sure you want to delete this user? All their data will be lost.")) return;
      try {
        await $fetch(`/api/admin/users/${id}`, { method: "DELETE" });
        refresh();
      } catch (err) {
        alert("Failed to delete user");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_3;
      const _component_UCard = __nuxt_component_2;
      const _component_UTable = __nuxt_component_3$1;
      const _component_UBadge = __nuxt_component_3$2;
      const _component_UModal = __nuxt_component_6;
      const _component_UIcon = __nuxt_component_2$1;
      const _component_UFormGroup = __nuxt_component_7;
      const _component_USelect = __nuxt_component_10;
      const _component_UInput = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-300" }, _attrs))}><div class="max-w-7xl mx-auto"><div class="flex justify-between items-center mb-8"><div><h1 class="text-3xl font-bold text-gray-900 dark:text-white">User Management</h1><p class="text-sm text-gray-500 mt-1">View and manage all registered accounts on RhyseForge.</p></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "gray",
        variant: "soft",
        to: "/admin/dashboard",
        icon: "i-heroicons-arrow-left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Back to Dashboard `);
          } else {
            return [
              createTextVNode(" Back to Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTable, {
              columns,
              rows: unref(users),
              loading: unref(pending)
            }, {
              "role-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UBadge, {
                    color: row.role === "ADMIN" ? "purple" : "blue",
                    variant: "subtle"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(row.role)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(row.role), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UBadge, {
                      color: row.role === "ADMIN" ? "purple" : "blue",
                      variant: "subtle"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.role), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              "phone-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-sm font-mono"${_scopeId2}>${ssrInterpolate(row.phone || "N/A")}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-sm font-mono" }, toDisplayString(row.phone || "N/A"), 1)
                  ];
                }
              }),
              "plan-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UBadge, {
                    color: row.plan === "ENTERPRISE" ? "amber" : row.plan === "FREE" ? "gray" : "green"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(row.plan)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(row.plan), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  if (row.subscriptions?.some((s) => s.status === "PENDING_APPROVAL")) {
                    _push3(`<span class="text-xs font-black text-orange-500 animate-pulse"${_scopeId2}>Request Pending</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UBadge, {
                        color: row.plan === "ENTERPRISE" ? "amber" : row.plan === "FREE" ? "gray" : "green"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(row.plan), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"]),
                      row.subscriptions?.some((s) => s.status === "PENDING_APPROVAL") ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-xs font-black text-orange-500 animate-pulse"
                      }, "Request Pending")) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              "boundDeviceId-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-xs font-mono bg-gray-100 dark:bg-gray-800 p-1 rounded font-black tracking-widest text-gray-500"${ssrRenderAttr("title", row.boundDeviceId)}${_scopeId2}>${ssrInterpolate(row.boundDeviceId ? row.boundDeviceId : "Unbound")}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: "text-xs font-mono bg-gray-100 dark:bg-gray-800 p-1 rounded font-black tracking-widest text-gray-500",
                      title: row.boundDeviceId
                    }, toDisplayString(row.boundDeviceId ? row.boundDeviceId : "Unbound"), 9, ["title"])
                  ];
                }
              }),
              "createdAt-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-xs text-gray-500"${_scopeId2}>${ssrInterpolate(new Date(row.createdAt).toLocaleDateString())}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(new Date(row.createdAt).toLocaleDateString()), 1)
                  ];
                }
              }),
              "_count-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UBadge, {
                    color: "gray",
                    variant: "soft"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(row._count.sessions)} Attempts `);
                      } else {
                        return [
                          createTextVNode(toDisplayString(row._count.sessions) + " Attempts ", 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UBadge, {
                      color: "gray",
                      variant: "soft"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row._count.sessions) + " Attempts ", 1)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              "actions-data": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    size: "2xs",
                    color: "primary",
                    variant: "ghost",
                    icon: "i-heroicons-pencil-square",
                    title: "Edit / Approve",
                    onClick: ($event) => openEditModal(row)
                  }, null, _parent3, _scopeId2));
                  if (row.role !== "ADMIN") {
                    _push3(ssrRenderComponent(_component_UButton, {
                      size: "2xs",
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-shield-check",
                      title: "Make Admin",
                      onClick: ($event) => promoteUser(row.id)
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UButton, {
                    size: "2xs",
                    color: "red",
                    variant: "ghost",
                    icon: "i-heroicons-trash",
                    title: "Delete User",
                    onClick: ($event) => deleteUser(row.id)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UButton, {
                        size: "2xs",
                        color: "primary",
                        variant: "ghost",
                        icon: "i-heroicons-pencil-square",
                        title: "Edit / Approve",
                        onClick: ($event) => openEditModal(row)
                      }, null, 8, ["onClick"]),
                      row.role !== "ADMIN" ? (openBlock(), createBlock(_component_UButton, {
                        key: 0,
                        size: "2xs",
                        color: "gray",
                        variant: "ghost",
                        icon: "i-heroicons-shield-check",
                        title: "Make Admin",
                        onClick: ($event) => promoteUser(row.id)
                      }, null, 8, ["onClick"])) : createCommentVNode("", true),
                      createVNode(_component_UButton, {
                        size: "2xs",
                        color: "red",
                        variant: "ghost",
                        icon: "i-heroicons-trash",
                        title: "Delete User",
                        onClick: ($event) => deleteUser(row.id)
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UModal, {
              modelValue: unref(editModalOpen),
              "onUpdate:modelValue": ($event) => isRef(editModalOpen) ? editModalOpen.value = $event : null
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UCard, { class: "p-4" }, {
                    header: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h3 class="text-lg font-bold"${_scopeId3}>Manage User: ${ssrInterpolate(unref(selectedUser)?.email)}</h3>`);
                      } else {
                        return [
                          createVNode("h3", { class: "text-lg font-bold" }, "Manage User: " + toDisplayString(unref(selectedUser)?.email), 1)
                        ];
                      }
                    }),
                    footer: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-end gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UButton, {
                          color: "gray",
                          variant: "ghost",
                          onClick: ($event) => editModalOpen.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Cancel`);
                            } else {
                              return [
                                createTextVNode("Cancel")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          color: "primary",
                          onClick: saveUserEdits,
                          loading: unref(saving)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Save Changes`);
                            } else {
                              return [
                                createTextVNode("Save Changes")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex justify-end gap-2" }, [
                            createVNode(_component_UButton, {
                              color: "gray",
                              variant: "ghost",
                              onClick: ($event) => editModalOpen.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Cancel")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              color: "primary",
                              onClick: saveUserEdits,
                              loading: unref(saving)
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
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(selectedUser)) {
                          _push4(`<div class="space-y-4"${_scopeId3}>`);
                          if (unref(hasPendingSubscription)) {
                            _push4(`<div class="p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 rounded-lg"${_scopeId3}><h4 class="font-bold text-orange-600 mb-2 flex items-center gap-2"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-bell-alert" }, null, _parent4, _scopeId3));
                            _push4(` Pending Subscription Request</h4><p class="text-xs text-gray-600 mb-3"${_scopeId3}>This user requested to buy the <strong${_scopeId3}>${ssrInterpolate(unref(pendingSub).plan)}</strong> plan. Verify their payment offline, then approve.</p><div class="flex gap-2"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_UButton, {
                              color: "green",
                              icon: "i-heroicons-check",
                              size: "sm",
                              onClick: ($event) => handleSubscriptionApprove(unref(pendingSub).id, "ACTIVE")
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`Approve Request`);
                                } else {
                                  return [
                                    createTextVNode("Approve Request")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UButton, {
                              color: "red",
                              variant: "ghost",
                              size: "sm",
                              onClick: ($event) => handleSubscriptionApprove(unref(pendingSub).id, "REJECTED")
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`Reject`);
                                } else {
                                  return [
                                    createTextVNode("Reject")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`</div></div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(ssrRenderComponent(_component_UFormGroup, { label: "System Role" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_USelect, {
                                  modelValue: unref(selectedUser).role,
                                  "onUpdate:modelValue": ($event) => unref(selectedUser).role = $event,
                                  options: ["USER", "ADMIN"]
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_USelect, {
                                    modelValue: unref(selectedUser).role,
                                    "onUpdate:modelValue": ($event) => unref(selectedUser).role = $event,
                                    options: ["USER", "ADMIN"]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UFormGroup, { label: "Active Plan" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_USelect, {
                                  modelValue: unref(selectedUser).plan,
                                  "onUpdate:modelValue": ($event) => unref(selectedUser).plan = $event,
                                  options: ["FREE", "BEGINNING", "ADVANCED", "ENTERPRISE"]
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_USelect, {
                                    modelValue: unref(selectedUser).plan,
                                    "onUpdate:modelValue": ($event) => unref(selectedUser).plan = $event,
                                    options: ["FREE", "BEGINNING", "ADVANCED", "ENTERPRISE"]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UFormGroup, { label: "Bound Device (Hash)" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UInput, {
                                  modelValue: unref(selectedUser).boundDeviceId,
                                  "onUpdate:modelValue": ($event) => unref(selectedUser).boundDeviceId = $event
                                }, null, _parent5, _scopeId4));
                                _push5(`<p class="text-[10px] text-red-500 mt-1 mt-1 font-bold"${_scopeId4}>Clear this to let them login on a new device.</p>`);
                              } else {
                                return [
                                  createVNode(_component_UInput, {
                                    modelValue: unref(selectedUser).boundDeviceId,
                                    "onUpdate:modelValue": ($event) => unref(selectedUser).boundDeviceId = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("p", { class: "text-[10px] text-red-500 mt-1 mt-1 font-bold" }, "Clear this to let them login on a new device.")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(selectedUser) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "space-y-4"
                          }, [
                            unref(hasPendingSubscription) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 rounded-lg"
                            }, [
                              createVNode("h4", { class: "font-bold text-orange-600 mb-2 flex items-center gap-2" }, [
                                createVNode(_component_UIcon, { name: "i-heroicons-bell-alert" }),
                                createTextVNode(" Pending Subscription Request")
                              ]),
                              createVNode("p", { class: "text-xs text-gray-600 mb-3" }, [
                                createTextVNode("This user requested to buy the "),
                                createVNode("strong", null, toDisplayString(unref(pendingSub).plan), 1),
                                createTextVNode(" plan. Verify their payment offline, then approve.")
                              ]),
                              createVNode("div", { class: "flex gap-2" }, [
                                createVNode(_component_UButton, {
                                  color: "green",
                                  icon: "i-heroicons-check",
                                  size: "sm",
                                  onClick: ($event) => handleSubscriptionApprove(unref(pendingSub).id, "ACTIVE")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Approve Request")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_UButton, {
                                  color: "red",
                                  variant: "ghost",
                                  size: "sm",
                                  onClick: ($event) => handleSubscriptionApprove(unref(pendingSub).id, "REJECTED")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Reject")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ])
                            ])) : createCommentVNode("", true),
                            createVNode(_component_UFormGroup, { label: "System Role" }, {
                              default: withCtx(() => [
                                createVNode(_component_USelect, {
                                  modelValue: unref(selectedUser).role,
                                  "onUpdate:modelValue": ($event) => unref(selectedUser).role = $event,
                                  options: ["USER", "ADMIN"]
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UFormGroup, { label: "Active Plan" }, {
                              default: withCtx(() => [
                                createVNode(_component_USelect, {
                                  modelValue: unref(selectedUser).plan,
                                  "onUpdate:modelValue": ($event) => unref(selectedUser).plan = $event,
                                  options: ["FREE", "BEGINNING", "ADVANCED", "ENTERPRISE"]
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UFormGroup, { label: "Bound Device (Hash)" }, {
                              default: withCtx(() => [
                                createVNode(_component_UInput, {
                                  modelValue: unref(selectedUser).boundDeviceId,
                                  "onUpdate:modelValue": ($event) => unref(selectedUser).boundDeviceId = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("p", { class: "text-[10px] text-red-500 mt-1 mt-1 font-bold" }, "Clear this to let them login on a new device.")
                              ]),
                              _: 1
                            })
                          ])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UCard, { class: "p-4" }, {
                      header: withCtx(() => [
                        createVNode("h3", { class: "text-lg font-bold" }, "Manage User: " + toDisplayString(unref(selectedUser)?.email), 1)
                      ]),
                      footer: withCtx(() => [
                        createVNode("div", { class: "flex justify-end gap-2" }, [
                          createVNode(_component_UButton, {
                            color: "gray",
                            variant: "ghost",
                            onClick: ($event) => editModalOpen.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancel")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_UButton, {
                            color: "primary",
                            onClick: saveUserEdits,
                            loading: unref(saving)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Save Changes")
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ])
                      ]),
                      default: withCtx(() => [
                        unref(selectedUser) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "space-y-4"
                        }, [
                          unref(hasPendingSubscription) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 rounded-lg"
                          }, [
                            createVNode("h4", { class: "font-bold text-orange-600 mb-2 flex items-center gap-2" }, [
                              createVNode(_component_UIcon, { name: "i-heroicons-bell-alert" }),
                              createTextVNode(" Pending Subscription Request")
                            ]),
                            createVNode("p", { class: "text-xs text-gray-600 mb-3" }, [
                              createTextVNode("This user requested to buy the "),
                              createVNode("strong", null, toDisplayString(unref(pendingSub).plan), 1),
                              createTextVNode(" plan. Verify their payment offline, then approve.")
                            ]),
                            createVNode("div", { class: "flex gap-2" }, [
                              createVNode(_component_UButton, {
                                color: "green",
                                icon: "i-heroicons-check",
                                size: "sm",
                                onClick: ($event) => handleSubscriptionApprove(unref(pendingSub).id, "ACTIVE")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Approve Request")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_UButton, {
                                color: "red",
                                variant: "ghost",
                                size: "sm",
                                onClick: ($event) => handleSubscriptionApprove(unref(pendingSub).id, "REJECTED")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Reject")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])
                          ])) : createCommentVNode("", true),
                          createVNode(_component_UFormGroup, { label: "System Role" }, {
                            default: withCtx(() => [
                              createVNode(_component_USelect, {
                                modelValue: unref(selectedUser).role,
                                "onUpdate:modelValue": ($event) => unref(selectedUser).role = $event,
                                options: ["USER", "ADMIN"]
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Active Plan" }, {
                            default: withCtx(() => [
                              createVNode(_component_USelect, {
                                modelValue: unref(selectedUser).plan,
                                "onUpdate:modelValue": ($event) => unref(selectedUser).plan = $event,
                                options: ["FREE", "BEGINNING", "ADVANCED", "ENTERPRISE"]
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, { label: "Bound Device (Hash)" }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(selectedUser).boundDeviceId,
                                "onUpdate:modelValue": ($event) => unref(selectedUser).boundDeviceId = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("p", { class: "text-[10px] text-red-500 mt-1 mt-1 font-bold" }, "Clear this to let them login on a new device.")
                            ]),
                            _: 1
                          })
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTable, {
                columns,
                rows: unref(users),
                loading: unref(pending)
              }, {
                "role-data": withCtx(({ row }) => [
                  createVNode(_component_UBadge, {
                    color: row.role === "ADMIN" ? "purple" : "blue",
                    variant: "subtle"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(row.role), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "phone-data": withCtx(({ row }) => [
                  createVNode("span", { class: "text-sm font-mono" }, toDisplayString(row.phone || "N/A"), 1)
                ]),
                "plan-data": withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UBadge, {
                      color: row.plan === "ENTERPRISE" ? "amber" : row.plan === "FREE" ? "gray" : "green"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.plan), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"]),
                    row.subscriptions?.some((s) => s.status === "PENDING_APPROVAL") ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-xs font-black text-orange-500 animate-pulse"
                    }, "Request Pending")) : createCommentVNode("", true)
                  ])
                ]),
                "boundDeviceId-data": withCtx(({ row }) => [
                  createVNode("span", {
                    class: "text-xs font-mono bg-gray-100 dark:bg-gray-800 p-1 rounded font-black tracking-widest text-gray-500",
                    title: row.boundDeviceId
                  }, toDisplayString(row.boundDeviceId ? row.boundDeviceId : "Unbound"), 9, ["title"])
                ]),
                "createdAt-data": withCtx(({ row }) => [
                  createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(new Date(row.createdAt).toLocaleDateString()), 1)
                ]),
                "_count-data": withCtx(({ row }) => [
                  createVNode(_component_UBadge, {
                    color: "gray",
                    variant: "soft"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(row._count.sessions) + " Attempts ", 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                "actions-data": withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UButton, {
                      size: "2xs",
                      color: "primary",
                      variant: "ghost",
                      icon: "i-heroicons-pencil-square",
                      title: "Edit / Approve",
                      onClick: ($event) => openEditModal(row)
                    }, null, 8, ["onClick"]),
                    row.role !== "ADMIN" ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      size: "2xs",
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-shield-check",
                      title: "Make Admin",
                      onClick: ($event) => promoteUser(row.id)
                    }, null, 8, ["onClick"])) : createCommentVNode("", true),
                    createVNode(_component_UButton, {
                      size: "2xs",
                      color: "red",
                      variant: "ghost",
                      icon: "i-heroicons-trash",
                      title: "Delete User",
                      onClick: ($event) => deleteUser(row.id)
                    }, null, 8, ["onClick"])
                  ])
                ]),
                _: 1
              }, 8, ["rows", "loading"]),
              createVNode(_component_UModal, {
                modelValue: unref(editModalOpen),
                "onUpdate:modelValue": ($event) => isRef(editModalOpen) ? editModalOpen.value = $event : null
              }, {
                default: withCtx(() => [
                  createVNode(_component_UCard, { class: "p-4" }, {
                    header: withCtx(() => [
                      createVNode("h3", { class: "text-lg font-bold" }, "Manage User: " + toDisplayString(unref(selectedUser)?.email), 1)
                    ]),
                    footer: withCtx(() => [
                      createVNode("div", { class: "flex justify-end gap-2" }, [
                        createVNode(_component_UButton, {
                          color: "gray",
                          variant: "ghost",
                          onClick: ($event) => editModalOpen.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cancel")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_UButton, {
                          color: "primary",
                          onClick: saveUserEdits,
                          loading: unref(saving)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Save Changes")
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ])
                    ]),
                    default: withCtx(() => [
                      unref(selectedUser) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "space-y-4"
                      }, [
                        unref(hasPendingSubscription) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 rounded-lg"
                        }, [
                          createVNode("h4", { class: "font-bold text-orange-600 mb-2 flex items-center gap-2" }, [
                            createVNode(_component_UIcon, { name: "i-heroicons-bell-alert" }),
                            createTextVNode(" Pending Subscription Request")
                          ]),
                          createVNode("p", { class: "text-xs text-gray-600 mb-3" }, [
                            createTextVNode("This user requested to buy the "),
                            createVNode("strong", null, toDisplayString(unref(pendingSub).plan), 1),
                            createTextVNode(" plan. Verify their payment offline, then approve.")
                          ]),
                          createVNode("div", { class: "flex gap-2" }, [
                            createVNode(_component_UButton, {
                              color: "green",
                              icon: "i-heroicons-check",
                              size: "sm",
                              onClick: ($event) => handleSubscriptionApprove(unref(pendingSub).id, "ACTIVE")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Approve Request")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              color: "red",
                              variant: "ghost",
                              size: "sm",
                              onClick: ($event) => handleSubscriptionApprove(unref(pendingSub).id, "REJECTED")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Reject")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode(_component_UFormGroup, { label: "System Role" }, {
                          default: withCtx(() => [
                            createVNode(_component_USelect, {
                              modelValue: unref(selectedUser).role,
                              "onUpdate:modelValue": ($event) => unref(selectedUser).role = $event,
                              options: ["USER", "ADMIN"]
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Active Plan" }, {
                          default: withCtx(() => [
                            createVNode(_component_USelect, {
                              modelValue: unref(selectedUser).plan,
                              "onUpdate:modelValue": ($event) => unref(selectedUser).plan = $event,
                              options: ["FREE", "BEGINNING", "ADVANCED", "ENTERPRISE"]
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, { label: "Bound Device (Hash)" }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(selectedUser).boundDeviceId,
                              "onUpdate:modelValue": ($event) => unref(selectedUser).boundDeviceId = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("p", { class: "text-[10px] text-red-500 mt-1 mt-1 font-bold" }, "Clear this to let them login on a new device.")
                          ]),
                          _: 1
                        })
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/users.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=users-B1TaJtdj.js.map
