import Express, { Request, Response } from "express";
import { TaskService } from "../services/task.service";


const router = Express.Router();

const taskService = new TaskService();


router.get("/", (async (req: Request, res: Response) => {
    const query = req.query;
    let taskList;

    try {
        if (query) {
            taskList = await taskService.filterTasks(query);
        } else {
            taskList = await taskService.getAll();
        }

        res.status(201).json(taskList);
    }
    catch (error) {
        res.send(error);
    }
}));

router.post("/", (async (req: Request, res: Response) => {
    const { description, priority, status, dueDate } = req.body;

    try {
        await taskService.create({
            description,
            status,
            priority,
            dueDate
        });

        res.status(201).send("Tarefa criada com sucesso!");
    }
    catch (error) {
        res.send(error);
    }
}));


router.patch("/:id", (async (req: Request, res: Response) => {
    const { description, priority, status, dueDate } = req.body;
    const { id } = req.params;

    try {
        await taskService.editTask(id, { description, priority, status, dueDate });

        res.status(201).send("Atualização na tarefa feita com sucesso!");
    }
    catch (error) {
        res.send("Error");
    }
}));

router.delete("/:id", (async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await taskService.deleteTask(id);

        res.status(201).send("Terefa excluída com sucesso!");
    }
    catch (error) {
        res.send("Error");
    }
}));
export default router;