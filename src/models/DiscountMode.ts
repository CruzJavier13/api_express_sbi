import { BaseEntity, Column, CreateDateColumn, Decimal128, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SaleDetail } from "./SaleDetailModel";

@Entity('tbl_dicount')
export class Discount extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    state: boolean;
    
    @Column('decimal',{ precision: 10, scale: 2 })
    discount: number;
    
    @CreateDateColumn()
    createAt: Date;
        
    @UpdateDateColumn()
        updateAt: Date;
}