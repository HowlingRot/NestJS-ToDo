import { CreateTodoDto } from 'src/dto/create-dto';
import { TodoEntity } from 'src/entity/todo.entity';
import { UserEntity } from 'src/entity/user.entity';
import { TodoService } from './todo.service';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    getAllTodos(user: UserEntity): Promise<TodoEntity[]>;
    createTodo(data: CreateTodoDto, user: UserEntity): Promise<TodoEntity>;
    updateTodoStatus(id: number, user: UserEntity): Promise<import("typeorm").UpdateResult>;
    deleteTodo(id: number, user: UserEntity): Promise<{
        success: boolean;
    }>;
}
