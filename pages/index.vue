<template>
  <article class="container max-w-4xl mx-auto p-4 prose">
    <nuxt-content :document="cv" />
  </article>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  async asyncData({ $content }) {
    const cv = await $content("cv").fetch()

    return {
      cv,
    }
  },
})
</script>
