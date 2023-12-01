import ViewAllSellers from "./ViewAllSellers";
import {useNavigate} from "react-router-dom";


function AddSeller() {
    let navigate = useNavigate()

    function saveData(){
		let seller={
			"firstName":document.getElementById("fname").value,
			"surname":document.getElementById("sname").value,
			"address":document.getElementById("addr").value,
			"postcode":document.getElementById("pcode").value,
			"phone":document.getElementById("phone").value
		}
 
		let ref=fetch("http://localhost:8081/seller",{
			method:"POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(seller)
		})
		ref.then((x)=> {
                alert("Seller added successfully.")
                document.getElementById("fname").value = ""
                document.getElementById("sname").value = ""
                document.getElementById("addr").value  = ""
                document.getElementById("pcode").value = ""
                document.getElementById("phone").value = ""
                navigate("/allSellers")
            }
        )
    }


    return(
        <>
            <div id="addSellerForm"> 
                <h2> Enter Seller Information </h2> <br/>
                <span> First Name: <input type="text" id="fname"/> </span> 
                <span> Surname: <input type="text" id="sname"/> </span> <br/><br/>
                <span> Phone: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" id="phone"/> </span> <br/><br/>
                <span> Address: &nbsp;&nbsp;&nbsp; <input type="text" id="addr" /> </span> 
                <span> Postcode: <input type="text" id="pcode"/> </span> <br/><br/>
 
                <input type="button" id="addButton" value="Add" onClick={()=> saveData()}/>

            </div> 
            
            <br/>

            <ViewAllSellers/>
        </>
    )
}
export default AddSeller;