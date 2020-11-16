<template>
  <div class="c-icon-burger"role="presentation">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'AppIconBurger'
}
</script>

<style lang="scss">
.c-icon-burger {
  width: 1em;
  height: 1em;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    height: 1px;
    background-color: currentColor;
  }
}

</style>
