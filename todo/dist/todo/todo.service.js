"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const todo_entity_1 = require("../entity/todo.entity");
const typeorm_2 = require("typeorm");
let TodoService = class TodoService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAllTodos(user) {
        const query = this.repo.createQueryBuilder('todo');
        query.where({ userId: user.id });
        try {
            return await query.getMany();
        }
        catch (err) {
            throw new common_1.HttpException('No todo found', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async createTodo(user, createTodoDto) {
        const todo = new todo_entity_1.TodoEntity();
        const { title, description } = createTodoDto;
        todo.title = title;
        todo.description = description;
        todo.status = false;
        todo.userId = user.id;
        this.repo.create(todo);
        try {
            return await this.repo.save(todo);
        }
        catch (err) {
            throw new common_1.HttpException('Todo not created', common_1.HttpStatus.NOT_IMPLEMENTED);
        }
    }
    async updateTodoStatus(user, id) {
        try {
            const todo = await this.repo.findOne(id);
            const status = !todo.status;
            return await this.repo.update({ id, userId: user.id }, { status });
        }
        catch (err) {
            throw new common_1.HttpException('Todo status not update', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteTodo(user, id) {
        const result = await this.repo.delete({ id, userId: user.id });
        if (result.affected === 0) {
            throw new common_1.HttpException('Todo not deleted', common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return { success: true };
        }
    }
};
TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(todo_entity_1.TodoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map