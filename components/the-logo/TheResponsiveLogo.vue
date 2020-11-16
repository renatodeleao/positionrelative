<template>
  <div class="c-logo">
    <span class="c-logo__initial">p</span>
    <span class="c-logo__initial-ext">os</span>
    <span class="c-logo__purgeable">ition</span>
    <span class="c-logo__sep">:</span>
    <span class="c-logo__initial">r</span>
    <span class="c-logo__purgeable">el</span>
    <span class="c-logo__purgeable">ative</span>
  </div>
</template>

<script>
export default {
  name: 'TheResponsiveLogo'
}
</script>

<style lang="scss">
////
/// LOGO
/// @group Components
////

// logo wrapper
.c-logo {
  position: relative;
  display: inline-flex;
  font-weight: 700;
  font-size: inherit;
  letter-spacing: -0.02em;
}

  .c-logo__purgeable {
    display: none;
  }

@include mappy-bp(h s) {
  .c-logo__purgeable { display: inherit }
}
</style>
