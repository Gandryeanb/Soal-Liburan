function rocket(param)
{
    var result = []

    if (param < 3) {
        for (var i = 0; i < param; i++) {
            for (var j = 0; j < param; j++) {
                result.push("*")
            }
            console.log(result)
            result = []
        }
    } else {
        for (var i = 0; i < param; i++) {
            for (var j = 0; j < param ; j++) {
                if (param % 2 === 0) {
                    if (i === Math.floor(param/2) && j === Math.floor(param/2)) {
                        result.push("*")
                    } else if (i === Math.floor(param/2) && j === Math.floor(param/2) - 1) {
                        result.push("*")
                    } else if (i === Math.floor(param/2) - 1 && j === Math.floor(param/2)) {
                        result.push("*")
                    } else if (i === Math.floor(param/2) - 1 && j === Math.floor(param/2) - 1) {
                        result.push("*")
                    } else {
                        result.push("")
                    }
                } else {
                    if (i === Math.floor(param/2) && j === Math.floor(param/2)) {
                        result.push("*")
                    } else {
                        result.push("")
                    }
                }
            } 
            console.log(result)
            result = []
        }
    }
}

console.log(rocket(5))
/*
    [
        ['','','','',''],
        ['','','','',''],
        ['','','*','',''],
        ['','','','',''],
        ['','','','','']
    ]
*/

console.log(rocket(3))
/*
    [
        ['','',''],
        ['','*',''],
        ['','',''],
      
    ]
*/

console.log(rocket(4))
/*
    [
        ['','','',''],
        ['','*','*',''],
        ['','*','*',''],
        ['','','',''],
        
    ]
*/

console.log(rocket(2))
/*
    [
        ['*','*'],
        ['*','*'],
    ]
*/

console.log(rocket(1))
/*
    [
        ['*']
    ]
*/
