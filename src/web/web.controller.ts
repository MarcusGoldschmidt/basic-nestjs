import {Controller, Get, Render} from '@nestjs/common';

@Controller('')
export class WebController {
    @Get()
    @Render('web/index')
    homePage(): void {
        return;
    }
}
