/*
    soal : 
    buatlah bendera inggris pada abad pertengahan dan era perang salib 
    dengan lambang St. George's Cross, 
    https://id.wikipedia.org/wiki/Bendera_Inggris
    dengan berbagai ukuran yang ditentukan
    oleh input. bendera berbentuk persegi .
    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *
    petunjuk : 
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/
function benderaInggris(param)
{
  var result = "";
  var flagGenerator = "";
    if ( param % 2 === 0) {
      return "invalid input"
    } else {
      for ( var i = 0; i < param; i++) { //enter
        if ( i === Math.floor (param / 2)) {  //bintang di tengah
          for (var j = 0; j < param; j++) { 
            flagGenerator = flagGenerator + "*"
          }
          console.log(flagGenerator)
          flagGenerator = ""
        } else { // selain bintang tengah
          for (var k = 0; k < param; k++) { 
            if ( k === Math.floor ( param / 2)) {
              flagGenerator = flagGenerator + "*"
            } else {
              flagGenerator = flagGenerator + " "
            }
          }
          console.log(flagGenerator)
          flagGenerator = ""
        }
      }
    }
}

console.log(benderaInggris(9))

/*
    output:
    '    *    ' // 1
    '    *    ' // 2
    '    *    ' // ..
    '    *    '
    '*********'
    '    *    '
    '    *    '
    '    *    '
    '    *    ' // 9
*/

console.log(benderaInggris(5))
// /*
//     '  *  '
//     '  *  '
//     '*****'
//     '  *  '
//     '  *  '
// */

console.log(benderaInggris(4)) // invalid input
