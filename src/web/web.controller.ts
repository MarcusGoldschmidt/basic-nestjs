import {Controller, Get, Render, Session} from '@nestjs/common';

@Controller('')
export class WebController {
    @Get()
    @Render('index')
    homePage(@Session() session: any): any {
        session.count = session.count ? session.count++ : 1;
        return {count: session.count};
    }
}
