//Se define la interfaz que se ocupará para el patrón Factory
export interface FactoryInterface<T> {
  create(config: any);
}

