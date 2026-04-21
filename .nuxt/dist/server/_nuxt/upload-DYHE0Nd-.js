import { a as useRouter, h as useRoute, b as __nuxt_component_3, _ as __nuxt_component_2$1 } from "../server.mjs";
import __nuxt_component_2 from "./Card-CgPQDjgh.js";
import __nuxt_component_7 from "./FormGroup-DAIqfz9h.js";
import __nuxt_component_10 from "./Select-BiIxaLPN.js";
import { ref, computed, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
import "@vue/shared";
const _sfc_main = {
  __name: "upload",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const file = ref(null);
    const selectedExamId = ref(route.query.examId || "");
    const uploading = ref(false);
    const { data: exams } = useFetch(
      "/api/admin/exams",
      "$HoC-hcpXIS"
      /* nuxt-injected */
    );
    const examOptions = computed(() => {
      if (!exams.value) return [];
      return exams.value.map((e) => ({ label: e.title, value: e.id }));
    });
    const handleFileUpload = (event) => {
      const selected = event.target.files[0];
      if (selected) {
        file.value = selected;
      }
    };
    const processUpload = async () => {
      if (!file.value || !selectedExamId.value) return;
      uploading.value = true;
      const formData = new FormData();
      formData.append("file", file.value);
      formData.append("examId", selectedExamId.value);
      try {
        const job = await $fetch("/api/admin/upload", {
          method: "POST",
          body: formData
        });
        router.push(`/admin/review/${job.jobId || "pending"}`);
      } catch (err) {
        alert("Upload failed: " + (err.message || "Unknown error"));
      } finally {
        uploading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_3;
      const _component_UCard = __nuxt_component_2;
      const _component_UFormGroup = __nuxt_component_7;
      const _component_USelect = __nuxt_component_10;
      const _component_UIcon = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-100 dark:bg-gray-800 p-8 transition-colors duration-300" }, _attrs))}><div class="max-w-4xl mx-auto"><div class="flex justify-between items-center mb-8"><div><h1 class="text-3xl font-bold text-gray-900 dark:text-white">AI Question Extraction</h1><p class="text-sm text-gray-500 mt-1">Upload an image of multiple-choice questions to automatically parse into the database.</p></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "gray",
        variant: "soft",
        to: "/admin/exams"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Back to Exams`);
          } else {
            return [
              createTextVNode("Back to Exams")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormGroup, { label: "Select Destination Exam" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: selectedExamId.value,
                    "onUpdate:modelValue": ($event) => selectedExamId.value = $event,
                    options: examOptions.value,
                    placeholder: "Choose an exam or create new..."
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: selectedExamId.value,
                      "onUpdate:modelValue": ($event) => selectedExamId.value = $event,
                      options: examOptions.value,
                      placeholder: "Choose an exam or create new..."
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, { label: "Upload Document (PNG, JPG, PDF, JSON, JS)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center hover:bg-gray-50 dark:hover:bg-gray-700 transition"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-document-arrow-up",
                    class: "text-5xl text-gray-400 mb-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="text-gray-600 dark:text-gray-400"${_scopeId2}>Drag and drop file here, or click to select</p><input type="file" class="mt-4 text-sm text-gray-500" accept=".png, .jpg, .jpeg, .pdf, .json, .js"${_scopeId2}></div>`);
                  if (file.value) {
                    _push3(`<p class="mt-2 text-sm text-blue-600 font-medium"${_scopeId2}>Selected: ${ssrInterpolate(file.value.name)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", { class: "border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center hover:bg-gray-50 dark:hover:bg-gray-700 transition" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-document-arrow-up",
                        class: "text-5xl text-gray-400 mb-4"
                      }),
                      createVNode("p", { class: "text-gray-600 dark:text-gray-400" }, "Drag and drop file here, or click to select"),
                      createVNode("input", {
                        type: "file",
                        onChange: handleFileUpload,
                        class: "mt-4 text-sm text-gray-500",
                        accept: ".png, .jpg, .jpeg, .pdf, .json, .js"
                      }, null, 32)
                    ]),
                    file.value ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "mt-2 text-sm text-blue-600 font-medium"
                    }, "Selected: " + toDisplayString(file.value.name), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              loading: uploading.value,
              disabled: !file.value || !selectedExamId.value,
              block: "",
              color: "primary",
              onClick: processUpload
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(file.value?.name.toLowerCase().endsWith(".json") || file.value?.name.toLowerCase().endsWith(".js") ? "Import Questions from File" : "Extract Questions via AI")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(file.value?.name.toLowerCase().endsWith(".json") || file.value?.name.toLowerCase().endsWith(".js") ? "Import Questions from File" : "Extract Questions via AI"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                createVNode(_component_UFormGroup, { label: "Select Destination Exam" }, {
                  default: withCtx(() => [
                    createVNode(_component_USelect, {
                      modelValue: selectedExamId.value,
                      "onUpdate:modelValue": ($event) => selectedExamId.value = $event,
                      options: examOptions.value,
                      placeholder: "Choose an exam or create new..."
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormGroup, { label: "Upload Document (PNG, JPG, PDF, JSON, JS)" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center hover:bg-gray-50 dark:hover:bg-gray-700 transition" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-document-arrow-up",
                        class: "text-5xl text-gray-400 mb-4"
                      }),
                      createVNode("p", { class: "text-gray-600 dark:text-gray-400" }, "Drag and drop file here, or click to select"),
                      createVNode("input", {
                        type: "file",
                        onChange: handleFileUpload,
                        class: "mt-4 text-sm text-gray-500",
                        accept: ".png, .jpg, .jpeg, .pdf, .json, .js"
                      }, null, 32)
                    ]),
                    file.value ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "mt-2 text-sm text-blue-600 font-medium"
                    }, "Selected: " + toDisplayString(file.value.name), 1)) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(_component_UButton, {
                  loading: uploading.value,
                  disabled: !file.value || !selectedExamId.value,
                  block: "",
                  color: "primary",
                  onClick: processUpload
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(file.value?.name.toLowerCase().endsWith(".json") || file.value?.name.toLowerCase().endsWith(".js") ? "Import Questions from File" : "Extract Questions via AI"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/upload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=upload-DYHE0Nd-.js.map
