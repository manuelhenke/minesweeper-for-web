import { html, css, LitElement } from 'lit';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';
import { MinesweeperGame } from './MinesweeperGame.js';
import Bomb from '../assets/icons/bomb.svg';
import BombExplode from '../assets/icons/bomb_red.svg';
import Flag from '../assets/icons/flag.svg';
import FlagMissed from '../assets/icons/flag_missed.svg';
import QuestionMark from '../assets/icons/questionmark.svg';
import UnopenedSquare from '../assets/icons/unopened_square.svg';
import Number0 from '../assets/icons/number-0.svg';
import Number1 from '../assets/icons/number-1.svg';
import Number2 from '../assets/icons/number-2.svg';
import Number3 from '../assets/icons/number-3.svg';
import Number4 from '../assets/icons/number-4.svg';
import Number5 from '../assets/icons/number-5.svg';
import Number6 from '../assets/icons/number-6.svg';
import Number7 from '../assets/icons/number-7.svg';
import Number8 from '../assets/icons/number-8.svg';

export class Minesweeper extends LitElement {
  static ICONS = {
    BOMB: Bomb,
    BOMB_EXPLODE: BombExplode,
    FLAG: Flag,
    FLAG_MISSED: FlagMissed,
    QUESTION_MARK: QuestionMark,
    UNOPENED_SQUARE: UnopenedSquare,
    NUMBER_0: Number0,
    NUMBER_1: Number1,
    NUMBER_2: Number2,
    NUMBER_3: Number3,
    NUMBER_4: Number4,
    NUMBER_5: Number5,
    NUMBER_6: Number6,
    NUMBER_7: Number7,
    NUMBER_8: Number8,
  };

  static get styles() {
    return [
      css`
        :host {
          display: block;
          border: solid 8px #bdbdbd;
          max-width: 100%;
          overflow-x: auto;
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }

        .sweeper-box {
          display: block;
          border: 3px solid;
          border-top-color: rgb(123, 123, 123);
          border-left-color: rgb(123, 123, 123);
          border-bottom-color: white;
          border-right-color: white;
        }

        .sweeper-row {
          display: block;
          /** Fontsize of 0 to remove white space between inline-block childs */
          font-size: 0;
          white-space: nowrap;
        }

        .sweeper-field {
          display: inline-block;
          height: 40px;
          width: 40px;
          object-position: center;
          object-fit: cover;
          cursor: pointer;
        }

        .unselectable {
          cursor: default;
        }
      `,
    ];
  }

  static get properties() {
    return {
      restartSelector: {
        attribute: 'restart-selector',
        type: String,
      },
      bombCounterSelector: {
        attribute: 'bomb-counter-selector',
        type: String,
      },
      columns: { type: Number },
      rows: { type: Number },
      bombs: { type: Number },
      /** @type {MinesweeperGame} */
      __game: { state: true },
    };
  }

  constructor() {
    super();
    this.restartSelector = null;
    this.bombCounterSelector = null;
    this.columns = 9;
    this.rows = 9;
    this.bombs = 10;
    this.__game = null;
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.restartSelector) {
      const restartElements = document.querySelectorAll(this.restartSelector);
      restartElements.forEach(restartElement => {
        restartElement.addEventListener('click', this.restartGame.bind(this));
      });
    }

    this.__game = new MinesweeperGame(
      this.__gameWonCallback.bind(this),
      this.__gameLostCallback.bind(this)
    );

    this.__createGameBoard();
  }

  __createGameBoard() {
    if (this.__game) {
      this.__game.createBoard(this.columns, this.rows, this.bombs);
      this.requestUpdate();
    }
  }

  __gameWonCallback() {
    const options = {
      detail: {},
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('game-won', options));
  }

  __gameLostCallback() {
    const options = {
      detail: {},
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('game-lost', options));
  }

  /**
   * @param {GameModeConfiguration} gameModeConfiguration
   */
  setGameModeConfiguration(gameModeConfiguration) {
    this.columns = gameModeConfiguration.columns;
    this.rows = gameModeConfiguration.rows;
    this.bombs = gameModeConfiguration.bombs;
    this.__createGameBoard();
  }

  restartGame() {
    if (this.__game) {
      this.__game.restart();
      this.requestUpdate();
    }
  }

  /**
   *
   * @param {PointerEvent} event
   */
  __handleFieldClick(event, selectedRow, selectedColumn, hasFlag) {
    if (this.__game && this.__game.board && !this.__game.isGameOver) {
      if (event.ctrlKey || event.altKey || event.metaKey) {
        this.__game.setFlag(selectedRow, selectedColumn);
      } else if (hasFlag) {
        return;
      } else {
        this.__game.selectField(selectedRow, selectedColumn);
      }

      this.requestUpdate();
    }
  }

  render() {
    if (!this.__game || !this.__game.board) {
      return html`No Board :(`;
    }

    const gameBoard = this.__game.board;

    if (this.bombCounterSelector) {
      const bombCounterElements = document.querySelectorAll(
        this.bombCounterSelector
      );
      bombCounterElements.forEach(bombCounterElement => {
        bombCounterElement.textContent =
          gameBoard.bombs - gameBoard.flagCounter;
      });
    }

    return html`<div class="sweeper-box">
      ${gameBoard.positions.map(
        (row, rowIndex) =>
          html`<div class="sweeper-row">
            ${row.map((field, columnIndex) =>
              this.getSweeperFieldHtml(rowIndex, columnIndex)
            )}
          </div>`
      )}
    </div>`;
  }

  getSweeperFieldHtml(rowIndex, columnIndex) {
    const gameBoard = this.__game.board;
    const isRevealed = gameBoard.revealedFields[rowIndex][columnIndex];
    const hasFlag = gameBoard.flags[rowIndex][columnIndex];

    let sweeperFieldContent = Minesweeper.ICONS.UNOPENED_SQUARE;
    if (isRevealed) {
      const fieldValue = gameBoard.positions[rowIndex][columnIndex];
      if (fieldValue === 'bomb') {
        if (hasFlag) {
          sweeperFieldContent = Minesweeper.ICONS.FLAG;
        } else {
          sweeperFieldContent = Minesweeper.ICONS.BOMB;
        }
      } else if (fieldValue === 'bomb-explode') {
        sweeperFieldContent = Minesweeper.ICONS.BOMB_EXPLODE;
      } else if (hasFlag) {
        sweeperFieldContent = Minesweeper.ICONS.FLAG_MISSED;
      } else {
        sweeperFieldContent = Minesweeper.ICONS[`NUMBER_${fieldValue}`];
      }
    } else if (hasFlag) {
      sweeperFieldContent = Minesweeper.ICONS.FLAG;
    }

    let sweeperFieldClass = 
      isRevealed || hasFlag || this.__game.isGameOver ? 'unselectable' : '';

    return html`<div
      class="sweeper-field ${sweeperFieldClass}"
      @click="${(event) => this.__handleFieldClick(event, rowIndex, columnIndex, hasFlag)}"
    >
      ${unsafeSVG(sweeperFieldContent)}
    </div>`;
  }
}

window.customElements.define('minesweeper-game', Minesweeper);
