import { Vehicle }    from './Vehicle';
import { Car }        from './Car';
import { Motorcycle } from './Motorcycle';
import { Truck }      from './Truck';
import { Bicycle }    from './Bicycle';

export class VehicleFactory {
  static create(type: string): Vehicle {
    switch (type) {
      case 'car':        return new Car();
      case 'motorcycle': return new Motorcycle();
      case 'truck':      return new Truck();
      case 'bicycle':    return new Bicycle();
      default: throw new Error(`❌ Невідомий тип транспорту: ${type}`);
    }
  }
}