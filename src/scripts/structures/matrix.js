import NVector from 'scripts/structures/nvector'


/*
  Matrix[x][y]
  new Matris ([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]
  ])
  new Matris ([
    [ (0,3), (1,3), (2,3), (3,3) ],
    [ (0,2), (1,2), (2,2), (3,2) ],
    [ (0,1), (1,1), (2,1), (3,1) ],
    [ (0,0), (1,0), (2,0), (3,0) ]
  ])
*/

export default class Matrix extends NVector
{
  constructor(arr) {
    let tempArray = [ [],[], [],[] ]
    arr.reverse().forEach( (v1, i1) => {
      v1.forEach( (v2, i2) => {
        tempArray[i2][i1] = v2
      })
    })
    super(...tempArray.map( (value) => {
      return new NVector(...value)
    }))
  }
}