import { Cell } from './Cell';
import { Colors } from './Colors';

export class Board {
  cells: Cell[][] = [];

  public initCell() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        //const column: Cell[] = [];
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)); // Черные ячейки
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)); // Белые ячейки
        }
      }
      this.cells.push(row);
    }
  }
}