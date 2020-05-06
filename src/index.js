/*jshint esversion: 6 */

(function ($) {

    $.fn.minesweeper = function (options = {}) {
        if (!options.hasOwnProperty('pathToIcons')) {
            console.error('"pathToIcons" is missing in options provided at the .minesweeper() call');
            return null;
        }

        const pathToIcons = options.pathToIcons;
        const bombCounterSelector = options.hasOwnProperty('bombCounterSelector') ? options.bombCounterSelector : null;
        const onWinCallback = options.hasOwnProperty('onWinCallback') ? options.onWinCallback : () => { };
        const onLoseCallback = options.hasOwnProperty('onLoseCallback') ? options.onLoseCallback : () => { };

        const game = new MinesweeperGame(this, pathToIcons, bombCounterSelector, onWinCallback, onLoseCallback);


        const styleTags = [
            {
                selector: ".sweeper_field",
                filename: 'unopened_square.svg'
            },
            {
                selector: ".sweeper_field.flag",
                filename: 'flag.svg'
            },
            {
                selector: ".flag.flag_missed",
                filename: 'flag_missed.svg'
            },
            {
                selector: ".question",
                filename: 'questionmark.svg'
            },
            {
                selector: ".bomb_explode.bomb_trigger",
                filename: 'bomb_red.svg'
            },
            {
                selector: ".bomb_explode",
                filename: 'bomb.svg'
            }
        ];

        const rawStyleArray = [];
        for (const styleTag of styleTags) {
            rawStyleArray.push(`${styleTag.selector} {background-image: url("${pathToIcons + styleTag.filename }"); }`);
        }

        $('html > head').append($('<style>' + rawStyleArray.join('\n') + '</style>'));

        game.createBoard(options.gamemodeConfiguration);

        const newGameSelector = options.hasOwnProperty('newGameSelector') ? options.newGameSelector : '#newGame';
        $(newGameSelector).click(function () {
            game.restart();
        });

        return game;
    };

    function MinesweeperBoard(game, gamemodeConfiguration) {
        this.$minesweeperRoot = game.$minesweeperRoot;
        this.pathToIcons = game.pathToIcons;
        this.game = game;
        this.positions = null;
        this.rows = gamemodeConfiguration.rows;
        this.columns = gamemodeConfiguration.columns;
        this.bombs = gamemodeConfiguration.bombs;

        this.build = function () {
            let size = this.rows * this.columns;
            this.positions = [];
            const bombs_indexes = this.getBombPositions(size);
            $(this.game.bombCounterSelector).html(this.bombs);

            this.$minesweeperRoot.empty();

            let counter = 0;
            let board_html = '<div class="sweeper_box">';
            for (let i = 0; i < this.rows; i++) {

                board_html += '<div class="sweeper_row">';
                this.positions[i] = [];

                for (let j = 0; j < this.columns; j++) {

                    if (bombs_indexes.includes(counter)) {
                        board_html += '<div class="sweeper_field bomb"></div>';
                    } else {
                        board_html += '<div class="sweeper_field"></div>';
                    }
                    this.positions[i][j] = bombs_indexes.includes(counter++);

                }

                board_html += '</div>';

            }

            this.$minesweeperRoot.append(board_html + '</div>');

            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.columns; j++) {
                    if (!this.positions[i][j]) {
                        this.calculateFieldNumber(i, j);
                    }
                }
            }

            const board = this;
            $(".sweeper_field", this.$minesweeperRoot).click(function (e) {
                trackField(e, this, board);
            });
        };

        this.calculateFieldNumber = function (row, column) {
            let bomb_counter = 0;
            let tmp_position = this.positions;
            this.getNeighbours(row, column).forEach(function (neighbour) {
                let index = neighbour.split('-');
                if (tmp_position[index[0]][index[1]] === true) {
                    bomb_counter++;
                }
            });
            this.positions[row][column] = bomb_counter !== 0 ? bomb_counter : false;
        };

        this.getFieldNumber = function (row, column) {
            const posi = this.positions[row][column];

            if (posi === true) { // position contains bomb
                return true;
            } else if (posi === false) { // position contains no bomb and has no neighbour-bombs
                this.expand(row, column);
                return false;
            } else {  // position contains no bomb but neighbour-bombs
                return posi;
            }
        };

        this.expand = function (row, column) {
            row = parseInt(row);
            column = parseInt(column);
            let posi = this.positions[row][column];

            if (posi === true || posi === 0) {
                return;
            }
            posi = posi === false ? 0 : posi;

            $current = $(".sweeper_box .sweeper_row:nth-child(" + (row + 1) + ") .sweeper_field:nth-child(" + (column + 1) + ")", this.$minesweeperRoot);
            $current.css("background-image", 'url("' + this.pathToIcons + 'number-' + posi + '.svg")');
            $current.toggleClass("number_shown", true);
            $current.unbind();

            this.positions[row][column] = 0;

            if (posi === 0) {
                let neighbours = this.getNeighbours(row, column);

                for (let i = 0; i < neighbours.length; i++) {
                    index = neighbours[i].split('-');
                    this.expand(index[0], index[1]);
                }
            }

        };

        this.getNeighbours = function (row, column) {
            let res = [];

            /**xoo
             * oxo
             * ooo 
             */
            if (row > 0 && column > 0) {
                res.push((row - 1) + '-' + (column - 1));
            }

            /**oxo
             * oxo
             * ooo 
             */
            if (row > 0) {
                res.push((row - 1) + '-' + column);
            }

            /**oox
             * oxo
             * ooo 
             */
            if (row > 0 && column < (this.columns - 1)) {
                res.push((row - 1) + '-' + (column + 1));
            }

            /**ooo
             * oxx
             * ooo 
             */
            if (column < (this.columns - 1)) {
                res.push(row + '-' + (column + 1));
            }

            /**ooo
             * oxo
             * oox 
             */
            if (row < (this.rows - 1) && column < (this.columns - 1)) {
                res.push((row + 1) + '-' + (column + 1));
            }

            /**ooo
             * oxo
             * oxo 
             */
            if (row < (this.rows - 1)) {
                res.push((row + 1) + '-' + column);
            }

            /**ooo
             * oxo
             * xoo 
             */
            if (row < (this.rows - 1) && column > 0) {
                res.push((row + 1) + '-' + (column - 1));
            }

            /**ooo
             * xxo
             * ooo 
             */
            if (column > 0) {
                res.push(row + '-' + (column - 1));
            }

            return res;
        };

        this.getBombPositions = function (size) {
            let to_add;
            let result = [];

            while (result.length != this.bombs) {
                to_add = Math.floor(Math.random() * size);
                if (!result.includes(to_add)) {
                    result.push(to_add);
                }
            }
            return result;
        };

        this.updateBombs = function (increment) {
            this.bombs = increment ? this.bombs + 1 : this.bombs - 1;
            $(this.game.bombCounterSelector).html(this.bombs);
        };


        function trackField(e, current, board) {
            if (e.ctrlKey) {
                if (board.bombs === 0) return;
                board.updateBombs($(current).hasClass("flag"));
                $(current).toggleClass("flag");

            } else if ($(current).hasClass("flag")) {
                return;
            } else {
                let row = $(current).parents('.sweeper_box').find('.sweeper_row').index($(current).parent('.sweeper_row'));
                let column = $(current).parent('.sweeper_row').find('.sweeper_field').index($(current));

                let status = board.getFieldNumber(row, column);

                if (status === true) {
                    $(".sweeper_field", board.$minesweeperRoot).unbind();
                    $(".sweeper_field:not(.bomb):not(.flag)", board.$minesweeperRoot).toggleClass('number_shown');
                    $('.bomb:not(.flag)', board.$minesweeperRoot).toggleClass('bomb_explode');
                    $('.flag:not(.bomb)', board.$minesweeperRoot).toggleClass('flag_missed');
                    $(current).toggleClass('bomb_trigger');

                    board.game.onLoseCallback();
                    return;
                } else if (status !== false) {
                    $(current).toggleClass("number_shown", true);
                    $(current).css("background-image", 'url("' + board.pathToIcons + 'number-' + status + '.svg")');
                    $(current).unbind();
                }
            }
            if ($('.sweeper_field:not(.number_shown)', board.$minesweeperRoot).length == $('.sweeper_field.bomb').length) {
                const flagesPlaces = $('.bomb:not(.flag)', board.$minesweeperRoot).toggleClass('flag');

                for (let i = 0; i < flagesPlaces.length; i++) {
                    board.updateBombs(false);
                }
                board.game.onWinCallback();
            }
        }
    }

    function MinesweeperGame($minesweeperRoot, pathToIcons, bombCounterSelector, onWinCallback, onLoseCallback) {
        this.$minesweeperRoot = $minesweeperRoot;
        this.pathToIcons = pathToIcons;
        this.bombCounterSelector = bombCounterSelector;
        this.onWinCallback = onWinCallback;
        this.onLoseCallback = onLoseCallback;
        this.board = null;
        this.gamemodeConfiguration = null;

        this.createBoard = function (gamemodeConfiguration) {
            if (!(gamemodeConfiguration && typeof gamemodeConfiguration === 'object' &&
                gamemodeConfiguration.hasOwnProperty('columns') &&
                gamemodeConfiguration.hasOwnProperty('rows') &&
                gamemodeConfiguration.hasOwnProperty('bombs'))) {

                this.gamemodeConfiguration = {
                    columns: 9,
                    rows: 9,
                    bombs: 10
                };
            } else {
                this.gamemodeConfiguration = gamemodeConfiguration;
            }
            
            this.board = new MinesweeperBoard(this, this.gamemodeConfiguration);
            this.board.build();
        };

        this.restart = function () {
            console.log("restart");
            
            this.board.build();
        };
    }

})(jQuery);