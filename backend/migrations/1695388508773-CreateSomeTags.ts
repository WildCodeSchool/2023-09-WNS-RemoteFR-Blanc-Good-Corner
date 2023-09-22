import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateSomeTags1695388508773 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO tag (name) VALUES ('furniture')`);
        await queryRunner.query(`INSERT INTO tag (name) VALUES ('clothing')`);
        await queryRunner.query(`INSERT INTO tag (name) VALUES ('electronics')`);
        await queryRunner.query(`INSERT INTO tag (name) VALUES ('cars')`);
        await queryRunner.query(`INSERT INTO tag (name) VALUES ('books')`);
        await queryRunner.query(`INSERT INTO tag (name) VALUES ('other')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM tag WHERE name = 'furniture'`);
        await queryRunner.query(`DELETE FROM tag WHERE name = 'clothing'`);
        await queryRunner.query(`DELETE FROM tag WHERE name = 'electronics'`);
        await queryRunner.query(`DELETE FROM tag WHERE name = 'cars'`);
        await queryRunner.query(`DELETE FROM tag WHERE name = 'books'`);
        await queryRunner.query(`DELETE FROM tag WHERE name = 'other'`);
    }

}
