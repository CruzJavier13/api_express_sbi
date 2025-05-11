import { CreateDateColumn, OneToOne, UpdateDateColumn, Column, BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./UserModel";

@Entity('tbl_employee')
export class Employee extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    state: boolean;

    @Column()
    firstname: string;

    @Column()
    lastname: String;

    @Column({length:1})
    gender:String;

    @Column('text')
    address: String;

    @Column()
    cellphone: String;

    @Column('text')
    email:String;

    @Column('text')
    image:String;

    @Column()
    sure: String

    @OneToOne(()=> User, (user) => user.employee)
    user: User;

    @CreateDateColumn()
    createAt: Date;
    
    @UpdateDateColumn()
    updateAt: Date;
}