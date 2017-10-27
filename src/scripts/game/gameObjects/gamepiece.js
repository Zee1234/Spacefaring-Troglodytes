import Vector2D from 'scripts/structures/vector2d'

export default class GamePiece extends Vector2D
{
  constructor(xOffset, yOffset, canvas, context) {
    super(xOffset, yOffset)
    this.canvas = canvas
    this.context = context
  }
}