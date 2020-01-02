import {Injectable, Logger, Scope} from '@nestjs/common';

@Injectable({scope: Scope.TRANSIENT})
export class AppLoggerService extends Logger {
    error(message: string, trace: string) {
        super.error(message, trace);
    }

    log(message: any, context?: string): void {
        super.log(message, context);
    }
}
