import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.css'],
})
export class StopWatchComponent implements OnInit {
  time: number = 0; // Time in seconds
  interval: any;
  running: boolean = false;

  startStop() {
    if (this.running) {
      this.stop();
    } else {
      this.start();
    }
  }

  start() {
    this.running = true;
    this.interval = setInterval(() => {
      this.time++;
    }, 1000);
  }

  stop() {
    this.running = false;
    clearInterval(this.interval);
  }

  reset() {
    this.stop();
    this.time = 0;
  }

  formatTime(): string {
    const minutes = Math.floor(this.time / 60);
    const seconds = this.time % 60;
    return `${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  pad(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
