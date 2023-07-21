export interface ITabProps {
  title: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
  activeTab: string
  refetch: () => void
}
