<script setup lang="ts">
import type { InputProps } from './types'

defineProps<InputProps>()
</script>

<template>
  <input
    :type="type ?? 'text'"
    class="input"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
  />
</template>

<style scoped lang="scss">
.input {
  outline: none;
  border-width: 1px;
  border-style: solid;
  padding: 6px 12px;
  border-color: #aaa;
  font-family: $font-regular;
  border-radius: 4px;
}

.input:focus {
  border-color: $color-primary;
}
</style>
