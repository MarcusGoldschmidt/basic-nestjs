import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { Permission } from './enuns/permission.enum';
import { InfraBaseEntity } from '../domain/abstractions/base.entity';

@Entity('User')
export class UserEntity extends InfraBaseEntity {

  @Column({ length: 500 , unique: true})
  name: string;

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
}
