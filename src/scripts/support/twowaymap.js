export default class TwoWayMap
{
  constructor() {
    this.valueKey = new Map()
    this.keyValue = new Map()

    this.set = function(k, v) {
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
    this.get = function(key) {
      return  this.keyValue.get(key) !== undefined && 
              this.keyValue.get(key) || 
              this.valueKey.get(key)
    }
  }

  delete (k) {
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
  forEach() {
    return this.keyValue.forEach()
  }
  has(key) {
    return this.keyValue.has(key) || this.valueKey.has(key)
  }
  keys() {
    return this.keyValue.keys()
  }
  values() {
    return this.valueKey.values()
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