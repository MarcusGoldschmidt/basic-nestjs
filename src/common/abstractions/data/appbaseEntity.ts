import {BeforeInsert, BeforeUpdate, Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

export default class AppBaseEntityHost {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    createdAt: Date;

    @Column()
    updateAt: Date;

    @BeforeInsert()
    CreatedAt() {
        this.createdAt = new Date();
        this.updateAt = new Date();
    }

    @BeforeUpdate()
    UpdatedAt() {
        this.updateAt = new Date();
    }
}
