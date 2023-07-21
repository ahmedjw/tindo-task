import { useQuery } from 'react-query'
import { getCateories } from '../api/quieries'

const useGetCategories = () => {
  const getCategoriesQuery = useQuery('categories', getCateories)

  return getCategoriesQuery
}
export default useGetCategories
