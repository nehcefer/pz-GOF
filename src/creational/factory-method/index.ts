// Продукт
interface Coffee {
  prepare(): string;
}

class Espresso implements Coffee {
  prepare(): string {
    return '☕ Еспресо готовий!';
  }
}

class Latte implements Coffee {
  prepare(): string {
    return '☕ Лате з молоком готовий!';
  }
}

// Фабрика
class CoffeeFactory {
  static makeCoffee(type: string): Coffee {
    if (type === 'espresso') {
      return new Espresso();
    } else {
      return new Latte();
    }
  }
}

// Демо
export function demoFactoryMethod() {
  console.log('\n=== Factory Method ===');
  const coffee1 = CoffeeFactory.makeCoffee('espresso');
  const coffee2 = CoffeeFactory.makeCoffee('latte');
  console.log(coffee1.prepare());
  console.log(coffee2.prepare());
}
