import { wrapFirebaseRequest } from '@/utils/firebaseRequestUtils'
import { debounce } from '@/utils/helpers'
import { computed, ref, watch } from 'vue'
import axios from 'axios'
import type { DomainName } from '@/models/domainName'

async function getAllNames() {
  return wrapFirebaseRequest(
    axios.get<DomainName[]>(
      'https://casper-names-front-default-rtdb.asia-southeast1.firebasedatabase.app/names.json'
    )
  )
}

export const useSearch = () => {
  const searchText = ref('')

  const loading = ref(false)

  const found = ref<DomainName | null>(null)

  const debounceSearch = debounce(async (arg: string) => {
    loading.value = true
    try {
      const response = await getAllNames()
      console.log('rrr', response?.data)
      found.value = response?.data.find((item) => item.name === `${arg}.cspr`) ?? null
    } catch (e) {
      console.log('error while getting names', e)
    } finally {
      loading.value = false
    }
  }, 500)

  watch(searchText, () => {
    debounceSearch(searchText.value)
  })

  const foundName = computed(() => found.value)

  return { searchText, foundName, loading }
}
