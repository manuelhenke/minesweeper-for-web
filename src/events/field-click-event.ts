import { MinesweeperBoard } from '@/engine';
import { FieldTarget } from '@/types';
import { MinesweeperEvent } from './minesweeper-event';

interface FieldClickEventDetail {
  target: FieldTarget;
  field: HTMLElement;
}

export class FieldClickEvent extends MinesweeperEvent<FieldClickEventDetail> {
  constructor(board: MinesweeperBoard, target: FieldTarget, field: HTMLElement) {
    super('field-click', board, {
      cancelable: true,
      detail: {
        target,
        field,
      },
    });
  }
}
