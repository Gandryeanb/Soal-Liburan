// pengerjaan 32min

function soal2(param)
{
  var result = []

  if (param % 2 === 0) {
    return "invalid input"
  } else {
    var generator = []

    for (var i = 1; i <= param; i +=2) {
        for (var k = 0; k < ((param-i)/2); k++) {
          generator.push("")
        }
        for (var l = 0; l < i; l++) {
          generator.push("*")
        }
        for (var o = 0; o < ((param-i)/2); o++) {
          generator.push("")
        }
      result.push(generator)
      generator = []
    }
    return result
  }
}

console.log(soal2(5))
/*
  [
      ['','','*','',''],
      ['','*','*','*',''],
      ['*','*','*','*','*']
  ]
*/

console.log(soal2(3))
/*
  [
      ['','*',''],
      ['*','*','*']
  ]
*/

console.log(soal2(4)) // invalid input
console.log(soal2(2)) // invalid input
console.log(soal2(6)) // invalid input
