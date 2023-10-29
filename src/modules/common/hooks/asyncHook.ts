import { ref } from 'vue'

export const useAsyncHook = <T>() => {
  const loading = ref(false)
  const data = ref<T | null>(null)
  const error = ref<string | null>(null)

  return {
    loading,
    data,
    error,
    setLoading: (arg: boolean) => {
      loading.value = arg
    },
    setData: (arg: T | null) => {
      data.value = arg as any
    },
    setError: (arg: string | null) => {
      error.value = arg
    },
    clearError: () => {
      error.value = null
    }
  }
}
