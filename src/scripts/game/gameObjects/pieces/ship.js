import GamePiece from 'scripts/game/gameObjects/gamepiece'

export default class Asteroid extends GamePiece
{
  constructor(x, y, canvas, context) {
    super(x, y, canvas, context)
  }

  draw(xOffset, yOffset) {
    let ctx = this.context
    ctx.fillStyle = 'rgba(0, 0, 255, 1)'
    ctx.beginPath()
    ctx.arc(this.x, this.y, 10, 0, 2*Math.PI)
    ctx.fill()
  }
}