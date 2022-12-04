import styles from './Header.module.scss'

type Props = {
  prop: string
}

const Header: React.FC<Props> = ({ prop }) => (
  <div className={styles.wrap}>
    {prop}
  </div>
)

export default Header
