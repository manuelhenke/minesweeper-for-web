import { MinesweeperBoard } from '@/engine';
import { FieldTarget } from '@/types';
import { MinesweeperEvent } from './minesweeper-event';

interface FieldLongPressEventDetail {
  target: FieldTarget;
  field: HTMLElement;
}

export class FieldLongPressEvent extends MinesweeperEvent<FieldLongPressEventDetail> {
  constructor(board: MinesweeperBoard, target: FieldTarget, field: HTMLElement) {
    super('field-long-press', board, {
      cancelable: true,
      detail: {
        target,
        field,
      },
    });
  }
}
