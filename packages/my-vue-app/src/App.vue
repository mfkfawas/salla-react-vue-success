<script setup></script>

<template>
  <app-cart v-if="currentPath === '/' || currentPath === '/cart'" />
  <app-shipping v-else-if="currentPath === '/shipping'" />
  <app-confirmed v-else-if="currentPath === '/confirmed'" />
</template>

<script>
export default {
  data() {
    return {
      currentPath: window.location.pathname
    }
  },
  mounted() {
    // Optionally, listen to path changes - not a full router solution
    window.addEventListener('popstate', () => {
      this.currentPath = window.location.pathname
    })
  },
  // Remember to remove event listener on component unmount
  beforeUnmount() {
    window.removeEventListener('popstate', this.handlePopState)
  },
  methods: {
    handlePopState() {
      this.currentPath = window.location.pathname
    }
  }
}
</script>
