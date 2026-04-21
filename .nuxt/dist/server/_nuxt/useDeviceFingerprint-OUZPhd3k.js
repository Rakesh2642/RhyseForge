import { ref } from "vue";
function useDeviceFingerprint() {
  const generateFingerprint = () => {
    return "server-side";
  };
  const fingerprint = ref("");
  const getDeviceId = () => {
    if (!fingerprint.value) {
      fingerprint.value = generateFingerprint();
    }
    return fingerprint.value;
  };
  return { getDeviceId };
}
export {
  useDeviceFingerprint as u
};
//# sourceMappingURL=useDeviceFingerprint-OUZPhd3k.js.map
