<script setup lang="ts">
import FormInputComponent from '@/components/core/form/FormInputComponent.vue'
import ButtonComponent from '@/components/core/button/ButtonComponent.vue'
import { createInput, FormKit, FormKitMessages } from '@formkit/vue'
import { useSignIn } from '../hooks'

const { signIn, loading } = useSignIn()
const input = createInput(FormInputComponent, { props: ['inputType'] })
const password = createInput(FormInputComponent, { props: ['inputType'] })
function handleSubmit(e: { email: string; password: string }) {
  signIn(e.email, e.password)
}
function clearErrorOnInput(_: any, node: any) {
  node.setErrors([])
}
</script>

<template>
  <div class="root">
    <div class="form">
      <FormKit
        type="form"
        class="form"
        id="sign-in"
        :actions="false"
        @submit="handleSubmit"
        @input="clearErrorOnInput"
      >
        <h1 class="form__title">Sign In</h1>
        <FormKitMessages />
        <FormKit
          :type="input"
          label="Email"
          name="email"
          inputType="text"
          placeholder="your-email@example.com"
          validation="required|email"
          error="Custom Error"
          validation-visibility="dirty"
        />

        <FormKit
          :type="password"
          label="Password"
          name="password"
          inputType="password"
          placeholder="your-password"
          validation="required"
          validation-visibility="dirty"
        />
        <button-component title="Login" class="form__button" :disabled="loading"></button-component>
      </FormKit>
    </div>
  </div>
</template>

<style scoped>
@import 'styles.scss';
</style>
