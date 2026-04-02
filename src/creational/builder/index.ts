import { PizzaBuilder }  from './PizzaBuilder';
import { BurgerBuilder } from './BurgerBuilder';

console.log('\n=== Builder Pattern ===\n');

const pizza1 = new PizzaBuilder()
  .setSize('велика')
  .addCheese()
  .addPepperoni()
  .addBacon()
  .build();
console.log(pizza1.show());

const pizza2 = new PizzaBuilder()
  .setSize('маленька')
  .addCheese()
  .addMushrooms()
  .build();
console.log(pizza2.show());

const burger1 = new BurgerBuilder()
  .setSize('подвійний')
  .addCheese()
  .addBacon()
  .addTomato()
  .build();
console.log(burger1.show());

const burger2 = new BurgerBuilder()
  .setSize('класичний')
  .addLettuce()
  .addTomato()
  .build();
console.log(burger2.show());