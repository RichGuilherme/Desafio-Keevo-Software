import style from "./style.module.css"

export const UserWelcome = () => {
    return (
        <div className={style.userWelcome}>
            <div className={style.userWelcome__username}>
                <p>
                    Bem vindo, 
                    <span>&nbsp;Richard Guilherme</span>
                </p>
            </div>

            <div className={style.userWelcome__dat}>
                <span>20 março, 2024</span>
            </div>
        </div>
    )
}