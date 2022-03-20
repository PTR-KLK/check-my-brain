<template>
  <div>
    <h1>Posts</h1>
    <PostPreview
      v-for="post in posts"
      :key="post.slug"
      :post="post"
    ></PostPreview>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

export default {
  async asyncData({ $content }: Context) {
    const posts = await $content()
      .only(['title', 'description', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      posts,
    }
  },
}
</script>
