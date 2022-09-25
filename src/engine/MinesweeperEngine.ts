import { FieldKey, GameModeConfiguration } from '@/types';
import { MinesweeperBoard } from './MinesweeperBoard';

export class MinesweeperEngine {
  gameModeConfiguration!: GameModeConfiguration;

  #board!: MinesweeperBoard;

  isGameOver = true;

  onWinCallback: () => void;

  onLoseCallback: () => void;

  constructor(onWinCallback = () => {}, onLoseCallback = () => {}) {
    this.onWinCallback = onWinCallback;
    this.onLoseCallback = onLoseCallback;
  }

  get board() {
    return this.#board;
  }

  createBoard(columns = 9, rows = 9, bombs = 10) {
    this.gameModeConfiguration = {
      columns,
      rows,
      bombs,
    };

    this.restart();
  }

  restart() {
    this.#board = new MinesweeperBoard(this.gameModeConfiguration);
    this.isGameOver = false;
  }

  /**
   * @returns Delta of the amount of flags
   */
  toggleFlag(selectedRow: number, selectedColumn: number): number {
    if (this.#board.revealedFields[selectedRow][selectedColumn]) {
      return 0;
    }

    if (this.#board.flags[selectedRow][selectedColumn]) {
      // removing a flag is always possible
      this.#board.removeFlag(selectedRow, selectedColumn);
      return -1;
    }

    if (this.#board.flagCounter < this.#board.bombs) {
      // it should not be possible to place more flags than bombs
      this.#board.addFlag(selectedRow, selectedColumn);
      return 1;
    }

    return 0;
  }

  /**
   * @returns {number} Delta of the amount of question marks
   */
  toggleQuestionMark(selectedRow: number, selectedColumn: number): number {
    if (this.#board.revealedFields[selectedRow][selectedColumn]) {
      return 0;
    }

    if (this.#board.questionMarks[selectedRow][selectedColumn]) {
      this.#board.removeQuestionMark(selectedRow, selectedColumn);
      return -1;
    }

    this.#board.addQuestionMark(selectedRow, selectedColumn);
    return 1;
  }

  selectField(selectedRow: number, selectedColumn: number): string | number {
    const field = this.#board.revealField(selectedRow, selectedColumn);

    if (field === FieldKey.BOMB) {
      this.#board.revealBombs();
      this.onLoseCallback();
      this.isGameOver = true;
      return field;
    }

    // flatten the 2d boolean array and count false values
    const unrevealedFieldsAmount = this.#board.revealedFields
      .flat()
      .filter((revealedField) => !revealedField).length;

    if (unrevealedFieldsAmount === this.#board.bombs) {
      this.#board.revealBombs(true);
      this.onWinCallback();
      this.isGameOver = true;
    }

    return field;
  }
}
