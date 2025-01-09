import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-roll-second',
  templateUrl: './dice-roll-second.component.html',
  styleUrls: ['./dice-roll-second.component.css'],
})
export class DiceRollSecondComponent implements OnInit {
  numberOfDice: number = 1; // Default to 1 die
  diceResults: number[] = [];

  rollDice(): void {
    // Validate input: Ensure the number of dice is between 1 and 12
    if (this.numberOfDice < 1 || this.numberOfDice > 12) {
      alert('Please enter a number between 1 and 12.');
      return;
    }

    // Simulate the dice rolls
    this.diceResults = Array.from(
      { length: this.numberOfDice },
      () => Math.floor(Math.random() * 6) + 1
    );
  }

  constructor() {}

  ngOnInit() {}
}
