import { computed, onMounted } from 'vue'
import { useAppStore } from '../store'
import { useSignInStore } from '@/modules/signIn/store'

export const useProfile = () => {
  const store = useAppStore()
  const signInStore = useSignInStore()

  const loading = computed(() => store.loading)
  const data = computed(() => store.data)

  onMounted(() => {
    if (!data.value) {
      store.getCurrentUser()
    }
  })

  function signOut() {
    localStorage.removeItem('token')
    signInStore.setData(null)
    store.setData(null)
  }

  return { loading, data, signOut }
}
