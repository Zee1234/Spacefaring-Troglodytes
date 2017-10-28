import GamePiece from 'scripts/game/gameObjects/gamepiece'

export default class Background extends GamePiece
{
  constructor(canvas, context) {
    super(0, 0, canvas, context)
  }

  draw(xOffset, yOffset) {
    let ctx = this.context
    ctx.fillStyle = 'rgb(255, 255, 255, 1)'
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }
}