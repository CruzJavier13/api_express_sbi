import { Column, BaseEntity, Entity, PrimaryGeneratedColumn, ManyToMany, JoinColumn, JoinTable, OneToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./ProductModel";
import { FormPay } from "./FormPayModel";
import { Discount } from "./DiscountMode";
import { Employee } from "./EmployeeModel";

@Entity('tbl-post')
export class Post extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    state: boolean;

    @OneToOne(()=>Employee, (employee)=>employee.id)
    @JoinTable()
    employee: Employee;

    @Column()
    name: String;

    @Column('text')
    description: String;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}