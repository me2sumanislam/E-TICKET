import { useState } from 'react';
import './App.css';  
 import Ticket from '/Ticket';

function App() {
   
  const [counts, setCounts] = useState({ open: 0, progress: 0, resolved: 0 });
 
  const [tickets, setTickets] = useState([
    {
      id: '1001',
      title: 'Login Issues',
      description: "Customer can't access account...",
      customer: 'John Smith',
      priority: 'High',
      status: 'Open',
      createdAt: '1/15/2024'
    },
    {
      id: '1002',
      title: 'Payment Failed',
      description: "Card declined despite balance...",
      customer: 'Sarah Johnson',
      priority: 'High',
      status: 'In-progress',
      createdAt: '1/16/2024'
    }
  ]);

  const handleTicketClick = (status) => {
    const s = status.toLowerCase();
    const key = s === 'in-progress' ? 'progress' : s;
    setCounts(prev => ({ ...prev, [key]: prev[key] + 1 }));
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      
      <div className="flex gap-4 mb-10">
         <div className="p-4 bg-white shadow rounded-lg w-32">
            <h4 className="text-xs text-gray-400">OPEN</h4>
            <p className="text-2xl font-bold">{counts.open}</p>
         </div>
 
      </div>

 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tickets.map(ticket => (
          <Ticket 
            key={ticket.id} 
            ticket={ticket} 
            onTicketClick={handleTicketClick} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;