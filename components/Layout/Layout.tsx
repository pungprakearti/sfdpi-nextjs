import styles from "./Layout.module.scss"

type Props = {
  children: JSX.Element
}

const Layout: React.FC<Props> = ({ children }) => (
  <div className={styles.wrap}>
    Header
    {children}
    Footer
  </div>
)

export default Layout
