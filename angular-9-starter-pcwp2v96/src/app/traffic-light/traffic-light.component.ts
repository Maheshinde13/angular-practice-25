import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css'],
})
export class TrafficLightComponent implements OnInit {
  currentLight: 'red' | 'yellow' | 'green' = 'red';

  constructor() {}

  ngOnInit(): void {
    this.startTrafficLightCycle();
  }
  startTrafficLightCycle(): void {
    let lightDurations = {
      red: 4000,
      yellow: 500,
      green: 3000,
    };

    const cycleLights = () => {
      switch (this.currentLight) {
        case 'red':
          this.currentLight = 'green';
          setTimeout(cycleLights, lightDurations.green);
          break;
        case 'green':
          this.currentLight = 'yellow';
          setTimeout(cycleLights, lightDurations.yellow);
          break;
        case 'yellow':
          this.currentLight = 'red';
          setTimeout(cycleLights, lightDurations.red);
          break;
      }
    };

    setTimeout(cycleLights, lightDurations.red); // Start with the red light
  }
}
