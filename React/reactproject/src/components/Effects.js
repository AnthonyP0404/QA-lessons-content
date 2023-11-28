import { useEffect, useState } from "react"


function Effects() {

    let subjects = [
        {
            trainername: "shafeeq",
            subject: "html"
        },
        {
            trainername: "shafeeq",
            subject: "css"
        },
        {
            trainername: "andy",
            subject: "java"
        },
        {
            trainername: "andy",
            subject: "c#"
        }

    ]

    let [count,counter] = useState(10)
    let [countTen,counterTen] = useState(0)

    useEffect( () => { if(count%10==0) counterTen(countTen+1) }, [count])

    return(
        <>
        Value: <b>{count} </b>  <br/>
        Tens={countTen} <br/> 
        <input type="button" value="Ok" onClick={ () => counter(count+1) } />
        
        </>
    )
}
export default Effects