 import { use } from "react";
import Ticket from "./Ticket";

export default function TiketInfo({ ticketPromiss, onTicketClick }) {
    const tickets = use(ticketPromiss);

    return (
 
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 bg-base-200 min-h-screen">
            <div className="lg:col-span-8 space-y-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 underline decoration-primary">Ticket List</h2>
                    <span className="badge badge-primary">{tickets.length} Total</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tickets.map((t) => (
                        <Ticket key={t.id} ticket={t} onTicketClick={onTicketClick} />
                    ))}
                </div>
            </div>

        
            <div className="lg:col-span-4">
                <div className="sticky top-10 space-y-6">
                 
                    <div className="card bg-white shadow-xl border-t-4 border-primary">
                        <div className="card-body">
                            <h2 className="card-title text-primary">Admin Quick Action</h2>
                            <p className="text-sm text-gray-500 italic">Manage your tickets or filter results here.</p>
                            
                            <div className="divider"></div>
                            
               
                            <button className="btn btn-primary btn-block mb-3">Add New Ticket</button>
                            <button className="btn btn-outline btn-secondary btn-block">Generate Report</button>
                        </div>
                    </div>

           
                    <div className="card bg-neutral text-neutral-content shadow-xl">
                        <div className="card-body">
                            <h3 className="font-bold text-lg">System Status</h3>
                            <ul className="text-sm space-y-2">
                                <li className="flex justify-between">Server: <span className="text-success">Online</span></li>
                                <li className="flex justify-between">API Lag: <span className="text-warning">45ms</span></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}