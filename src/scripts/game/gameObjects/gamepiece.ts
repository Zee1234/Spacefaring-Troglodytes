import Vector2D from 'scripts/structures/vector2d'
import Game from 'scripts/game/game'

export default class GamePiece extends Vector2D
{
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  constructor(xOffset: number, yOffset: number, public game: Game) {
    super(xOffset, yOffset)
    this.canvas = game.canvas
    this.context = game.context
  }
}