import { MigrationInterface, QueryRunner } from "typeorm";

export class createSchedule1675535774464 implements MigrationInterface {
    name = 'createSchedule1675535774464'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "email" character varying(60) NOT NULL, "password" character varying(120) NOT NULL, "isAdm" boolean NOT NULL DEFAULT false, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schedules_user_property" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "cellphone" character varying(11) NOT NULL, "useridId" uuid, CONSTRAINT "PK_91a17926e63d5330aea0acf0c85" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedules_user_property" ADD CONSTRAINT "FK_52ec1d130a8f3a93b70431ba059" FOREIGN KEY ("useridId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_user_property" DROP CONSTRAINT "FK_52ec1d130a8f3a93b70431ba059"`);
        await queryRunner.query(`DROP TABLE "schedules_user_property"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
