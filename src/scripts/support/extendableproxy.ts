export default class ExtendableProxy
{
  constructor(traps, defaultProps) {
    if (defaultProps) {
      Object.keys(defaultProps).forEach( key => {
        this[key] = defaultProps[key]
      })
    }
    return new Proxy(this, traps)
  }
}