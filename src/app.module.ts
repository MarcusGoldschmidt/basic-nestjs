import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AuthModule} from './auth/auth.module';
import {HandlebarsAdapter, MailerModule} from '@nest-modules/mailer';
import {join} from 'path';
import config from './config';
import {UserModule} from './user/user.module';
import {LoggerModule} from './infra/logger/logger.module';
import AuthenticatedGuard from './common/guards/authenticated.guard';
import {WebModule} from './web/web.module';
import {AdminModule} from './admin/admin.module';
import {LoginGuard} from './common/guards/login.guard';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        MailerModule.forRoot({
            // 'smtps://user@domain.com:pass@smtp.domain.com'
            transport: `smtps://${config.MAIL.DOMAIN}:${config.MAIL.PASSWORD}@smtp.${config.MAIL.DOMAIN}`,
            defaults: {
                from: '"nest-modules" <modules@nestjs.com>',
            },
            template: {
                dir: join(__dirname, '..', '/views', 'mail'),
                // TODO: add jsx or tsx adapter
                adapter: new HandlebarsAdapter(), // or new PugAdapter()
                options: {
                    strict: true,
                },
            },
        }),
        AuthModule,
        UserModule,
        LoggerModule,
        MailerModule,
        AdminModule,
        WebModule,
    ],
    controllers: [],
    providers: [AuthenticatedGuard, LoginGuard],
})
export class AppModule {
}
