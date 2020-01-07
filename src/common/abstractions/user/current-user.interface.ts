import {Permission} from '../../enuns/permission.enum';

export interface ICurrentUser {
    id: string;
    name: string;
    email: string;
    rememberToken?: string;
    rememberIp: string;
    permission: Permission;
}
