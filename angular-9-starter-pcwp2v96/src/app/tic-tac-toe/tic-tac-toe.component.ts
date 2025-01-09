import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent implements OnInit {
ngOnInit(): void {
throw new Error('Method not implemented.');
}
  board: string[] = Array(9).fill('');
  currentPlayer: 'X' | 'O' = 'X';
  winner: string | null = null;

  playMove(index: number): void {
    if (!this.board[index] && !this.winner) {
      this.board[index] = this.currentPlayer;
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner(): boolean {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winningCombinations.some((combination) =>
      combination.every((index) => this.board[index] === this.currentPlayer)
    );
  }

  resetGame(): void {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.winner = null;
  }
}


// explaination

// The logic of the Tic-Tac-Toe game involves maintaining the state of the board, switching turns between players, checking for a winner, and allowing a reset. Here's a detailed explanation of each part:

// ---

// ### 1. **State Management**
// - The game board is represented as a **one-dimensional array of 9 elements** (`board: string[] = Array(9).fill('');`).
//   - Each element corresponds to a cell in the 3x3 grid.
//   - Initially, all cells are empty strings (`''`).
// - The current player is tracked using `currentPlayer: 'X' | 'O' = 'X';`.
//   - The default starting player is `'X'`.
// - The `winner` variable (`winner: string | null = null;`) keeps track of the game's outcome.
//   - Initially, it's set to `null` (no winner).

// ---

// ### 2. **Handling Player Moves**
// When a player clicks a cell:
// - **Validate the move**:
//   - The cell must be empty, and the game should not already have a winner (`if (!this.board[index] && !this.winner)`).
// - **Update the board**:
//   - The clicked cell is updated with the current player's symbol (`this.board[index] = this.currentPlayer;`).
// - **Check for a winner**:
//   - After a move, the game checks if the current player has formed a winning combination.
// - **Switch players**:
//   - If there's no winner, the turn switches to the other player (`this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';`).

// ---

// ### 3. **Checking for a Winner**
// The `checkWinner()` function determines if the current player has won:
// - **Winning Combinations**:
//   - There are 8 possible ways to win:
//     - 3 horizontal rows
//     - 3 vertical columns
//     - 2 diagonals
//   - These combinations are represented as an array of arrays:
//     ```typescript
//     const winningCombinations = [
//       [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//       [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//       [0, 4, 8], [2, 4, 6]             // Diagonals
//     ];
//     ```
// - **Check if the current player has a winning combination**:
//   - For each combination, check if all three cells in that combination have the current player's symbol:
//     ```typescript
//     return winningCombinations.some(combination => 
//       combination.every(index => this.board[index] === this.currentPlayer)
//     );
//     ```
//   - If a match is found, the function returns `true`, and the `winner` variable is updated to the current player.

// ---

// ### 4. **Resetting the Game**
// The `resetGame()` function resets the game state:
// - The board is cleared (`this.board = Array(9).fill('');`).
// - The starting player is reset to `'X'` (`this.currentPlayer = 'X';`).
// - The `winner` is cleared (`this.winner = null;`).

// ---

// ### 5. **HTML Template Logic**
// - The board is displayed as a grid of 9 cells using an `*ngFor` directive:
//   ```html
//   <div *ngFor="let cell of board; index as i" class="cell" (click)="playMove(i)">
//     {{ cell }}
//   </div>
//   ```
// - A cell displays either `'X'`, `'O'`, or remains empty depending on the `board` array's state.
// - The `playMove()` function handles click events, updating the game state.
// - The `winner` is displayed when a player wins:
//   ```html
//   <div *ngIf="winner" class="winner">
//     🎉 Player {{ winner }} wins!
//   </div>
//   ```
// - The reset button allows restarting the game:
//   ```html
//   <button (click)="resetGame()">Reset Game</button>
//   ```

// ---

// ### Flow of the Game
// 1. Player `'X'` starts the game by clicking an empty cell.
//    - The cell is updated with `'X'`.
//    - The game checks for a winner; if none, the turn switches to `'O'`.
// 2. Player `'O'` clicks another cell.
//    - The process repeats until:
//      - A winning combination is found, and the game declares the winner.
//      - All cells are filled without a winner, resulting in a draw.
// 3. Players can click "Reset Game" to restart the game.

// ---

// This modular and intuitive logic ensures the game is easy to understand and maintain. 🎮