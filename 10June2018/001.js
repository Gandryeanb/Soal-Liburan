/*
    analisa sendiri dengan apa yang diminta soal melalui test case. 
    wajib menggunakan pseudocode
    
    PSEUDOCODE HERE : 

    FUNCTION soal1
      parameter:
      - param (type of data 'number')

    START
      STORE AND SET `i` with 0
      SET `result` with empty array
      STORE AND SET `display` with ["!","@","#"]

      IF type of param EQUALS 'number' AND param > 0 THEN

        FOR `i` to length of param

          IF `result` length EQUALS 0 OR last value of `result` EQUALS value index 2 of `display` THEN
            ADD `display` index of 0 to `result`

          ELSE IF last value of `result` EQUALS value index 0 of `display` THEN
            ADD `display` index of 1 to `result`

          ELSE
            ADD `display` index of 2 to `result`

          END IF

        RETURN `result`

      ELSE 

        RETURN "invalid input"

      END IF

    END FUNCTION
*/
function soal1(param)
{
  var result = []
  var display = ["!","@","#"]

  if ( typeof param === 'number' && param > 0) {
    for (var i = 1; i <= param; i++) {
      if (result.length === 0 || result[result.length - 1 ] === display[2] ) {
        result.push(display[0])
      } else if (result[result.length - 1] === display[0]) {
        result.push(display[1])
      } else {
        result.push(display[2])
      }
    }
    return result
  } else {
    return "invalid input"
  }
}

console.log(soal1(3))
// output : ['!','@','#']

console.log(soal1(6));
// // output : ['!','@','#','!','@','#']

console.log(soal1(4))
// // output : ['!','@','#','!']

console.log(soal1(0)) // invalid input
