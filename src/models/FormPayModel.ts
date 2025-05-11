import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('tbl_form_pay')
export class FormPay extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    state: boolean;

    @Column()
    form: String;

    @CreateDateColumn()
    createAt: Date;
    
    @UpdateDateColumn()
    updateAt: Date;
}