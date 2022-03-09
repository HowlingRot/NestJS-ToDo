import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto{

    @IsNotEmpty()
    @ApiProperty()
    @IsString()
    login: string;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;
}