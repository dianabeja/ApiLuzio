import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { UsuarioActImc } from 'src/usuario-act-imc/entities/usuario-act-imc.entity';

@Entity()
export class ActImc {
  @PrimaryGeneratedColumn()
  id_actIMC: number;

  @Column()
  nombre_actIMC: string;

  @Column({ length: 500 })
  descripcion_actIMC: string;

  @Column()
  tipo_actIMC: string;

  @Column()
  nivel_IMC: string;

  @Column()
  imagen_actIMC: string;
}
