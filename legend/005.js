function diamond(num) {
  if (num % 2 === 0) {
    return "inputan harus ganjil"
  }
  var store = ""

  var bntng1 = Math.floor(num/2)
  var bntng2 = Math.floor(num/2)

  var nav = 0
  var navInit = 0

  for (var i = 0; i < num; i++) {
    for (var j = 0; j < num; j ++) {
      if (j === bntng1 || j === bntng2) {
        store += "*"
      } else {
        store += " "
      }
    }
    if (nav % 2 === 0) {
      bntng1--
      bntng2++
    } else {
      bntng1++
      bntng2--
    }
    navInit++
    if (navInit === Math.floor(num/2)) {
      navInit = 0
      nav++
    }
    store += "\n"
  }
  return store
}

console.log(diamond(5))

/*

  *  
 * *
*   *
 * *
  *

*
