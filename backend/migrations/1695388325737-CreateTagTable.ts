import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTagTable1695388325737 implements MigrationInterface {
    name = 'CreateTagTable1695388325737'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tag" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(50) NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tag"`);
    }

}
