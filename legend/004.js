function a(x) {
  var xx = x
  
  function b(v) {
    var c = ""

    for (var i = 0; i < v; i++) {
      c += xx
      xx--
    }
    xx = x
    if (v === 0) {
      return ""
    } else {
      return c + '\n' + b(v-1)
    }
  }
  return b(x)
}

console.log(a(5))

// 54321
// 5432
// 543
// 54
// 5
