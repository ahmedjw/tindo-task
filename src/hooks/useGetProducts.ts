import { useQuery } from 'react-query'
import { getCateoryProducts } from '../api/quieries'

const useGetProducts = (category: string) => {
  const getProducts = useQuery(['getProducts', category], getCateoryProducts)

  return getProducts
}
export default useGetProducts
