import axios from 'axios'
import type { User } from '../../../models/user'

export async function getCurrentUser(): Promise<User> {
  return axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:lookup',
    {
      idToken: ''
    },
    {
      params: {
        key: 'AIzaSyBePlrXgcSxUAFGZXE8jWJ-MrE8Rj5nNKA'
      }
    }
  )
}
