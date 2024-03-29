
import style from "./style.module.css"
import { useCurrentDate } from "../../../hooks/useCurrentDate"
import { useCurrentHrs } from "../../../hooks/useCurrentHrs"

export const UserWelcome = () => {
    const currentDate = useCurrentDate()
    const currentHrs = useCurrentHrs()

    return (
        <div className={style.userWelcome}>
            <div className={style.userWelcome__username}>
                <p>
                    Bem vindo,
                    <span>&nbsp;Richard Guilherme</span>
                </p>
            </div>

            <div className={style.userWelcome__date}>
                <span>{currentHrs} {currentDate} </span>
            </div>
        </div>
    )
}