import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn,  } from "typeorm";
import { Cuenta } from "src/cuenta/entities/cuenta.entity";

@Entity()
export class Comentario {
    @PrimaryGeneratedColumn()
    id_comentario:number;

    @Column()
    texto_comentario:string;

    @Column()
    tipoModulo:string;

    @Column()
    cuenta:number;
}
