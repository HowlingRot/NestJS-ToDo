import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/dto/login-dto';
import { RegisterUserDto } from 'src/dto/register-dto';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private repo;
    private jwt;
    constructor(repo: Repository<UserEntity>, jwt: JwtService);
    registerUser(registerDTO: RegisterUserDto): Promise<UserEntity>;
    loginUser(loginUserDto: LoginUserDto): Promise<{
        token: string;
    }>;
}
