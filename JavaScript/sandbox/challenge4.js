console.log("***** Printing a phrase word by word in reverse order *****")

let phrase = "Anthony finished typing this now"
let tempWord = ""
for(let i=phrase.length;i>=0;i--) {
    if(phrase.substring(i-1,i)==" ") {
        let print = ""
        for(let j=tempWord.length; j>=0; j--) {
            print += tempWord.substring(j-1,j)
        }
        console.log(print); 
        tempWord="";
    }
    else tempWord += (phrase.substring(i-1,i))
}
let print = ""
for(let j=tempWord.length; j>=0; j--) {
    print += tempWord.substring(j-1,j)
}
console.log(print); 

console.log("******************************************")