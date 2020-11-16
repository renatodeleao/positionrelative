<template>
  <footer class="the-footer">
    <div class="o-wrapper">
      <div class="o-grid o-grid--auto-width-columns" data-flout="align-center--">
        <div class="o-grid__column u-12/12 u-3/12@sm">
          <app-button
            class="u-12/12"
            size="xl"
            variant="nightly"
            :href="`mailto: ${contacts.email.primary}`"
          >
            <span class="c-button__text">Say hello</span>
            <span class="c-button__icon">*</span>
          </app-button>
        </div>
        <div class="o-grid__column u-6/12@sm u-push-3/12@sm">
          <p data-hanging-content="*" class="the-footer__smallcopy">Only if you’re pretty sure you don’t have a fourteen years old cousin who can do it better.</p>
        </div>
      </div>
      <div class="the-footer__copyrights">
        <small>
          <strong>position:relative™</strong> is created, written and maintained by Renato de Leão with help from all around the world.  {{ copyrightsNote }}
        </small>
        <small>
          v{{ pkg.version }}
        </small>
      </div>
    </div>
  </footer>
</template>

<script>
import pkg from '~/package.json'
import contacts from '~/data/contacts.json'

export default {
  name: 'TheFooter',
  data: () => ({
    pkg,
    contacts
  }),
  computed: {
    copyrightsNote() {
      const now = new Date().getFullYear()
      const start = '2019'
      const end = start === now ? '' : `-${now}`

      return `© ${start}${end}`
    }
  }
}
</script>

<style lang="scss">
@import './TheFooter.scss';
</style>
