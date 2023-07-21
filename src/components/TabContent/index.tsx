import Card from '../Card'
import Spiner from '../spinner'
import { ITabContentProps } from './interfaces'

const TabContent = ({
  content,
  isProductsLoading,
  isProductError,
}: ITabContentProps) => {
  if (isProductsLoading) return <Spiner />
  if (isProductError) return <div>An error has occurred: </div>

  return (
    <div className="card-container">
      {content?.map((product) => (
        <Card props={product} />
      ))}
    </div>
  )
}
export default TabContent
