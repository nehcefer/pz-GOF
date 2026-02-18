// Підписник
interface Subscriber {
  update(videoTitle: string): void;
}

class User implements Subscriber {
  constructor(private name: string) {}

  update(videoTitle: string): void {
    console.log(`🔔 ${this.name} отримав сповіщення: "${videoTitle}"`);
  }
}

// Канал
class YouTubeChannel {
  private subscribers: Subscriber[] = [];

  subscribe(subscriber: Subscriber): void {
    this.subscribers.push(subscriber);
    console.log('✅ Новий підписник');
  }

  uploadVideo(title: string): void {
    console.log(`\n📹 Завантажено відео: "${title}"`);
    this.subscribers.forEach(sub => sub.update(title));
  }
}

// Демо
export function demoObserver() {
  console.log('\n=== Observer ===');
  const channel = new YouTubeChannel();

  const user1 = new User('Іван');
  const user2 = new User('Марія');

  channel.subscribe(user1);
  channel.subscribe(user2);

  channel.uploadVideo('Як вивчити TypeScript за 10 хвилин');
}
