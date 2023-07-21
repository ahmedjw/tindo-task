import { axiosInstance } from '../utils/axios'
import { IgetCateoryProductsprops } from './interfaces'

export const getCateories = async () => {
  const categories = await axiosInstance.get('/categories')
  return categories.data
}

export const getCateoryProducts = async ({
  queryKey,
}: IgetCateoryProductsprops) => {
  const [query, activeTab] = queryKey
  const products = await axiosInstance.get(`/category/${activeTab}`)
  return products.data
}
