import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';

const ormOptions : TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1111',
  database: 'toDoDB',
  autoLoadEntities: true,
  synchronize: true
};

@Module({
  imports: [
    TypeOrmModule.forRoot(ormOptions),
    TodoModule,
    AuthModule
  ],
})
      
export class AppModule {}