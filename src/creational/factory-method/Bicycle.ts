import { Vehicle } from './Vehicle';

export class Bicycle implements Vehicle {
  describe(): string {
    return '🚲 Велосипед: 2 колеса, без двигуна, екологічний';
  }
}