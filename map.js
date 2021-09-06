let a = [1, 2, 3, 4, 5] ;

function doubleTheValues(x){
    return 2 * x;
}

let mappedArray = a.map(doubleTheValues) ;

console.log(mappedArray) ;

//-------------------------------------------------

//myMap.
function myMap(arr, f){
    let ans = [] ;
    for(let i = 0; i , arr.length; i++){
        ans.push(f[arr[i]]);
    }

    return ans ;
}
console.log(myMap(a, doubleTheValues)) ;
