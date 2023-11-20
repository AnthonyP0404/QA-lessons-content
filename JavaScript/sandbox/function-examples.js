function paySlip(name, salary){
    let tax = 0

    if(salary<1000) tax=0
    else {
        if(salary>=2000) tax = salary * 21/100
        else tax = salary * 15/100
    }

    let net = salary - tax
    console.log("Name of Employer: ", name)
    console.log("Salary: ", salary)
    console.log("------------------")
    console.log("Tax Calculated: ", tax)
    console.log("Net Salary: ", net)


}

console.log("***** Payslip function *****")
console.log("paySlip('Ant',420) returns :",paySlip("Ant",420))
console.log("****************************")
// paySlip("Shaf",6969)
// console.log("****************************")





//////////////////////////////////////////////////////////////////////////////////


function tax(salary){
    let tax = 0

    if(salary<1000) tax=0
    else {
        if(salary>=2000) tax = salary * 21/100
        else tax = salary * 15/100
    }

    return tax

}

console.log("***** Tax Function *****")
console.log("tax(800) returns :",tax(800))
console.log("3000-tax(3000) returns :", 3000-tax(3000))
console.log("************************")



//////////////////////////////////////////////////////////////////////////////////


function ones(num) {
    let result = ""

    switch(num) {
        case 1: result = "one"; break;
        case 2: result = "two"; break;
        case 3: result = "three"; break;
        case 4: result = "four"; break;
        case 5: result = "five"; break;
        case 6: result = "six"; break;
        case 7: result = "seven"; break;
        case 8: result = "eight"; break;
        case 9: result = "nine"; break;
        case 10: result = "ten"; break;
        case 11: result = "eleven"; break;
        case 12: result = "twelve"; break;
        case 13: result = "thirteen"; break;
        case 14: result = "fourteen"; break;
        case 15: result = "fifteen"; break;
        case 16: result = "sixteen"; break;
        case 17: result = "seventeen"; break;
        case 18: result = "eighteen"; break;
        case 19: result = "nineteen"; break;
        default: "out of range"
    }
    
    return result
}

console.log("***** Ones function ******")
console.log("ones(4) returns :",ones(4))
console.log("**************************")


function ty(num) {
    let result = ""
    switch(num) {
        case 20: result="twenty";break;
        case 30: result="thirty";break;
        case 40: result="forty";break;
        case 50: result="fifty";break;
        case 60: result="sixty";break;
        case 70: result="seventy";break;
        case 80: result="eighty";break;
        case 90: result="ninety";break;
    }
    return result
}


function convert(number) {
    let result = ""
    if(number>0 && number<10000) {
        if(number>=1000) {
            result += ones(parseInt(number/1000)) + " thousand "
            number %= 1000
        }
        if(number >= 100) {
            result += ones(parseInt(number/100)) + " hundred "
            number %= 100
        }
        if(number > 20) {
            result += ty(parseInt(number/10)*10)
            number %= 10
        }
        result += " "+ones(number)
    } else console.log("Invalid number")
    return result
}

console.log("***** Convert function *****")
console.log("convert(2345) results in :",convert(2345))
console.log("****************************")


/////////////////////////////////////////////////////////////////////////////////////


