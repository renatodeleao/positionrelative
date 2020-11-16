<template>
  <div
    class="c-masthead__drawer"
    aria-hidden="true"
    data-js-target="masthead.drawer"
  >
    <ul class="c-masthead__drawer-menu c-masthead__drawer-menu--primary">
      {{
        range.Site.Menus.masthead
      }}
      <li
        class="c-masthead__drawer-item {{ if $curPage.IsMenuCurrent `main` . }}is-active{{ end }}"
      >
        {{ if eq .Weight -1 }}
        <span
          ><s>{{ .Name }}</s></span
        >
        {{ else }}
        <a class="c-masthead__drawer-anchor" href="{{ .URL }}">
          <span>{{ .Name }}</span>
        </a>
        {{ end }}
      </li>
      {{
        end
      }}
    </ul>

    <ul class="c-masthead__drawer-menu c-masthead__drawer-menu--secondary">
      {{
        range.Site.Menus.mastheadsecondary
      }}
      <li class="c-masthead__drawer-item">
        <a class="c-masthead__drawer-anchor" href="{{ .URL }}">
          <span>{{ .Name }}</span>
        </a>
      </li>
      {{
        end
      }}
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
