import { Repository, Connection } from 'typeorm';
import { FactoryInterface } from './Factory.interface';

export abstract class BaseFactory<T> implements FactoryInterface<T> {
  protected repository: Repository<T>;

  constructor(protected connection: Connection) {}

  async create(config: any) {
    const entity = this.repository.create(config);
    return this.repository.save(entity);
  }
}
