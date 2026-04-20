import { Sidebar } from './components/Sidebar'
import { TopMenu } from './components/TopMenu'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <TopMenu />
        <Sidebar />
      </main>
    </div>
  )
}
