import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from 'src/dto/login-dto';
import { RegisterUserDto } from 'src/dto/register-dto';
import { AuthService } from './auth.service';

@Controller('auth')
@ApiTags('user')
export class AuthController {
    constructor(private authService: AuthService){
    }

    @Post('register')
    @ApiBody({type: [RegisterUserDto]})
    @ApiResponse({
        status:200,
        description:'The user is registered successfully',
        type:RegisterUserDto
    })
    @ApiResponse({
        status:406,
        description:'Invalid credentials'
    })
    registration(@Body(ValidationPipe) registrationDto: RegisterUserDto){
        return this.authService.registerUser(registrationDto);
    }
    
    @Post('login')
    @ApiBody({type: [LoginUserDto]})
    @ApiResponse({
        status:200,
        description:'The user logged in successfully',
    })
    @ApiResponse({
        status:406,
        description:'Invalid credentials'
    })
    signin(@Body(ValidationPipe) loginDto: LoginUserDto){
        return this.authService.loginUser(loginDto);
    }
}
