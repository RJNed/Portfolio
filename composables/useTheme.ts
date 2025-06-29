import { ref, watch } from 'vue'

export type Theme = 'light' | 'dark'

// Create reactive theme state with a default that matches server-side
const currentTheme = ref<Theme>('dark')
const isClient = ref(false)

// Initialize theme only on client side to prevent hydration mismatches
if (process.client) {
  isClient.value = true
  const savedTheme = localStorage.getItem('theme') as Theme
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme) {
    currentTheme.value = savedTheme
  } else {
    currentTheme.value = systemPrefersDark ? 'dark' : 'light'
  }
}

// Watch for theme changes and update localStorage and document
watch(currentTheme, (newTheme) => {
  if (process.client) {
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }
}, { immediate: true })

export function useTheme() {
  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
  }

  const setTheme = (theme: Theme) => {
    currentTheme.value = theme
  }

  return {
    theme: currentTheme,
    isClient,
    toggleTheme,
    setTheme,
    isDark: () => currentTheme.value === 'dark',
    isLight: () => currentTheme.value === 'light'
  }
} 