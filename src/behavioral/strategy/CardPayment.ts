import { PaymentStrategy } from './PaymentStrategy';

export class CardPayment implements PaymentStrategy {
  pay(amount: number): string {
    return `💳 Оплачено ${amount} грн карткою`;
  }
}