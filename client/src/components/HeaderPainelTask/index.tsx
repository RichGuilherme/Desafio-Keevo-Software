
import { PainelStatus } from "./PainelStatus"
import style from "./style.module.css"
import { UserWelcome } from "./UserWelcome"

export const HeaderPainelTask = () => {
    return (
        <div className={style.c_painelTask}>
            <PainelStatus/>
            <UserWelcome />
        </div>
    )
}
