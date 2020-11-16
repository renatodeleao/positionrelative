<template>
  <component
    :is="$_tag"
    :class="$_classNames"
  >
    <slot />
  </component>
</template>

<script>
const BLOCK_CLASS = 'c-button'

export default {
  name: 'AppButton',
  props: {
    variant: {
      type: String
    },
    size: {
      type: String
    }
  },
  data: () => ({ BLOCK_CLASS }),
  computed: {
    $_isDisabled() {
      return this.$attrs.disabled === '' || this.$attrs.disabled === true
    },
    $_tag() {
      if (this.$_isDisabled) {
        return 'BUTTON'
      }

      if (this.$attrs.href) {
        return 'A'
      } else if (this.$attrs.to) {
        return 'ROUTER-LINK'
      } else {
        return 'BUTTON'
      }
    },
    $_classNames() {
      return [
        BLOCK_CLASS,
        {
          [`${BLOCK_CLASS}--${this.variant}`]: this.variant,
          [`${BLOCK_CLASS}--${this.size}`]: this.size,
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$night: map-deep-get($posr-color-maps ,'grayscale', 900 );

.c-button {
  @include reset-appearance();
  position: relative;
  padding: 0 1rem;
  height: 32px;
  display: inline-flex;
  align-items: center;
  font-family: $posr-secondary-font;
  font-weight: 700;
  text-transform: uppercase;
}

  .c-button__icon {
    flex: none;
  }
  .c-button__text {
    flex: 1 0 0px;
    min-width: 0px;
    position: relative;
    top: 1px; // font optical align;
  }


.c-button--nightly {
  background-color: $night;
  color: white;

  &:focus,
  &:hover {
    color: white;
  }
}

.c-button--nightly-o {
  border: 2px solid $night;
  color: $night;

  &:hover {
    background-color:$night;
    color: white;
  }
}

.c-button--xl {
  height: 64px;
  font-size: 1.25em;
  padding: 0 1.5rem
}
</style>
