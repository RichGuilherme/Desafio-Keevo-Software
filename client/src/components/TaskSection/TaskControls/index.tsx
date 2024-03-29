import { useState } from "react"
import { PlusIcon } from "../../../icons/PlusIcon"
import { Modal } from "../../Modal"

import style from "./style.module.css"
import { FilterBar } from "./FilterBar"
import { ModalAddTask } from "../../Modal/ModalAddTask"

export const TaskControls = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const openModalNewTask = () => {
    setIsOpenModal(true)
  }

  return (
    <div className={style.task__controls}>
      <p>Tarefas:</p>

      <div className={style.task__filterForm}>
        <FilterBar />

        <button onClick={openModalNewTask}>
          <PlusIcon />
          Nova Tarefa
        </button>
      </div>

      <Modal
        modalTitle="Nova Tarefa"
        isOpen={isOpenModal}
        handleClose={() => setIsOpenModal(false)}
        maxWidth={690}
      >
        <ModalAddTask
          setIsOpenModal={setIsOpenModal} />
      </Modal>
    </div>

  )
}
