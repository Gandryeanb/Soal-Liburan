function soal3(param)
{
    var result = { }
    var propetiesName = []
    var propetiesValue = []
    param.sort();

    for ( var i = 0; i < param.length ; i++) {
      if (propetiesName === []) {
        propetiesName.push(param[i][0])
      } else if (param[i][0] !== propetiesName[propetiesName.length -1]) {
        propetiesName.push(param[i][0])
      }
    }
    for ( var j = 0; j < propetiesName.length; j++) {
      result[propetiesName[j]] = []
      for ( var k = 0; k < param.length; k++) {
        if (propetiesName[j] === param[k][0]) {
          result[propetiesName[j]].push(param[k])
        }
      }
    }
  return result
}


console.log(soal3(['Ayam','Kucing','Bebek','Sapi','Babi','Curut','Cacing','Monyet']));
/*
    {
        A:['Ayam'],
        B:['Bebek','Babi'],
        C:['Cacing','Curut'],
        K:['Kucing'],
        M:['Monyet'],
        S:['Sapi']
    }
*/

console.log(soal3(['Anjing','Kuda','Anoa','Zebra','Lipan','Kudanil','Landak']))

/*
    {
        A:['Anjing','Anoa'],
        L:['Lipan','Landak'],
        K:['Kuda','Kudanil'],
        Z:['Zebra']
    }
*/
