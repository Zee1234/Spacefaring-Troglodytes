export default class TwoWayMap<A, B>
{
  keyValue: Map<A, B>
  valueKey: Map<B, A>
  set
  get
  constructor() {
    this.valueKey = new Map()
    this.keyValue = new Map()

    this.set = function(k: A, v: B) {
      if (this.keyValue.get(k) === v) {
        return;
      } else if (this.valueKey.get(v) !== undefined) {
        return new Error('`set` attempt would break 1:1 requirement of TwoWayMap')
      } else if (this.keyValue.get(k) !== undefined) {
        let orig = this.keyValue.get(k)
        this.valueKey.delete(orig)
        this.keyValue.delete(k)
        this.keyValue.set(k,v)
        this.valueKey.set(v,k)
        return;
      } else {
        this.keyValue.set(k,v)
        this.valueKey.set(v,k)
        return;
      }
    }
    this.get = function(key: A & B) {
      return  this.keyValue.get(key) !== undefined && 
              this.keyValue.get(key) || 
              this.valueKey.get(key)
    }
  }

  delete (k: A & B) {
      if (this.keyValue.get(k)) {
        let other = this.keyValue.get(k)
        this.keyValue.delete(k)
        this.valueKey.delete(other)
      } else if (this.valueKey.get(k)) {
        let other = this.valueKey.get(k)
        this.valueKey.delete(k)
        this.keyValue.delete(other)
      }
      return undefined
    }
  forEach(cb: (value: B, key?: A, map?: Map<A, B>) => void, thisArg?: any) {
    return this.keyValue.forEach(cb, thisArg)
  }
  has(key: A & B) {
    return this.keyValue.has(key) || this.valueKey.has(key)
  }
  keys() {
    return this.keyValue.keys()
  }
  values() {
    return this.valueKey.keys()
  }
  entries() {
    return this.keyValue.entries()
  }
  clear() {
    this.keyValue.clear()
    this.valueKey.clear()
    return true
  }
}