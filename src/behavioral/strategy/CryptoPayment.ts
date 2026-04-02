import { PaymentStrategy } from './PaymentStrategy';

export class CryptoPayment implements PaymentStrategy {
  pay(amount: number): string {
    return `₿ Оплачено ${amount} грн криптовалютою`;
  }
}