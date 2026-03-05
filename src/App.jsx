 import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Ticket from './Ticket';
import Header from './header';
import Footer from './footer';

function App() {
  const [tickets, setTickets] = useState([]); 
  const [inProgressList, setInProgressList] = useState([]); 
  const [resolvedCount, setResolvedCount] = useState(0); 

  useEffect(() => {
    fetch('/ticket-info.json')
      .then(res => res.json())
      .then(data => setTickets(data));
  }, []);

  const handleAddToProgress = (clickedTicket) => {
    const isExist = inProgressList.find(item => item.id === clickedTicket.id);
    
    if (!isExist) {
      setInProgressList([...inProgressList, clickedTicket]);
      toast.info(`${clickedTicket.title} added to Progress!`);
    } else {
      toast.warning("This ticket is already in progress.");
    }
  };

  const handleCompleteTask = (task) => {
    const remainingInProgress = inProgressList.filter(item => item.id !== task.id);
    setInProgressList(remainingInProgress);
    const remainingTickets = tickets.filter(item => item.id !== task.id);
    setTickets(remainingTickets);
    setResolvedCount(prev => prev + 1);
    toast.success("Task marked as Resolved!");
  };

  return (
    <div className="container mx-auto px-4 md:px-5">
      <Header />
      <ToastContainer position="top-right" autoClose={2000} />
      
 
      <section className="mt-10 md:mt-20 flex flex-col md:flex-row gap-6 md:gap-10 justify-center mb-10">
        <div className="flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden w-full md:w-auto">
          <div className="w-full md:w-80 p-8 bg-blue-500 text-white text-center">
            <div className="font-bold text-lg opacity-90 uppercase">In Progress</div>
            <div className="text-5xl font-bold mt-2">{inProgressList.length}</div>
          </div>
          <div className="w-full md:w-80 p-8 bg-indigo-600 text-white text-center">
            <div className="font-bold text-lg opacity-90 uppercase">Resolved</div>
            <div className="text-5xl font-bold mt-2">{resolvedCount}</div>
          </div>
        </div>
      </section>

    
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
        
        
        <div className="order-2 lg:order-1 lg:col-span-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Available Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tickets.map(ticket => (
              <Ticket 
                key={ticket.id} 
                ticket={ticket} 
                onTicketClick={handleAddToProgress} 
              />
            ))}
          </div>
          {tickets.length === 0 && <p className="text-center py-10 text-gray-400">No tickets available.</p>}
        </div>

        
        <div className="order-1 lg:order-2 lg:col-span-4">
          <div className="bg-white p-5 rounded-2xl shadow-xl border border-gray-100 sticky top-5">
            <h3 className="text-xl font-bold mb-5 border-b pb-3 text-indigo-900">Task Status</h3>
            <div className="space-y-4">
              {inProgressList.map((task, index) => (
                <div key={task.id} className="flex justify-between items-center bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <div className="max-w-[150px] md:max-w-full">
                    <p className="text-[10px] font-bold text-blue-400">#{index + 1}</p>
                    <h4 className="font-bold text-sm text-gray-700 leading-tight">{task.title}</h4>
                  </div>
                  <button 
                    onClick={() => handleCompleteTask(task)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-md active:scale-95"
                  >
                    Complete
                  </button>
                </div>
              ))}
              {inProgressList.length === 0 && (
                <p className="text-gray-400 text-center py-8 italic text-sm">No tasks in progress</p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;