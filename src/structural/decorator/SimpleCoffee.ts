import { Coffee } from './Coffee';

export class SimpleCoffee implements Coffee {
  getCost(): number {
    return 20;
  }
  getDescription(): string {
    return '☕ Проста кава';
  }
}