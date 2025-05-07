import { Column, BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_client')
export class Client extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    state: Boolean;
}