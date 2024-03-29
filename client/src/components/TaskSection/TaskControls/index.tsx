import { useState } from "react"
import { ArrowDownIcon } from "../../../icons/ArrowDownIcon"
import { PlusIcon } from "../../../icons/PlusIcon"
import { Modal } from "../../Modal"
import { ModalAddEditTask } from "../../Modal/ModalAddEditTask"

import style from "./style.module.css"

export const TaskControls = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const openModalNewTask = () => {
    setIsOpenModal(true)
  }

  return (
    <div className={style.task__controls}>
      <p>Tarefas:</p>

      <div className={style.task__filterForm}>
        <div>
          <p>Ordernar por</p>
          <ArrowDownIcon />
        </div>

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
        <ModalAddEditTask
          buttonText="Criar tarefa"
          setIsOpenModal={setIsOpenModal} />
      </Modal>
    </div>

  )
}
