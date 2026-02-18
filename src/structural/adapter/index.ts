// Старий зарядний пристрій
class OldCharger {
  chargeWithMicroUSB(): string {
    return '⚡ Заряджаю через Micro-USB';
  }
}

// Новий інтерфейс
interface NewCharger {
  chargeWithUSBC(): string;
}

// Адаптер
class ChargerAdapter implements NewCharger {
  private oldCharger: OldCharger;

  constructor(oldCharger: OldCharger) {
    this.oldCharger = oldCharger;
  }

  chargeWithUSBC(): string {
    return this.oldCharger.chargeWithMicroUSB() + ' (через адаптер USB-C)';
  }
}

// Демо
export function demoAdapter() {
  console.log('\n=== Adapter ===');
  const oldCharger = new OldCharger();
  const adapter = new ChargerAdapter(oldCharger);
  console.log(adapter.chargeWithUSBC());
}
