<script setup lang="ts">
import { useProfile } from '../hooks/useProfile'

const { data, loading, signOut } = useProfile()
</script>

<template>
  <div v-if="loading" class="right-items">Loading...</div>
  <div v-else-if="!loading && !data" class="right-items">
    <router-link to="/sign-in">Sign In</router-link>
    <router-link to="/sign-up">Sign Up</router-link>
  </div>
  <div v-else class="right-items">
    <div role="button" @click="signOut">
      {{ data?.email }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'style.scss';
</style>
