import { Entity, Column,PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { UsuarioActEstres } from "src/usuario-act-estres/entities/usuario-act-estres.entity";

@Entity()
export class ActNivelEstres {
    @PrimaryGeneratedColumn()
    id_actNivelEstres:number;

    @Column({ length: 500 })
    nombre_actNivelEstres:string;

    @Column()
    descripcion_actNivelEstres:string;

    @Column()
    nivel_estres:string;

    @Column()
    imagen_actNivelEstres:string;

}
