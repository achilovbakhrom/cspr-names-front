<script setup lang="ts">
import { onMounted } from 'vue'
import InputComponent from './InputComponent.vue'
import type { MainInputProps } from './types'
import { ref, computed } from 'vue'
import { watch } from 'vue'

const emit = defineEmits(['update:modelValue'])

const { inputClass, modelValue } = defineProps<MainInputProps>()

const suffixWidth = ref(0)

const suffixEl = ref<HTMLSpanElement | null>(null)

const mValue = ref(modelValue)

watch(mValue, () => {
  emit('update:modelValue', mValue.value)
})

onMounted(() => {
  if (suffixEl.value?.clientWidth) {
    suffixWidth.value = suffixEl.value.clientWidth
  }
})

const inputStyle = computed(() => `padding-right: ${suffixWidth.value + 6}px;`)
</script>

<template>
  <div class="main-input">
    <input-component
      type="text"
      v-model="mValue"
      :placeholder="placeholder"
      class="main-input__input"
      :input-class="inputClass"
      :style="inputStyle"
      :disabled="disabled"
    ></input-component>
    <span id="suffix" v-if="suffix" class="suffix" ref="suffixEl">.{{ suffix }}</span>
    <span></span>
  </div>
</template>

<style scoped lang="scss">
.main-input {
  position: relative;
  margin: 0;
  padding: 0;
}

.main-input__input {
  width: 100%;
  height: 100%;
}

.suffix {
  text-transform: uppercase;
  position: absolute;
  padding: 0 3px 0 3px;
  border-radius: 4px;
  background-color: $color-primary;
  color: white;
  right: 3px;
  top: 3px;
  height: calc(100% - 6px);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
