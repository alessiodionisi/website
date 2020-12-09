<template>
  <div>
    <b-container class="mt-5 mb-5 content">
      <nuxt-content :document="cv" />
    </b-container>
  </div>
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

<style lang="sass" scoped>
.content
  max-width: 800px
</style>
