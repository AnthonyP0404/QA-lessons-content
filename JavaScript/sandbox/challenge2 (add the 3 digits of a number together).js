//add all 3 digits of the number together

let B = 345
// console.log(parseInt(B/100) + parseInt((B-parseInt(B/100)*100)/10) + ((B-parseInt(B/100)*100)%10))    //compicated it too much
console.log(parseInt(B/100) + parseInt((B%100)/10) + parseInt((B%100)%10))    //this is the simplified