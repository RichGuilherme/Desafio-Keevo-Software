
import { ListCardTask } from "./ListCardTask"
import style from "./style.module.css"
import { TaskControls } from "./TaskControls"

export const TaskSection = () => {
    return (
        <div className={style.taskSection}>
            <TaskControls />
            <ListCardTask />
        </div>
    )
}
