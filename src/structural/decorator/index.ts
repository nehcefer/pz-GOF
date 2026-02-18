// Базова кава
interface Coffee {
  getCost(): number;
  getDescription(): string;
}

class SimpleCoffee implements Coffee {
  getCost(): number {
    return 20;
  }

  getDescription(): string {
    return 'Проста кава';
  }
}

// Декоратор з молоком
class MilkDecorator implements Coffee {
  private coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getCost(): number {
    return this.coffee.getCost() + 10;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ' + молоко';
  }
}

// Декоратор з цукром
class SugarDecorator implements Coffee {
  private coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getCost(): number {
    return this.coffee.getCost() + 5;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ' + цукор';
  }
}

// Демо
export function demoDecorator() {
  console.log('\n=== Decorator ===');
  let coffee: Coffee = new SimpleCoffee();
  console.log(`${coffee.getDescription()} = ${coffee.getCost()} грн`);

  coffee = new MilkDecorator(coffee);
  console.log(`${coffee.getDescription()} = ${coffee.getCost()} грн`);

  coffee = new SugarDecorator(coffee);
  console.log(`${coffee.getDescription()} = ${coffee.getCost()} грн`);
}
