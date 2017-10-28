import Matrix from 'scripts/structures/matrix'
import TwoWayMap from 'scripts/support/twowaymap'
import Background from 'scripts/game/gameObjects/pieces/background'
import Asteroid from 'scripts/game/gameObjects/pieces/asteroid'
import Ship from 'scripts/game/gameObjects/pieces/ship'

export default class Game
{
  constructor(canvas) {
    this.pieces = []

    this.canvas = canvas
    this.context = canvas.getContext('2d')

    this.pressed = {}

    this.keys = new TwoWayMap()
    this.keys.set('w', 87)
    this.keys.set('a', 65)
    this.keys.set('s', 83)
    this.keys.set('d', 68)
  }

  addPieces() {
    [...arguments].forEach( piece => this.pieces.push(piece) )
  }

  loadPieces() {
    this.player = new Ship(20, 30, this.canvas, this.context)
    this.addPieces(
      new Background(this.canvas, this.context),
      new Asteroid(20, 30, this.canvas, this.context),
      this.player
    )
  }

  draw(t) {

    this.last = t
    this.move(t)
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this.pieces.forEach( piece => piece.draw())
    requestAnimationFrame(this.draw.bind(this))
  }

  move(t) {
    if (this.pressed.w) {
      this.player.y -= 1
    }
    if (this.pressed.a) {
      this.player.x -= 1
    }
    if (this.pressed.s) {
      this.player.y += 1
    }
    if (this.pressed.d) {
      this.player.x += 1
    }
  }

  newPlayer(player) {
    this.player = player
  }



  /// Define controls for the game, as well as handlers
  keydown(key, repeat, event) {
    let code = this.keys.get(key)
    if (code) {
      this.pressed[code] = true
    }
  }

  keyup(key, event) {
    this.pressed[this.keys.get(key)] = false
  }


}

//module.exports = Game