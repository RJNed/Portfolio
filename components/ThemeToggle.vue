<template>
  <button 
    @click="toggleTheme" 
    class="theme-toggle"
    :aria-label="`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`"
    title="Toggle theme"
  >
    <i class="theme-icon">
      <ClientOnly>
        {{ theme === 'light' ? '🌙' : '☀️' }}
        <template #fallback>
          🌙
        </template>
      </ClientOnly>
    </i>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<style scoped>
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-size: 18px;
}

.theme-toggle:hover {
  background-color: var(--bg-secondary);
  transform: scale(1.1);
}

.theme-toggle:focus {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.theme-icon {
  transition: transform 0.3s ease;
}

.theme-toggle:hover .theme-icon {
  transform: rotate(180deg);
}
</style> 