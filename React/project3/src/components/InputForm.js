import { useState } from "react"

function InputForm() {
    let [result,setResult] = useState(0)

    function add() {
        let A = document.getElementById("t1").value
        let B = document.getElementById("t2").value
        let R = parseInt(A) + parseInt(B)
        setResult(R)
    }
    return(
        <>
        First Number: &nbsp;&nbsp;&nbsp;&nbsp; <input id="t1" style={{margin:"5px"}} /> <br/>
        Second Number: <input id="t2" style={{margin:"5px"}} /> <br/><br/>

        <input type="button" value="Calculate" onClick={() => add} /> <br/><br/>

        <h1> Result = {result} </h1>
        </>
    )
}
export default InputForm