import { ITask, ITaskRepository, TaskCreate, TaskFilter } from "../interfaces/task.interface";
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

    async getAll(): Promise<TaskCreate[]> {
        const taskList = await this.TaskRepository.getAll();

        return taskList;
    }

    async editTask(id: string, data: TaskCreate): Promise<ITask> {
        const task = await this.TaskRepository.editTask(id, data);

        return task;
    }

    async deleteTask(id: string): Promise<void> {
        const task = await this.TaskRepository.deleteTask(id);

        return task;
    }

    async filterTasks({ status, orderBy }: TaskFilter): Promise<ITask[]> {
        const taskFiltered = await this.TaskRepository.filterTasks({ status, orderBy });

        return taskFiltered;
    }
}

export { TaskService };