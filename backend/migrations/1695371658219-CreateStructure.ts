import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateStructure1695371658219 implements MigrationInterface {
    name = 'CreateStructure1695371658219'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "ad" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar(100) NOT NULL, "description" varchar NOT NULL, "owner" varchar NOT NULL, "price" integer NOT NULL, "picture" varchar NOT NULL, "location" varchar NOT NULL, "createdAt" datetime NOT NULL, "categoryId" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_ad" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar(100) NOT NULL, "description" varchar NOT NULL, "owner" varchar NOT NULL, "price" integer NOT NULL, "picture" varchar NOT NULL, "location" varchar NOT NULL, "createdAt" datetime NOT NULL, "categoryId" integer, CONSTRAINT "FK_c418809c6e081f861cefe495668" FOREIGN KEY ("categoryId") REFERENCES "category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_ad"("id", "title", "description", "owner", "price", "picture", "location", "createdAt", "categoryId") SELECT "id", "title", "description", "owner", "price", "picture", "location", "createdAt", "categoryId" FROM "ad"`);
        await queryRunner.query(`DROP TABLE "ad"`);
        await queryRunner.query(`ALTER TABLE "temporary_ad" RENAME TO "ad"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ad" RENAME TO "temporary_ad"`);
        await queryRunner.query(`CREATE TABLE "ad" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar(100) NOT NULL, "description" varchar NOT NULL, "owner" varchar NOT NULL, "price" integer NOT NULL, "picture" varchar NOT NULL, "location" varchar NOT NULL, "createdAt" datetime NOT NULL, "categoryId" integer)`);
        await queryRunner.query(`INSERT INTO "ad"("id", "title", "description", "owner", "price", "picture", "location", "createdAt", "categoryId") SELECT "id", "title", "description", "owner", "price", "picture", "location", "createdAt", "categoryId" FROM "temporary_ad"`);
        await queryRunner.query(`DROP TABLE "temporary_ad"`);
        await queryRunner.query(`DROP TABLE "ad"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
