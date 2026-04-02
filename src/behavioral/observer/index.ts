import { User }           from './User';
import { YouTubeChannel } from './YouTubeChannel';
import { TelegramChannel } from './TelegramChannel';
import { TwitchChannel }  from './TwitchChannel';

console.log('\n=== Observer Pattern ===\n');

const ivan  = new User('Іван');
const maria = new User('Марія');
const oleg  = new User('Олег');

// YouTube
const youtube = new YouTubeChannel();
youtube.subscribe(ivan);
youtube.subscribe(maria);
youtube.uploadVideo('Як вивчити TypeScript за 10 хвилин');

// Telegram
const telegram = new TelegramChannel();
telegram.subscribe(maria);
telegram.subscribe(oleg);
telegram.postMessage('Новини про JavaScript 2026');

// Twitch
const twitch = new TwitchChannel();
twitch.subscribe(ivan);
twitch.subscribe(oleg);
twitch.startStream('Розбираємо патерни проєктування LIVE');