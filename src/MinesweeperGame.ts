/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable lit-a11y/click-events-have-key-events */
import { html, unsafeCSS, LitElement } from 'lit';
import { eventOptions, property, state } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { MinesweeperEngine } from '@/engine';
import { Icons } from '@/config';
import {
  GameWonEvent,
  GameLostEvent,
  FieldLongPressEvent,
  FieldClickEvent,
  FieldInteractionEvent,
} from '@/events';
import { FieldInteractionType, FieldKey, GameModeConfiguration, FieldTarget } from '@/types';
import { deltaToActionType, getSVGReference } from '@/utils';
import Style from './minesweeper.scss';

const IconsReferences = {
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

type IconsReferencesKey = keyof typeof IconsReferences;

/**
 * @fires {GameWonEvent} minesweeper:game-won - User just won the game
 * @fires {GameLostEvent} minesweeper:game-lost - User just lost the game
 * @fires {FieldClickEvent} minesweeper:field-click - User clicked a field
 * @fires {FieldLongPressEvent} minesweeper:field-long-press - User long pressed a field
 * @fires {FieldInteractionEvent} minesweeper:field-interaction - Game state change occurred
 */
export class MinesweeperGame extends LitElement {
  static get styles() {
    return unsafeCSS(Style);
  }

  @property({
    attribute: 'restart-selector',
    type: String,
  })
  restartSelector?: string;

  @property({
    attribute: 'bomb-counter-selector',
    type: String,
  })
  bombCounterSelector?: string;

  @property({
    attribute: 'flag-placement-mode',
    type: Boolean,
    reflect: true,
  })
  flagPlacementMode = false;

  @property({
    attribute: 'disable-question-marks',
    type: Boolean,
  })
  disableQuestionMarks = false;

  @property({
    attribute: 'long-press-threshold',
    type: Number,
  })
  longPressThreshold = 500;

  @property({
    type: Number,
  })
  columns = 9;

  @property({
    type: Number,
  })
  rows = 9;

  @property({
    type: Number,
  })
  bombs = 10;

  @state({})
  private engine: MinesweeperEngine;

  @state({})
  private pressStartTimestamp?: number;

  @state({})
  private pressStartSweeperField?: HTMLElement;

  @state({})
  private longPressTimerId?: number;

  @state({})
  private isPressingFlagKey = false;

  constructor() {
    super();

    this.engine = new MinesweeperEngine(
      this.gameWonCallback.bind(this),
      this.gameLostCallback.bind(this)
    );
  }

  connectedCallback() {
    // @ts-expect-error: super.connectedCallback always defined
    if (super.connectedCallback) {
      super.connectedCallback();
    }

    if (this.restartSelector) {
      const restartElements = document.querySelectorAll(this.restartSelector);
      restartElements.forEach((restartElement) => {
        restartElement.addEventListener('click', this.restartGame.bind(this));
      });
    }

    this.createGameBoard();

    this.handleDocumentKeydown = this.handleDocumentKeydown.bind(this);
    this.handleDocumentKeyup = this.handleDocumentKeyup.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    document.addEventListener('keydown', this.handleDocumentKeydown);
    document.addEventListener('keyup', this.handleDocumentKeyup);
    document.addEventListener('scroll', this.handleScroll);
  }

  disconnectedCallback() {
    // @ts-expect-error: super.disconnectedCallback always defined
    if (super.disconnectedCallback) {
      super.disconnectedCallback();
    }
    document.removeEventListener('keydown', this.handleDocumentKeydown);
    document.removeEventListener('keyup', this.handleDocumentKeyup);
    document.removeEventListener('scroll', this.handleScroll);
  }

  private handleDocumentKeydown(event: KeyboardEvent) {
    this.isPressingFlagKey = event.ctrlKey || event.altKey || event.metaKey;
  }

  private handleDocumentKeyup() {
    this.isPressingFlagKey = false;
  }

  private handleSweeperContainerMouseMove(event: MouseEvent) {
    this.isPressingFlagKey = event.ctrlKey || event.altKey || event.metaKey;
  }

  private createGameBoard() {
    if (this.engine) {
      this.engine.createBoard(this.columns, this.rows, this.bombs);
      this.requestUpdate();
    }
  }

  private gameWonCallback() {
    this.dispatchEvent(new GameWonEvent(this.engine.board));
  }

  private gameLostCallback() {
    this.dispatchEvent(new GameLostEvent(this.engine.board));
  }

  setGameModeConfiguration(gameModeConfiguration: GameModeConfiguration) {
    this.columns = gameModeConfiguration.columns;
    this.rows = gameModeConfiguration.rows;
    this.bombs = gameModeConfiguration.bombs;
    this.createGameBoard();
  }

  restartGame() {
    if (this.engine) {
      this.engine.restart();
      this.requestUpdate();
    }
  }

  private get isLongPressDisabled() {
    return !this.longPressThreshold || this.longPressThreshold <= 0;
  }

  private resetLongPressStates() {
    if (!this.isLongPressDisabled) {
      window.clearTimeout(this.longPressTimerId);
    }
  }

  private handleScroll() {
    this.resetLongPressStates();
  }

  private handleLongPress(sweeperField: HTMLElement) {
    const { row, column } = sweeperField.dataset;
    if (!row || !column) {
      console.error(
        new Error('Provided sweeper field does not contain the "row" and "column" data attribute.')
      );
      return;
    }
    const selectedRow = Number.parseInt(row, 10);
    const selectedColumn = Number.parseInt(column, 10);

    const allowed = this.dispatchEvent(
      new FieldLongPressEvent(
        this.engine.board,
        {
          row: selectedRow,
          column: selectedColumn,
        },
        sweeperField
      )
    );

    if (!allowed) {
      return;
    }

    let animationIntervalId: number;
    const flagSvg = sweeperField.querySelector('svg');
    if (!flagSvg) {
      console.error(new Error('Svg child of the provided sweeper field not found.'));
      return;
    }

    let currentScale = 1;
    const scale = () => {
      if (currentScale >= 1.25) {
        window.clearInterval(animationIntervalId);
        flagSvg.style.transform = 'none';

        this.triggerSecondActionClick(selectedRow, selectedColumn);
        this.requestUpdate();
      } else {
        currentScale += 0.01;
        flagSvg.style.transform = `scale(${currentScale})`;
      }
    };
    animationIntervalId = window.setInterval(scale, 2);
    if (typeof window.navigator.vibrate === 'function') {
      window.navigator.vibrate(100);
    }
  }

  @eventOptions({ passive: true })
  private handleFieldClickStart(event: TouchEvent | MouseEvent) {
    if (window.ontouchstart !== undefined && event.type === 'mousedown') {
      this.resetLongPressStates();
      return;
    }
    const currentSweeperField = event.currentTarget as HTMLElement;
    this.pressStartSweeperField = currentSweeperField;
    if (this.isLongPressDisabled) {
      return;
    }
    this.pressStartTimestamp = event.timeStamp;

    if (this.engine && this.engine.board && !this.engine.isGameOver) {
      this.longPressTimerId = window.setTimeout(
        () => this.handleLongPress(currentSweeperField),
        this.longPressThreshold
      );
    }
  }

  @eventOptions({ passive: true })
  private handleFieldClickLeave() {
    this.resetLongPressStates();
  }

  private handleFieldClickEnd(event: PointerEvent) {
    const currentSweeperField = event.currentTarget as HTMLElement;
    const wasLongPress =
      !this.isLongPressDisabled &&
      event.timeStamp - (this.pressStartTimestamp || event.timeStamp) > this.longPressThreshold;
    const stillSameSweeperField = this.pressStartSweeperField === currentSweeperField;
    this.resetLongPressStates();

    if (
      !this.engine ||
      !this.engine.board ||
      this.engine.isGameOver ||
      !stillSameSweeperField ||
      wasLongPress
    ) {
      return;
    }

    const { row, column } = currentSweeperField.dataset;
    if (!row || !column) {
      console.error(
        new Error('Provided sweeper field does not contain the "row" and "column" data attribute.')
      );
      return;
    }
    const selectedRow = Number.parseInt(row, 10);
    const selectedColumn = Number.parseInt(column, 10);

    const allowed = this.dispatchEvent(
      new FieldClickEvent(
        this.engine.board,
        {
          row: selectedRow,
          column: selectedColumn,
        },
        currentSweeperField
      )
    );

    if (!allowed) {
      return;
    }

    const { flags } = this.engine.board;
    const hasFlag = flags[selectedRow][selectedColumn];
    if (event.ctrlKey || event.altKey || event.metaKey || this.flagPlacementMode) {
      this.triggerSecondActionClick(selectedRow, selectedColumn);
    } else if (!hasFlag) {
      // if user performs a regular click on a field with a flag on it cancel it
      const fieldValue = this.engine.selectField(selectedRow, selectedColumn);
      this.dispatchEvent(
        new FieldInteractionEvent(
          this.engine.board,
          {
            row: selectedRow,
            column: selectedColumn,
          },
          {
            type: FieldInteractionType.Unveiled,
            value: fieldValue,
          }
        )
      );
    }
    this.requestUpdate();
  }

  private triggerSecondActionClick(selectedRow: number, selectedColumn: number) {
    const { flags, questionMarks } = this.engine.board;
    const hasFlag = flags[selectedRow][selectedColumn];
    const hasQuestionMark = questionMarks[selectedRow][selectedColumn];

    const fieldTarget: FieldTarget = {
      row: selectedRow,
      column: selectedColumn,
    };

    if (!this.flagPlacementMode && !this.disableQuestionMarks && (hasQuestionMark || hasFlag)) {
      const questionMarksDelta = this.engine.toggleQuestionMark(selectedRow, selectedColumn);
      if (hasFlag && questionMarksDelta === 1) {
        this.dispatchEvent(
          new FieldInteractionEvent(this.engine.board, fieldTarget, {
            type: FieldInteractionType.FlagAction,
            action: deltaToActionType(-1),
          })
        );
      }
      this.dispatchEvent(
        new FieldInteractionEvent(this.engine.board, fieldTarget, {
          type: FieldInteractionType.QuestionMarkAction,
          action: deltaToActionType(questionMarksDelta),
        })
      );
    } else {
      const flagsDelta = this.engine.toggleFlag(selectedRow, selectedColumn);
      this.dispatchEvent(
        new FieldInteractionEvent(this.engine.board, fieldTarget, {
          type: FieldInteractionType.FlagAction,
          action: deltaToActionType(flagsDelta),
        })
      );
    }
  }

  render() {
    if (!this.engine?.board) {
      return html`No Board :(`;
    }

    const { bombs, flagCounter, positions } = this.engine.board;

    if (this.bombCounterSelector) {
      const bombCounterElements = document.querySelectorAll(this.bombCounterSelector);
      bombCounterElements.forEach((element) => {
        // eslint-disable-next-line no-param-reassign
        element.textContent = `${bombs - flagCounter}`;
      });
    }

    return html`
      <div
        class="sweeper-container${this.flagPlacementMode || this.isPressingFlagKey
          ? ' show-hover-elements'
          : ''}"
        @mousemove="${this.handleSweeperContainerMouseMove}"
        @scroll="${this.handleScroll}"
      >
        <div class="sweeper-box" @click="${(event: MouseEvent) => event.preventDefault()}">
          ${positions.map(
            (row, rowIndex) =>
              html`
                <div class="sweeper-row">
                  ${row.map((field, columnIndex) =>
                    this.getSweeperFieldHtml(rowIndex, columnIndex)
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

  private getSweeperFieldSvg(rowIndex: number, columnIndex: number) {
    const { revealedFields, questionMarks, flags, positions } = this.engine.board;
    const isRevealed = revealedFields[rowIndex][columnIndex];
    const hasQuestionMark = questionMarks[rowIndex][columnIndex];
    const hasFlag = flags[rowIndex][columnIndex];

    let sweeperFieldSvg = IconsReferences.UNOPENED_SQUARE;
    if (isRevealed) {
      const fieldValue = positions[rowIndex][columnIndex];
      if (fieldValue === FieldKey.BOMB) {
        sweeperFieldSvg = hasFlag ? IconsReferences.FLAG : IconsReferences.BOMB;
      } else if (fieldValue === FieldKey.BOMB_EXPLODE) {
        sweeperFieldSvg = IconsReferences.BOMB_EXPLODE;
      } else if (hasFlag) {
        sweeperFieldSvg = IconsReferences.FLAG_MISSED;
      } else {
        const numberKey = `NUMBER_${fieldValue}` as IconsReferencesKey;
        sweeperFieldSvg = IconsReferences[numberKey];
      }
    } else if (hasQuestionMark) {
      sweeperFieldSvg = IconsReferences.QUESTION_MARK;
    } else if (hasFlag) {
      sweeperFieldSvg = IconsReferences.FLAG;
    }

    return sweeperFieldSvg;
  }

  private getHoverSweeperFieldSvg(mainSweeperFieldSvg: string) {
    switch (mainSweeperFieldSvg) {
      case IconsReferences.FLAG: {
        return this.disableQuestionMarks || this.flagPlacementMode
          ? IconsReferences.UNOPENED_SQUARE
          : IconsReferences.QUESTION_MARK;
      }
      case IconsReferences.QUESTION_MARK: {
        return IconsReferences.UNOPENED_SQUARE;
      }
      case IconsReferences.UNOPENED_SQUARE: {
        return IconsReferences.FLAG;
      }
      default: {
        return mainSweeperFieldSvg;
      }
    }
  }

  private getSweeperFieldHtml(rowIndex: number, columnIndex: number) {
    const {
      isGameOver,
      board: { revealedFields, flags },
    } = this.engine;
    const isRevealed = revealedFields[rowIndex][columnIndex];
    const hasFlag = flags[rowIndex][columnIndex];

    const sweeperFieldSvg = this.getSweeperFieldSvg(rowIndex, columnIndex);

    const sweeperFieldClass =
      isRevealed || (hasFlag && !(this.flagPlacementMode || this.isPressingFlagKey)) || isGameOver
        ? ' unselectable'
        : '';
    const attachEventListener = !isRevealed && !isGameOver;

    if (attachEventListener) {
      return html`
        <div
          class="sweeper-field${sweeperFieldClass}"
          @touchstart="${this.handleFieldClickStart}"
          @touchend="${this.handleFieldClickLeave}"
          @touchcancel="${this.handleFieldClickLeave}"
          @mousedown="${this.handleFieldClickStart}"
          @mouseup="${this.handleFieldClickLeave}"
          @mouseleave="${this.handleFieldClickLeave}"
          @click="${this.handleFieldClickEnd}"
          data-row="${rowIndex}"
          data-column="${columnIndex}"
        >
          ${unsafeSVG(sweeperFieldSvg)} ${unsafeSVG(this.getHoverSweeperFieldSvg(sweeperFieldSvg))}
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

declare global {
  interface GlobalEventHandlersEventMap {
    'minesweeper:game-won': GameWonEvent;
    'minesweeper:game-lost': GameLostEvent;
    'minesweeper:field-click': FieldClickEvent;
    'minesweeper:field-long-press': FieldLongPressEvent;
    'minesweeper:field-interaction': FieldInteractionEvent;
  }
}

export default MinesweeperGame;
