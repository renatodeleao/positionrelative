<template>
  <article class="o-page">
    <section class="o-wrapper c-intro">
      <div data-flitem="center--">
        <h1 class="c-intro__body-text u-display:i">{ position: relative }™</h1><br/><br/><br/>

        <p class="c-intro__body-text">A company of one by the front-end developer and retired designer Renato de Leão which gives him permission to not only write site descriptions in the third person but also to run a brandless business with a cliché impersonation of a logo. All this without sounding pretentious, since he’s very busy improving <a href="https://gleam.io" target="_blank">Gleam</a> with his mates, saving the dev world with awesome <a href="https://github.com/renatodeleao">OSS software</a> or giving bad advice to the younger generation of <a href="https://whitesmith.co">Whitesmithians</a>.</p>
      </div>
    </section>

    <section id="recent-posts" class="c-section u-mb-0">
      <h2 class="c-section__title o-wrapper">Latest from "the lab"</h2>
      <ul class="o-scrollable-list o-scrollable-list--wrapped o-grid">
        <li
          class="o-scrollable-list__entry o-grid__column"
          v-for="project in featureLabProjects"
          :key="project"
        >
          <article class="c-cinemapostertext">{{project}}</article>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  name: 'HomeView',
  data: () => ({
    featureLabProjects: [
      "Renderless Vue Select",
      "A11y-vue-dialog",
      "skeletonize.js",
      "vue-sticky-directive",
      "qnorr-styles"
    ]
  })
}
</script>

<style lang="scss">
///
/// Intro hero blocks of each page
/// @group Components
///
.c-intro {
  position: relative;
  //flex: 1 0 auto;
  display: flex;
  align-items: center;
  padding: {
    top: 5vw;
    bottom: 5vw;
  }

  margin-bottom: 60px;

  @include mappy-bp(sm){
    margin-bottom: 5vw;
  }
}

  .c-intro__body-text{
    @include fluid-type(28px, 40px, 'xxs', 'lg');
    // doens't allow unitless values [ask for update]
    @include fluid-type(36px, 48px, 'xxs', 'lg', 'line-height');
    font-weight: 600;
    letter-spacing: -0.025em;

    sup {
      margin-left: 0.1em;
    }

    @include mappy-bp(lg){
      @include fluid-type(60px, 68px, 'lg', 'xl');
      @include fluid-type(64px, 72px, 'lg', 'xl', 'line-height');
    }
  }

.c-cinemapostertext {
  @include fluid-type(40px, 72px, 'xxs', 'lg');
  font-family: $posr-secondary-font;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 400;
  transition: font-weight 0.15s ease;

  color: black;
  -webkit-text-stroke: 1px black;
  -webkit-text-fill-color: transparent;

  &:hover {
    -webkit-text-fill-color: black;
    color: black;
  }
}

</style>
