function soal2(param)
{
   var result = []
    //loop sesuai length param
    for (var i = 0; i < param.length; i++) {
       //kondisi input salah
        if (param === [] || param.length < 3) {
            return "invalid input"
        } else if (param[Math.floor(param.length / 2)] !== "") {
            return param
        } else if (i === 0) {
            result.push(param[0])
        } else if (i === param.length - 1) {
            result.push(param[param.length - 1])
        } else if (param.length % 2 === 0) {
            if (i === (param.length/2) || i === (param.length/2) - 1) {
                result.push(param[0] * param[param.length-1])
            } else {
                result.push(" ")
            }
        } else if (i === Math.floor(param.length / 2)) {
            result.push(param[0] * param[param.length-1])
        } else {
            result.push(" ")
        }
   }
   return result
}

console.log(soal2([34,'','','',40]))
// [34,''1360,'',40]

console.log(soal2([1,2,3,4,5]))
// [1,2,5,4,5]

console.log(soal2([20,'','','','','','',30]))
// [20,'','',600,600,'','',30])

console.log(soal2([6,'','','','','',9]))
// [6,'','',54,'','',9]

// console.log(soal2([1,2])) // invalid input 
// console.log(soal2([1])) // invalid input 
console.log(soal2([])) // invalid input 
