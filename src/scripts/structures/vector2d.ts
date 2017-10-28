import NVector from 'scripts/structures/nvector'

export default class Vector2D extends NVector
{
  constructor(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Attempt to construct Vector2D with non-number arguments')
    }
    super(x,y)
  }
}