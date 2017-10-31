import GamePiece from 'scripts/game/gameObjects/gamepiece'
import Matrix from 'scripts/structures/matrix'

export default class Background extends GamePiece
{
  private image: ImageData
  constructor(game) {
    super(0, 0, game)
    let width = this.canvas.width
    let height = this.canvas.height

    this.image = this.context.createImageData(width, height)
    let arr = []
    for (let i = 0; i < width; i+=4) {
      let num = !!((i/4)%2) ? 0 : 255
      this.image.data[i] = num
      this.image.data[i+1] = num
      this.image.data[i+2] = num
      this.image.data[i+4] = 255 
    }
  }

  draw() {
    let ctx = this.context
    ctx.putImageData(this.image, this.canvas.width, this.canvas.height)
    // let doot = [...new Array(this.canvas.width)].forEach( (_, x) => {
    //   return [...new Array(this.canvas.height)].forEach( (_, y) => {
    //     let color = (1-Math.pow(-1, x+y)) ? '255, 0, 0' : '255, 255, 255'
    //     ctx.fillStyle = `rgba(${color}, 1)`
    //     ctx.fillRect(x, y, 1, 1)

    //   })
    // })
    
  }
}