function abc(a,b,c){
    console.log(arguments)
}
// abc()
abc(10,20,10)

function sumAll(a,b,c){
    var sum = 0
    for(i=0; i<arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}
abc()
 sumAll(1,4,6)