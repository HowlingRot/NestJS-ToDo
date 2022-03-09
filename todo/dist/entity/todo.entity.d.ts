import { UserEntity } from "./user.entity";
export declare class TodoEntity {
    id: number;
    title: string;
    description: string;
    status: boolean;
    user: UserEntity;
    userId: number;
}
