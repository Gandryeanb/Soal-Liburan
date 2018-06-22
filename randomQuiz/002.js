//Piramid

function createPyramid(num){
  //                    *Rekursif way*

  // var result = ""

  // function step1(times) {
  //   if (times < 1) {
  //     return " "
  //   } else {
  //     return  "  * " + step1(times-1)
  //   }
  // }
  // result += step1(num) + "\n"

  // function step2(times) {
  //   if (times < 1) {
  //     return " "
  //   } else {
  //     return  " ***" + step2(times-1)
  //   }
  // }
  // result += step2(num) + "\n"

  //  function step3(times) {
  //   if (times < 1) {
  //     return "*"
  //   } else {
  //     return  "****" + step3(times-1)
  //   }
  // }
  // result += step3(num)

  //                    *Loop for way*

  // var result1 = ""
  // var result2 = ""
  // var result3 = ""

  // for (var i = 0; i < num; i++) {
  //   for (var j = 0; j < 1; j++) {
  //     for (var k = 0; k < 1; k++) {
  //       result1 += "  * "
  //     }
  //     result2 += " ***"
  //   }
  //   result3 += "****"
  // }
  // result3 += "*"
  // var result = result1 + "\n" + result2 + "\n" + result3
  // return result
}


console.log(createPyramid(1));
/*
	  *
	 ***
	*****
*/



console.log(createPyramid(2));
/*
	  *   *
	 *** ***
	*********
*/


console.log(createPyramid(5));

/*
	  *   *   *   *   *  
	 *** *** *** *** *** 
	*********************
	
*/

// function createPyramid(num) {
// 	var output = '';
// 	var width = 1 + 4 * num;
// 	for (var i = 0; i < 3; i++) {
// 		for (var space = 0, side = 2; space < width; space++) {
// 			if ((i === 0 && space !== side) || (i === 1 && space % 4 === 0)) {
// 				output += ' ';
// 			} else {
// 				output += '*';
// 				if (space === side) {
// 					side += 4;
// 				}
// 			}
// 		}
// 		output += '\n';
// 	}
// 	return output;
// }
