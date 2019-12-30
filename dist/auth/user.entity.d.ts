import { Permission } from './enuns/permission.enum';
import { AppBaseEntity } from '../abstractions/appbaseEntity';
export declare class UserEntity extends AppBaseEntity {
    name: string;
    email: string;
    password: string;
    permission: Permission;
    verified: boolean;
}
