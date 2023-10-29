<script setup lang="ts">
import TheHeader from './TheHeader.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <the-header>
    <router-link to="/app">LaunchApp</router-link>
  </the-header>
  <main class="welcome">
    <section>The welcome Page</section>
  </main>
</template>

<style lang="scss" scoped>
@import 'style.scss';
</style>
