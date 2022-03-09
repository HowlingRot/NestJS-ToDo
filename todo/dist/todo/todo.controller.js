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
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const uath_jwt_guard_1 = require("../auth/uath-jwt-guard");
const user_decorator_1 = require("../auth/user.decorator");
const create_dto_1 = require("../dto/create-dto");
const todo_entity_1 = require("../entity/todo.entity");
const user_entity_1 = require("../entity/user.entity");
const todo_service_1 = require("./todo.service");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    getAllTodos(user) {
        return this.todoService.getAllTodos(user);
    }
    createTodo(data, user) {
        return this.todoService.createTodo(user, data);
    }
    updateTodoStatus(id, user) {
        return this.todoService.updateTodoStatus(user, id);
    }
    deleteTodo(id, user) {
        return this.todoService.deleteTodo(user, id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Todo list received successfully',
        type: todo_entity_1.TodoEntity
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'No todo found'
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'User unauthorized'
    }),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "getAllTodos", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: [create_dto_1.CreateTodoDto] }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Todo created successfully',
        type: todo_entity_1.TodoEntity
    }),
    (0, swagger_1.ApiResponse)({
        status: 501,
        description: 'Todo not created'
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'User unauthorized'
    }),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateTodoDto,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "createTodo", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Todo status updated successfully'
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Todo status not update'
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'User unauthorized'
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "updateTodoStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Todo deleted successfully',
        type: Boolean
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Todo not deleted',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'User unauthorized'
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "deleteTodo", null);
TodoController = __decorate([
    (0, common_1.Controller)('todo'),
    (0, swagger_1.ApiTags)('todo'),
    (0, common_1.UseGuards)(uath_jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map