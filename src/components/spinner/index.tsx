import styles from './styles.module.css'

export default function Spiner() {
  return (
    <div>
      <span className={`${styles.material} ${styles.spinner}`} />
    </div>
  )
}
