
function Test() {

    function doSomething() {
        alert(document.getElementById("t").value)
        // alert
    }


    return(
        <>
        {/* there 3 all do the same thing */}
        <input type="text" id="t"/>
        <input type="button" value="Do something 1" onClick={doSomething}/>
        <input type="button" value="Do something 2" onClick={()=>doSomething()} />
        <input type="button" value="Do something 3" onClick={()=>alert(document.getElementById("t").value)} />
        </>
    )
}
export default Test;