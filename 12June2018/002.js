/*
    PSEUDOCODE

    FUNCTION soal2:
    parameter:
      -param (typeof 'number')

    START
      SET `result` with empty array
      SET `subResult` with empty array
      SET and STORE `alpha` with "abcdefghijklmnopqrstuvwxyz"
      SET and STORE `num` with 0

      IF param EQUALS to 0 THEN

        RETURN "invalid input" 

      ELSE

        FOR `i`to value of param
      
          FOR `j` to value of param
      
            IF `num` EQUALS to 26 THEN
              `num` EQUALS to 0
            END IF
            
            add `alpha` index of `num` to `subResult`
            num increment by 1
          
          END FOR
          
          add `subResult` to `result`
          `subResult` EQUALS to empty array
        
        END FOR
      
      END IF
      
      RETURN `result`
    
    END FUNCTION soal2
    
*/

function soal2(param)
{
  var result = []
  var subResult = []
  var aplha = "abcdefghijklmnopqrstuvwxyz"
  var num = 0

  if (param === 0) {
    return "invalid input"
  } else {
    for (var i = 0; i < param; i++) {
      for (var j = 0; j < param; j++) {
        if (num === 26) {
          num = 0
        }
        subResult.push(aplha[num])
        num++
      }
      result.push(subResult)
      subResult = []
    }
    return result
  }
}

console.log(soal2(8))
/*
    [
        ['a','b','c','d','e','f','g','h']
        ['i','j','k','l','m','n','o','p']
        ['q','r','s','t','u','v','w','x']
        ['y','z','a','b','c','d','e','f']
        ['g','h','i','j','k','l','m','n']
        ['o','p','q','r','s','t','u','v']
        ['w','x','y','z','a','b','c','d']
        ['e','f','g','h','i','j','k','l']
    ]
*/

console.log(soal2(2))
/*
    [
        ['a','b'],
        ['c','d']
    ]
*/

console.log(soal2(0)) // invalid input
