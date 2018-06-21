//pengerjaan 15min

function rocket(param)
{
  var result = []
  var generator = []
    for (var i = 0; i < param; i++) {
      for (var j = 0; j < param; j++) {
        generator.push([i,j])
      }
      result.push(generator)
      generator = []
    }
  return result
}

console.log(rocket(3))

/*
    [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]]
    ]
*/
