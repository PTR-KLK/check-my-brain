<template>
  <div class="relative">
    <input
      v-model="query"
      class="border-2 border-gray-200 h-10 rounded"
      type="search"
      autocomplete="off"
    />

    <ul v-if="posts.length" class="absolute search-results rounded">
      <li v-for="post of posts" :key="post.slug">
        <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      query: '',
      posts: [],
    }
  },
  watch: {
    async query(query) {
      if (!query) {
        this.posts = []
        return
      }

      this.posts = await this.$content()
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .limit(5)
        .search(query)
        .fetch()
    },
  },
})
</script>

<style lang="scss">
.search-results {
  width: theme('width.full');
  top: theme('spacing.10');
  margin-top: theme('spacing.0') !important;
  border-width: theme('borderWidth.2');
  border-color: theme('colors.gray.200');
}
</style>
