import Express, { Request, Response } from "express";
import { TaskService } from "../services/task.service";


const router = Express.Router();

const taskService = new TaskService();


router.get("/", (async (req: Request, res: Response) => {
    try {
        const allTask = await taskService.getAll();

        res.status(201).json(allTask);
    }
    catch (error) {
        res.send("Error");
    }
}));

router.post("/create", (async (req: Request, res: Response) => {
    const { description, priority, status, dueDate } = req.body;

    try {
        const data = await taskService.create({
            description,
            status,
            priority,
            dueDate
        });

        res.status(201).json(data);
    }
    catch (error) {
        res.send("Error");
    }
}));


router.put("/update/:id", (async (req: Request, res: Response) => {
    const { description, priority, status, dueDate } = req.body;
    const { id } = req.params;

    try {
        const updateTask = await taskService.editTask(id, { description, priority, status, dueDate });

        res.status(201).json(updateTask);
    }
    catch (error) {
        res.send("Error");
    }
}));

router.delete("/delete/:id", (async (req: Request, res: Response) => {
    const { id } = req.params;
    
    console.log(id);
    try {
        await taskService.deleteTask(id);

        res.status(201).send("Excluído com sucesso");
    }
    catch (error) {
        res.send("Error");
    }
}));


export default router;