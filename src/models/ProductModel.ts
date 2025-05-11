import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne,
    CreateDateColumn, 
    UpdateDateColumn,
    BaseEntity,
    JoinColumn
} from "typeorm";
import { CategoryProduct } from "./CategoryProductModel";
import { Supplier } from "./SupplierModel";

@Entity('tbl_product')
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: true })
    state: boolean; // Tipo primitivo

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column()
    code: string;

    @Column({ nullable: true }) // Permite valores nulos
    image: string;

    @Column('text', { nullable: true })
    description: string;

    @Column()
    presentation: string;

    @Column({
        type: 'decimal',
        precision: 20,
        scale: 4,
        transformer: {
            to(value: number | null): string | null {
                return value?.toString() ?? null;
            },
            from(value: string | null): number | null {
                return value ? parseFloat(value) : null;
            }
        },
        nullable: false // Obligatorio
    })
    price: number;

    @ManyToOne(() => Supplier, (supplier) => supplier.product)
    //@JoinColumn({ name: 'supplier_id' })
    supplier: Supplier;

    @ManyToOne(() => CategoryProduct, category => category.product)
    //@JoinColumn({ name: 'category_id' })
    category: CategoryProduct;

    @CreateDateColumn({ name: 'create_at' })
    createAt: Date;
    
    @UpdateDateColumn({ name: 'update_at' })
    updateAt: Date;
}