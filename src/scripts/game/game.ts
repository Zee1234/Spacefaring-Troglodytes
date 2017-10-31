import Matrix from 'scripts/structures/matrix'
import TwoWayMap from 'scripts/support/twowaymap'
import Background from 'scripts/game/gameObjects/pieces/background'
import Asteroid from 'scripts/game/gameObjects/pieces/asteroid'
import Ship from 'scripts/game/gameObjects/pieces/ship'
import GamePiece from 'scripts/game/gameObjects/gamepiece'

export default class Game
{
  pieces
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  pressed: {[key: string]: boolean}
  keys: TwoWayMap<string, number>
  player: Ship
  last: number
  constructor(canvas) {
    this.pieces = []

    this.canvas = canvas
    this.context = canvas.getContext('2d')
    // this.context.scale(1000, 1000)

    this.pressed = {}

    this.keys = new TwoWayMap()
    this.keys.set('w', 87)
    this.keys.set('a', 65)
    this.keys.set('s', 83)
    this.keys.set('d', 68)
  }

  addPieces(...args: GamePiece[]) {
    args.forEach( piece => this.pieces.push(piece) )
  }

  loadPieces() {
    this.player = new Ship(20, 30, this)
    this.addPieces(
      new Background(this),
      new Asteroid(20, 30, this),
      this.player
    )
  }

  draw(t?: number) {

    this.last = t
    this.move(t)
    this.canvas.width = window.innerWidth
    this.canvas.style.width = window.innerWidth.toString()
    this.canvas.height = window.innerHeight
    this.canvas.style.height = window.innerHeight.toString()
    this.pieces.forEach( piece => piece.draw())
    requestAnimationFrame(this.draw.bind(this))
  }

  move(t: number) {
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

  newPlayer(player: Ship) {
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