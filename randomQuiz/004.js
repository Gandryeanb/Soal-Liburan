/*
Anda akan menerima inputan data array yang berisikan object,
dari object tersebut, terdapat `jenis item`, `jumlah item`, `berat item`,`owner item`,`harga satuan item` dan `tujuan pengiriman`.
disini anda akan memproses segala proses perhitungan dengan variable `counrty` dan `ship` yang telah disediakan dan tidak boleh dirubah.

Nilai 30 pada object ship degan key price di peruntukan untuk
menghitung priceService (30 = 30%), sedangkan key speed digunakan
untuk menghitung `Estimate Shipping` pada output

TIDAK DIPERBOLEHKAN MENGGUNAKAN REGEX

*/

function shipmentBill(dataArr) {

  var ship = [{name: "A",maxWeigth:2000, maxTravel:3, price: 30,
              speed: 1},
              {name: "B",maxWeigth:5000, maxTravel:5, price: 25,
              speed: 2},
              {name: "C",maxWeigth:10000, maxTravel:7, price: 10,
              speed: 3}]

  var country = ["A","B","C","D","E","F","G","H","I","J",]

    //your code here
  
  var res0 = {}

  function owner(dataArr) {
    var ownerList = []
    var trigger = 0

    for (var i = 0; i < dataArr.length; i++) {
      if (ownerList.length === 0) {
        ownerList.push(dataArr[i].owner)
      } else {
        for (var j = 0; j < ownerList.length; j++) {
          if (dataArr[i].owner === ownerList[j]) {
            trigger++
          }   
        }
        if (trigger === 0) {
          ownerList.push(dataArr[i].owner)
          trigger === 0
        } 
      }    
    } 
    return ownerList
    // [ 'LG', 'Asus', 'BMW', 'Harley Davidson' ]
  }

  function productFix(dataArr,ownerList) {
    var res1 = []

    for (var i = 0; i < ownerList.length; i++) {
      res1.push([])
      for (var j = 0; j < dataArr.length; j++) {
        if (ownerList[i] === dataArr[j].owner) {
          var distance = 0
          var a = country.indexOf(dataArr[j].destination[0])
          var b = country.indexOf(dataArr[j].destination[4]) 
          if (a > b) {
            distance += a - b
          } else {
            distance += b - a
          }
          var priceTotal = dataArr[j].price * dataArr[j].unit
          var weigthTotal = dataArr[j].unit * dataArr[j].weigth

          function shipPrice(w,d,p) {
            var res2 = []
            var trigger = 0
            
            for (var i = 0; i < ship.length; i++ ) {
              if (w <= ship[i].maxWeigth && d <=ship[i].maxTravel) {
                trigger++
                res2.push(ship[i].name)
                res2.push("$"+String((p * ship[i].price)/100))
                res2.push(ship[i].speed * d +" days")
              }
            }
            if (trigger === 0) {
              for (var i = 0; i < 3; i++) {
                res2.push("Not Availabel")
              }
            }
            return res2
          }

          var shipPackage = shipPrice(weigthTotal,distance,priceTotal)

          res1[res1.length-1].push({
            product : dataArr[j].product,
            weigthTotal : weigthTotal,
            "product value" :"$"+priceTotal,
            "long distance" : distance,
            ship : shipPackage[0],
            priceService : shipPackage[1],
            "Estimate Shipping" : shipPackage[2]
          })
        }
      }
    }
    return res1
  }
  var dataFix = productFix(dataArr,owner(dataArr))
  var dataOwner = owner(dataArr)

  for (var i = 0; i < dataOwner.length; i ++) {
      res0[dataOwner[i]] = dataFix[i]
  }
  return res0
}



console.log(shipmentBill([
  {
    product : "TV",
    price : 400,
    unit : 250,
    weigth : 8,
    owner : "LG",
    destination : "D - G"
  },{
    product : "Laptop",
    price : 900,
    unit : 500,
    weigth : 2,
    owner : "Asus",
    destination : "I - A"
  },{
    product : "Car",
    price : 320000,
    unit : 3,
    weigth : 1300,
    owner : "BMW",
    destination : "C - H"
  },{
    product : "Motor Cycle",
    price : 8500,
    unit : 30,
    weigth : 300,
    owner : "Harley Davidson",
    destination : "G - C"
  },{
    product : "Air Conditioner",
    price : 1000,
    unit : 300,
    weigth : 15,
    owner : "LG",
    destination : "J - H"
  }
  ]))
/*
{ LG: 
   [ { product: 'TV',
       weigthTotal: 2000,
       'product value': '$100000',
       'long distance': 3,
       ship: 'A',
       priceService: '$30000',
       'Estimate Shipping': '3 days' },
     { product: 'Air Conditioner',
       weigthTotal: 4500,
       'product value': '$300000',
       'long distance': 2,
       ship: 'B',
       priceService: '$75000',
       'Estimate Shipping': '4 days' } ],
  Asus: 
   [ { product: 'Laptop',
       weigthTotal: 1000,
       'product value': '$450000',
       'long distance': 8,
       ship: 'Not Availabel',
       priceService: 'Not Availabel',
       'Estimate Shipping': 'Not Availabel' } ],
  BMW: 
   [ { product: 'Car',
       weigthTotal: 3900,
       'product value': '$960000',
       'long distance': 5,
       ship: 'B',
       priceService: '$240000',
       'Estimate Shipping': '10 days' } ],
  'Harley Davidson': 
   [ { product: 'Motor Cycle',
       weigthTotal: 9000,
       'product value': '$255000',
       'long distance': 4,
       ship: 'C',
       priceService: '$25500',
       'Estimate Shipping': '12 days' } ] }
*/
console.log(shipmentBill([]))
// {}
