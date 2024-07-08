import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export const useNavStore = defineStore('nav', () => {
  const route = useRoute()

  const activeRoute = computed(() => route.name)

  return {
    activeRoute
  }
})