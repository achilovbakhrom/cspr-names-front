<script setup lang="ts">
import type { ButtonProps } from './types'
defineProps<ButtonProps>()
</script>

<template>
  <button type="submit" @click="$emit('click')" class="button" :disabled="disabled">
    {{ title }}
  </button>
</template>

<style scoped lang="scss">
.button {
  height: 40px;
  font-family: $font-bold;
  font-size: 1.2rem;
  background-color: $color-primary;
  color: white;
  outline: none;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 8px;
  cursor: pointer;
}
.button:active {
  box-shadow: inset 0 0 10px #555;
  color: #aaa;
}
.button:hover {
  opacity: 0.9;
}
</style>
