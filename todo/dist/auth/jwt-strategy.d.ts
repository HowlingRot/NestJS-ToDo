import { Strategy } from "passport-jwt";
import { UserEntity } from "src/entity/user.entity";
import { Repository } from "typeorm";
declare const JwtCustomStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtCustomStrategy extends JwtCustomStrategy_base {
    private repo;
    constructor(repo: Repository<UserEntity>);
    validate(payload: {
        login: string;
    }): Promise<UserEntity>;
}
export {};
