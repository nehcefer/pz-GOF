import { NewCharger } from './NewCharger';
import { OldCharger } from './OldCharger';

export class ChargerAdapter implements NewCharger {
  private oldCharger: OldCharger;

  constructor(oldCharger: OldCharger) {
    this.oldCharger = oldCharger;
  }

  chargeWithUSBC(): string {
    return this.oldCharger.chargeWithMicroUSB() + ' (через адаптер USB-C)';
  }
}