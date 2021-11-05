import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('transaction_types')
class TransactionType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  description: string;

  @Column({ length: 255 })
  nature: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default TransactionType;