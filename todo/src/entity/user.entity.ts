import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TodoEntity } from "./todo.entity";

@Entity('user')
export class UserEntity{
 @PrimaryGeneratedColumn()
 @ApiProperty()
 id: number;

 @Column()
 @ApiProperty()
 login: string;

 @Column()
 @ApiProperty()
 password: string;

 @OneToMany(() => TodoEntity, (todo) => todo.user)
 todos: TodoEntity[]
}