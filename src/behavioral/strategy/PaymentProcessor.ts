import { PaymentStrategy } from './PaymentStrategy';

export class PaymentProcessor {
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