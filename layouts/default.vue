<template>
  <div id="root" class="skeleton">
    <!-- <the-masthead class="skeleton__tip" /> -->
    <main class="skeleton__body">
      <nuxt />
    </main>
    <the-footer class="skeleton__tip" />
  </div>
</template>

<script>
// UTILS
import hasTouchEvents from "~/utils/touchevents.js";

export default {
  name: 'LayoutDefault',
  /**
   * Probably better as nuxt plugin
   */
  beforeCreate() {
    if (process.client) {

      (function touch() {
        if(hasTouchEvents()) {
          document.documentElement.classList.add('touchevents')
        }
      })();
    }
  }
}
</script>

<style lang="scss">
.skeleton {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.skeleton__tip {
  flex: none;
}

.skeleton__body {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
