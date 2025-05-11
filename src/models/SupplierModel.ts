import { BaseEntity, Collection, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Product } from "./ProductModel";

@Entity('tbl_supplier')
export class Supplier extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    state: boolean;

    @Column()
    name: String;

    @Column()
    company_name: String;

    @Column('text')
    address: String;

    @Column('text')
    email:String;

    @Column()
    cellphone: String;

    @OneToMany(()=> Product, (product) => product.supplier)
    product: Product[];

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}