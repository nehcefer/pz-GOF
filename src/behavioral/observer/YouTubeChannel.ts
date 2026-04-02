import { Subscriber } from './Subscriber';

export class YouTubeChannel {
  private subscribers: Subscriber[] = [];

  subscribe(subscriber: Subscriber): void {
    this.subscribers.push(subscriber);
    console.log('✅ Новий підписник на YouTube');
  }

  uploadVideo(title: string): void {
    console.log(`\n📹 YouTube: завантажено відео "${title}"`);
    this.subscribers.forEach(sub => sub.update(title));
  }
}