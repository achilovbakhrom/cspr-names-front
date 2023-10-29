<script setup lang="ts">
import MainInputComponent from '@/components/core/input/MainInputComponent.vue'
import { useSearch } from '../hooks/useSearch'
import { RouterLink } from 'vue-router'

const { searchText, loading, foundName } = useSearch()
console.log('fff', foundName.value)
</script>

<template>
  <div class="wrapper">
    <main-input-component
      input-class="names-input"
      placeholder="Enter a name"
      suffix="cspr"
      class="names-input-container"
      v-model="searchText"
      :disabled="loading"
    ></main-input-component>
  </div>
  <div class="actions-wrapper">
    <div v-if="foundName">The name is busy {{ foundName }}</div>
    <router-link to="#" v-else-if="!foundName && searchText && !loading">Register</router-link>
  </div>
</template>

<style lang="scss">
.actions-wrapper {
  @extend .centered;

  & a {
    text-decoration: none;
    padding: 8px 16px;
    font-size: 1.2rem;
    background-color: aquamarine;
    margin-top: 0.8rem;
    color: #555;
    border-radius: 4px;
  }
}

.wrapper {
  padding-top: 80px;
  display: flex;
  place-content: center;
}

.names-input-container {
  width: 80%;
}

.names-input {
  font-size: 2rem;
}
</style>
