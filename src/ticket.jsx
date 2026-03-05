import { use } from "react"

use
export default function TiketInfo({ticketPromiss}){

    const tickets = use(ticketPromiss)
     console.log(tickets.id);
         
    return(
        <div>
            <p>ID:</p>
        </div>
    )
 }