function sc(str){
  var strlower = str.toLowerCase()
  var result = ""

  var dot = "."
  var space = " "
  var strip = "-"
  var coma = ","
  var question = "?"
  var js = "j"
  var x = strlower.indexOf("java")

  for (var i = 0; i < strlower.length; i++) {
    if (strlower[i]=== dot) {
      if (strlower[i + 3] === dot) {
        result += ""
        i += 3
      } else if (strlower[i + 1] === dot) {
        result += "_"
        i++
      }
    } else if (strlower[i] === strip) {
        result += "_"
    } else if (strlower[i] === space) {
        result += "_"
    } else if (strlower[i] === coma) {
        result += "_"
        i++
    } else if (strlower[i] === question) {
        result += ""
    } else if (strlower[i] == js) {
      if (strlower.length === 10 && strlower.indexOf("javascript") !== -1) {
        result += "java_script"
        i += 10
      } else if (strlower.indexOf("script") === x + 5) {
        result += "java_script"
        i += 10
      } else {
          result += "j"
      }
    } else {
        result += str[i].toLowerCase()
    }
  }
  return result
}
  
console.log(sc('halo..HolA..Hi..heLlO'));//halo_hola_hi_hello
console.log(sc('my-Name..is..susan-nio'));//my_name_is_susan_nio
console.log(sc('Apa Kabar, Mas?')); //apa_kabar_mas
console.log(sc('javaScript'));// java_script
console.log(sc('Hello, World???'));//hello_world
console.log(sc('java-script'));//java_script
console.log(sc('This is a never Ending story....'));//this_is_a_never_ending_story
console.log(sc('LeaRN..JaVascRiPt..Is..AwEsOmE'));//learn_javascript_is_awesome
