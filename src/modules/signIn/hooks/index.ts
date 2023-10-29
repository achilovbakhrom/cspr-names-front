import { useRouter } from 'vue-router'
import { watch, computed } from 'vue'
import { useSignInStore } from '../store'

export const useSignIn = () => {
  const router = useRouter()
  const store = useSignInStore()
  const data = computed(() => store.data)
  const loading = computed(() => store.loading)

  watch(data, function () {
    if (data.value) {
      router.push('/app')
    }
  })

  return {
    loading,
    signIn: store.signIn
  }
}
