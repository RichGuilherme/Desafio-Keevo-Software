import logo from "../../assets/Logo keevo sofware.png"
import {  TaskSection } from "../../components/TaskSection"
import styles from "./style.module.css"
import { HeaderPainelTask } from "../../components/HeaderPainelTask"

export const Home = () => {
  return (
    <main>
      <header>
        <img
          className={styles.home__logoImg}
          src={logo}
          alt="Logo da empresa" />

        <h1 className={styles.home__title}>
          Lista De Terefas
        </h1>
      </header>

      <section >
        <HeaderPainelTask/>
        <TaskSection />
      </section>
    </main>
  )
}
