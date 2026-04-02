import { PaymentStrategy } from './PaymentStrategy';

export class PayPalPayment implements PaymentStrategy {
  pay(amount: number): string {
    return `🅿️ Оплачено ${amount} грн через PayPal`;
  }
}