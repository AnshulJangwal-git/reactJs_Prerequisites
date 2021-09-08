let address = {
    city : "Delhi", 
    region : "Pitampura", 
    pin : "1100031"
}
//Note the name of variable and the key must be same..order can be different doesnt matter at all till the 
// variable names are same to the keys

let = {city, pin, region, myVar} = address ;
console.log(city) ;
console.log(region) ;
console.log(pin) ;


console.log(myVar) ; //it will give undefined


