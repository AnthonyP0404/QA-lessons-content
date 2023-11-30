import { useParams } from "react-router-dom"

function Addition() {

    const {T1,T2} = useParams()

    return(
        <>
            <h1>ADDITION</h1>
            First Value Received from URL: <b> {T1} </b> <br/>
            Second Value Received from URL: <b> {T2} </b> <br/>
            -------------------------------------- <br/>
            The result of Addition is: {parseInt(T1) + parseInt(T2)} <br/>
        </>
    )
}
export default Addition