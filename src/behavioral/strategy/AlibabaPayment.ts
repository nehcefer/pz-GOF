import { PaymentStrategy } from './PaymentStrategy';

export class AlibabaPayment implements PaymentStrategy {
  pay(amount: number): string {
    return `🛒 Оплачено ${amount} грн через Alibaba Pay`;
  }
}