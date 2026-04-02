import { PaymentStrategy } from './PaymentStrategy';

export class CashPayment implements PaymentStrategy {
  pay(amount: number): string {
    return `💵 Оплачено ${amount} грн готівкою`;
  }
}