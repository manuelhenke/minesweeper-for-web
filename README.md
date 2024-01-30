# minesweeper-for-web

[![CI](https://github.com/manuelhenke/minesweeper-for-web/actions/workflows/ci.yml/badge.svg)](https://github.com/manuelhenke/minesweeper-for-web/actions/workflows/ci.yml)
[![CodeQL](https://github.com/manuelhenke/minesweeper-for-web/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/manuelhenke/minesweeper-for-web/actions/workflows/codeql-analysis.yml)
[![License](https://img.shields.io/github/license/manuelhenke/minesweeper-for-web)](./LICENSE)
[![NPM version](https://img.shields.io/npm/v/minesweeper-for-web.svg?style=flat)](https://www.npmjs.com/package/minesweeper-for-web)

This is **Minesweeper** as a **WebComponent**. Once you integrate it as described further, the game just follows the [standard rules](https://www.instructables.com/id/How-to-beat-Minesweeper/). To place a flag just press `ctrl`, `alt` or the meta key while clicking on a field.

## Getting Started

Install the package via `npm` or `yarn` and deliver the script to the user.
This can be done via `import`, `require` or just inserting a `script` tag.

```shell
npm i minesweeper-for-web
```

```shell
yarn add minesweeper-for-web
```

## Attributes

| Param                    | Type      | Description                                                                                                                                       | Default |
| ------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `columns`                | `number`  | Amount of columns of the board.                                                                                                                   | `9`     |
| `rows`                   | `number`  | Amount of rows of the board.                                                                                                                      | `9`     |
| `bombs`                  | `number`  | Amount of bombs of the board.                                                                                                                     | `10`    |
| `long-press-threshold`   | `number`  | Amount of milliseconds required to trigger a long press (placing a flag). A value of zero or below disabled the long press functionality overall. | `500`   |
| `disable-question-marks` | `boolean` | Disables the functionality to place question marks.                                                                                               | `false` |
| `flag-placement-mode`    | `boolean` | Enables the flag placement mode. A mode where every click places a flag instead of revealing the field.                                           | `false` |
| `restart-selector`       | `string`  | If present, attaches a click event listener to the element to trigger a restart.                                                                  |         |
| `bomb-counter-selector`  | `string`  | If present, changes the `textContent` of the provided element to the amount of bombs minus the amount of placed flags.                            |         |

## Events

By default, each event contains the current game state in `event.detail.game`. To discourage cheating, no events should be logged in the browser console.
| Name | Type | Cancelable | Description | `detail` |
| ------------- | ------------- | ------------------ | ------------------------- | ------ |
| `minesweeper:game-won` | `GameWonEvent`| :x: | User just won the game | <ul><li>`board`: `MinesweeperBoard` current game state</li></ul> |
| `minesweeper:game-lost` | `GameLostEvent`| :x: | User just lost the game | <ul><li>`board`: `MinesweeperBoard` current game state</li></ul> |
| `minesweeper:field-click` | `FieldClickEvent`| :white_check_mark: | User clicked a field | <ul><li>`board`: `MinesweeperBoard` current game state</li><li>`target`: `FieldTarget` target of the click</li><li>`field`: `HTMLElement` clicked field</li></ul> |
| `minesweeper:field-long-press` | `FieldLongPressEvent`| :white_check_mark: | User long pressed a field | <ul><li>`board`: `MinesweeperBoard` current game state</li><li>`target`: `FieldTarget` target of the long press</li><li>`field`: `HTMLElement` long pressed field</li></ul> |
| `minesweeper:field-interaction` | `FieldInteractionEvent`| :x: | Game state change occurred | <ul><li>`board`: `MinesweeperBoard` current game state</li><li>`target`: `FieldTarget` target of the interaction</li><li>`interaction`: `Interaction` interaction information</li></ul> |

## Usage

### Basic usage

Just a basic 9x9 / 10 Mines minesweeper game. Further examples can be **combined**.

```html
<minesweeper-game></minesweeper-game>

<script type="module">
  import 'minesweeper-for-web';
  // Alternatives:
  // import 'minesweeper-for-web/custom-element';
  // import 'minesweeper-for-web/custom-element.min';
</script>
```

### Custom tag name

Define your own custom tag name

```html
<custom-minesweeper-game></custom-minesweeper-game>

<script type="module">
  import { MinesweeperGame } from 'minesweeper-for-web/minesweeper-game';
  // Alternative:
  // import { MinesweeperGame } from 'minesweeper-for-web/minesweeper-game.min';
  window.customElements.define('custom-minesweeper-game', MinesweeperGame);
</script>
```

### Provide left-bomb-counter container

To keep the user informed how many mines are left, after subtracting the number of placed flags, just provide a container for the counter.

```html
<p><span id="bomb-counter"></span> Mines</p>
<minesweeper-game bomb-counter-selector="#bomb-counter"></minesweeper-game>

<script type="module">
  import 'minesweeper-for-web';
</script>
```

### Provide a restart button

Provide a selector where a "click"-event will be attached to, to restart the game.

```html
<minesweeper-game restart-selector="#restart-game-button"></minesweeper-game>
<button id="restart-game-button">Restart!</button>

<script type="module">
  import 'minesweeper-for-web';
</script>
```

### Disable Long Press

Provide a number lower or equal to `0` to disable the long press functionality.

```html
<minesweeper-game long-press-threshold="0"></minesweeper-game>

<script type="module">
  import 'minesweeper-for-web';
</script>
```

### Trigger Restart via JavaScript

Write custom logic to restart the game.

```html
<minesweeper-game id="minesweeper"></minesweeper-game>
<button id="restart-game-button-confirm">Restart with Confirm!</button>

<script type="module">
  import 'minesweeper-for-web';

  window.addEventListener('DOMContentLoaded', () => {
    const minesweeper = document.querySelector('#minesweeper');

    document.querySelector('#restart-game-button-confirm').addEventListener('click', (event) => {
      event.preventDefault();
      if (window.confirm('Are you sure, that you want to restart the game?')) {
        minesweeper.restartGame();
      }
    });
  });
</script>
```

### Custom win/lose event listener

Attach an EventListener for the win/lose events.

```html
<minesweeper-game id="minesweeper"></minesweeper-game>

<script type="module">
  import 'minesweeper-for-web';

  window.addEventListener('DOMContentLoaded', () => {
    const minesweeper = document.querySelector('#minesweeper');

    minesweeper.addEventListener('minesweeper:game-won', () => {
      console.log('win');
    });

    minesweeper.addEventListener('minesweeper:game-lost', () => {
      console.log('lose');
    });
  });
</script>
```

### Different initial game configurations

Of course you can provide different configurations for the game.

```html
<minesweeper-game rows="30" columns="16" bombs="99"></minesweeper-game>

<script type="module">
  import 'minesweeper-for-web';
</script>
```

### Providing a selectable gamemode

Furthermore you can implement some own logic to create a selectable gamemode

```html
<select name="select-game-mode" id="select-game-mode">
  <option value="easy" selected>Easy - 9x9 / 10 Mines</option>
  <option value="normal">Normal - 16x16 / 40 Mines</option>
  <option value="hard">Hard - 16x30 / 99 Mines</option>
</select>

<minesweeper-game id="minesweeper"></minesweeper-game>

<script type="module">
  import 'minesweeper-for-web';

  function getGameModeConfiguration(currentGameMode) {
    switch (currentGameMode) {
      case 'hard':
        return {
          columns: 30,
          rows: 16,
          bombs: 99,
        };
      case 'normal':
        return {
          columns: 16,
          rows: 16,
          bombs: 40,
        };
      default: // 'easy'
        return {
          columns: 9,
          rows: 9,
          bombs: 10,
        };
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    const minesweeper = document.querySelector('#minesweeper');

    document.querySelector('#select-game-mode').addEventListener('change', (event) => {
      event.preventDefault();

      const gameModeConfiguration = getGameModeConfiguration(event.target.value);
      minesweeper.setGameModeConfiguration(gameModeConfiguration);
    });
  });
</script>
```

## Example

Try it out at [CodePen](https://codepen.io/manuelhenke/pen/ExoPKLZ).

![Example Image](minesweeper-example.png)

## TypeScript

The whole package is written in TypeScript and therefore provides a strongly typed system via the `core` export of the package:

```html
<!-- some-file.html -->
<minesweeper-game id="minesweeper"></minesweeper-game>
```

```typescript
// some-file.ts
import 'minesweeper-for-web/custom-element';
import { FieldInteractionEvent, FieldInteractionType } from 'minesweeper-for-web/core';
import type { MinesweeperGame } from 'minesweeper-for-web/core';

const minesweeperGame = document.querySelector('#minesweeper') as MinesweeperGame;
minesweeperGame.addEventListener(
  'minesweeper:field-interaction',
  (event: FieldInteractionEvent) => {
    const { interaction } = event.detail;
    switch (interaction.type) {
      case FieldInteractionType.Unveiled:
        console.log('Revealed field value:', interaction.value);
        break;
      case FieldInteractionType.FlagAction:
      case FieldInteractionType.QuestionMarkAction:
        console.log('Performed action:', interaction.action);
        break;
    }
  }
);
```

## Engine

The engine can be used as a standalone library (`commonjs` and `esm`) via the `engine` export of the package. This enables the usage of the engine in every application (server- or client-side).

```javascript
import { MinesweeperEngine } from 'minesweeper-for-web/engine';

const engine = new MinesweeperEngine();

// Creates a board with 10 columns, 12 rows and 10 bombs
engine.createBoard(10, 12, 10);

// Unveils the field in the first row and second column (indexes)
engine.selectField(0, 1);

// Follows the specification of `selectField`
engine.toggleFlag(0, 2);
// Nothing happens since a flag is present on that field
engine.selectField(0, 2);

// Follows the specification of `selectField`
engine.toggleQuestionMark(0, 3);
// Still unveils the field regardless of the question mark
engine.selectField(0, 3);

if (engine.isGameOver) {
  // Restarts the game with the initial configuration
  engine.restart();
}
```

```javascript
const { MinesweeperEngine } = require('minesweeper-for-web/engine');

const engine = new MinesweeperEngine();

// ...
```

## License

[MIT License](./LICENSE)

### Icons Copyright

All rights for the icons used in this project belongs to their original creators:
https://commons.wikimedia.org/wiki/Category:Minesweeper

The icons "bomb_red.svg" and "bomb.svg" are based on "number-0.svg" and "flag_missed.svg" is based on "bomb.svg".
