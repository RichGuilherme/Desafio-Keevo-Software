import { CheckIcon } from "../../icons/CheckIcon"
import { PauseIcon } from "../../icons/PauseIcon"
import { ProgressIcon } from "../../icons/ProgressIcon"
import { StartIcon } from "../../icons/StartIcon"

import style from "./style.module.css"

export const ContainerStatus = () => {

    return (
        <div className={style.containerStatus}>
            <div className={style.divStatus}>
                <div className={style.contentStatus}>
                    <div>
                        <CheckIcon />
                    </div>

                    <p>Concluídos</p>
                    <span>5</span>
                </div>

                <div className={style.contentStatus}>
                    <div>
                        <ProgressIcon />
                    </div>

                    <p>Em progresso</p>
                    <span>2</span>
                </div>

                <div className={style.contentStatus}>
                    <div>
                        <StartIcon />
                    </div>

                    <p>Iniciar</p>
                    <span>4</span>
                </div>

                <div className={style.contentStatus}>
                    <div>
                        <PauseIcon />
                    </div>

                    <p>Pausados</p>
                    <span>1</span>
                </div>
            </div>

        </div>
    )
}
