const ExtendableProxy = require('./extendableproxy')

class TwoWayMap extends ExtendableProxy
{
  constructor() {
    super({
      get: (target, prop, value) => {
        switch (prop) {
          case 'delete':
            return k => {
              if (target.keyValue.get(k)) {
                let other = target.keyValue.get(k)
                target.keyValue.delete(k)
                target.valueKey.delete(other)
              } else if (target.valueKey.get(k)) {
                let other = target.valueKey.get(k)
                target.valueKey.delete(k)
                target.keyValue.delete(other)
              }
              return undefined
            }
          case 'set':
            return (k, v) => {
              if (target.keyValue.get(k) === v) {
                return;
              } else if (target.valueKey.get(v)) {
                return new Error('`set` attempt would break 1:1 requirement of TwoWayMap')
              } else if (target.keyValue.get(k) !== undefined) {
                let orig = target.keyValue.get(k)
                target.valueKey.delete(orig)
                target.keyValue.delete(k)
                target.keyValue.set(k,v)
                target.valueKey.set(v,k)
                return;
              } else {
                target.keyValue.set(k,v)
                target.valueKey.set(v,k)
                return;
              }
            }
          case 'get':
            return  key => target.keyValue.get(key) !== undefined && 
                    target.keyValue.get(key) || 
                    target.valueKey.get(key)
          case 'forEach':
            return target.keyValue.forEach
          case 'has':
            return key => target.keyValue.has(key) || target.valueKey.has(key)
          case 'keys':
            return target.keyValue.keys
          case 'values':
            return target.valueKey.values
          case 'entries':
            return target.keyValue.entries
          case 'clear':
            return _ => {
              target.keyValue.clear()
              target.valueKey.clear()
            }
          default:
            return undefined
        }
        
        return new Error('You\'re a god')
      }
    }, {
      valueKey: new Map(),
      keyValue: new Map()
    })
  }
}

module.exports = TwoWayMap