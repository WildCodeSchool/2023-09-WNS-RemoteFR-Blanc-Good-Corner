import { MigrationInterface, QueryRunner } from "typeorm";

export class InitPGDatabase1701242770484 implements MigrationInterface {
    name = 'InitPGDatabase1701242770484'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tag" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ad" ("id" SERIAL NOT NULL, "title" character varying(100) NOT NULL, "description" character varying NOT NULL, "owner" character varying NOT NULL, "price" integer NOT NULL, "picture" character varying NOT NULL, "location" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, "categoryId" integer, CONSTRAINT "PK_0193d5ef09746e88e9ea92c634d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ad_tags_tag" ("adId" integer NOT NULL, "tagId" integer NOT NULL, CONSTRAINT "PK_95b9f8a69d8090f2ec1abeb646c" PRIMARY KEY ("adId", "tagId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_88c37707a52c0b2a820a8d4ebc" ON "ad_tags_tag" ("adId") `);
        await queryRunner.query(`CREATE INDEX "IDX_cd22b65edffb7dd9c8f1a79052" ON "ad_tags_tag" ("tagId") `);
        await queryRunner.query(`ALTER TABLE "ad" ADD CONSTRAINT "FK_c418809c6e081f861cefe495668" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ad_tags_tag" ADD CONSTRAINT "FK_88c37707a52c0b2a820a8d4ebc4" FOREIGN KEY ("adId") REFERENCES "ad"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "ad_tags_tag" ADD CONSTRAINT "FK_cd22b65edffb7dd9c8f1a790527" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ad_tags_tag" DROP CONSTRAINT "FK_cd22b65edffb7dd9c8f1a790527"`);
        await queryRunner.query(`ALTER TABLE "ad_tags_tag" DROP CONSTRAINT "FK_88c37707a52c0b2a820a8d4ebc4"`);
        await queryRunner.query(`ALTER TABLE "ad" DROP CONSTRAINT "FK_c418809c6e081f861cefe495668"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cd22b65edffb7dd9c8f1a79052"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_88c37707a52c0b2a820a8d4ebc"`);
        await queryRunner.query(`DROP TABLE "ad_tags_tag"`);
        await queryRunner.query(`DROP TABLE "ad"`);
        await queryRunner.query(`DROP TABLE "tag"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
