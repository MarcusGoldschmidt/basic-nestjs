import {Column, Index, BeforeInsert, Entity} from 'typeorm';
import {Permission} from '../common/enuns/permission.enum';
import AppBaseEntity from '../common/abstractions/data/appbaseEntity';

@Entity('User')
export class UserEntity extends AppBaseEntity {

    @Index('IDX_USER_NAME', {
        unique: false,

    })
    @Column({length: 200})
    name: string;

    @Index('IDX_USER_EMAIL_UNIQUE', {
        unique: true,
    })
    @Column()
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

    @Column({
        length: 36,
    })
    rememberIp: string;

    @BeforeInsert()
    tokenAndIp() {
        // TODO: implementar essas
        this.rememberToken = '';
        this.rememberIp = '127.0.0.1';
    }
}
