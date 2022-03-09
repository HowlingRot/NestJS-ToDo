import { TodoEntity } from "./todo.entity";
export declare class UserEntity {
    id: number;
    login: string;
    password: string;
    todos: TodoEntity[];
}
