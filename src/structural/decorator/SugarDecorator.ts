import { Coffee } from './Coffee';

export class SugarDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  getCost(): number {
    return this.coffee.getCost() + 5;
  }
  getDescription(): string {
    return this.coffee.getDescription() + ' + 🍬 цукор';
  }
}