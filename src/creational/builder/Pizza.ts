export class Pizza {
  size: string = '';
  cheese: boolean = false;
  pepperoni: boolean = false;
  mushrooms: boolean = false;
  bacon: boolean = false;

  show(): string {
    const toppings = [
      this.cheese    && '🧀 сир',
      this.pepperoni && '🌶️ пепероні',
      this.mushrooms && '🍄 гриби',
      this.bacon     && '🥓 бекон',
    ].filter(Boolean).join(', ');

    return `🍕 Піца [${this.size}]: ${toppings || 'без добавок'}`;
  }
}