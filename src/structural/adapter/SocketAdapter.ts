import { NewCharger }     from './NewCharger';
import { EuropeanSocket } from './EuropeanSocket';

export class SocketAdapter implements NewCharger {
  private socket: EuropeanSocket;

  constructor(socket: EuropeanSocket) {
    this.socket = socket;
  }

  chargeWithUSBC(): string {
    return this.socket.plugIn220V() + ' (через адаптер USB-C)';
  }
}
