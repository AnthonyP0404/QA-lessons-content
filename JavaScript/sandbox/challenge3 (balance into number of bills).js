//split a total into multiples of partitions

let paid = 1324
let bill = 31
let balance = paid-bill
console.log("---------------------")
console.log("Balance: " + balance)
console.log("---------------------")

//performs unnecessary calculations
// if(balance >= 50) console.log("£50s: " + parseInt(balance/50)); balance%=50; 
// if(balance >= 20) console.log("£20s: " + parseInt(balance/20)); balance%=20;
// if(balance >= 10) console.log("£10s: " + parseInt(balance/10)); balance%=10;
// if(balance >= 5)  console.log("£5s: "  + parseInt(balance/5)); balance%=5;
// if(balance >= 2)  console.log("£2s: "  + parseInt(balance/2)); balance%=2;
// if(balance >= 1)  console.log("£1s: "  + balance%2);
// console.log("---------------------")

if(balance >= 50) console.log("£50s: " + parseInt(balance/50)); balance%=50; 
if(balance >= 20) console.log("£20s: " + parseInt(balance/20)); balance%=20;
if(balance >= 10) console.log("£10s: 1")                      ; balance%=10;
if(balance >= 5)  console.log("£5s:  1")                      ; balance%=5;
if(balance >= 2)  console.log("£2s:  "  + parseInt(balance/2)); balance%=2;
if(balance >= 1)  console.log("£1s:  1")                      ;
console.log("---------------------")
