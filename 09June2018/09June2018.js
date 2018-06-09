function soal1(param)
{
  var result = []
    if (param === 0) { // input 0
      return "invalid input"
    } else {
      for (var i = 0; i < param; i++) {
          result.push("")
        }
      if (param % 2 === 0) { // input genap
        result[ param / 2 ] = "*"
        result[( param / 2 ) - 1] = "*"
      } else { // input ganjil
        result[Math.floor(( param / 2 ))] = "*" 
      }
    }
    return result;
}

// test case
console.log( soal1(5) ) 
/*
    output : 
    ['','','*','','']
*/

console.log( soal1(4)) // ['','*','*','']

console.log( soal1(7)) // ['','','','*','','','']

console.log( soal1(10)) // ['','','','','*','*','','','','']

console.log( soal1(0)) // invalid input 

console.log( soal1(1)) // ['*']
