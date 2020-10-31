arr1 = [1,56,4,7]
arr2 = [1,4,5]
arr3 = [5,4,7,3]

// sum1 = 0
// for(i = 0; i < arr1.length; i++){
//     sum1 += arr1[i]
// }
// console.log(sum1)

function sumOfArray(arr){
    var sum = 0
    for(i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)
}

sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)