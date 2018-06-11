// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
function soal2(param)
{
    var result = []
    var secondPusher = param.length - 1

    for ( var i = 0; i < Math.ceil(param.length/2); i++) {
      if (param.length % 2 === 1 && i === Math.ceil(param.length/2) -1) {
        result.push([param[i]])
        result[i].push("Instruktur")
      } else {
        result.push([param[i]])
        result[i].push(param[secondPusher])
        secondPusher--
      }
    }
    return result
}

console.log(soal2(['Aries','Dimas','Gatot',"Nurmantyo","Zainul","Majdi"]))
/*
    output: 
    [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/

console.log(soal2(['A','B','C','D','E']))//
// // [ ['A','E'] , ['B','D'], ['C','Instruktur']]

console.log(soal2(['Susan','Albert','Erithiana','Zaki','Sisijoan','Henry',"Nio"]))
// // [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]
