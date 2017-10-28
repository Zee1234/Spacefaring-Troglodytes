export default class NVector
{
  constructor() {
    [...arguments].forEach( (value, index) => {
      this[index] = value
    })
  }

  get x() {
    return this[0]
  }
  set x(v) {
    this[0] = v
  }

  get y() {
    return this[1]
  }
  set y(v) {
    this[1] = v
  }

  get z() {
    return this[2]
  }
  set z(v) {
    this[2] = v
  }
}