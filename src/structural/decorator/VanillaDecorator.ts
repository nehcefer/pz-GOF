import { Coffee } from './Coffee';

export class VanillaDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  getCost(): number {
    return this.coffee.getCost() + 15;
  }
  getDescription(): string {
    return this.coffee.getDescription() + ' + 🌿 ваніль';
  }
}