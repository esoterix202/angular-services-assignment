import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementFromActiveToInactive() {
    this.activeToInactiveCounter++
    console.log('Active to inactive: ' + this.activeToInactiveCounter);
  }

  incrementFromInactiveToActive() {
    this.inactiveToActiveCounter++
    console.log('Inactive to active: ' + this.inactiveToActiveCounter);
  }
}
