import { Coffee } from './Coffee';

export class MilkDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  getCost(): number {
    return this.coffee.getCost() + 10;
  }
  getDescription(): string {
    return this.coffee.getDescription() + ' + 🥛 молоко';
  }
}