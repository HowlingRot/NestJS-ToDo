import { Body, Controller, Get, Post, ValidationPipe, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/uath-jwt-guard';
import { User } from 'src/auth/user.decorator';
import { CreateTodoDto } from 'src/dto/create-dto';
import { TodoEntity } from 'src/entity/todo.entity';
import { UserEntity } from 'src/entity/user.entity';
import { TodoService } from './todo.service';


@Controller('todo')
@ApiTags('todo')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class TodoController {
  constructor(private todoService:TodoService){}

  @Get()
  @ApiResponse({
    status:200,
    description:'Todo list received successfully',
    type:TodoEntity
  })
  @ApiResponse({
    status:404,
    description:'No todo found'
  })
  @ApiUnauthorizedResponse({
    description:'User unauthorized'
  })
  getAllTodos(@User() user: UserEntity){
    return this.todoService.getAllTodos(user);
  }
  
  @Post()
  @ApiBody({type: [CreateTodoDto]})
  @ApiResponse({
    status:200,
    description:'Todo created successfully',
    type:TodoEntity
  })
  @ApiResponse({
    status:501,
    description:'Todo not created'
  })
  @ApiUnauthorizedResponse({
    description:'User unauthorized'
  })
  createTodo(@Body(ValidationPipe) data: CreateTodoDto,
  @User() user: UserEntity){
    return this.todoService.createTodo(user, data);
  }

  @Patch(':id')
  @ApiResponse({
    status:200,
    description:'Todo status updated successfully'
  })
  @ApiResponse({
    status:500,
    description:'Todo status not update'
  })
  @ApiUnauthorizedResponse({
    description:'User unauthorized'
  })
  updateTodoStatus(@Param('id') id: number,
  @User() user: UserEntity){
    return this.todoService.updateTodoStatus(user, id);
  }

  @Delete(':id')
  @ApiResponse({
    status:200,
    description:'Todo deleted successfully',
    type:Boolean
  })
  @ApiResponse({
    status:404,
    description:'Todo not deleted',
  })
  @ApiUnauthorizedResponse({
    description:'User unauthorized'
  })
  deleteTodo(@Param('id') id: number,
  @User() user: UserEntity){
    return this.todoService.deleteTodo(user, id);
  }
}