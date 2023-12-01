import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'

function ViewAllSellers() {    
    let navigate = useNavigate()

    let [sellers,addSellers] = useState([])

    function sendRequest() {
        let url = "http://localhost:8081/seller"
        fetch(url).then(processResponse)
    }

    
    function processResponse(response){
        let res = response.json()
        res.then(processRecords)
    }
    
    function processRecords(records){
        addSellers(records)
    }
    
    useEffect( ()=>{sendRequest()},[]) //this line stops the page from constantly fetching

    function deleteRow(sellerID) {
        let url = "http://localhost:8081/seller/" + sellerID
        let ref=fetch(url,{ method:"Delete" })
        ref.then((x)=> alert("Seller of id " + sellerID + " has been deleted."))
        navigate("/sellersHome")    }

    return(
        <>
        <h2 style={{margin:'15px'}}> All Sellers </h2>
        <table id="allSellers">
            <thead>
                <tr>
                    <th> ID </th>
                    <th> First Name </th>
                    <th> Surname </th>
                    <th> Phone # </th>
                    <th> Address </th>
                    <th> Postcode </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    sellers.map( (seller)=> 
                    <tr>
                            <td> {seller.id}        </td>
                            <td> {seller.firstName} </td>
                            <td> {seller.surname}   </td>
                            <td> {seller.phone}     </td>
                            <td> {seller.address}   </td>
                            <td> {seller.postcode}  </td>
                            <td> <input type="button" value="Delete" onClick={() => deleteRow(seller.id)}/> </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        </>
    )
}
export default ViewAllSellers;