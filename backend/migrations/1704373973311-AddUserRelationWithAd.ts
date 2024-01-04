import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserRelationWithAd1704373973311 implements MigrationInterface {
    name = 'AddUserRelationWithAd1704373973311'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ad" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "ad" ADD CONSTRAINT "FK_9ef75c41971255cd79702c9048a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ad" DROP CONSTRAINT "FK_9ef75c41971255cd79702c9048a"`);
        await queryRunner.query(`ALTER TABLE "ad" DROP COLUMN "userId"`);
    }

}
