import { OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Column, BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./EmployeeModel";

@Entity('tbl_user')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    state: Boolean;

    @Column()
    username: String;

    @Column('text')
    password: String;

    @OneToOne(()=> Employee, (employee) => employee.user)
    @JoinColumn()
    employee: Employee;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}