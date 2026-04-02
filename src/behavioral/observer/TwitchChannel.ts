import { Subscriber } from './Subscriber';

export class TwitchChannel {
  private subscribers: Subscriber[] = [];

  subscribe(subscriber: Subscriber): void {
    this.subscribers.push(subscriber);
    console.log('✅ Новий підписник на Twitch');
  }

  startStream(title: string): void {
    console.log(`\n🎮 Twitch: розпочато стрім "${title}"`);
    this.subscribers.forEach(sub => sub.update(title));
  }
}