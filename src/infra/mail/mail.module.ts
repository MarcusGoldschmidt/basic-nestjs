import {Module} from '@nestjs/common';
import {MailSenderService} from './mail.service';
import {LoggerModule} from '../logger/logger.module';

@Module({
    imports: [LoggerModule],
    providers: [MailSenderService],
    exports: [MailSenderService],
})
export class MailModule {
}
