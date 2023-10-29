<script setup lang="ts">
import TheHeader from '../../welcome/components/TheHeader.vue'
import { RouterView } from 'vue-router'
import TheProfile from './TheProfile.vue'
</script>

<template>
  <div>
    <the-header :show-logo="false">
      <the-profile></the-profile>
    </the-header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
@import 'style.scss';
</style>
