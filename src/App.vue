<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  beforeMount() {
    this.delay(5000);
  },
  methods: {
    delay(ms) {
      const startPoint = new Date().getTime();
      while (new Date().getTime() - startPoint <= ms) {
        /* wait */
      }
    }
  }
}

</script>
