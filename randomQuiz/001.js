function soal1(angka) {
  var input = angka
  var result = []
  var generator = []
  var counter = 1
  var x = 0
  var y = 0

  for (var i = 0; i < input + 2; i++) {
    for (var j = 0; j < input + 2; j++) {
      generator.push(" ")
    }
    result.push(generator)
    generator = []
  }
  function atas(count) {
    var counterStr = String(counter)
    var counterStrLast = counterStr[counterStr.length - 1]
    if (count < 0) {
      return
    } else {
      return result[x][y] = counterStrLast, y++,counter++,atas(count-1)
    }
  }
  function kanan(count) {
    var counterStr = String(counter)
    var counterStrLast = counterStr[counterStr.length - 1]
      if (count < 0) {
      return
    } else {
      return result[x][y] = counterStrLast, x++,counter++,kanan(count-1)
    }
  }
  function bawah(count) {
    var counterStr = String(counter)
    var counterStrLast = counterStr[counterStr.length - 1]
      if (count < 0) {
      return
    } else {
      return result[x][y] = counterStrLast, y--,counter++,bawah(count-1)
    }
  }
  function kiri(count) {
    var counterStr = String(counter)
    var counterStrLast = counterStr[counterStr.length - 1]
      if (count < 0) {
      return
    } else {
      return result[x][y] = counterStrLast, x--,counter++,kiri(count-1)
    }
  }

  atas(input)
  kanan(input)
  bawah(input)
  kiri(input)
 
return result
}

console.log(soal1(2))
// [ [ '1', '2', '3', '4' ],
//   [ '2', ' ', ' ', '5' ],
//   [ '1', ' ', ' ', '6' ],
//   [ '0', '9', '8', '7' ] ]
console.log(soal1(3))
// [ [ '1', '2', '3', '4', '5' ],
//   [ '6', ' ', ' ', ' ', '6' ],
//   [ '5', ' ', ' ', ' ', '7' ],
//   [ '4', ' ', ' ', ' ', '8' ],
//   [ '3', '2', '1', '0', '9' ] ]
console.log(soal1(5))
// [ [ '1', '2', '3', '4', '5', '6', '7' ],
//   [ '4', ' ', ' ', ' ', ' ', ' ', '8' ],
//   [ '3', ' ', ' ', ' ', ' ', ' ', '9' ],
//   [ '2', ' ', ' ', ' ', ' ', ' ', '0' ],
//   [ '1', ' ', ' ', ' ', ' ', ' ', '1' ],
//   [ '0', ' ', ' ', ' ', ' ', ' ', '2' ],
//   [ '9', '8', '7', '6', '5', '4', '3' ] ]

