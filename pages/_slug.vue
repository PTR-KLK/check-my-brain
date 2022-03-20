<template>
  <main>
    <header>
      <h1>{{ post.title }}</h1>
      <p>{{ post.description }}</p>
    </header>
    <nuxt-content class="mt-4 prose max-w-none" :document="post" />
  </main>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

export default {
  async asyncData({ $content, params }: Context) {
    const post = await $content(params.slug).fetch()
    return { post }
  },
}
</script>
