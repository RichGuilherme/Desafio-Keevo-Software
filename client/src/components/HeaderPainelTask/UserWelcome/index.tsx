
import { GetCurrentDate } from "../../../utils/GetCurrentDate"
import style from "./style.module.css"
import { GetCurrentHrs } from "../../../utils/GetCurrentHrs"

export const UserWelcome = () => {


    return (
        <div className={style.userWelcome}>
            <div className={style.userWelcome__username}>
                <p>
                    Bem vindo,
                    <span>&nbsp;Richard Guilherme</span>
                </p>
            </div>

            <div className={style.userWelcome__date}>
                <span><GetCurrentHrs/> &nbsp;<GetCurrentDate /></span>
            </div>
        </div>
    )
}