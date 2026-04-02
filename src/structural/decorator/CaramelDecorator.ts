import { Coffee } from './Coffee';

export class CaramelDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  getCost(): number {
    return this.coffee.getCost() + 20;
  }
  getDescription(): string {
    return this.coffee.getDescription() + ' + 🍯 карамель';
  }
}