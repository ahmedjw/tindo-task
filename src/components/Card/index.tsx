import { ICardprops } from './interfaces'
import styles from './styles.module.css'

export default function Card({ props }: ICardprops) {
  return (
    <div className={styles.productCard}>
      <div className={styles.badge}>Hot</div>
      <div className={styles.productTumb}>
        <img src={props.image} alt="Product Image" />
      </div>
      <div className={styles.productDetails}>
        <span className={styles.productCatagory}>{props.category}</span>
        <h4>
          <a href="/">{props.title}</a>
        </h4>
        <p>{props.description}</p>
        <div className={styles.productBottomDetails}>
          <div className={styles.productPrice}> Price:${props.price}</div>
        </div>
      </div>
    </div>
  )
}
