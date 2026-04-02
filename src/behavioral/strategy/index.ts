import { PaymentProcessor } from './PaymentProcessor';
import { CardPayment }      from './CardPayment';
import { CashPayment }      from './CashPayment';
import { AlibabaPayment }   from './AlibabaPayment';
import { CryptoPayment }    from './CryptoPayment';
import { PayPalPayment }    from './PayPalPayment';

const processor = new PaymentProcessor();

console.log('\n=== Strategy Pattern: Оплата ===\n');

processor.setStrategy(new CardPayment());
console.log(processor.processPayment(500));

processor.setStrategy(new CashPayment());
console.log(processor.processPayment(200));

processor.setStrategy(new AlibabaPayment());
console.log(processor.processPayment(1500));

processor.setStrategy(new CryptoPayment());
console.log(processor.processPayment(3000));

processor.setStrategy(new PayPalPayment());
console.log(processor.processPayment(750));