import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from "typeorm";
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { ActNivelEstres } from "src/act_nivel-estres/entities/act_nivel-estres.entity"; 

@Entity()
export class UsuarioActEstres {
    
    @PrimaryGeneratedColumn()
    id_usuarioActEstres:number;
    
    @Column()
    estado_usuarioActEstres: Boolean;

    @Column()
    usuario:string;

    @Column()
    actEstres:number;
}
