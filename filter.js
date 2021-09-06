let a = [1, 2, 3, 4, 5] ;

function evenFilter(x){
    return x % 2 == 0 ;
}

let filterArray = a.filter(evenFilter) ;
console.log(filterArray) ; 

//------------------------------------

//replica of filter function
function myFilter(arr, f){
    let ans = [] ;

    for(let i = 0; i < arr.length; i++){
        if(f(arr[i]) == true){
            ans.push(arr[i]) ;
        }
    }
    return ans ;
}

console.log(myFilter(a, evenFilter)) ;