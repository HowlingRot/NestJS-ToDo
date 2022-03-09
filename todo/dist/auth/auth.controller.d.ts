import { LoginUserDto } from 'src/dto/login-dto';
import { RegisterUserDto } from 'src/dto/register-dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    registration(registrationDto: RegisterUserDto): Promise<import("../entity/user.entity").UserEntity>;
    signin(loginDto: LoginUserDto): Promise<{
        token: string;
    }>;
}
