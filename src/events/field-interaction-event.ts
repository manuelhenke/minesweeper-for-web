import { MinesweeperBoard } from '@/engine';
import { FieldTarget, Interaction } from '@/types';
import { MinesweeperEvent } from './minesweeper-event';

interface FieldInteractionEventDetail {
  target: FieldTarget;
  interaction: Interaction;
}

export class FieldInteractionEvent extends MinesweeperEvent<FieldInteractionEventDetail> {
  constructor(board: MinesweeperBoard, target: FieldTarget, interaction: Interaction) {
    super('field-interaction', board, {
      detail: {
        target,
        interaction,
      },
    });
  }
}
