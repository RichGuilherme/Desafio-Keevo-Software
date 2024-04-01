import { ITask, ITaskRepository, TaskCreate, } from "../interfaces/task.interface";
import { prisma } from "../../prisma/prismaClient";


class TaskRepositoryPrisma implements ITaskRepository {
    async create({ description, status, priority, dueDate }: TaskCreate): Promise<ITask> {

        const result = await prisma.task.create({
            data: {
                description,
                status,
                priority,
                dueDate
            }
        });

        return result;
    }

    async getAll(): Promise<ITask[]> {

        const result = await prisma.task.findMany();

        return result;
    }

    async editTask(id: string, data: TaskCreate): Promise<ITask> {

        const result = await prisma.task.update({ where: { id: Number(id) }, data });

        return result;
    }

    async deleteTask(id: string): Promise<void> {
        await prisma.task.delete({ where: { id: Number(id) } });
    }

}


export { TaskRepositoryPrisma };