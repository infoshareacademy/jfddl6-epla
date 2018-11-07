 class Game {
        constructor() {
            this.boardXLength = 7
            this.boardYLength = 10

            this.gameContainer = null
            this.scoreContainer = null

            this.initialBoardArr = (
                Array(this.boardYLength)
                    .fill(1)
                    .map(el => (
                        Array(this.boardXLength)
                            .fill(1)
                    ))
            )

            this.boardArr = null

            this.initialPlayerPosition = {
                x: 4,
                y: 10
            }
            this.playerPosition = this.initialPlayerPosition

            this.score = 0

            this.gameInterval = null

            this.init()
        }

        init() {

            this.startListeningToArrows()
            this.render()

            alert('Press "ok" to start!')
            this.gameInterval = setInterval(gameTick, 1000)
            // this function should be called when we want to init game
            // it accepts 1 argument - dom node of the container
            // where game should be rendered, eg it can be body of document

            // this function should render first frame of game and set all
            // of the variables like time to game end that werent predefinied
        }

        render() {
            document.body.innerHTML = ''

            this.composeBoard()
            this.boardArr.forEach((row, i) => {
                const rowDiv = document.createElement('div')
                rowDiv.style.height = '50px'

                row.forEach((cell, j) => {
                    this.renderSingleCell(cell, rowDiv)
                })
                document.body.appendChild(rowDiv)
            })
        }

        renderSingleCell(cell, rowDiv) {
            const cellDiv = document.createElement('div')

            cellDiv.style.display = "inline-block"
            cellDiv.style.width = '50px'
            cellDiv.style.height = '50px'

            if (cell === 0) cellDiv.style.backgroundColor = 'green'
            if (cell === 1) cellDiv.style.backgroundColor = 'gray'
            if (cell === 'P') cellDiv.style.backgroundColor = 'red'

            rowDiv.appendChild(cellDiv)
        }

        composeBoard() {
            this.boardArr = JSON.parse(JSON.stringify(this.initialBoardArr))
            this.boardArr[this.playerPosition.x] = 'P'
        }

        startListeningToArrows() {
            window.addEventListener(
                'keydown',
                event => {
                    switch (event.key) {
                        case 'ArrowRight':
                        event.preventDefault
                        this.checkIfMoveIsAvailable(1)
                        break
                    case 'ArrowLeft':
                        event.preventDefault
                        this.checkIfMoveIsAvailable(-1)
                        break
                    }
                }
            )
        }
        checkIfMoveIsAvailable(deltaX) {
            const newPlayerPosition = {
                x: this.playerPosition.x + deltaX
            }
            if (this.boardArr[newPlayerPosition.x])
            {
                this.move(newPlayerPosition)
            }
        }
        move(newPlayerPosition) {
            this.playerPosition = newPlayerPosition

            this.render()
        }

    }

    // FUNCTIONS



    // here you can put some functions taht renders only parts of the game 
    // and will be used in render function

    // here you will attach all events listeners like oncliks or keydowns
    function attachEventListeners() { }

    // move should be another function called eg. when event is fired
    // it is quite obvious that move bakwards is a move fovard with minus sign ;)


    // in this fucntion you can do all stuff that needs to be repeated
    // you can invoke this function in an interval
    // you can set that interval in init function
    function gameTick() { }

    // below functions are self-describing ;)
    function incScore() { }
    function displayScore() { }

    // invoked when game ends (you can check if time elepsed eg. in gameTick function)
    function endGame() { }

    // HELPERS

    // here put some functions that are not directly itto the game
    // but will help to do some general stuff - like make an array of ...

