import {MigrationInterface, QueryRunner} from "typeorm";

export class AuthMigrations1578367252798 implements MigrationInterface {
    name = 'AuthMigrations1578367252798'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `User` (`id` varchar(36) NOT NULL, `createdAt` datetime NOT NULL, `updateAt` datetime NOT NULL, `name` varchar(200) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `permission` int NOT NULL, `verified` tinyint NOT NULL DEFAULT 0, `rememberToken` varchar(255) NOT NULL, `rememberIp` varchar(36) NOT NULL, INDEX `IDX_USER_NAME` (`name`), UNIQUE INDEX `IDX_USER_EMAIL_UNIQUE` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_USER_EMAIL_UNIQUE` ON `User`", undefined);
        await queryRunner.query("DROP INDEX `IDX_USER_NAME` ON `User`", undefined);
        await queryRunner.query("DROP TABLE `User`", undefined);
    }

}
