import logo from "../../assets/Logo keevo sofware.png"
import {  TaskSection } from "../../components/TaskSection"
import { ContainerStatus } from "../../components/ContainerStatus"
import styles from "./style.module.css"

export const Home = () => {
  return (
    <main>
      <header>
        <img
          className={styles.logoImg}
          src={logo}
          alt="Logo da empresa" />

        <h1 className={styles.titleHome}>
          Lista De Terefas
        </h1>
      </header>

      <section >
        <ContainerStatus />
        <TaskSection />
      </section>
    </main>
  )
}
