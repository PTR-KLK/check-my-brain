<template>
  <section>
    <NuxtLink :to="`/${post.slug}`">
      <h2>{{ post.title }}</h2>
    </NuxtLink>
    <p>{{ post.description }}</p>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Post } from '~/types/index'

export default Vue.extend({
  props: {
    post: {
      type: Object as PropType<Post>,
      default: () => {},
    },
  },
})
</script>
