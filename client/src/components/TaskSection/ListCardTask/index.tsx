import { CrossMarkIcon } from "../../../icons/CrossMarkIcon"
import { EditIcon } from "../../../icons/EditIcon"
import style from "./style.module.css"

export const ListCardTask = () => {
    return (
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
                        <p style={{color: "red"}}>Alta</p>
                    </div>

                    <div className={style.task__cardStatus}>
                        Concluído
                    </div>

                    <div className={style.task__cardDataEnd}>
                        <p>Finalizar até</p>
                        <p>3 julho 2024</p>
                    </div>

                    <div className={style.task__cardActions}>
                        <EditIcon />
                        <CrossMarkIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
