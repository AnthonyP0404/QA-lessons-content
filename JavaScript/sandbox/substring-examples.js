//print the message letter by letter
let message = "Anthony"

console.log("***** Print message letter by letter *****")
for(let i=0;i<message.length;i++) {
    console.log(message.substring(i,i+1))
}
console.log("******************************************")


////////////////////////////////////////////////////


console.log("***** Word count of a phrase *****")
let phrase = "Anthony is typing this at the moment"
let count = 0
for(let i=0;i<phrase.length;i++) {
    if(phrase.substring(i,i+1)==" ") count++
}
console.log("There are", count+1, "words in the phrase.")
console.log("**********************************")


//////////////////////////////////////////////////////


console.log("***** Printing a phrase word by word *****")
let phrase2 = "Anthony finished typing this now"
let tempWord = ""
for(let i=0;i<phrase2.length;i++) {
    if(phrase2.substring(i,i+1)==" ") {console.log(tempWord); tempWord="";}
    else tempWord += (phrase2.substring(i,i+1))
}
console.log(tempWord)
console.log("******************************************")
