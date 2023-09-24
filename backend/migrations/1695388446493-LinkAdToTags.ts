import { MigrationInterface, QueryRunner } from "typeorm";

export class LinkAdToTags1695388446493 implements MigrationInterface {
    name = 'LinkAdToTags1695388446493'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ad_tags_tag" ("adId" integer NOT NULL, "tagId" integer NOT NULL, PRIMARY KEY ("adId", "tagId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_88c37707a52c0b2a820a8d4ebc" ON "ad_tags_tag" ("adId") `);
        await queryRunner.query(`CREATE INDEX "IDX_cd22b65edffb7dd9c8f1a79052" ON "ad_tags_tag" ("tagId") `);
        await queryRunner.query(`DROP INDEX "IDX_88c37707a52c0b2a820a8d4ebc"`);
        await queryRunner.query(`DROP INDEX "IDX_cd22b65edffb7dd9c8f1a79052"`);
        await queryRunner.query(`CREATE TABLE "temporary_ad_tags_tag" ("adId" integer NOT NULL, "tagId" integer NOT NULL, CONSTRAINT "FK_88c37707a52c0b2a820a8d4ebc4" FOREIGN KEY ("adId") REFERENCES "ad" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_cd22b65edffb7dd9c8f1a790527" FOREIGN KEY ("tagId") REFERENCES "tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY ("adId", "tagId"))`);
        await queryRunner.query(`INSERT INTO "temporary_ad_tags_tag"("adId", "tagId") SELECT "adId", "tagId" FROM "ad_tags_tag"`);
        await queryRunner.query(`DROP TABLE "ad_tags_tag"`);
        await queryRunner.query(`ALTER TABLE "temporary_ad_tags_tag" RENAME TO "ad_tags_tag"`);
        await queryRunner.query(`CREATE INDEX "IDX_88c37707a52c0b2a820a8d4ebc" ON "ad_tags_tag" ("adId") `);
        await queryRunner.query(`CREATE INDEX "IDX_cd22b65edffb7dd9c8f1a79052" ON "ad_tags_tag" ("tagId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_cd22b65edffb7dd9c8f1a79052"`);
        await queryRunner.query(`DROP INDEX "IDX_88c37707a52c0b2a820a8d4ebc"`);
        await queryRunner.query(`ALTER TABLE "ad_tags_tag" RENAME TO "temporary_ad_tags_tag"`);
        await queryRunner.query(`CREATE TABLE "ad_tags_tag" ("adId" integer NOT NULL, "tagId" integer NOT NULL, PRIMARY KEY ("adId", "tagId"))`);
        await queryRunner.query(`INSERT INTO "ad_tags_tag"("adId", "tagId") SELECT "adId", "tagId" FROM "temporary_ad_tags_tag"`);
        await queryRunner.query(`DROP TABLE "temporary_ad_tags_tag"`);
        await queryRunner.query(`CREATE INDEX "IDX_cd22b65edffb7dd9c8f1a79052" ON "ad_tags_tag" ("tagId") `);
        await queryRunner.query(`CREATE INDEX "IDX_88c37707a52c0b2a820a8d4ebc" ON "ad_tags_tag" ("adId") `);
        await queryRunner.query(`DROP INDEX "IDX_cd22b65edffb7dd9c8f1a79052"`);
        await queryRunner.query(`DROP INDEX "IDX_88c37707a52c0b2a820a8d4ebc"`);
        await queryRunner.query(`DROP TABLE "ad_tags_tag"`);
    }

}
