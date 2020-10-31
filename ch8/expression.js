// var add = function(a,b){
//     return a+b
// }

// console.log(add)
// console.log(add(5,10))

setTimeout(function(){
    var date = new Date()
    console.log(date.getSeconds() + ": " + date.getUTCMinutes() + ": " + date.getHours())
},1000)