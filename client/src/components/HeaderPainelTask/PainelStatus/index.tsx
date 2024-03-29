import { CheckIcon } from "../../../icons/CheckIcon"
import { ProgressIcon } from "../../../icons/ProgressIcon"
import { StartIcon } from "../../../icons/StartIcon"

import style from "./style.module.css"

export const PainelStatus = () => {

    return (
        <div className={style.statusPainel}>
            <div className={style.c_statusPainel}>
                <div className={`${style.status__content} ${style.status__completed}`}>
                    <div>
                        <CheckIcon />
                    </div>

                    <p>Concluídas</p>
                    <span>5</span>
                </div>

                <div className={`${style.status__content} ${style.status__progress}`}>
                    <div>
                        <ProgressIcon />
                    </div>

                    <p>Em desenvolvimento</p>
                    <span>2</span>
                </div>

                <div className={`${style.status__content} ${style.status__pending}`}>
                    <div>
                        <StartIcon />
                    </div>

                    <p>Pendentes</p>
                    <span>4</span>
                </div>
            </div>

        </div>
    )
}
