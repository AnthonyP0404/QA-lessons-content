

function Addition(props) {
    let result = 0

    switch(props.operation) {
        case "add": result = parseInt(props.first) + parseInt(props.second);break;
        case "subtract": result = parseInt(props.first) - parseInt(props.second);break;
        case "subtract": result = parseInt(props.first) - parseInt(props.second);break;
        case "multiply": result = parseInt(props.first) * parseInt(props.second);break;
        case "divide": result = parseInt(props.first) / parseInt(props.second);break;
    }

    return(
        <>
            First Number: {props.first}<br/>
            Second Number: {props.second} <br/>
            Operation: {props.operation} <br/>
            The result of this is <b> {result} </b>
        </>
    ) 
}
export default Addition;