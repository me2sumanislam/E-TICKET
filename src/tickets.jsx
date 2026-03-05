import { use } from "react" 
 import Ticket from "./ticket"
export default function TiketInfo({ticketPromiss}){

    const tickets = use(ticketPromiss)
    //  console.log(tickets);
         
    return(
        <div>
            <h3>Tickets:{tickets.length}</h3>
            {
                tickets.map(ticket =><Ticket ticket={ticket}></Ticket>)
            }
        </div>
    )
 }