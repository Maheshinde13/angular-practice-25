import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css'],
})
export class DiceRollerComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  diceValue: number | null = null;

  rollDice(): void {
    this.diceValue = Math.floor(Math.random() * 6) + 1;
  }
}
