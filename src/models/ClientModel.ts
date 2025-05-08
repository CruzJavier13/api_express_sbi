import { Column, BaseEntity, Entity, PrimaryGeneratedColumn, OneToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('tbl_client')
export class Client extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    state: Boolean;

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
    
    @CreateDateColumn()
    createAt: Date;
        
    @UpdateDateColumn()
        updateAt: Date;
}