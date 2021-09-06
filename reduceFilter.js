let a = [1,2,3] ;

function sum(a, b){
    return a + b ;
}

let reducedValue = a.reduce(sum) ;
console.log(reducedValue) ;


//-----------------------------------------

//myReduce
function myReduce(arr, f){
    let ans = arr[0] ;
    //arr = [1,2,3]

    for(let i = 1; i < arr.length; i++){
        ans = f(ans, arr[i]) ;

    }
    return ans ;
}

console.log(myReduce(a, sum)) ;