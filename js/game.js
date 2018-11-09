class Game {
    constructor() {
        this.boardXLength = 9
        this.boardYLength = 10

        this.initialBoardContainer = (
            Array(this.boardYLength)
                .fill(1)
                .map(el => (
                    Array(this.boardXLength)
                        .fill(1)
                ))
        )

        this.boardContainer = null

        this.initialPlayerPosition = {
            x: 4,
            y: 9
        }
        this.playerPosition = this.initialPlayerPosition

        this.scoreContainer = null
        this.score = 0

        this.gameInterval = null

        this.init()
    }

    init() {
        this.startListeningToArrows()
        this.render()
        this.countScore()

        //alert('Press ok to play!')
    }

    render() {
        const gameBoardContainer = document.querySelector('.game-board-container')
        gameBoardContainer.innerHTML = ''

        this.composeBoard()
        this.boardContainer.forEach((row, i) => {
            const rowDiv = document.createElement('div')
            rowDiv.style.height = '90px'

            row.forEach((cell, j) => {
                this.renderSingleCell(cell, rowDiv)
            })
            gameBoardContainer.appendChild(rowDiv)
        })
    }

    renderSingleCell(cell, rowDiv) {
        const cellDiv = document.createElement('div')

        cellDiv.style.display = "inline-block"
        cellDiv.style.width = '90px'
        cellDiv.style.height = '90px'

        if (cell === 0) cellDiv.style.backgroundColor = 'green'
        if (cell === 1) cellDiv.style.backgroundColor = 'rgb(242, 242, 242)'
        if (cell === 'P') cellDiv.style.backgroundColor = 'rgb(242, 242, 242)'
        if (cell === 'P') cellDiv.style.backgroundImage = "url('./img/car.png')"
        if (cell === 'P') cellDiv.style.backgroundSize = "contain"

        rowDiv.appendChild(cellDiv)
    }

    composeBoard() {
        this.boardContainer = JSON.parse(JSON.stringify(this.initialBoardContainer))
        console.log(this.boardContainer)
        //this.boardContainer[0].forEach(element => element = Math.round(Math.random()))
        for (let i = 0; i < 9; i++) {
            this.boardContainer[0][i] = Math.round(Math.random());
        }
        console.log(this.boardContainer[0])
        this.boardContainer[this.playerPosition.y][this.playerPosition.x] = 'P'
    }

    startListeningToArrows() {
        window.addEventListener(
            'keydown',
            event => {
                switch (event.key) {
                    case 'ArrowRight':
                        event.preventDefault
                        this.checkIfMoveIsAvailable(1, 0)
                        break
                    case 'ArrowLeft':
                        event.preventDefault
                        this.checkIfMoveIsAvMath(-1, 0)
                        break;
                }
            }
        )
    }

    checkIfMoveIsAvailable(deltaX, deltaY) {
        const newPlayerPosition = {
            x: this.playerPosition.x + deltaX,
            y: this.playerPosition.y + deltaY
        }

        if (
            this.boardContainer[newPlayerPosition.y] &&
            this.boardContainer[newPlayerPosition.y][newPlayerPosition.x]
        ) {
            this.move(newPlayerPosition)
        }
    }

    move(newPlayerPosition) {
        this.playerPosition = newPlayerPosition
        this.render()
    }

    countScore() {
        this.score = document.querySelector('.score')
        this.scoreNumber = 0

        this.timer()
    }

    timer() {
        setInterval(() => {
            this.scoreNumber++
            this.score.innerText = `Score: ${this.scoreNumber}`
        }, 100)
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

