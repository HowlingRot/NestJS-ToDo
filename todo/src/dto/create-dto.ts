import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDto{

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    title: string;
    
    @IsString()
    @ApiProperty()
    description: string;
}