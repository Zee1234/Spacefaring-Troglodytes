export default class Keys
{
  down
  downFuncs
  upFuncs
  constructor() {
    this.down = {}
    this.downFuncs = new Map() // Functions to call on keydown
    this.upFuncs   = new Map() // Functions to call on keyup
  }

  keydownTrigger(event) {
    this.downFuncs.forEach( func => {
      func(event.keyCode, this.down[event.keyCode] || false, event)
    })
    this.down[event.keyCode] = true
  }

  keyupTrigger(event) {
    console.log(event.keyCode)
    this.upFuncs.forEach( func => {
      func(event.keyCode, event)
    })
    this.down[event.keyCode] = false
  }

  registerKeydown(callback) {
    let s = this.downFuncs.size
    this.downFuncs.set(s, callback)
    return s
  }

  registerKeyup(callback) {
    let s = this.upFuncs.size
    this.upFuncs.set(s, callback)
    return s
  }

  deleteKeydown(num) {
    return this.downFuncs.delete(num)
  }

  deleteKeyup(num) {
    return this.upFuncs.delete(num)
  }
}