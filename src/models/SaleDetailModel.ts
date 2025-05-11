import "reflect-metadata";
import { Column, BaseEntity, Entity, PrimaryGeneratedColumn, ManyToMany, JoinColumn, JoinTable, OneToOne, OneToMany, CreateDateColumn, UpdateDateColumn, Decimal128 } from "typeorm";
import { Product } from "./ProductModel";
import { FormPay } from "./FormPayModel";
import { Discount } from "./DiscountMode";
import { Client } from "./ClientModel";
import { Sale } from "./SaleModel";

@Entity('tbl_sale_detail')
export class SaleDetail extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    state: boolean;

    @ManyToMany(()=>Product)
    @JoinTable()
    product: Product[];

    @Column()
    amount: number;

    @Column('text')
    description: String;

    @OneToMany(()=> FormPay, (formpay)=>formpay.id)
    formpay:FormPay[];

    @OneToOne(()=>Discount, (discount)=>discount.id)
    @JoinTable()
    discount: Discount;

    @Column('decimal', { precision: 12, scale: 2 })
    price: number;

    @OneToOne(()=>Client, (client)=>client.id)
    @JoinTable()
    client:Client;

    @ManyToMany(()=>Sale, (sale)=>sale.detail)
    sale:Sale[];

    @CreateDateColumn()
    createAt: Date;
    
    @UpdateDateColumn()
    updateAt: Date;

}