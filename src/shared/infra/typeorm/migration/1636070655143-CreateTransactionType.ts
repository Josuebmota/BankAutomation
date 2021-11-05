import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateTransactionType1636070655143 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
      await queryRunner.createTable(
        new Table({
          name: 'transaction_types',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()'
            },
            {
              name: 'description',
              type: 'varchar',
            },
            {
              name: 'nature',
              type: 'varchar',
            },
            {
              name: 'signal',
              type: 'varchar',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('transaction_types');
    }

}
