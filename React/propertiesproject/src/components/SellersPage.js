import { useState } from "react"

function SellersPage() {

    let sellers = fetch("http://localhost:8081/seller")

    return(
        <>
        <h1>Sellers Page</h1>
        {console.log(sellers)}

        <table id="allSellersTable"></table>
        </>
    )
}
export default SellersPage