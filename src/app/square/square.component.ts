import { Component, Input } from '@angular/core';
import { SquareValue } from "../shared/squareType"


@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent {
   @Input() value: SquareValue = "X";
}
