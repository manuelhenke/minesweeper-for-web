import { MinesweeperBoard } from '@/engine';
import { MinesweeperEvent } from './minesweeper-event';

export class GameWonEvent extends MinesweeperEvent {
  constructor(board: MinesweeperBoard) {
    super('game-won', board);
  }
}
