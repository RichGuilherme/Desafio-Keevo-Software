import { ITask, ITaskRepository, TaskCreate, TaskFilter } from "../interfaces/task.interface";
import { TaskRepositoryPrisma } from "../repositories/task.repository";


class TaskService {

    private TaskRepository: ITaskRepository;

    constructor() {
        this.TaskRepository = new TaskRepositoryPrisma();
    }


    async create({ description, status, priority, dueDate }: TaskCreate): Promise<ITask> {
        return await this.TaskRepository.create({ description, status, priority, dueDate });
    }

    async getAll(): Promise<TaskCreate[]> {
        return await this.TaskRepository.getAll();
    }

    async editTask(id: string, data: TaskCreate): Promise<ITask> {
        return await this.TaskRepository.editTask(id, data);
    }

    async deleteTask(id: string): Promise<void> {
        return this.TaskRepository.deleteTask(id);
    }

    async filterTasks({ status, orderBy }: TaskFilter): Promise<ITask[]> {
        return await this.TaskRepository.filterTasks({ status, orderBy });

    }
}

export { TaskService };