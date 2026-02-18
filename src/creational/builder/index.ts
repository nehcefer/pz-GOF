class Pizza {
  size: string = '';
  cheese: boolean = false;
  pepperoni: boolean = false;
  mushrooms: boolean = false;

  show(): string {
    return `🍕 Піца: ${this.size}, сир: ${this.cheese}, пепероні: ${this.pepperoni}, гриби: ${this.mushrooms}`;
  }
}

class PizzaBuilder {
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

  build(): Pizza {
    return this.pizza;
  }
}

// Демо
export function demoBuilder() {
  console.log('\n=== Builder ===');
  const pizza = new PizzaBuilder()
    .setSize('велика')
    .addCheese()
    .addPepperoni()
    .build();
  console.log(pizza.show());
}
