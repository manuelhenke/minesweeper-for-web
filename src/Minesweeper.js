/* eslint-disable lit-a11y/click-events-have-key-events */
import { html, unsafeCSS, LitElement } from 'lit';
import { eventOptions } from 'lit/decorators/event-options.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { MinesweeperGame } from './MinesweeperGame.js';
import Icons from './Icons.js';
import Style from './minesweeper.scss';

function getSVGReference(id) {
  return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 76 76" preserveAspectRatio="xMidYMid meet" enable-background="new 0 0 76 76"><use href="#${id}" /></svg>`;
}

export class Minesweeper extends LitElement {
  static ICONS = {
    BOMB: getSVGReference('bomb'),
    BOMB_EXPLODE: getSVGReference('bomb-explode'),
    FLAG: getSVGReference('flag'),
    FLAG_MISSED: getSVGReference('flag-missed'),
    QUESTION_MARK: getSVGReference('question-mark'),
    UNOPENED_SQUARE: getSVGReference('unopened-square'),
    NUMBER_0: getSVGReference('blank'),
    NUMBER_1: getSVGReference('number-1'),
    NUMBER_2: getSVGReference('number-2'),
    NUMBER_3: getSVGReference('number-3'),
    NUMBER_4: getSVGReference('number-4'),
    NUMBER_5: getSVGReference('number-5'),
    NUMBER_6: getSVGReference('number-6'),
    NUMBER_7: getSVGReference('number-7'),
    NUMBER_8: getSVGReference('number-8'),
  };

  static get styles() {
    return unsafeCSS(Style);
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
      __game: {
        state: true,
        attribute: false,
      },
      /** @type {Number} */
      __pressStartTimestamp: {
        state: true,
        type: Number,
      },
      /** @type {HTMLElement} */
      __pressStartSweeperField: {
        state: true,
        attribute: false,
      },
      /** @type {Number} */
      __longPressTimer: {
        state: true,
        type: Number,
      },
    };
  }

  constructor() {
    super();
    this.columns = 9;
    this.rows = 9;
    this.bombs = 10;
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

  __resetLongPressStates() {
    clearTimeout(this.__longPressTimer);
  }

  /**
   * @param {TouchEvent|MouseEvent} event
   */
  @eventOptions({ passive: true })
  __handleFieldClickStart(event) {
    if (
      typeof window.ontouchstart !== 'undefined' &&
      event.type === 'mousedown'
    ) {
      this.__resetLongPressStates();
      return;
    }
    const currentSweeperField = event.currentTarget;
    this.__pressStartSweeperField = currentSweeperField;
    this.__pressStartTimestamp = event.timeStamp;

    if (this.__game && this.__game.board && !this.__game.isGameOver) {
      this.__longPressTimer = setTimeout(() => {
        let animationInterval = null;
        const flagSvg = currentSweeperField.querySelector('svg');
        let currentScale = 1;
        function scale() {
          if (currentScale >= 1.25) {
            clearInterval(animationInterval);
            flagSvg.style.transform = 'none';
          } else {
            currentScale += 0.01;
            flagSvg.style.transform = `scale(${currentScale})`;
          }
        }
        animationInterval = setInterval(scale, 2);
      }, 500);
    }
  }

  @eventOptions({ passive: true })
  __handleFieldClickLeave() {
    this.__resetLongPressStates();
  }

  /**
   * @param {PointerEvent} event
   */
  __handleFieldClickEnd(event) {
    const currentSweeperField = event.currentTarget;
    const wasLongPress = event.timeStamp - this.__pressStartTimestamp > 500;
    const stillSameSweeperField =
      this.__pressStartSweeperField === currentSweeperField;
    this.__resetLongPressStates();

    if (
      this.__game &&
      this.__game.board &&
      !this.__game.isGameOver &&
      stillSameSweeperField
    ) {
      this.dispatchEvent(
        new CustomEvent('field-click', {
          detail: {
            field: currentSweeperField,
          },
          bubbles: true,
          composed: true,
        })
      );
      const selectedRow = parseInt(currentSweeperField.dataset.row, 10);
      const selectedColumn = parseInt(currentSweeperField.dataset.column, 10);

      const gameBoard = this.__game.board;
      const hasFlag = gameBoard.flags[selectedRow][selectedColumn];
      if (wasLongPress || event.ctrlKey || event.altKey || event.metaKey) {
        const hasQuestionMark =
          gameBoard.questionMarks[selectedRow][selectedColumn];
        if (hasQuestionMark || hasFlag) {
          this.__game.toggleQuestionMark(selectedRow, selectedColumn);
        } else {
          this.__game.toggleFlag(selectedRow, selectedColumn);
        }
      } else if (hasFlag) {
        // if user performs a regular click on a field with a flag on it cancel it
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
      for (const bombCounterElement of bombCounterElements) {
        bombCounterElement.textContent =
          gameBoard.bombs - gameBoard.flagCounter;
      }
    }

    return html`<div class="sweeper-container">
        <div class="sweeper-box" @click="${event => event.preventDefault()}">
          ${gameBoard.positions.map(
            (row, rowIndex) =>
              html`<div class="sweeper-row">
                ${row.map((field, columnIndex) =>
                  this.getSweeperFieldHtml(rowIndex, columnIndex)
                )}
              </div>`
          )}
        </div>
        <div class="svg-container">${Object.values(Icons).map(unsafeSVG)}</div>
      </div>
    </div>`;
  }

  getSweeperFieldHtml(rowIndex, columnIndex) {
    const gameBoard = this.__game.board;
    const isRevealed = gameBoard.revealedFields[rowIndex][columnIndex];
    const hasFlag = gameBoard.flags[rowIndex][columnIndex];
    const hasQuestionMark = gameBoard.questionMarks[rowIndex][columnIndex];

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
    } else if (hasQuestionMark) {
      sweeperFieldContent = Minesweeper.ICONS.QUESTION_MARK;
    } else if (hasFlag) {
      sweeperFieldContent = Minesweeper.ICONS.FLAG;
    }

    const sweeperFieldClass =
      isRevealed || hasFlag || this.__game.isGameOver ? ' unselectable' : '';
    const attachEventListener = !isRevealed && !this.__game.isGameOver;

    if (attachEventListener) {
      return html`<div
        class="sweeper-field${sweeperFieldClass}"
        @touchstart="${this.__handleFieldClickStart}"
        @touchend="${this.__handleFieldClickLeave}"
        @touchcancel="${this.__handleFieldClickLeave}"
        @mousedown="${this.__handleFieldClickStart}"
        @mouseup="${this.__handleFieldClickLeave}"
        @mouseleave="${this.__handleFieldClickLeave}"
        @click="${this.__handleFieldClickEnd}"
        data-row="${rowIndex}"
        data-column="${columnIndex}"
      >
        ${unsafeSVG(sweeperFieldContent)}
      </div>`;
    }

    return html`<div
      class="sweeper-field${sweeperFieldClass}"
      data-row="${rowIndex}"
      data-column="${columnIndex}"
    >
      ${unsafeSVG(sweeperFieldContent)}
    </div>`;
  }
}

window.customElements.define('minesweeper-game', Minesweeper);
