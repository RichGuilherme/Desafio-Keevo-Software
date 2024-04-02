import { CheckIcon } from "../../../icons/CheckIcon"
import { ProgressIcon } from "../../../icons/ProgressIcon"
import { StartIcon } from "../../../icons/StartIcon"
import { useTaskContext } from "../../context/fetchTasksContext"

import style from "./style.module.css"

export const PainelStatus = () => {
    const { tasks } = useTaskContext()

    const countTasksStatus = (status: string) => tasks.filter(value => value.status == status).length
    

    return (
        <div className={style.statusPainel}>
            <div className={style.c_statusPainel}>
                <div className={`${style.status__content} ${style.status__completed}`}>
                    <div>
                        <CheckIcon />
                    </div>

                    <p>Concluídas</p>
                    <span>{countTasksStatus("DONE")}</span>
                </div>

                <div className={`${style.status__content} ${style.status__progress}`}>
                    <div>
                        <ProgressIcon />
                    </div>

                    <p>Em desenvolvimento</p>
                    <span>{countTasksStatus("IN_PROGRESS")}</span>
                </div>

                <div className={`${style.status__content} ${style.status__pending}`}>
                    <div>
                        <StartIcon />
                    </div>

                    <p>Pendentes</p>
                    <span>{countTasksStatus("TODO")}</span>
                </div>
            </div>

        </div>
    )
}
