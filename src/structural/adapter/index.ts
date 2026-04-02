import { OldCharger }     from './OldCharger';
import { ChargerAdapter } from './ChargerAdapter';
import { EuropeanSocket } from './EuropeanSocket';
import { SocketAdapter }  from './SocketAdapter';

console.log('\n=== Adapter Pattern ===\n');

// Старий зарядник через адаптер
const oldCharger = new OldCharger();
const chargerAdapter = new ChargerAdapter(oldCharger);
console.log(chargerAdapter.chargeWithUSBC());

// Єропейська розетка через адаптер
const socket = new EuropeanSocket();
const socketAdapter = new SocketAdapter(socket);
console.log(socketAdapter.chargeWithUSBC());
