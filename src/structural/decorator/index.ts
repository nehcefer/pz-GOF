import { SimpleCoffee }    from './SimpleCoffee';
import { MilkDecorator }   from './MilkDecorator';
import { SugarDecorator }  from './SugarDecorator';
import { VanillaDecorator } from './VanillaDecorator';
import { CaramelDecorator } from './CaramelDecorator';
import { Coffee }          from './Coffee';

console.log('\n=== Decorator Pattern ===\n');

let coffee: Coffee = new SimpleCoffee();
console.log(`${coffee.getDescription()} = ${coffee.getCost()} грн`);

coffee = new MilkDecorator(coffee);
console.log(`${coffee.getDescription()} = ${coffee.getCost()} грн`);

coffee = new SugarDecorator(coffee);
console.log(`${coffee.getDescription()} = ${coffee.getCost()} грн`);

coffee = new VanillaDecorator(coffee);
console.log(`${coffee.getDescription()} = ${coffee.getCost()} грн`);

coffee = new CaramelDecorator(coffee);
console.log(`${coffee.getDescription()} = ${coffee.getCost()} грн`);