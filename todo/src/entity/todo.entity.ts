import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('todos')
export class TodoEntity{

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column()
    @ApiProperty()
    @IsString()
    title: string;

    @Column()
    @ApiProperty()
    @IsString()
    description: string;
    
    @Column()
    @ApiProperty()
    @IsBoolean()
    status: boolean;
    
    @ManyToOne(() => UserEntity, (user) => user.todos)
    user: UserEntity
    
    @ApiProperty()
    @Column()
    @IsNumber()
    userId: number;
};