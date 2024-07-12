import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useEventListener } from '@vueuse/core'

export const useStore = defineStore('store', () => {

  const scrollPosition = ref(0)

  const route = useRoute()

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  function getLinkClass(routeName){
    return computed(() => {
        return activeRoute === routeName ? 'text-blue-700' : 'hover:text-blue-700'
    }).value
  }

  const activeRoute = computed(() => route.name)

  const isMobile = computed(() => {
    const width = window.innerWidth
    return width < 1024 
  })

  const imageClasses = computed(() => {
    const currentRoute = route.name
    if (currentRoute === 'about-me' || currentRoute === 'my-work') {
        return 'pt-14'
    } else {
        return 'w-full h-full'
    }
  })

  

  function handleScroll() {
    scrollPosition.value = window.scrollY    
  } 

  const isVisible = computed(() => scrollPosition.value > (window.innerHeight - 450))

  useEventListener(window, 'scroll', handleScroll)

  return {
    activeRoute,
    isMobile,
    imageClasses,
    getLinkClass,
    handleScroll,
    scrollToTop,
    isVisible
  }
})