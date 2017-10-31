import NVector from 'scripts/structures/nvector'


/*
  Matrix[x][y]
  new Matris ([
    [ (0,0), (1,0), (2,0), (3,0) ],
    [ (0,1), (1,1), (2,1), (3,1) ],
    [ (0,2), (1,2), (2,2), (3,2) ],
    [ (0,3), (1,3), (2,3), (3,3) ]
  ])
*/

export default class Matrix<A> extends NVector<any>
{
  constructor(arr: Array<A[]>) {
    super(...arr.map( (value) => {
      return new NVector(...value)
    }))
  }

  iterate(func: (value: A, x?: number, y?: number, matrix?: Matrix<A>) => void, thisVar?: any) {
    super.forEach( (vec: NVector<A>, x: number) => {
      vec.forEach( (val: A, y: number) => {
        func.call(thisVar !== undefined ? thisVar : this, val, x, y, this)
      })
    })
  }
}

/*
[ts]
Class 'Matrix<A>' incorrectly extends base class 'NVector<NVector<A>>'.
  Types of property 'forEach' are incompatible.
    Type '(func: (value: A, x?: number, y?: number, matrix?: Matrix<A>) => void, thisVar?: any) => void' is not assignable to type '(func: (value: NVector<A>, index?: number, matrix?: NVector<NVector<A>>) => void, thisVar?: any) ...'.
      Types of parameters 'func' and 'func' are incompatible.
        Types of parameters 'value' and 'value' are incompatible.
          Type 'A' is not assignable to type 'NVector<A>'.
class Matrix<A>
*/