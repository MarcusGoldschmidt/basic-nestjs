import {BeforeInsert, BeforeUpdate, Column, PrimaryGeneratedColumn} from 'typeorm';

export class AppBaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    createdAt: Date;

    @Column()
    updateAt: Date;

    @BeforeInsert()
    CreatedAt() {
        this.createdAt = this.createdAt && new Date();
        this.updateAt = new Date();
    }

    @BeforeUpdate()
    UpdatedAt() {
        this.updateAt = new Date();
    }
}
