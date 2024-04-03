import { ITask, ITaskRepository, TaskCreate, TaskFilter, } from "../interfaces/task.interface";
import { Prisma, TaskStatus,PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


class TaskRepositoryPrisma implements ITaskRepository {
    async create({ description, status, priority, dueDate }: TaskCreate): Promise<ITask> {
        
        return await prisma.task.create({
            data: {
                description,
                status,
                priority,
                dueDate
            }
        });
    }

    async getAll(): Promise<TaskCreate[]> {

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

    async filterTasks({ status, orderBy }: TaskFilter): Promise<ITask[]> {
        const where: Prisma.taskWhereInput = {};
        let orderByField = {};

        if (status) {
            where.status = status as TaskStatus;
        }

        const orderByFilter = {
            "priorityDesc": { priority: "desc" },
            "priorityAsc": { priority: "asc" },
            "dueDateAsc": { dueDate: "asc" },
            "dueDateDesc": { dueDate: "desc" }
        };

        if(orderBy){
            orderByField = orderByFilter[orderBy];
        }
       

        return await prisma.task.findMany({
            where: where,
            orderBy: orderByField,
        });
    }

}


export { TaskRepositoryPrisma };