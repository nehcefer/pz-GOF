import { VehicleFactory } from './VehicleFactory';

console.log('\n=== Factory Method Pattern: Транспорт ===\n');

const types = ['car', 'motorcycle', 'truck', 'bicycle'];

types.forEach(type => {
  const vehicle = VehicleFactory.create(type);
  console.log(vehicle.describe());
});