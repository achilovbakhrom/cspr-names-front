import { defineStore } from 'pinia'
import { useAsyncHook } from '@/modules/common/hooks/asyncHook'
import type { SignInData } from '../types'
import { getCommonPersistOptions } from '@/utils/pinia'
import { normalizeError, wrapFirebaseRequest } from '@/utils/firebaseRequestUtils'
import axios from 'axios'
import type { SignInResponse } from '@/models/response'
import { setErrors } from '@formkit/vue'
import type { FirebaseError } from '@/models/firebaseError'

async function signInApi(email: string, password: string) {
  return wrapFirebaseRequest(
    axios.post<SignInResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
      {
        email,
        password
      },
      {
        params: {
          key: import.meta.env.VITE_FIREBASE_API_KEY
        }
      }
    )
  )
}

export const useSignInStore = defineStore(
  'signIn',
  () => {
    const { setLoading, setData, ...rest } = useAsyncHook<SignInData>()
    async function signIn(email: string, password: string) {
      setLoading(true)
      try {
        const response = await signInApi(email, password)
        localStorage.setItem('token', response?.data.idToken ?? '')
        setErrors('sign-in', [])
        setData(response?.data ?? null)
      } catch (e) {
        setErrors('sign-in', [normalizeError(e as unknown as FirebaseError)])
        localStorage.removeItem('token')
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    return { ...rest, setData, signIn }
  },
  { persist: getCommonPersistOptions(['data']) }
)
