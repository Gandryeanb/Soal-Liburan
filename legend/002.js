/*
  pola dalam menyelesaikan:

  - membuat output sesuai dengan yg diminta tetapi tidak ada
    angka yg spiral, atau bisa di ganti dengan 0
    cth:
    input 4
    [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ]
    lakukan dengan looping

  - menggunakan variable counter dan menambahkannya pada setiap
   perulangan looping

  - menggunakan nested loop dikarnakan ada 2 tahap dalam
    mengisi spiral number
    - loop pertama untuk membedakan lapisan mana yg akan di isi
    - loop kedua untuk melakukan pengisian angka spiral

  # LOOP KE 2
  - menyusun spiral dengan tahap membuat angka mengelilingi
   area array terluar
   cth: 
   [
     [1,2,3,4],
     [12,0,0,5],
     [11,0,0,6],
     [10,9,8,7]
   ]
  - menggunakan indikator variable x dan y untuk mengakses 
    index yg akan diganti
    x = kiri ke kanan, y = atas ke bawah

    - alur pengisian
      [
        [>,>,>,v],  > = x++
        [A,0,0,v],  V = y++
        [A,0,0,v],  < = x--
        [A,<,<,<]   A = y--
      ]

  # LOOP PERTAMA
  - menentukan bagian mana yg berikutnya akan di isi dengan
    angka spiral dengan merubah x dan y yg sebelumnya adalah bagian 
    terluar yaitu x = 0 dan y = 0
  - berikutnya menambahkan x + 1 dan y + 1 yang akan merubah kordinat
    looping untuk LOOP KEDUA serta pengurangan input dengan 2

       [y,x]                      [y,x]
       [0,0]                      [1,1]
    [
     [*,2,3,4],                 [1,2,3,4],
     [12,0,0,5],                [12,*,0,5],
     [11,0,0,6],     mejadi     [11,0,0,6],
     [10,9,8,7]                 [10,9,8,7],
   ]   
       input                      input
         5                          2

  - perulangan melakukan perulangan sebanyak Math.ceil(input/2)
  - terakhir adalah membuat pergantian angka untuk input ganjil
    pada indikator yg berada di tengah 
    result[Math.floor(input/2),Math.floor(input/2)]

  cth
  [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,*,0,0],    input = 5
    [0,0,0,0,0],
    [0,0,0,0,0],
  ]
    result[Math.floor(input/2),Math.floor(input/2)] = input * input
 */


function spiralNumber(param)
{
    var result = []
    var subResult = [0]

    for (var i = 0; i < param; i++) {
      result.push(subResult)
      subResult = [0]
    }
    var input = param
    var patokan = 1

    var counterNum = 1
    var x = 0
    var y = 0
    var side = [1,1]

    for (var i = 0; i <= Math.ceil(param/2); i++) {
      for (var j = 0; j <= input * 2 + (input -2) * 2 -1; j++) {
        result[y][x] = counterNum
        counterNum++
        side[1]++
        if (side[0] === 1) {
          x++
        } else if (side[0] === 2) {
          y++
        } else if (side[0] === 3) {
          x--
        } else if (side[0] === 4) {
          y--
        }
        if (side[1] === input) {
          side[0]++
          side[1] = 1
        }
      }
      input -= 2
      x = 0
      y = 0
      x += patokan
      y += patokan
      patokan++
      side = [1,1]
    }
    if (param % 2 === 1) {
      result[Math.floor(param/2)][Math.floor(param/2)] = param * param
    }
    return result
}
// console.log(spiralNumber(3))
// /*
//     [
//         [1,2,3],
//         [8,9,4]
//         [7,6,5]
//     ]
// */

 console.log(spiralNumber(4))
/*
    [
        [1,2,3,4],
        [12,13,14,5],
        [11,16,15,6],
        [10,9,8,7]
    ]
*/
