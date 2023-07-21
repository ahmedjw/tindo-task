import { useEffect, useState } from 'react'
import useGetCategories from '../../hooks/useGetCategories'
import useGetProducts from '../../hooks/useGetProducts'
import Tab from '../Tab'
import TabContent from '../TabContent'
import Spiner from '../spinner'
import { Options } from '../../utils/consts'
import { IProduct } from '../../interfaces'
import styles from './styles.module.css'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>(Options.tab1)
  const [categories, setCategories] = useState<string[]>([])
  const [tabContent, setTabContent] = useState<IProduct[]>([])

  const {
    isLoading: isCategoriesLoading,
    error: isCategoriesError,
    data: categoriesData,
  } = useGetCategories()

  const {
    isLoading: isProductsLoading,
    error: isProductError,
    data: productsData,
    refetch,
  } = useGetProducts(activeTab)

  useEffect(() => {
    setCategories(categoriesData)
  }, [categoriesData])

  useEffect(() => {
    setTabContent(productsData)
  }, [productsData])

  if (isCategoriesLoading) return <Spiner />

  if (isCategoriesError) return <div>An error has occurred</div>

  return (
    <div className="container">
      <div className={styles.Tabs}>
        <ul className="nav">
          {categories?.map((category) => (
            <Tab
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              title={category}
              refetch={refetch}
            />
          ))}
        </ul>
        <TabContent
          content={tabContent}
          isProductsLoading={isProductsLoading}
          isProductError={isProductError}
        />
      </div>
    </div>
  )
}
export default Tabs
