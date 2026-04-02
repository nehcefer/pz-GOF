export class Burger {
  size: string = '';
  cheese: boolean = false;
  lettuce: boolean = false;
  tomato: boolean = false;
  bacon: boolean = false;

  show(): string {
    const toppings = [
      this.cheese  && '🧀 сир',
      this.lettuce && '🥬 салат',
      this.tomato  && '🍅 томат',
      this.bacon   && '🥓 бекон',
    ].filter(Boolean).join(', ');

    return `🍔 Бургер [${this.size}]: ${toppings || 'без добавок'}`;
  }
}