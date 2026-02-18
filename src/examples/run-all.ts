import { demoFactoryMethod } from '../creational/factory-method';
import { demoBuilder } from '../creational/builder';
import { demoAdapter } from '../structural/adapter';
import { demoDecorator } from '../structural/decorator';
import { demoStrategy } from '../behavioral/strategy';
import { demoObserver } from '../behavioral/observer';

console.log('🎨 GOF ПАТЕРНИ - ДЕМОНСТРАЦІЯ\n');

demoFactoryMethod();
demoBuilder();
demoAdapter();
demoDecorator();
demoStrategy();
demoObserver();

console.log('\n✅ Готово!\n');
