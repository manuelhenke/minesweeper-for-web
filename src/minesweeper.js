/* eslint-disable lit-a11y/click-events-have-key-events */
import { html, unsafeCSS, LitElement } from 'lit';
import { customElement, eventOptions } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { MinesweeperGame } from './minesweeper-game.js';
import Icons from './icons.js';
import Style from './minesweeper.scss';
import { FIELD_KEYS } from './minesweeper-board.js';

function getSVGReference(id) {
  // eslint-disable-next-line no-secrets/no-secrets
  return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 76 76" preserveAspectRatio="xMidYMid meet" enable-background="new 0 0 76 76"><use href="#${id}" /></svg>`;
}

@customElement('minesweeper-game')
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

  /** @type {string} */
  @property({
    attribute: 'restart-selector',
    type: String,
  })
  restartSelector;

  /** @type {string} */
  @property({
    attribute: 'bomb-counter-selector',
    type: String,
  })
  bombCounterSelector;

  /** @type {number} */
  @property({
    attribute: 'long-press-threshold',
    type: Number,
  })
  longPressThreshold = 500;

  /** @type {number} */
  @property({
    type: Number,
  })
  columns = 9;

  /** @type {number} */
  @property({
    type: Number,
  })
  rows = 9;

  /** @type {number} */
  @property({
    type: Number,
  })
  bombs = 10;

  /** @type {MinesweeperGame} */
  @state({})
  _game;

  /** @type {Number} */
  @state({})
  _pressStartTimestamp;

  /** @type {HTMLElement} */
  @state({})
  _pressStartSweeperField;

  /** @type {Number} */
  @state({})
  _longPressTimer;



  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }

    if (this.restartSelector) {
      const restartElements = document.querySelectorAll(this.restartSelector);
      restartElements.forEach((restartElement) => {
        restartElement.addEventListener('click', this.restartGame.bind(this));
      });
    }

    this._game = new MinesweeperGame(
      this._gameWonCallback.bind(this),
      this._gameLostCallback.bind(this)
    );

    this._createGameBoard();
  }

  disconnectedCallback() {
    if (super.disconnectedCallback) {
      super.disconnectedCallback();
    }
  }
  __createGameBoard() {
    if (this.__game) {
      this.__game.createBoard(this.columns, this.rows, this.bombs);

  _createGameBoard() {
    if (this._game) {
      this._game.createBoard(this.columns, this.rows, this.bombs);
      this.requestUpdate();
    }
  }

  _gameWonCallback() {
    this.dispatchEvent('game-won');
  }

  _gameLostCallback() {
    this.dispatchEvent('game-lost');
  }

  /**
   * @param {GameModeConfiguration} gameModeConfiguration
   */
  setGameModeConfiguration(gameModeConfiguration) {
    this.columns = gameModeConfiguration.columns;
    this.rows = gameModeConfiguration.rows;
    this.bombs = gameModeConfiguration.bombs;
    this._createGameBoard();
  }

  restartGame() {
    if (this._game) {
      this._game.restart();
      this.requestUpdate();
    }
  }

  get _isLongPressDisabled() {
    return !this.longPressThreshold || this.longPressThreshold <= 0;
  }

  /**
   * @param {string} type
   * @param {CustomEventInit} [eventInitDict]
   */
  dispatchEvent(type, eventInitDict = {}) {
    const { detail, ...eventInitDictWithoutDetail } = eventInitDict;

    return super.dispatchEvent(
      new CustomEvent(type, {
        detail: {
          game: {
            ...JSON.parse(JSON.stringify(this._game)), // deep copy
          },
          ...detail,
        },
        bubbles: true,
        composed: true,
        cancelable: false,
        ...eventInitDictWithoutDetail,
      })
    );
  }

  _resetLongPressStates() {
    if (!this._isLongPressDisabled) {
      clearTimeout(this._longPressTimer);
    }
  }

  /**
   * @param {TouchEvent|MouseEvent} event
   */
  @eventOptions({ passive: true })
  _handleFieldClickStart(event) {
    if (typeof window.ontouchstart !== 'undefined' && event.type === 'mousedown') {
      this._resetLongPressStates();
      return;
    }
    const currentSweeperField = event.currentTarget;
    this._pressStartSweeperField = currentSweeperField;
    if (this._isLongPressDisabled) {
      return;
    }
    this._pressStartTimestamp = event.timeStamp;

    if (this._game && this._game.board && !this._game.isGameOver) {
      this._longPressTimer = setTimeout(() => {
        let animationInterval;
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
      }, this.longPressThreshold);
    }
  }

  @eventOptions({ passive: true })
  _handleFieldClickLeave() {
    this._resetLongPressStates();
  }

  /**
   * @param {PointerEvent} event
   */
  _handleFieldClickEnd(event) {
    const currentSweeperField = event.currentTarget;
    const wasLongPress =
      !this._isLongPressDisabled &&
      event.timeStamp - this._pressStartTimestamp > this.longPressThreshold;
    const stillSameSweeperField = this._pressStartSweeperField === currentSweeperField;
    this._resetLongPressStates();

    if (!this._game || !this._game.board || this._game.isGameOver || !stillSameSweeperField) {
      return;
    }

    const allowed = this.dispatchEvent('field-click', {
      detail: {
        field: currentSweeperField,
      },
      cancelable: true,
    });

    if (!allowed) {
      return;
    }

    const selectedRow = Number.parseInt(currentSweeperField.dataset.row, 10);
    const selectedColumn = Number.parseInt(currentSweeperField.dataset.column, 10);

    const { flags, questionMarks } = this._game.board;
    const hasFlag = flags[selectedRow][selectedColumn];
    if (wasLongPress || event.ctrlKey || event.altKey || event.metaKey) {
      const hasQuestionMark = questionMarks[selectedRow][selectedColumn];
      if (hasQuestionMark || hasFlag) {
        this._game.toggleQuestionMark(selectedRow, selectedColumn);
      } else {
        this._game.toggleFlag(selectedRow, selectedColumn);
      }
    } else if (!hasFlag) {
      // if user performs a regular click on a field with a flag on it cancel it
      this._game.selectField(selectedRow, selectedColumn);
    }
    this.requestUpdate();
  }

  render() {
    if (!this._game || !this._game.board) {
      return html`No Board :(`;
    }

    const { bombs, flagCounter, positions } = this._game.board;

    if (this.bombCounterSelector) {
      const bombCounterElements = document.querySelectorAll(this.bombCounterSelector);
      for (const bombCounterElement of bombCounterElements) {
        bombCounterElement.textContent = bombs - flagCounter;
      }
    }

    return html`
      <div class="sweeper-container">
        <div class="sweeper-box" @click="${(event) => event.preventDefault()}">
          ${positions.map(
            (row, rowIndex) =>
              html`
                <div class="sweeper-row">
                  ${row.map((field, columnIndex) =>
                    this._getSweeperFieldHtml(rowIndex, columnIndex)
                  )}
                </div>
              `
          )}
        </div>
        <div class="svg-container">
          ${Object.values(Icons).map((element) => unsafeSVG(element))}
        </div>
      </div>
    `;
  }

  _getSweeperFieldSvg(rowIndex, columnIndex) {
    const { revealedFields, questionMarks, flags, positions } = this._game.board;
    const isRevealed = revealedFields[rowIndex][columnIndex];
    const hasQuestionMark = questionMarks[rowIndex][columnIndex];
    const hasFlag = flags[rowIndex][columnIndex];

    let sweeperFieldSvg = Minesweeper.ICONS.UNOPENED_SQUARE;
    if (isRevealed) {
      const fieldValue = positions[rowIndex][columnIndex];
      if (fieldValue === FIELD_KEYS.BOMB) {
        sweeperFieldSvg = hasFlag ? Minesweeper.ICONS.FLAG : Minesweeper.ICONS.BOMB;
      } else if (fieldValue === FIELD_KEYS.BOMB_EXPLODE) {
        sweeperFieldSvg = Minesweeper.ICONS.BOMB_EXPLODE;
      } else if (hasFlag) {
        sweeperFieldSvg = Minesweeper.ICONS.FLAG_MISSED;
      } else {
        sweeperFieldSvg = Minesweeper.ICONS[`NUMBER_${fieldValue}`];
      }
    } else if (hasQuestionMark) {
      sweeperFieldSvg = Minesweeper.ICONS.QUESTION_MARK;
    } else if (hasFlag) {
      sweeperFieldSvg = Minesweeper.ICONS.FLAG;
    }

    return sweeperFieldSvg;
  }

  _getSweeperFieldHtml(rowIndex, columnIndex) {
    const {
      isGameOver,
      board: { revealedFields, flags },
    } = this._game;
    const isRevealed = revealedFields[rowIndex][columnIndex];
    const hasFlag = flags[rowIndex][columnIndex];

    const sweeperFieldSvg = this._getSweeperFieldSvg(rowIndex, columnIndex);

    const sweeperFieldClass = isRevealed || hasFlag || isGameOver
        ? ' unselectable'
        : '';
    const attachEventListener = !isRevealed && !isGameOver;

    if (attachEventListener) {
      return html`
        <div
          class="sweeper-field${sweeperFieldClass}"
          @touchstart="${this._handleFieldClickStart}"
          @touchend="${this._handleFieldClickLeave}"
          @touchcancel="${this._handleFieldClickLeave}"
          @mousedown="${this._handleFieldClickStart}"
          @mouseup="${this._handleFieldClickLeave}"
          @mouseleave="${this._handleFieldClickLeave}"
          @click="${this._handleFieldClickEnd}"
          data-row="${rowIndex}"
          data-column="${columnIndex}"
        >
          ${unsafeSVG(sweeperFieldSvg)}
        </div>
      `;
    }

    // game is over or field already revealed
    return html`
      <div
        class="sweeper-field${sweeperFieldClass}"
        data-row="${rowIndex}"
        data-column="${columnIndex}"
      >
        ${unsafeSVG(sweeperFieldSvg)}
      </div>
    `;
  }
}
