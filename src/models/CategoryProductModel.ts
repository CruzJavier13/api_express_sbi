import { CreateDateColumn, UpdateDateColumn, OneToMany, Column, BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./ProductModel";

@Entity('tbl_category_product')
export class CategoryProduct extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    state: Boolean;

    @Column()
    name: String;

    @OneToMany(()=> Product, (product)=>product.category)
    product: Product[];

    @CreateDateColumn()
    createAt: Date;
        
    @UpdateDateColumn()
    updateAt: Date;
}