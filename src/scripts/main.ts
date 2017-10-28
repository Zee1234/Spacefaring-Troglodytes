import Game from 'scripts/game/game'
import Keys from 'scripts/support/keys'

const canvas = document.getElementById('gameport')
const board = new Game(canvas)
const keybinder = new Keys()


let keydownRegisterNumber = keybinder.registerKeydown(board.keydown.bind(board))
let keyupRegisterNumber   = keybinder.registerKeyup(board.keyup.bind(board))
window.addEventListener('keydown', keybinder.keydownTrigger.bind(keybinder))
window.addEventListener('keyup', keybinder.keyupTrigger.bind(keybinder))


board.loadPieces()
board.draw()

