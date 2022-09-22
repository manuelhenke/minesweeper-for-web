[![CI](https://github.com/manuelhenke/minesweeper-for-web/actions/workflows/ci.yml/badge.svg)](https://github.com/manuelhenke/minesweeper-for-web/actions/workflows/ci.yml)
[![CodeQL](https://github.com/manuelhenke/minesweeper-for-web/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/manuelhenke/minesweeper-for-web/actions/workflows/codeql-analysis.yml)
[![License](https://img.shields.io/github/license/manuelhenke/minesweeper-for-web)](./LICENSE)
[![NPM version](https://img.shields.io/npm/v/minesweeper-for-web.svg?style=flat)](https://www.npmjs.com/package/minesweeper-for-web)

# minesweeper-for-web

This is the classic Microsoft Minesweeper-Game as a WebComponent. Once you integrate it as described further, the game just follows the [standard rules](https://www.instructables.com/id/How-to-beat-Minesweeper/). To place a flag just press `ctrl`, `alt` or the meta key while clicking on a field.

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
| Name | Cancelable | Description | `detail` |
| ------------- | ------------------ | ------------------------- | ------ |
| `game-won` | :x: | User just won the game | <ul><li>`game`: `Object` current game state</li></ul> |
| `game-lost` | :x: | User just lost the game | <ul><li>`game`: `Object` current game state</li></ul> |
| `field-click` | :white_check_mark: | User clicked a field | <ul><li>`game`: `Object` current game state</li><li>`field`: `HTMLElement` clicked field</li></ul> |
| `field-long-press` | :white_check_mark: | User long pressed a field | <ul><li>`game`: `Object` current game state</li><li>`field`: `HTMLElement` long pressed field</li></ul> |

## Usage

### Basic usage

Just a basic 9x9 / 10 Mines minesweeper game. Further examples can be **combined**.

```html
<minesweeper-game></minesweeper-game>
```

### Provide left-bomb-counter container

To keep the user informed how many mines are left, after subtracting the number of placed flags, just provide a container for the counter.

```html
<p><span id="bomb-counter"></span> Mines</p>
<minesweeper-game bomb-counter-selector="#bomb-counter"></minesweeper-game>
```

### Provide a restart button

Provide a selector where a "click"-event will be attached to, to restart the game.

```html
<minesweeper-game restart-selector="#restart-game-button"></minesweeper-game>
<button id="restart-game-button">Restart!</button>
```

### Disable Long Press

Provide a number lower or equal to `0` to disable the long press functionality.

```html
<minesweeper-game long-press-threshold="0"></minesweeper-game>
```

### Trigger Restart via JavaScript

Write custom logic to restart the game.

```html
<minesweeper-game id="minesweeper"></minesweeper-game>
<button id="restart-game-button-confirm">Restart with Confirm!</button>
```

```javascript
window.addEventListener('DOMContentLoaded', () => {
  const minesweeper = document.querySelector('#minesweeper');

  document.querySelector('#restart-game-button-confirm').addEventListener('click', (event) => {
    event.preventDefault();
    if (window.confirm('Are you sure, that you want to restart the game?')) {
      minesweeper.restartGame();
    }
  });
});
```

### Custom win/lose event listener

Attach an EventListener for the win/lose events.

```html
<minesweeper-game id="minesweeper"></minesweeper-game>
```

```javascript
window.addEventListener('DOMContentLoaded', () => {
  const minesweeper = document.querySelector('#minesweeper');

  minesweeper.addEventListener('game-won', () => {
    console.log('win');
  });

  minesweeper.addEventListener('game-lost', () => {
    console.log('lose');
  });
});
```

### Custom field-click event listener

Attach an EventListener for a field click.

```html
<minesweeper-game id="minesweeper"></minesweeper-game>
```

```javascript
window.addEventListener('DOMContentLoaded', () => {
  const minesweeper = document.querySelector('#minesweeper');

  minesweeper.addEventListener('field-click', (event) => {
    // event.detail.field contains the html element of the clicked field
    // It has the data-row and data-column attributes
    // Currently there is no clean way to identify which type of field it is:
    // Number, Bomb, Flag or Questionmark before and after
    console.log(event.detail.field);
  });
});
```

### Different initial game configurations

Of course you can provide different configurations for the game.

```html
<minesweeper-game rows="30" columns="16" bombs="99"></minesweeper-game>
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
```

```javascript
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
```

## Example

You can try it at [CodePen](https://codepen.io/manuelhenke/pen/ExoPKLZ) or just take a look at the [demo.html](demo.html) included in this project.
![Example Image](minesweeper-example.png)

## License

[MIT License](./LICENSE)

### Icons Copyright

All rights for the icons used in this project belongs to their original creators:
https://commons.wikimedia.org/wiki/Category:Minesweeper

The icons "bomb_red.svg" and "bomb.svg" are based on "number-0.svg" and "flag_missed.svg" is based on "bomb.svg".
