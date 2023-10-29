<script setup lang="ts">
import type { InputProps } from './types'
import InputComponent from '@/components/core/input/InputComponent.vue'

const props = defineProps<InputProps & { context: any }>()

function handleInput(e: Event) {
  props.context.node.input((e.target as HTMLInputElement)?.value)
}
</script>

<template>
  <input-component
    :type="props.context.inputType ?? 'text'"
    :class="[props.context.classes.input, 'input']"
    :placeholder="props.context.attrs.placeholder"
    @input="handleInput"
    :value="props.context._value"
  >
  </input-component>
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
