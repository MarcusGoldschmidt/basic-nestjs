import {Entity, Column, Index} from 'typeorm';
import {Permission} from './enuns/permission.enum';
import {AppBaseEntity} from '../abstractions/appbaseEntity';

@Entity('User')
export class UserEntity extends AppBaseEntity {

    @Column({length: 500, unique: true})
    name: string;

    @Index()
    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column('int')
    permission: Permission;

    @Column({
        default: false,
    })
    verified: boolean;

    @Column()
    rememberToken: string;
}
