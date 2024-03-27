import { ArrowDownIcon } from "../../../icons/ArrowDownIcon"
import { PlusIcon } from "../../../icons/PlusIcon"

import style from "./style.module.css"

export const TaskControls = () => {
  return (
    <div className={style.taksControls}>
    <p>Tarefas:</p>

    <div className={style.filterForm}>
        <div>
            <p>Ordernar por</p>
            <ArrowDownIcon />
        </div>

        <button>
            <PlusIcon />
            Nova Tarefa
        </button>
    </div>
</div>
  )
}
