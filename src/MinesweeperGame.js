import { MinesweeperBoard } from './MinesweeperBoard.js';

/**
 * @typedef GameModeConfiguration
 * @property {number} columns
 * @property {number} rows
 * @property {number} bombs
 */

export class MinesweeperGame {
  /**
   * @param {() => {}} onWinCallback
   * @param {() => {}} onLoseCallback
   */
  constructor(onWinCallback, onLoseCallback) {
    this.onWinCallback = onWinCallback;
    this.onLoseCallback = onLoseCallback;
    /**
     * @type {MinesweeperBoard}
     */
    this.board = null;
    /**
     * @type {GameModeConfiguration}
     */
    this.gameModeConfiguration = null;

    this.isGameOver = true;
  }

  createBoard(columns = 9, rows = 9, bombs = 10) {
    this.gameModeConfiguration = {
      columns,
      rows,
      bombs,
    };

    this.board = new MinesweeperBoard(this.gameModeConfiguration);
    this.board.build();
    this.isGameOver = false;
  }

  restart() {
    this.board.build();
    this.isGameOver = false;
  }

  toggleFlag(selectedRow, selectedColumn) {
    if (this.board.revealedFields[selectedRow][selectedColumn]) {
      return;
    }

    if (this.board.flags[selectedRow][selectedColumn]) {
      // removing a flag is always possible
      this.board.removeFlag(selectedRow, selectedColumn);
    } else if (this.board.flagCounter < this.board.bombs) {
      // it should not be possible to place more flags than bombs
      this.board.addFlag(selectedRow, selectedColumn);
    }
  }

  toggleQuestionMark(selectedRow, selectedColumn) {
    if (this.board.revealedFields[selectedRow][selectedColumn]) {
      return;
    }

    if (this.board.questionMarks[selectedRow][selectedColumn]) {
      this.board.removeQuestionMark(selectedRow, selectedColumn);
    } else {
      this.board.addQuestionMark(selectedRow, selectedColumn);
    }
  }

  selectField(selectedRow, selectedColumn) {
    const field = this.board.revealFieldEntry(selectedRow, selectedColumn);

    if (field === 'bomb') {
      this.onLoseCallback();
      this.isGameOver = true;
      return;
    }

    // flatten the 2d boolean array and count false values
    const unrevealedFieldsAmount = []
      .concat(...this.board.revealedFields)
      .filter(revealedField => !revealedField).length;

    if (unrevealedFieldsAmount === this.board.bombs) {
      this.board.revealBombs(true);
      this.onWinCallback();
      this.isGameOver = true;
    }
  }
}
