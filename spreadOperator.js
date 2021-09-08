// a = [1, 2, 3]
//b = [4, 5, 6]
// c = [...a, ...b] => c = [1, 2, 3, 4, 5, 6] 

let a = [1, 2, 3] ;
let b = [4, 5, 6] ;

let c = [...a, ...b] ;  //concept of spread operator for arrays
// console.log(c) ;

let d = [...a, ...a] ;
// console.log(d) ;

let e = [...a, ...a, ...b] ;
// console.log(e) ;

//concept of spread Operator for Objects
let o1 = {a : 1, b : 2} ;
let o2 = {
    c : 3,
    d : 4
};

let o = {...o1, ...o2} ;
// console.log(o) ;

//Ques
let p = [1, 2, 4, 5] ; // q = ?
let x = p.slice(0, 2) ;
let y = p.slice(2) ;

let q = [...x, ...[3], ...y] ;
console.log(q) ;

//ques2

let z1 = {
    a : 1,
    b : 2
}
let z2 = {
    c : 3
}

let z = {...z1, ...z2, ...z1, ...z2} ;
console.log(z) ;