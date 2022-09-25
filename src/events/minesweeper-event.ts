import { MinesweeperBoard } from '@/engine';
import { deepCopy } from '@/utils';

interface MinesweeperEventDetail {
  board: MinesweeperBoard;
}

export class MinesweeperEvent<T = void> extends CustomEvent<T & MinesweeperEventDetail> {
  constructor(type: string, board: MinesweeperBoard, eventInitDict: CustomEventInit<T> = {}) {
    const { detail, ...eventInitDictWithoutDetail } = eventInitDict;

    super(`minesweeper:${type}`, {
      detail: {
        board: deepCopy(board),
        ...detail,
      } as T & MinesweeperEventDetail,
      bubbles: true,
      composed: true,
      cancelable: false,
      ...eventInitDictWithoutDetail,
    });
  }
}
