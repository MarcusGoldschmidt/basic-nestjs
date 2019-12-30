import {Column} from 'typeorm';
import {AppBaseEntity} from './appbaseEntity';
import {IsIP} from 'class-validator';

export class AuditableEntity extends AppBaseEntity {

    @Column()
    @IsIP()
    ipUpdate: string;
}
