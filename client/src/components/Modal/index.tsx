import { ReactNode } from "react"
import style from "./style.module.css"
import { Crossicon } from "../../icons/Crossicon"


type ModalProps = {
    children: ReactNode
    handleClose?: () => void
    isOpen: boolean
    modalTitle?: string
    maxWidth: number
}

export const Modal = ({
    children,
    handleClose,
    isOpen,
    modalTitle,
    maxWidth
}: ModalProps) => {

    return (
        <>
            {isOpen && (
                <section className={style.modalSection}>
                    <div className={style.c_modal} style={{maxWidth: `${maxWidth}px`}}>
                        <header>
                            <h1>{modalTitle}</h1>
                            <button
                                onClick={handleClose}>
                                <Crossicon/>
                            </button>
                        </header>
                        {children}
                    </div>
                </section>
            )}
        </>
    )
}