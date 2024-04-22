import {  TaskSection } from "../../components/TaskSection"
import styles from "./style.module.css"
import { HeaderPainelTask } from "../../components/HeaderPainelTask"

export const Home = () => {
  return (
    <main className={styles.home__main}>
      <header className={styles.home__header}>
        <h1 className={styles.home__title}>
          Lista De Terefas
        </h1>
      </header>

      <section className={styles.home__section} >
        <HeaderPainelTask/>
        <TaskSection />
      </section>
    </main>
  )
}
