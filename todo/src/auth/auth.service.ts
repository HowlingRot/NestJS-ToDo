import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginUserDto } from 'src/dto/login-dto';
import { RegisterUserDto } from 'src/dto/register-dto';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) private repo: Repository<UserEntity>,
    private jwt: JwtService){
    }

    async registerUser(registerDTO: RegisterUserDto){
        const {login, password} = registerDTO;
        const user = new UserEntity();
        user.login = login;
        user.password = password;

        this.repo.create(user);
        try {
            return await this.repo.save(user);
          } catch (err) {
            throw new HttpException('Invalid credentials', HttpStatus.NOT_ACCEPTABLE);
          }
    }

    async loginUser(loginUserDto: LoginUserDto){
        const {login, password} = loginUserDto;

        const user = await this.repo.findOne({login});

        if (!user) {
            throw new HttpException('Invalid credentials', HttpStatus.NOT_ACCEPTABLE);
        }

        const jwtPayload = {login};
        const jwtToken = await this.jwt.signAsync(jwtPayload, {expiresIn: '1d', algorithm: 'HS512'});
        return {token: jwtToken};
    }
}
