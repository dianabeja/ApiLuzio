import { Entity, Column, PrimaryGeneratedColumn,  } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ length: 28, unique: true })
  correo_usuario: string;

  @Column({ length: 30, nullable: true})
  nombre_usuario: string ;

  @Column({ length: 30, nullable: true })
  apellidos_usuario: string;

  @Column({ length: 1,nullable: true })
  sexo_usuario: string;

  @Column({ nullable: true })
  edad_usuario: number;

  @Column({length: 20})
  IMC_usuario: string;

  @Column({ length: 30, nullable: true })
  nivelEstres_usuario: string;

  @Column({ length: 8,})
  contraseña_usuario: string;

  @Column()
  estatura: number;

  @Column()
  peso: number;
}
