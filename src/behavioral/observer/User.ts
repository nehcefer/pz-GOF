import { Subscriber } from './Subscriber';

export class User implements Subscriber {
  constructor(private name: string) {}

  update(title: string): void {
    console.log(`🔔 ${this.name} отримав сповіщення: "${title}"`);
  }
}