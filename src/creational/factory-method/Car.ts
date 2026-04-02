import { Vehicle } from './Vehicle';

export class Car implements Vehicle {
  describe(): string {
    return '🚗 Автомобіль: 4 колеса, двигун 2.0L, макс. 200 км/год';
  }
}