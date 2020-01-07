import {Module} from '@nestjs/common';
import {WebController} from './web.controller';

@Module({
    imports: [],
    controllers: [WebController],
    providers: [],
    exports: [],
})
export class WebModule {
}
