export default defineNuxtPlugin(() => {
  // Only initialize if theme is not already set
  if (!document.documentElement.getAttribute('data-theme')) {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme)
    } else {
      const defaultTheme = systemPrefersDark ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', defaultTheme)
      localStorage.setItem('theme', defaultTheme)
    }
  }

  // Listen for system theme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', newTheme)
      localStorage.setItem('theme', newTheme)
    }
  })
}) 