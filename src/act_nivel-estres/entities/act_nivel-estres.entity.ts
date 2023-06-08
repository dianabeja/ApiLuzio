import { Entity, Column,PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { UsuarioActEstres } from "src/usuario-act-estres/entities/usuario-act-estres.entity";

@Entity()
export class ActNivelEstres {
    @PrimaryGeneratedColumn()
    id_actNivelEstres:number;

    @Column({ length: 50 })
    nombre_actNivelEstres:string;

    @Column({ length: 500 })
    descripcion_actNivelEstres:string;

    @Column({ length: 30 })
    nivel_estres:string;

    @Column()
    imagen_actNivelEstres:string;

}
