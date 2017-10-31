export default class NVector<A> extends Array<A>
{
  constructor(...args: A[]) {
    super()
    args.forEach( (value) => this.push(value))
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

  // forEach(func: (value: A, index?: number, matrix?: NVector<A>) => void, thisVar?: any) {
  //   for (let i = 0; i < this.length; i++) {
  //     func.call(thisVar !== undefined ? thisVar : this, this[i], i, this)
  //   }
  // }
}