// Стратегія оплати
interface PaymentStrategy {
  pay(amount: number): string;
}

class CardPayment implements PaymentStrategy {
  pay(amount: number): string {
    return `💳 Оплачено ${amount} грн карткою`;
  }
}

class CashPayment implements PaymentStrategy {
  pay(amount: number): string {
    return `💵 Оплачено ${amount} грн готівкою`;
  }
}

// Контекст
class PaymentProcessor {
  private strategy?: PaymentStrategy;

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  processPayment(amount: number): string {
    if (!this.strategy) {
      return '❌ Оберіть спосіб оплати';
    }
    return this.strategy.pay(amount);
  }
}

// Демо
export function demoStrategy() {
  console.log('\n=== Strategy ===');
  const processor = new PaymentProcessor();

  processor.setStrategy(new CardPayment());
  console.log(processor.processPayment(100));

  processor.setStrategy(new CashPayment());
  console.log(processor.processPayment(100));
}
