import { CrossMarkIcon } from "../../../icons/CrossMarkIcon"
import { EditIcon } from "../../../icons/EditIcon"
import style from "./style.module.css"

export const ContainerListTask = () => {
    return (
        <div className={style.listTask}>
            <div className={style.cardTask}>

                <div className={style.taskCardHeader}>
                    <label className={style.containerCheckbox}>
                        <input type="checkbox" id="" />
                        <div className={style.checkmark}></div>
                    </label>

                    <div className={style.taskTitle}>
                        <p>Tarefa</p>
                        <p>exemplo ir ao supermecador e pega as sacolas na garagem</p>
                    </div>
                </div>

                <div className={style.taskCardBody}>
                    <div className={style.taskPriority} >
                        <p>Prioridade</p>
                        <p style={{color: "red"}}>Alta</p>
                    </div>

                    <div className={style.taskStatus}>
                        Concluído
                    </div>

                    <div className={style.taskDataEnd}>
                        <p>Finalizar até</p>
                        <p>3 julho 2024</p>
                    </div>

                    <div className={style.cardActions}>
                        <EditIcon />
                        <CrossMarkIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
