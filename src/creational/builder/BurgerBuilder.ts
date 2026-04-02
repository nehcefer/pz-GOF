import { Burger } from './Burger';

export class BurgerBuilder {
  private burger: Burger = new Burger();

  setSize(size: string): this {
    this.burger.size = size;
    return this;
  }
  addCheese(): this {
    this.burger.cheese = true;
    return this;
  }
  addLettuce(): this {
    this.burger.lettuce = true;
    return this;
  }
  addTomato(): this {
    this.burger.tomato = true;
    return this;
  }
  addBacon(): this {
    this.burger.bacon = true;
    return this;
  }
  build(): Burger {
    return this.burger;
  }
}