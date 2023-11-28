
import {useState} from "react"

function Test2() {
    let [x,incrementX] = useState(256)

    function abc() {
        incrementX(x+1)
    }

    return(
        <>
        <br/>
        Number: <b>{x}</b> <br/><br/>
    <input type="button" value="Click it" onClick={ () => abc() } />
        
        </>
    )
}
export default Test2;