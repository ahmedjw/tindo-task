import Card from '../Card'
import ErrorHandler from '../ErrorHandler'
import Spiner from '../spinner'
import { ITabContentProps } from './interfaces'

const TabContent = ({
  content,
  isProductsLoading,
  isProductError,
}: ITabContentProps) => {
  if (isProductsLoading) return <Spiner />
  if (isProductError) return <ErrorHandler />
  return (
    <div className="card-container">
      {content?.map((product) => (
        <Card props={product} key={product.id} />
      ))}
    </div>
  )
}
export default TabContent
