<template>
  <nav>
    <NuxtLink class="flex justify-between items-center" to="/">
      <p class="text-4xl">Check my brain</p>
      <SearchInput />
    </NuxtLink>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchInput from '~/components/SearchInput.vue'

export default Vue.extend({
  components: { SearchInput },
})
</script>
