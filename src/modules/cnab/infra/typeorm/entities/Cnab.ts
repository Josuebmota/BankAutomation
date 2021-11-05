import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('cnab')
class TransactionType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name:'type_id'})
  typeId: string;

  @CreateDateColumn()
  date: Date;

  @Column()
  value: number;

  @Column()
  cpf: string;

  @Column()
  card: string;

  @Column()
  hour: string;

  @Column({name: 'shop_name'})
  shopOwner: string;
  
  @Column({name: 'shop_name'})
  shopName: string;  

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default TransactionType;