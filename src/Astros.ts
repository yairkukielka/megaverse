import type { Cell, IAstroCell } from "./types";

export abstract class AstroCell implements IAstroCell {
  row = 0;
  column: number;

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
  }

  toCellObject(): Cell {
    return { row: this.row, column: this.column };
  }
}

export class PolyanetCell extends AstroCell {}

export class ComethCell extends AstroCell {
  direction: string;

  constructor(row: number, column: number, direction: string) {
    super(row, column);
    this.direction = direction;
  }

  toCellObject(): Cell {
    return {
      row: this.row,
      column: this.column,
      direction: this.direction,
    } as Cell;
  }
}

export class SoloonCell extends AstroCell {
  color: string;

  constructor(row: number, column: number, color: string) {
    super(row, column);
    this.color = color;
  }

  toCellObject(): Cell {
    return {
      row: this.row,
      column: this.column,
      color: this.color,
    } as Cell;
  }
}
