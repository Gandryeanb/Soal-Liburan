/* Challenge
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
Try not to use regex. =)
*/

// dont use regex
function LetterChanges(str) {
  var vowel = "aiueo"
  var alpha = "abcdefghijklmnopqrstuvwxyza"
  var index = alpha.indexOf(str[0])

  if (str.length === 0) {
    return ""
  } else {
    if (index !== -1) {
      for (var j = 0; j < vowel.length;j++) {
        if (alpha[index + 1] === vowel[j]) {
          return alpha[index + 1].toUpperCase() + LetterChanges(str.slice(1)) 
        }
      }
      return alpha[index + 1] + LetterChanges(str.slice(1)) 
      } else {
        return str[0] + LetterChanges(str.slice(1))
      }
    } 
}

// TEST CASES

console.log(LetterChanges( "this long cake@&"));//UIjt mpOh dblf@&  
console.log(LetterChanges( "hello world")); // Ifmmp xpsmE
console.log(LetterChanges( "replace!*"));// sfqmbdf!*      
console.log(LetterChanges( "a confusing /:sentence:/[ this is not!!!!!!!~"));//b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~    
console.log(LetterChanges("123456789ae"));//123456789bf
