//Piramid

function createPyramid(num){
  var result1 = ""
  var result2 = ""
  var result3 = ""

  function step1(times) {
    if (times < 1) {
      return " "
    } else {
      return  "  * " + step1(times-1)
    }
  }
  result1 = step1(num)

  function step2(times) {
    if (times < 1) {
      return " "
    } else {
      return  " ***" + step2(times-1)
    }
  }
  result2 = step2(num)

   function step3(times) {
    if (times < 1) {
      return "*"
    } else {
      return  "****" + step3(times-1)
    }
  }
  result3 = step3(num)

  return result1 + "\n" + result2 + "\n" + result3

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
