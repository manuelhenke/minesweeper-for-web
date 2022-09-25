import { FieldKey, GameModeConfiguration } from '@/types';

export class MinesweeperBoard {
  private gameModeConfiguration: GameModeConfiguration;

  #positions: (number | string)[][];

  #flags: boolean[][];

  #flagCounter = 0;

  #questionMarks: boolean[][];

  #revealedFields: boolean[][];

  constructor(gameModeConfiguration: GameModeConfiguration) {
    this.gameModeConfiguration = gameModeConfiguration;

    // First: Generate 2d field
    this.#positions = this.generate2dFields(0);
    this.#flags = this.generate2dFields(false);
    this.#questionMarks = this.generate2dFields(false);
    this.#revealedFields = this.generate2dFields(false);

    // Second: Place the bombs on the field
    this.placeBombs();

    // Third: Calculate the fields number, based on neighbor bombs
    this.applyFieldNumbers();
  }

  get rows() {
    return this.gameModeConfiguration.rows;
  }

  get columns() {
    return this.gameModeConfiguration.columns;
  }

  get bombs() {
    return this.gameModeConfiguration.bombs;
  }

  get positions(): ReadonlyArray<ReadonlyArray<string | number>> {
    return this.#positions;
  }

  get flags(): ReadonlyArray<ReadonlyArray<boolean>> {
    return this.#flags;
  }

  get flagCounter() {
    return this.#flagCounter;
  }

  get questionMarks(): ReadonlyArray<ReadonlyArray<boolean>> {
    return this.#questionMarks;
  }

  get revealedFields(): ReadonlyArray<ReadonlyArray<boolean>> {
    return this.#revealedFields;
  }

  private generate2dFields<T>(value: T): T[][] {
    return Array.from<T[]>({ length: this.rows })
      .fill([value])
      .map(() => Array.from<T>({ length: this.columns }).fill(value));
  }

  private placeBombs() {
    const bombIndices = this.calculateRandomBombIndices();

    let fieldIndex = 0;
    for (let row = 0; row < this.rows; row += 1) {
      for (let column = 0; column < this.columns; column += 1) {
        if (bombIndices.includes(fieldIndex)) {
          this.#positions[row][column] = FieldKey.BOMB;
        }
        fieldIndex += 1;
      }
    }
  }

  /**
   * Calculates a random set of indices where bombs are located on the field
   * @returns List of indices of bomb #positions
   */
  private calculateRandomBombIndices(): number[] {
    const result: number[] = [];
    const size = this.rows * this.columns;
    const desiredBombAmount = Math.min(this.bombs, size);

    while (result.length !== desiredBombAmount) {
      const newBombPosition = Math.floor(Math.random() * size);
      if (!result.includes(newBombPosition)) {
        result.push(newBombPosition);
      }
    }

    return result;
  }

  /**
   * Calculates for every field, except the fields with bombs, how many neighbor bombs are present.
   */
  private applyFieldNumbers() {
    for (let row = 0; row < this.rows; row += 1) {
      for (let column = 0; column < this.columns; column += 1) {
        if (this.#positions[row][column] !== FieldKey.BOMB) {
          const bombCounter = this.getNeighbors(row, column).filter(
            (neighbor) => this.#positions[neighbor[0]][neighbor[1]] === FieldKey.BOMB
          ).length;
          this.#positions[row][column] = bombCounter;
        }
      }
    }
  }

  revealField(row: number, column: number): string | number {
    if (this.#flags[row][column]) {
      return FieldKey.FLAG;
    }
    if (this.#questionMarks[row][column]) {
      this.#questionMarks[row][column] = false;
    }

    const field = this.#positions[row][column];

    if (field === FieldKey.BOMB) {
      // position contains bomb
      this.#positions[row][column] = FieldKey.BOMB_EXPLODE;
    } else if (field === 0) {
      // position contains no bomb and has no neighbor-bombs
      this.expand(row, column);
    } else {
      // position contains no bomb but neighbor-bombs
      this.#revealedFields[row][column] = true;
    }

    return field;
  }

  private expand(row: number, column: number) {
    const field = this.#positions[row][column];

    if (field === FieldKey.BOMB || this.#revealedFields[row][column]) {
      return;
    }

    this.#revealedFields[row][column] = true;
    if (this.#flags[row][column]) {
      this.removeFlag(row, column);
    }
    if (this.#questionMarks[row][column]) {
      this.removeQuestionMark(row, column);
    }

    if (field === 0) {
      const neighbors = this.getNeighbors(row, column);

      for (const neighbor of neighbors) {
        this.expand(neighbor[0], neighbor[1]);
      }
    }
  }

  /**
   * @returns List of Neighbors, every entry contains a row and a column index
   */
  private getNeighbors(currentRow: number, currentColumn: number): [number, number][] {
    const neighbors: [number, number][] = [];

    /** xoo
     *  oxo
     *  ooo
     */
    if (currentRow > 0 && currentColumn > 0) {
      neighbors.push([currentRow - 1, currentColumn - 1]);
    }

    /** oxo
     *  oxo
     *  ooo
     */
    if (currentRow > 0) {
      neighbors.push([currentRow - 1, currentColumn]);
    }

    /** oox
     *  oxo
     *  ooo
     */
    if (currentRow > 0 && currentColumn < this.columns - 1) {
      neighbors.push([currentRow - 1, currentColumn + 1]);
    }

    /** ooo
     *  oxx
     *  ooo
     */
    if (currentColumn < this.columns - 1) {
      neighbors.push([currentRow, currentColumn + 1]);
    }

    /** ooo
     *  oxo
     *  oox
     */
    if (currentRow < this.rows - 1 && currentColumn < this.columns - 1) {
      neighbors.push([currentRow + 1, currentColumn + 1]);
    }

    /** ooo
     *  oxo
     *  oxo
     */
    if (currentRow < this.rows - 1) {
      neighbors.push([currentRow + 1, currentColumn]);
    }

    /** ooo
     *  oxo
     *  xoo
     */
    if (currentRow < this.rows - 1 && currentColumn > 0) {
      neighbors.push([currentRow + 1, currentColumn - 1]);
    }

    /** ooo
     *  xxo
     *  ooo
     */
    if (currentColumn > 0) {
      neighbors.push([currentRow, currentColumn - 1]);
    }

    return neighbors;
  }

  addFlag(selectedRow: number, selectedColumn: number) {
    if (!this.#flags[selectedRow][selectedColumn]) {
      this.#flags[selectedRow][selectedColumn] = true;
      this.#flagCounter += 1;
      this.removeQuestionMark(selectedRow, selectedColumn);
    }
  }

  removeFlag(selectedRow: number, selectedColumn: number) {
    if (this.#flags[selectedRow][selectedColumn]) {
      this.#flags[selectedRow][selectedColumn] = false;
      this.#flagCounter -= 1;
    }
  }

  addQuestionMark(selectedRow: number, selectedColumn: number) {
    if (!this.#questionMarks[selectedRow][selectedColumn]) {
      this.#questionMarks[selectedRow][selectedColumn] = true;
      this.removeFlag(selectedRow, selectedColumn);
    }
  }

  removeQuestionMark(selectedRow: number, selectedColumn: number) {
    if (this.#questionMarks[selectedRow][selectedColumn]) {
      this.#questionMarks[selectedRow][selectedColumn] = false;
    }
  }

  revealBombs(bombsAsFlags = false) {
    for (let row = 0; row < this.rows; row += 1) {
      for (let column = 0; column < this.columns; column += 1) {
        if (this.#positions[row][column] === FieldKey.BOMB) {
          this.#revealedFields[row][column] = true;
          if (bombsAsFlags) {
            this.addFlag(row, column);
          } else if (this.#questionMarks[row][column]) {
            this.removeQuestionMark(row, column);
          }
        }
        if (this.#flags[row][column] || this.#positions[row][column] === FieldKey.BOMB_EXPLODE) {
          this.#revealedFields[row][column] = true;
        }
      }
    }
  }
}
