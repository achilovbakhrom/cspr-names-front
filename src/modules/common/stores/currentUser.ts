import type { User } from '@/models/user'
import { getCommonPersistOptions } from '@/utils/pinia'
import { defineStore } from 'pinia'
import { useAsyncHook } from '../hooks/asyncHook'
import { wrapFirebaseRequest } from '@/utils/firebaseRequestUtils'
import axios from 'axios'
import type { FirebaseError } from '@/models/firebaseError'

export const useCurrentStore = defineStore(
  'currentUser',
  () => {
    const { info, methods } = useAsyncHook<User>()

    async function fetchCurrentUser() {
      methods.setLoading(true)
      try {
        const result = await wrapFirebaseRequest(axios.get(''))
        methods.clearError()
        methods.setData(result?.data as User)
      } catch (e) {
        const error = e as FirebaseError
        methods.setError(`${error.code} - ${error.message}`)
      } finally {
        methods.setLoading(false)
      }
    }

    return {
      ...info,
      ...methods,
      fetchCurrentUser
    }
  },
  {
    persist: getCommonPersistOptions()
  }
)
