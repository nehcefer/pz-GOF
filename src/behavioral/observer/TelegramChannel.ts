import { Subscriber } from './Subscriber';

export class TelegramChannel {
  private subscribers: Subscriber[] = [];

  subscribe(subscriber: Subscriber): void {
    this.subscribers.push(subscriber);
    console.log('✅ Новий підписник у Telegram');
  }

  postMessage(title: string): void {
    console.log(`\n✈️ Telegram: новий пост "${title}"`);
    this.subscribers.forEach(sub => sub.update(title));
  }
}