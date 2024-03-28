
// interface PropsModalNewTask {
//     setIsOpenModal: (any: boolean) => void
// }

import style from "./style.module.css"

export const ModalNewTask = () => {

    return (
        <div className={style.modal__newTask}>
            <form className={style.form__newTask}>
                <label>
                    <p>Tarefa</p>
                    <input type="text" name="" placeholder="Digite sua tarefa" id="" />
                </label>

                <label>
                    <p>Data máxima para finalizar a tarefa</p>
                    <input type="date" name="" id="" />
                </label>

                <label>
                    <p>Prioridade</p>
                    <div>
                        <div>Alta</div>
                        <div>Média</div>
                        <div>Baixa</div>
                    </div>
                </label>


                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    )
}
