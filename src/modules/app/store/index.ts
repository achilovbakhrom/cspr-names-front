import type { User } from '@/models/user'
import { useAsyncHook } from '@/modules/common/hooks/asyncHook'
import { normalizeError, wrapFirebaseRequest } from '@/utils/firebaseRequestUtils'
import { getCommonPersistOptions } from '@/utils/pinia'
import axios from 'axios'
import { defineStore } from 'pinia'
import type { CurrentUserResponse } from '../types'
import { useSignInStore } from '@/modules/signIn/store'
import { computed } from 'vue'
import { pick } from 'ramda'
import type { FirebaseError } from '@/models/firebaseError'

async function getCurrentUserApi(token: string) {
  return wrapFirebaseRequest(
    axios.post<CurrentUserResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:lookup',
      {
        idToken: token
      },
      {
        params: {
          key: import.meta.env.VITE_FIREBASE_API_KEY
        }
      }
    )
  )
}

const mapResponseToEntity = (response: CurrentUserResponse): User | null => {
  if (response.users.length) {
    const user = response.users[0]
    return pick(['localId', 'email', 'createdAt', 'lastRefreshAt'], user)
  }
  return null
}

export const useAppStore = defineStore(
  'app',
  () => {
    const { setLoading, setData, setError, ...rest } = useAsyncHook<User>()

    const signInStore = useSignInStore()

    const token = computed(() => signInStore.data?.idToken)

    async function getCurrentUser() {
      if (!token.value) {
        setLoading(false)
        return
      }
      setLoading(true)
      try {
        const response = await getCurrentUserApi(token.value)
        if (response) {
          setData(mapResponseToEntity(response.data))
        }
      } catch (e: any) {
        setError(normalizeError(e as FirebaseError))
      } finally {
        setLoading(false)
      }
    }

    return {
      ...rest,
      setData,
      getCurrentUser
    }
  },
  { persist: getCommonPersistOptions(['data']) }
)
