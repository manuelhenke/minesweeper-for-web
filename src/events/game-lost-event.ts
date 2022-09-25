import { MinesweeperBoard } from '@/engine';
import { MinesweeperEvent } from './minesweeper-event';

export class GameLostEvent extends MinesweeperEvent {
  constructor(board: MinesweeperBoard) {
    super('game-lost', board);
  }
}
