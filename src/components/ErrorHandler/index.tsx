import styles from './styles.module.css'

export default function ErrorHandler() {
  const handleRefresh = () => {
    window.location.reload()
  }
  return (
    <div className={styles.ErrorWraper}>
      <h3 style={{ color: 'red' }}>
        An error has occurred Please Refresh the page clicking the Button Below{' '}
      </h3>
      <button className={styles.buttonError} onClick={handleRefresh}>
        Refresh
      </button>
    </div>
  )
}
