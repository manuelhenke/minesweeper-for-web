export class MinesweeperBoard {
  constructor(gameModeConfiguration) {
    this.positions = null;
    this.flags = null;
    this.flagCounter = 0;
    this.revealedFields = null;
    this.rows = gameModeConfiguration.rows;
    this.columns = gameModeConfiguration.columns;
    this.bombs = gameModeConfiguration.bombs;
  }

  build() {
    // First: Generate 2d field
    this.positions = this.generate2dFields(0);
    this.flags = this.generate2dFields(false);
    this.flagCounter = 0;
    this.revealedFields = this.generate2dFields(false);

    // Second: Place the bombs on the field
    this.placeBombs();

    // Third: Calculate the fields number, based on neighbor bombs
    this.applyFieldNumbers();
  }

  generate2dFields(value) {
    return Array(this.rows)
      .fill()
      .map(() => Array(this.columns).fill(value));
  }

  placeBombs() {
    const bombIndices = this.calculateBombIndices();

    let fieldIndex = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (bombIndices.includes(fieldIndex++)) {
          this.positions[i][j] = 'bomb';
        }
      }
    }
  }

  /**
   * Calculates a random set of indices where bombs are located on the field
   * @returns List of indices of bomb positions
   */
  calculateBombIndices() {
    const result = [];
    const size = this.rows * this.columns;
    const desiredBombAmount = Math.min(this.bombs, size);

    while (result.length != desiredBombAmount) {
      let newBombPosition = Math.floor(Math.random() * size);
      if (!result.includes(newBombPosition)) {
        result.push(newBombPosition);
      }
    }

    return result;
  }

  applyFieldNumbers() {
    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        if (this.positions[row][column] !== 'bomb') {
          const bombCounter = this.getNeighbors(row, column).filter(
            neighbor => this.positions[neighbor[0]][neighbor[1]] === 'bomb'
          ).length;
          this.positions[row][column] = bombCounter;
        }
      }
    }
  }

  revealFieldEntry(row, column) {
    const field = this.positions[row][column];

    if (field === 'bomb') {
      // position contains bomb
      this.revealBombs();
      this.positions[row][column] = 'bomb-explode';
    } else if (field === 0) {
      // position contains no bomb and has no neighbor-bombs
      this.expand(row, column);
    } else {
      // position contains no bomb but neighbor-bombs
      this.revealedFields[row][column] = true;
    }

    return field;
  }

  expand(row, column) {
    const field = this.positions[row][column];

    if (field === 'bomb' || this.revealedFields[row][column]) {
      return;
    }

    this.revealedFields[row][column] = true;
    if (this.flags[row][column]) {
      this.removeFlag(row, column);
    }

    if (field === 0) {
      const neighbors = this.getNeighbors(row, column);

      for (const neighbor of neighbors) {
        this.expand(neighbor[0], neighbor[1]);
      }
    }
  }

  /**
   *
   * @param {number} currentRow
   * @param {number} currentColumn
   * @returns {[number, number][]} List of Neighbors, every entry contains a row and a column index
   */
  getNeighbors(currentRow, currentColumn) {
    const neighbors = [];

    /**xoo
     * oxo
     * ooo
     */
    if (currentRow > 0 && currentColumn > 0) {
      neighbors.push([currentRow - 1, currentColumn - 1]);
    }

    /**oxo
     * oxo
     * ooo
     */
    if (currentRow > 0) {
      neighbors.push([currentRow - 1, currentColumn]);
    }

    /**oox
     * oxo
     * ooo
     */
    if (currentRow > 0 && currentColumn < this.columns - 1) {
      neighbors.push([currentRow - 1, currentColumn + 1]);
    }

    /**ooo
     * oxx
     * ooo
     */
    if (currentColumn < this.columns - 1) {
      neighbors.push([currentRow, currentColumn + 1]);
    }

    /**ooo
     * oxo
     * oox
     */
    if (currentRow < this.rows - 1 && currentColumn < this.columns - 1) {
      neighbors.push([currentRow + 1, currentColumn + 1]);
    }

    /**ooo
     * oxo
     * oxo
     */
    if (currentRow < this.rows - 1) {
      neighbors.push([currentRow + 1, currentColumn]);
    }

    /**ooo
     * oxo
     * xoo
     */
    if (currentRow < this.rows - 1 && currentColumn > 0) {
      neighbors.push([currentRow + 1, currentColumn - 1]);
    }

    /**ooo
     * xxo
     * ooo
     */
    if (currentColumn > 0) {
      neighbors.push([currentRow, currentColumn - 1]);
    }

    return neighbors;
  }

  addFlag(selectedRow, selectedColumn) {
    this.flags[selectedRow][selectedColumn] = true;
    this.flagCounter++;
  }

  removeFlag(selectedRow, selectedColumn) {
    this.flags[selectedRow][selectedColumn] = false;
    this.flagCounter--;
  }

  revealBombs(bombsAsFlags = false) {
    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        if (this.positions[row][column] === 'bomb') {
          this.revealedFields[row][column] = true;
          if (bombsAsFlags) {
            this.flags[row][column] = true;
          }
        }
        if (this.flags[row][column]) {
          this.revealedFields[row][column] = true;
        }
      }
    }
  }
}
