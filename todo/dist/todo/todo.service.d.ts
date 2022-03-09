import { CreateTodoDto } from 'src/dto/create-dto';
import { TodoEntity } from 'src/entity/todo.entity';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
export declare class TodoService {
    private repo;
    constructor(repo: Repository<TodoEntity>);
    getAllTodos(user: UserEntity): Promise<TodoEntity[]>;
    createTodo(user: UserEntity, createTodoDto: CreateTodoDto): Promise<TodoEntity>;
    updateTodoStatus(user: UserEntity, id: number): Promise<import("typeorm").UpdateResult>;
    deleteTodo(user: UserEntity, id: number): Promise<{
        success: boolean;
    }>;
}
