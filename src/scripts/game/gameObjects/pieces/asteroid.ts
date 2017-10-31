import GamePiece from 'scripts/game/gameObjects/gamepiece'

export default class Asteroid extends GamePiece
{
  constructor(x, y, game) {
    super(x, y, game)
  }

  draw() {
    let ctx = this.context
    ctx.fillStyle = 'rgba(255, 0, 0, 1)'
    ctx.beginPath()
    ctx.arc(this.x, this.y, 10, 0, 2*Math.PI)
    ctx.fill()
  }
}