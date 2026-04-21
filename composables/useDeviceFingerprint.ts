/**
 * Device Fingerprint Generator
 * 
 * Creates a unique device identifier by combining multiple browser/hardware
 * signals. Even if someone shares their login credentials, the fingerprint
 * will differ on another device, blocking unauthorized access.
 * 
 * Signals used:
 * - Screen resolution + color depth
 * - Timezone offset
 * - Platform + hardware concurrency
 * - Language + available plugins
 * - Canvas fingerprint (unique per GPU/driver combo)
 */
export function useDeviceFingerprint() {
  const generateFingerprint = (): string => {
    if (typeof window === 'undefined') return 'server-side'

    const signals: string[] = []

    // Screen properties
    signals.push(`${screen.width}x${screen.height}x${screen.colorDepth}`)

    // Timezone
    signals.push(`tz:${new Date().getTimezoneOffset()}`)

    // Navigator properties
    signals.push(`plat:${navigator.platform || 'unknown'}`)
    signals.push(`cores:${navigator.hardwareConcurrency || 0}`)
    signals.push(`lang:${navigator.language || 'en'}`)
    signals.push(`touch:${navigator.maxTouchPoints || 0}`)

    // Device memory (Chrome only)
    const nav = navigator as any
    if (nav.deviceMemory) {
      signals.push(`mem:${nav.deviceMemory}`)
    }

    // Canvas fingerprint — unique per GPU/driver combination
    try {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (ctx) {
        canvas.width = 200
        canvas.height = 50
        ctx.textBaseline = 'top'
        ctx.font = '14px Arial'
        ctx.fillStyle = '#f60'
        ctx.fillRect(0, 0, 200, 50)
        ctx.fillStyle = '#069'
        ctx.fillText('RhyseForge-DFP', 2, 15)
        ctx.fillStyle = 'rgba(102,204,0,0.7)'
        ctx.fillText('DeviceID-2024', 4, 35)
        signals.push(`cvs:${canvas.toDataURL().slice(-50)}`)
      }
    } catch {
      signals.push('cvs:unavailable')
    }

    // WebGL renderer (identifies GPU)
    try {
      const canvas2 = document.createElement('canvas')
      const gl = canvas2.getContext('webgl') || canvas2.getContext('experimental-webgl')
      if (gl) {
        const debugInfo = (gl as any).getExtension('WEBGL_debug_renderer_info')
        if (debugInfo) {
          signals.push(`gpu:${(gl as any).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)}`)
        }
      }
    } catch {
      signals.push('gpu:unavailable')
    }

    // Hash all signals into a single fingerprint
    const raw = signals.join('|')
    return simpleHash(raw)
  }

  /**
   * Simple string hash (DJB2 variant) — produces a hex string.
   * No crypto dependency needed on the client side.
   */
  const simpleHash = (str: string): string => {
    let hash = 5381
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) + hash) + str.charCodeAt(i)
      hash = hash & hash // Convert to 32-bit integer
    }
    // Convert to positive hex
    return (hash >>> 0).toString(16).padStart(8, '0')
  }

  // Cache the result so it's computed once per page load
  const fingerprint = ref('')

  const getDeviceId = (): string => {
    if (!fingerprint.value) {
      fingerprint.value = generateFingerprint()
    }
    return fingerprint.value
  }

  return { getDeviceId }
}
