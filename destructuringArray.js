let a = [1, 2, 3, 4, 5, 6, 7] ;

// let [someVar] = a ;
// console.log(someVar) ;
// //1
// let [someVar, nextVar] = a ;
// console.log(nextVar) ;
//2

//To skip some element 
let [someVar, nextVar, _, reqVar] = a ;
console.log(reqVar) ;
//4
console.log(_) ;
//3