import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column('varchar', { length: 30 })
    name!: string;
    
    @Column()
    price!: number;
}