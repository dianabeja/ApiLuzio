import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { ActImc } from "src/act_imc/entities/act_imc.entity";

@Entity()
export class UsuarioActImc {

    @PrimaryGeneratedColumn()
    id_usuarioActIMC:number;
    
    @Column()
    estado: boolean;

    @Column()
    usuario:number;

    @Column()
    actIMC:number;

}
