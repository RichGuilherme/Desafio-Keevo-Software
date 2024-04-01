import { ITask, ITaskRepository, TaskCreate, TaskFilter, } from "../interfaces/task.interface";
import { prisma } from "../../prisma/prismaClient";
import { Prisma, TaskStatus } from "@prisma/client";


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

    async filterTasks({status, orderBy }: TaskFilter): Promise<ITask[]> {
        const where: Prisma.taskWhereInput = {};
        let orderByField = {};

        if (status) {
            where.status = status as TaskStatus;
        }

        switch (orderBy) {
        case "priorityHigh":
            orderByField = { priority: "desc" };
            break;
        case "priorityLow":
            orderByField = { priority: "asc" };
            break;
        case "dueDateAsc":
            orderByField = { dueDate: "asc" };
            break;
        case "dueDateDesc":
            orderByField = { dueDate: "desc" };
            break;

        }

        return await prisma.task.findMany({
            where: where,
            orderBy: orderByField,
        });
    }

}


export { TaskRepositoryPrisma };