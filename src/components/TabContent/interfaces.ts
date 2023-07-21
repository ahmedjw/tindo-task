import { IProduct } from '../../interfaces'

export interface ITabContentProps {
  content: Array<IProduct>
  isProductsLoading: boolean
  isProductError: Error | unknown
}
