import { MinesweeperGame } from './MinesweeperGame';

window.customElements.define('minesweeper-game', MinesweeperGame);

declare global {
  interface HTMLElementTagNameMap {
    'minesweeper-game': MinesweeperGame;
  }
}
