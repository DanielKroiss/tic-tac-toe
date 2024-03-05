import { Component, OnInit } from '@angular/core';
import { SquareComponent } from "../square/square.component";
import { SquareValue } from "../shared/squareType"

@Component({
    selector: 'app-board',
    standalone: true,
    templateUrl: './board.component.html',
    styleUrl: './board.component.scss',
    imports: [SquareComponent]
})
export class BoardComponent implements OnInit{
  squares: SquareValue[] = [];
  xIsNext: boolean = false;
  winner: SquareValue = null;

  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O'
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player)
      this.xIsNext = !this.xIsNext
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const winningLines: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const line of winningLines) {
      const [a, b, c] = line;
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return null;
  }

}
