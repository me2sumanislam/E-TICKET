import { use } from "react" 
export default function TiketInfo({ticketPromiss}){

    const tickets = use(ticketPromiss)
    //  console.log(tickets);
         
    return(
        <div>
            <h3>Tickets:{tickets.length}</h3>
        </div>
    )
 }