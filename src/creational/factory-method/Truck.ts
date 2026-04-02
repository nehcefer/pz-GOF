import { Vehicle } from './Vehicle';

export class Truck implements Vehicle {
  describe(): string {
    return '🚚 Вантажівка: 18 коліс, вантажопідйомність 20 тонн';
  }
}