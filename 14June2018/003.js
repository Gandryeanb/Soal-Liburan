//pngerjaan 20min

function soal3(param1)
{
    var result = []
    var generator = []
    var swap = []
    var counter = 1

    for (var i = 1; i <= param1; i++) {
      for (var j = 0; j < param1; j++) {
        generator.push(counter)
        counter++
      }
      if (i % 2 === 0) {
        for (var k = param1 - 1; k >= 0; k--) {
          swap.push(generator[k])
        }
        result.push(swap)
        swap = []
        generator = []
      } else {
        result.push(generator)
        generator = []
      }
    }
    return result 
}

console.log(soal3(3))
/*
    [
        [1,2,3],
        [6,5,4],
        [7,8,9]
    ]
*/

 console.log(soal3(2))
// /*
//     [
//         [1,2],
//         [4,3]
//     ]
// */

 console.log(soal3(4))
// /*
//     [
//         [1,2,3,4],
//         [8,7,6,5],
//         [9,10,11,12],
//         [16,15,15,13]
//     ]
// */
