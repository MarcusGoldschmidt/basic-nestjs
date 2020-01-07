import {Controller, Get, Render, UseGuards} from '@nestjs/common';
import AuthenticatedGuard from '../common/guards/authenticated.guard';

@Controller('admin')
@UseGuards(AuthenticatedGuard)
export class AdminController {

    @Get()
    @Render('admin/index')
    index() {
        return;
    }
}
