import { Entity, Column, PrimaryGeneratedColumn,  } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ unique: true })
  correo_usuario: string;

  @Column({ nullable: true })
  nombre_usuario: string;

  @Column({ nullable: true })
  apellidos_usuario: string;

  @Column({ nullable: true })
  sexo_usuario: string;

  @Column({ nullable: true })
  edad_usuario: number;

  @Column({ nullable: true })
  IMC_usuario: string;

  @Column({ nullable: true })
  nivelEstres_usuario: string;

  @Column()
  contraseña_usuario: string;
}
