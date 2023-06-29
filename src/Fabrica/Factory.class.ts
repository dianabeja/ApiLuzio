import { Repository, Connection } from 'typeorm';
import { FactoryInterface } from './Factory.interface';

//Utilizando el principio SOLID RESPONSABILIDAD ÚNICA, ABIERTO CERRADO Y SEGREGACIÓN DE INTERFACES al hacer uso únicamente de nuestra interfaz previamente definida 
//Responsabilidad única porque solamente crea objetos, abierto cerrado porque está disponible para que otras clases la usen sin modificar el 
//codigo y segregación de interfaz por hacer uso de una interfaz definida previamente
export abstract class BaseFactory<T> implements FactoryInterface<T> {

  protected repository: Repository<T>;

  constructor(protected connection: Connection) {}

  //La clase recibe un objeto a través de su método, para crearla en la fabrica 
  async create(objetoCrear: any) {
    const entity = this.repository.create(objetoCrear);
    return this.repository.save(entity);
  }
}
