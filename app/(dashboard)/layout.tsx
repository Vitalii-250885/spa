import { Sidebar } from '../components/Sidebar'
import { TopMenu } from '../components/TopMenu'
import styles from './layout.module.css'

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.page}>
      <TopMenu />
      <main className={styles.main}>
        <Sidebar />
        <section className={styles.content}>{children}</section>
      </main>
    </div>
  )
}
