# minesweeper-for-web
This is the classic Microsoft Minesweeper-Game as a jQuery-Plugin. Once you implement it as described further, the game just follows the [standard rules](https://www.instructables.com/id/How-to-beat-Minesweeper/). To place a flag just press `ctrl` while clicking on a field.

# Getting Started
All you have to do is deliver everything in the dist/ folder to the user. Either by installing the npm package in your project or by cloning this repo into your project.

```shell
npm i minesweeper-for-web
```

# Usage

## Basic usage
Just a basic 9x9 / 10 Mines minesweeper game. You can **combine** further examples.
```html
<div class="minesweeper"></div>
```
```javascript
const minesweeper = $('.minesweeper').minesweeper({
     // pls replace the path with your actual path to the icons
    'pathToIcons': '/dist/assets/icons/'
});
```

## Provide left-bomb-counter container
To keep the user informed how many mines are there left, after subtracting the number of placed flags, just provide a container for the counter.
```html
<div><span id="bombCounter"></span> Mines</div>

<div class="minesweeper"></div>
```
```javascript
const minesweeper = $('.minesweeper').minesweeper({
     // pls replace the path with your actual path to the icons
    'pathToIcons': '/dist/assets/icons/',
    'bombCounterSelector': '#bombCounter'
});
```

## Provide a restart button
You can provide a jQuery selector where a "click"-event will be attached to, to restart the game or/and write your own custom logic.
```html
<div class="minesweeper"></div>

<button id="newMinesweeperGame">Restart!</button>
<button id="newMinesweeperGame_Custom">Restart with Confirm!</button>
```
```javascript
const minesweeper = $('.minesweeper').minesweeper({
     // pls replace the path with your actual path to the icons
    'pathToIcons': '/dist/assets/icons/',
    'newGameSelector': '#newMinesweeperGame'
});

$('#newMinesweeperGame_Custom').click(function(e) {
    e.preventDefault();
    if(confirm("Are you sure, that you want to restart the game?")) {
        minesweeper.restart();
    }
})
```

## Custom win/lose callbacks
You can provide callbacks for the win-/lose-state.
```html
<div class="minesweeper"></div>
```
```javascript
const minesweeper = $('.minesweeper').minesweeper({
     // pls replace the path with your actual path to the icons
    'pathToIcons': '/dist/assets/icons/',
    'onWinCallback': () => {
        console.log("win");
    },
    'onLoseCallback': () => {
        console.log("lose");
    }
});
```

## Different initial game configurations
Of course you can provide different configurations for the game.
```html
<div class="minesweeper"></div>
```
```javascript
const minesweeper = $('.minesweeper').minesweeper({
     // pls replace the path with your actual path to the icons
    'pathToIcons': '/dist/assets/icons/',
    'gamemodeConfiguration': {
        columns: 30,
        rows: 16,
        bombs: 99
    }
});
```

## Providing a selectable gamemode
Furthermore you can implement some own logic to create a selectable gamemode
```html
<select name="gamemode" id="gamemode">
    <option value="easy" selected>Easy - 9x9 / 10 Mines</option>
    <option value="normal">Normal - 16x16 / 40 Mines</option>
    <option value="hard">Hard - 16x30 / 99 Mines</option>
    <option value="custom">Custom</option>
</select>

<div class="minesweeper"></div>
```
```javascript
function getGamemodeConfiguration(currentGamemode) {
    switch (currentGamemode) {
        case 'easy':
            return {
                columns: 9,
                rows: 9,
                bombs: 10
            };
        case 'normal':
            return {
                columns: 16,
                rows: 16,
                bombs: 40
            };
        case 'hard':
            return {
                columns: 30,
                rows: 16,
                bombs: 99
            };
    }
}

const gamemodeConfiguration = getGamemodeConfiguration($('#gamemode').val());

const minesweeper = $('.minesweeper').minesweeper({
     // pls replace the path with your actual path to the icons
    'pathToIcons': '/dist/assets/icons/',
    'gamemodeConfiguration': gamemodeConfiguration
});

$('#gamemode').change(function (e) {
    e.preventDefault();

    const gamemodeConfiguration = getGamemodeConfiguration(this.value);
    minesweeper.createBoard(gamemodeConfiguration);
});
```


# Example
You can take a look at [index.html](index.html) to get a full example.
![Example Image](minesweeper-example.png)


# Icons Copyright
All rights for the icons used in this project belongs to their original creators: https://commons.wikimedia.org/wiki/Category:Minesweeper 
The icons "bomb_red.svg" and "bomb.svg" are based on "number-0.svg" and "flag_missed.svg" is based on "flag.svg".