import {Injectable, Logger, Scope} from '@nestjs/common';
import {ISendMailOptions, MailerService} from '@nest-modules/mailer';

@Injectable()
export class MailSenderService extends MailerService {

    sendMail(sendMailOptions: ISendMailOptions): Promise<any> {
        return super.sendMail(sendMailOptions);
    }
}
