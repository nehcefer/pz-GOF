import { Vehicle } from './Vehicle';

export class Motorcycle implements Vehicle {
  describe(): string {
    return '🏍️ Мотоцикл: 2 колеса, двигун 600cc, макс. 250 км/год';
  }
}