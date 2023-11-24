
console.log("******************************************")
console.log("***** Print message letter by letter *****")

let message = "Anthony"

for(let i=0;i<message.length;i++) {
    console.log(message.substring(i,i+1))
}
console.log("******************************************")
console.log("")


////////////////////////////////////////////////////


console.log("**********************************")
console.log("***** Word count of a phrase *****")
let phrase = "Anthony is typing this at the moment"
let count = 0
for(let i=0;i<phrase.length;i++) {
    if(phrase.substring(i,i+1)==" ") count++
}
console.log("There are", count+1, "words in the phrase.")
console.log("**********************************")
console.log("")


//////////////////////////////////////////////////////


console.log("******************************************")
console.log("***** Printing a phrase word by word *****")
let phrase2 = "Anthony finished typing this now"
let tempWord = ""
for(let i=0;i<phrase2.length;i++) {
    if(phrase2.substring(i,i+1)==" ") {console.log(tempWord); tempWord="";}
    else tempWord += (phrase2.substring(i,i+1))
}
console.log(tempWord)
console.log("******************************************")
console.log("")



////////////////////////////////////////////////////////////////////


console.log("*****************************************************************************")
console.log("***** Counting how many of a given *set of characters* are in a message *****")

function counting(message,find) {
    let count=0
    for(let i=0; i<message.length ; i++) {
        if(message.substring(i,i+1) == find.substring(0,1)) {
            count++
            i += find.length - 1
        }
    }
    console.log("We found",count,"of the character set:",find)
}

console.log('Calling function: counting("Shafeeq is my friend but also my guy", "my") results in')
counting("Shafeeq is my friend but also my guy", "my")
console.log("*****************************************************************************")
console.log("")


///////////////////////////////////////////////////////////////////////////////////////////////


console.log("****************************************************************")
console.log("***** Counting how many of a given *word* are in a message *****")

function findwords(message,word) {
    let tword = ""
    let count = 0
    for(let i = 0 ; i < message.length ; i++) {
        if(message.substring(i,i+1) == " ") {
            if(tword==word) count++
            tword=""
        } else tword+=message.substring(i,i+1)
    }
    console.log("We found",count,"of the word:",word)
}

console.log("Calling function: findwords('this that that this thatthis thisthat mad test this ting', 'this') results in")
findwords("this that that this thatthis thisthat mad test this ting", "this")

console.log("****************************************************************")
console.log("")


////////////////////////////////////////////////////////////////////////////////////////////////


console.log("********************************************************************")
console.log("***** Replace a *string* with another *string* within a phrase *****")

function findReplaceString(msg, find, replace) {
    let newMsg = ""
    for(let i = 0; i < msg.length ; i++) {
        if(msg.substring(i,i+1) == find.substring(0,1)) {
            if (msg.substring(i,i+find.length) == find) {
                newMsg += replace
                i += find.length - 1
            } else newMsg += msg.substring(i,i+1)
        } else newMsg += msg.substring(i,i+1)
    }
    return newMsg
}

console.log('Printing the return of function: findReplaceString("I am comming to mmanchester", "mm", "london") results in')
console.log(findReplaceString("I am comming to mmanchester", "mm", "london"))

console.log("********************************************************************")
console.log("")


////////////////////////////////////////////////////////////////////////////////////////////////


console.log("****************************************************************")
console.log("***** Replace a *word* with another *word* within a phrase *****")

function findReplaceWord(msg, word, replace) { 
    let newmsg = ""
    let tword = ""
    for (i = 0 ; i < msg.length ; i++) {
        if (msg.substring(i,i+1) == " ") { 
            if (tword == word) newmsg += replace + " "
            else newmsg += tword + " "
            tword = ""
        } 
        else tword += msg.substring(i,i+1)
    }
    if (tword == word)  newmsg += replace + " "
    else newmsg += tword + " "

    return newmsg
}

console.log('Printing the return of function: findReplaceWord("I am coming to manchester tonight to visit", "to", "SWITCH") results in')
console.log(findReplaceWord("I am coming to manchester tonight to visit", "to", "SWITCH"))

console.log("****************************************************************")
console.log("")


///////////////////////////////////////////////////////////////////////////////////////////////


console.log("************************************************")
console.log("***** Remove duplicate words from a phrase *****") // basically add all unique words into an array then add them to a string and print

let uniqueWords = []
function checkUnique(kWord) {
    for (let i=0 ; i < uniqueWords.length ; i++) {
        if (uniqueWords[i] == kWord) return false
    }
    uniqueWords.push(kWord)
    return true
}

function removeDuplicates(msg) {
    let tword = ""
    let newmsg = ""

    for (let i=0 ; i<msg.length ; i++) {
        if (msg.substring(i,i+1) == " ") {
            if (checkUnique(tword) == true) newmsg += tword + " "
            tword = ""
        } 
        else tword += msg.substring(i,i+1)
    }
    if (checkUnique(tword) == true) newmsg += tword + " "
    
    console.log(newmsg)
}

console.log('Calling function: removeDuplicates("this this is a a a a robber robbery init") results in:')
removeDuplicates("this this is a a a a robber robbery init")

console.log("************************************************")
console.log("")


///////////////////////////////////////////////////////////////////////////////////////////////

console.log("***** ASCII example*****")

console.log("Using: .charCodeAt() on ',' returns:")
data=","
if(data.charCodeAt(0) >= 65 && data.charCodeAt(0) <=90) {
    console.log("uppercase")
} else if(data.charCodeAt(0) >= 97 && data.charCodeAt(0) <=122) {
    console.log("lowercase")
} else if(data.charCodeAt(0) >= 48 && data.charCodeAt(0) <=57 ) {
    console.log("digit")
} else {
    console.log("special character")
}

console.log("************************")
console.log("")