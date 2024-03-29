import { useState } from "react"
import { BinIcon } from "../../../icons/BinIcon"
import { EditIcon } from "../../../icons/EditIcon"
import { Modal } from "../../Modal"

import style from "./style.module.css"
import { ModalAddEditTask } from "../../Modal/ModalAddEditTask"
import { ModalDeleteTask } from "../../Modal/ModalDeleteTask"


export const ListCardTask = () => {
    const [openModalAddEditTaks, setIsOpenModal] = useState<boolean>(false)
    const [isModal, setIsModal] = useState<string>("")

    const openModalTask = (modalTask: string) => {
        setIsOpenModal(true)
        setIsModal(modalTask)
    }

    return (
        <>
            <div className={style.c_taskList}>
                <div className={style.task__card}>

                    <div className={style.task__cardHeader}>
                        <label className={style.containerCheckbox}>
                            <input type="checkbox" id="" />
                            <div className={style.checkmark}></div>
                        </label>

                        <div className={style.task__cardTitle}>
                            <p>Tarefa</p>
                            <p>exemplo ir ao supermecador e pega as sacolas na garagem</p>
                        </div>
                    </div>

                    <div className={style.task__cardBody}>
                        <div className={style.task__cardPriority} >
                            <p>Prioridade</p>
                            <p style={{ color: "red" }}>Alta</p>
                        </div>

                        <div className={style.task__cardStatus}>
                            Concluído
                        </div>

                        <div className={style.task__cardDataEnd}>
                            <p>Finalizar até</p>
                            <p>3 julho 2024</p>
                        </div>

                        <div className={style.task__cardActions}>
                            <div onClick={() => openModalTask("edit")}>
                                <EditIcon />
                            </div>
                            <div onClick={() => openModalTask("delete")}>
                                <BinIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                modalTitle={isModal == "edit" ? "Editar Tarefa" : "Deletar Tarefa"}
                isOpen={openModalAddEditTaks}
                handleClose={() => setIsOpenModal(false)}
                maxWidth={690}
            >
                {isModal == "edit" ?

                    <ModalAddEditTask
                        buttonText="Editar"
                        setIsOpenModal={setIsOpenModal} />
                    :
                    <ModalDeleteTask
                        setIsOpenModal={setIsOpenModal}
                    />
                }

            </Modal>
        </>


    )
}
