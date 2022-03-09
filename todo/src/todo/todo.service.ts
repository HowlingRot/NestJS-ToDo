import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoDto } from 'src/dto/create-dto';
import { TodoEntity } from 'src/entity/todo.entity';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(@InjectRepository(TodoEntity) private repo: Repository<TodoEntity>){
  }

  async getAllTodos(user: UserEntity){
    const query = this.repo.createQueryBuilder('todo');
    query.where({userId: user.id});
    try {
      return await query.getMany();
    } catch (err) {
        throw new HttpException('No todo found', HttpStatus.NOT_FOUND);
    } 
  }

  async createTodo(user: UserEntity, createTodoDto: CreateTodoDto){
      const todo = new TodoEntity();
      const {title, description} = createTodoDto;
      todo.title = title;
      todo.description = description;
      todo.status = false;
      todo.userId = user.id;

      this.repo.create(todo);
      try {
      return await this.repo.save(todo)
    } catch (err) {
      throw new HttpException('Todo not created', HttpStatus.NOT_IMPLEMENTED);
    }
}   

  async updateTodoStatus(user: UserEntity, id: number){
    try {
    const todo = await this.repo.findOne(id);
    const status: boolean = !todo.status
    return await this.repo.update({id, userId: user.id}, {status});
  } catch (err) {
    throw new HttpException('Todo status not update', HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }

  async deleteTodo(user: UserEntity, id: number){
    const result = await this.repo.delete({id, userId: user.id});
    if (result.affected === 0) {
      throw new HttpException('Todo not deleted', HttpStatus.NOT_FOUND);
    } else {
      return { success: true}
    }
  }
}
