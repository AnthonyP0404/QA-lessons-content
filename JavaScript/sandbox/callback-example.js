function First() {
    console.log("Good")
}
function Second() {
    console.log("Bad")
}

let refHR = new Promise( function(correctPassword, wrongPassword) {
    let pass1 = "admin"
    if (pass1 == "admin") correctPassword()
    else wrongPassword()
})

refHR.then(First,Second)