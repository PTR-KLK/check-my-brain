<template>
  <div class="min-h-screen">
    <div class="prose mx-auto">
      <Navbar />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: { Navbar, Footer },
})
</script>
