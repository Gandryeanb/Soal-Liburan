function persegi(param1,param2)
{
  if (param1 === 0 || param2 === 0) {
    console.log("invalid value")
  } else {
    var result = ""
      for (var i = 0; i < param2; i++) {
        for (var j = 0; j < param1; j++) {
          if (i === 0 || i === param2 -1) {
            result += "#"
          } else {
            if (j === 0 || j === param1 -1) {
              result += "#"
            } else {
              result += " "
            }
          }
        }
        console.log(result)
        result = ""
      }
  }
}

console.log(persegi(5,7))

// /*
//     #####
//     #   #
//     #   #
//     #   #
//     #   #
//     #   #
//     #####
// */

console.log(persegi(6,3))

/*
    ######
    #    #
    ######
*/


console.log(persegi(0,7)) // invalid value 
console.log(persegi(4,0)) // invalid value 
