
let A=10
let B=20

if(A++>=1 || B++<=30) {
    //this doesnt check the second condition as the first one is true
    // using a single | would check both conditions regardless
}


if(A++>=100 && B++<=30) {
    //this doesnt check the second condition as the first one is false
    // using a single & would check both conditions regardless
}