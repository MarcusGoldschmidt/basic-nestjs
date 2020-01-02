import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AuthModule} from './auth/auth.module';
import {HandlebarsAdapter, MailerModule} from '@nest-modules/mailer';
import {join} from 'path';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        AuthModule,
        MailerModule.forRoot({
            transport: 'smtps://user@domain.com:pass@smtp.domain.com',
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
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
