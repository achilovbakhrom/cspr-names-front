<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { withDefaults } from 'vue'
withDefaults(
  defineProps<{
    showLogo: boolean
  }>(),
  {
    showLogo: true
  }
)
</script>

<template>
  <header class="header">
    <router-link to="/" class="header__logo" v-if="showLogo">Logo</router-link>
    <div class="header__title">My Header</div>
    <div class="header__right-items">
      <slot></slot>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import 'style.scss';
</style>
