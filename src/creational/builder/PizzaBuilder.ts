import { Pizza } from './Pizza';

export class PizzaBuilder {
  private pizza: Pizza = new Pizza();

  setSize(size: string): this {
    this.pizza.size = size;
    return this;
  }
  addCheese(): this {
    this.pizza.cheese = true;
    return this;
  }
  addPepperoni(): this {
    this.pizza.pepperoni = true;
    return this;
  }
  addMushrooms(): this {
    this.pizza.mushrooms = true;
    return this;
  }
  addBacon(): this {
    this.pizza.bacon = true;
    return this;
  }
  build(): Pizza {
    return this.pizza;
  }
}