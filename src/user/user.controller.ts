import {Controller, Get, UseGuards} from '@nestjs/common';
import AuthenticatedGuard from '../common/guards/authenticated.guard';
import UserService from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {
    }

    @Get()
    @UseGuards(AuthenticatedGuard)
    async getAll() {
        return await this.userService.allUsers();
    }
}
