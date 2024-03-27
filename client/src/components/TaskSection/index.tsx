import { ContainerListTask } from "./ContainerListTask"
import style from "./style.module.css"
import { TaskControls } from "./TaskControls"

export const TaskSection = () => {
    return (
        <div className={style.taskSection}>
            <TaskControls />
            <ContainerListTask />
        </div>
    )
}
