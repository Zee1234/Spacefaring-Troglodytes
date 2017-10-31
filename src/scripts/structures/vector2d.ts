import NVector from 'scripts/structures/nvector'

export default class Vector2D extends NVector<number>
{
  constructor(x: number,y: number) {
    super(x,y)
  }
}