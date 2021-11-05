import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateTransactionType1636070655143 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
      await queryRunner.createTable(
        new Table({
          name: 'cnabs',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()'
            },
            {
              name: 'type_id',
              type: 'uuid',
            },
            {
              name: 'date',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'value',
              type: 'varchar',
            },
            {
              name: 'cpf',
              type: 'varchar',
            },
            {
              name: 'card',
              type: 'varchar',
            },
            {
              name: 'hour',
              type: 'varchar',
            },
            {
              name: 'shop_owner',
              type: 'varchar',
            },
            {
              name: 'shop_name',
              type: 'varchar',
            },
          ],
          foreignKeys: [
            {
              name: 'TypeTransaction',
              referencedTableName: 'transaction_types',
              referencedColumnNames: ['id'],
              columnNames: ['type_id'],
              onUpdate: 'CASCADE',
            },
          ],
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('transaction_type');
    }

}
