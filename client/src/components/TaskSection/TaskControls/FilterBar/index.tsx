import { useState } from "react"
import style from "./style.module.css"
import { ArrowDownIcon } from "../../../../icons/ArrowDownIcon"

export const FilterBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => setIsOpen(prev => !prev)

    const handleUpdateOrder = () => {

        setIsOpen(false)
    }

    return (
        <div className={style.c_filterBar}>
            <button onClick={handleOpen}>
                Ordernar por
                <ArrowDownIcon />
            </button>

            {isOpen &&
                <ul className={style.filterBar__list}>
                    <li onClick={() => handleUpdateOrder()}>Status: concluídas</li>
                    <li onClick={() => handleUpdateOrder()}>Status: em desenvolvimento</li>
                    <li onClick={() => handleUpdateOrder()}>Status: pendentes</li>
                    <li onClick={() => handleUpdateOrder()}>Prioridade: maior</li>
                    <li onClick={() => handleUpdateOrder()}>Prioridade: menor</li>
                    <li onClick={() => handleUpdateOrder()}>Data: perto de finalizar</li>
                    <li onClick={() => handleUpdateOrder()}>Data: longe de finalizar</li>
                </ul>
            }
        </div >
    )
}
