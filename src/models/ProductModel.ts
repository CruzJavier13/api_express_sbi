import { OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn, Column, BaseEntity, Entity, PrimaryGeneratedColumn, Decimal128 } from "typeorm";
import { CategoryProduct } from "./CategoryProductModel";
import { Supplier } from "./SupplierModel";

@Entity('tbl_product')
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    state: Boolean;

    @Column()
    name:String;

    @Column()
    brand:String;

    @Column()
    code:String;

    @Column()
    image:String;

    @Column('text')
    description: String;

    @Column()
    presentation:String;

    //Decimal to represent money value
    @Column({
        type: 'decimal',
        precision: 20,  // Máximo de dígitos totales (enteros + decimales)
        scale: 4,       // 4 dígitos decimales (ej: $123.4567)
        transformer: {
            to(value: number): string {
                return value.toString();
            },
            from(value: string): number {
                return parseFloat(value);
            }
        }
    })
    price: Decimal128;

    @OneToMany(() => Supplier, (supplier)=> supplier.product)
    supplier:Supplier;

    @ManyToOne(()=>CategoryProduct, (category)=> category.product)
    category: CategoryProduct;

    @CreateDateColumn()
    createAt: Date;
    
    @UpdateDateColumn()
    updateAt: Date;

}