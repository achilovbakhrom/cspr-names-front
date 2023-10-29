import type { FirebaseError } from '@/models/firebaseError'

export async function wrapFirebaseRequest<T>(promise: Promise<T>) {
  try {
    return promise
  } catch (e: any) {
    if (e.code && e.message) {
      Promise.reject(<FirebaseError>{ code: e.code, message: e.message })
    } else {
      Promise.reject(<FirebaseError>{ code: 0, message: 'No internet connection' })
    }
  }
}

export const normalizeError = (error: FirebaseError) => `${error.code} - ${error.message}`
