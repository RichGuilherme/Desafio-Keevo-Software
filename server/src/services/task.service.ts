import { ITask, ITaskRepository, TaskCreate } from "../interfaces/task.interface";
import { TaskRepositoryPrisma } from "../repositories/task.repository";


class TaskService {

    private TaskRepository: ITaskRepository;

    constructor() {
        this.TaskRepository = new TaskRepositoryPrisma();
    }


    async create({ description, status, priority, dueDate }: TaskCreate): Promise<ITask> {
        const task = await this.TaskRepository.create({ description, status, priority, dueDate });

        return task;
    }

    async getAll(): Promise<ITask[]> {
        const task = await this.TaskRepository.getAll();

        return task;
    }

    async editTask(id: string, data: TaskCreate): Promise<ITask> {
        const task = await this.TaskRepository.editTask(id, data);

        return task;
    }

    async deleteTask(id: string): Promise<void> {
        const task = await this.TaskRepository.deleteTask(id);

        return task;
    }

}

export { TaskService };