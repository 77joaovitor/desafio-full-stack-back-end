import { MigrationInterface, QueryRunner } from "typeorm";

export class createSchedule1675539144345 implements MigrationInterface {
    name = 'createSchedule1675539144345'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_user_property" ALTER COLUMN "email" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_user_property" ALTER COLUMN "email" SET NOT NULL`);
    }

}
