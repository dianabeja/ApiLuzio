import { Comentario } from 'src/comentarios/entities/comentario.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany} from 'typeorm';
@Entity()
export class Cuenta {
    @PrimaryGeneratedColumn ()
    id: number;
    //Llave primaria
    @Column()
    fechaIngreso_cuenta:string;
    //Genera la entidad que se almacenará en la base de datos

    @Column()
    usuario:number;

}
