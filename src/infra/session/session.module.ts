import {Module} from '@nestjs/common';
import {LoggerModule} from '../logger/logger.module';
import {SessionService} from './session.service';

@Module({
    imports: [LoggerModule],
    providers: [SessionService],
    exports: [SessionService],
})
export class SessionModule {
}
