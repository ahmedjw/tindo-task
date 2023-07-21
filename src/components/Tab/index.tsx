import { ITabProps } from './interfaces'

export default function Tab({
  title,
  activeTab,
  setActiveTab,
  refetch,
}: ITabProps) {
  const handleTabClick = () => {
    setActiveTab(title)
    refetch()
  }
  return (
    <li
      className={title === activeTab ? 'active' : ''}
      onClick={handleTabClick}
    >
      {title}
    </li>
  )
}
