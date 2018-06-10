/*
    membuat bendera scotlandia
    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *
     petunjuk : 
    - input harus lebih dari 3 , jika tidak maka "invalid input"
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/

function scotlandFlag(param)
{
  var result = "";
  var star1 = 0;
  var star2 = param - 1;
 
  if (param <= 3 || param % 2 === 0) {
    return "invalid input"
  } else {
    for (var i = 0; i < param; i++) {
      for ( var j = 0; j < param; j++) {
        if (j === star1 || j === star2) {
          result = result + "*"
        } else (
          result = result + " "
        )
      }
      star1++
      star2--
      console.log (result)
      result = ""
    }
  }
}


console.log(scotlandFlag(5))
/*
    '*   *'
    ' * * '
    '  *  '
    ' * * '
    '*   *'
*/

console.log(scotlandFlag(9))
/*
    '*       *'
    ' *     * '
    '  *   *  '
    '   * *   '
    '    *    '
    '   * *   '
    '  *   *  '
    ' *     * '
    '*       *'
*/
