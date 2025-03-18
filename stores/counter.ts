// /stores/counter.ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // State definition with TypeScript
  state: () => ({
    count: 0
  }),
  // Getters (optional, used to access computed properties based on state)
  getters: {
    // Get the current count value
    doubleCount: (state) => state.count * 2
  },
  // Actions (used to mutate the state)
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    }
  }
})
