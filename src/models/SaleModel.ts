import { Column, BaseEntity, Entity, PrimaryGeneratedColumn, ManyToMany, Decimal128, OneToMany } from "typeorm";
import { SaleDetail } from "./SaleDetailModel";

@Entity('tbl_sale')
export class Sale extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    state: boolean;

    @OneToMany(()=> SaleDetail, (detail)=> detail.sale)
    detail: SaleDetail[];

    @Column()
    amount: number;

    @Column('decimal', { precision: 12, scale: 2 })
    subtotal: number;

    @Column('decimal', { precision: 12, scale: 2 })
    total: number;
}