 import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 import Ticket from "./ticket";
import Header from "./header";
import Footer from "./footer";

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgressList, setInProgressList] = useState([]);
  const [resolvedList, setResolvedList] = useState([]);

  useEffect(() => {
    fetch("/ticket-info.json")
      .then((res) => res.json())
      .then((data) => {
        const normalizedTickets = data.map((ticket) => {
          let status = (ticket.status || "open").toLowerCase().trim();
          if (status.includes("progress") || status === "in-progress") {
            status = "in-progress";
          } else if (status.includes("resolve") || status === "resolved") {
            status = "resolved";
          } else {
            status = "open";
          }
          return { ...ticket, status };
        });

        setTickets(normalizedTickets);
 
        const savedInProgress = JSON.parse(localStorage.getItem("inProgressList")) || [];
        const savedResolved = JSON.parse(localStorage.getItem("resolvedList")) || [];
 
        const validInProgress = normalizedTickets.filter(t => 
          savedInProgress.some(s => s.id === t.id) && t.status !== "resolved"
        );
        const validResolved = normalizedTickets.filter(t => 
          savedResolved.some(s => s.id === t.id)
        );

        setInProgressList(validInProgress);
        setResolvedList(validResolved);
      })
      .catch((err) => console.error("Error loading tickets:", err));
  }, []);

 
  useEffect(() => {
    localStorage.setItem("inProgressList", JSON.stringify(inProgressList));
  }, [inProgressList]);

  useEffect(() => {
    localStorage.setItem("resolvedList", JSON.stringify(resolvedList));
  }, [resolvedList]);

  const handleAddToProgress = (ticket) => {
    if (ticket.status !== "open") {
      return; 
    }

    const isAlreadyInList = 
      inProgressList.some(item => item.id === ticket.id) ||
      resolvedList.some(item => item.id === ticket.id);

    if (isAlreadyInList) {
      toast.warning("This task is already in your list!");
      return;
    }

    setInProgressList(prev => [...prev, ticket]);

    setTickets(prev =>
      prev.map(t => t.id === ticket.id ? { ...t, status: "in-progress" } : t)
    );

    toast.info(`Task Started: ${ticket.title}`);
  };

  const handleCompleteTask = (task) => {
    setInProgressList(prev => prev.filter(item => item.id !== task.id));
    setResolvedList(prev => [...prev, task]);

    setTickets(prev =>
      prev.map(t => t.id === task.id ? { ...t, status: "resolved" } : t)
    );

    toast.success("Task successfully resolved! 🎉");
  };

  
  const visibleTickets = tickets.filter(t => 
    t.status === "open" || t.status === "in-progress"
  );

  return (
    <div className="container mx-auto px-4 md:px-5 font-sans bg-gray-50 min-h-screen pb-20">
      <Header />
      <ToastContainer position="top-right" autoClose={2500} theme="colored" />

 
<section className="mt-10 mb-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

 
    <div
      className="relative p-8 text-white text-center rounded-2xl shadow-2xl transition-all duration-300  "
      style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(107, 70, 193, 0.95) 0%, rgba(159, 122, 234, 0.85) 100%),
          url('../public/vector2.png')
        `,
        backgroundSize: 'cover, 120%',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat, repeat',
        backgroundBlendMode: 'multiply',  
      }}
    >
      
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10">
        <p className="font-bold uppercase tracking-widest text-sm opacity-90 mb-2">
          In-Progress
        </p>
        <h2 className="text-7xl md:text-8xl font-black drop-shadow-lg">
          {inProgressList.length}
        </h2>
      </div>
    </div>

 
    <div
      className="relative p-8 text-white text-center rounded-2xl shadow-2xl transition-all duration-300 "
      style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(56, 161, 105, 0.95) 0%, rgba(104, 211, 145, 0.85) 100%),
          url('\vector1.png')
        `,
        backgroundSize: 'cover, 120%',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat, repeat',
        backgroundBlendMode: 'multiply',
      }}
    >
      {/* Optional subtle overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10">
        <p className="font-bold uppercase tracking-widest text-sm opacity-90 mb-2">
          Resolved
        </p>
        <h2 className="text-7xl md:text-8xl font-black drop-shadow-lg">
          {resolvedList.length}
        </h2>
      </div>
    </div>

  </div>
</section>

       
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          <h2 className="text-3xl font-black mb-8 text-slate-800">Customer Tickets</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleTickets.map((ticket) => (
              <Ticket
                key={ticket.id}
                ticket={ticket}
                onTicketClick={handleAddToProgress}
              />
            ))}
          </div>

          {visibleTickets.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200 mt-8">
              <p className="text-gray-400 italic text-lg">No tickets available to process.</p>
            </div>
          )}
        </div>

        {/* Sidebar – In Progress + Resolved */}
        <div className="lg:col-span-4 space-y-10">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-slate-700 border-b pb-3">Active Tasks</h3>
            <div className="space-y-4">
              {inProgressList.map((task) => (
                <div key={task.id} className="p-5 bg-blue-50 rounded-xl border border-blue-100 shadow-sm">
                  <h4 className="font-bold text-slate-800 mb-4">{task.title}</h4>
                  <button
                    onClick={() => handleCompleteTask(task)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition-all shadow-md active:scale-95"
                  >
                  Complete
                  </button>
                </div>
              ))}

              {inProgressList.length === 0 && (
                <p className="text-gray-400 italic text-center py-8 border border-dashed rounded-lg">
                  No tasks in progress yet
                </p>
              )}
            </div>
          </div>

       
          <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100 min-h-[280px] overflow-hidden"
            style={{
              backgroundImage: `url('https://www.svgrepo.com/show/404936/check-mark-button.svg')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom -20px right -20px",
              backgroundSize: "140px",
              backgroundBlendMode: "soft-light",
            }}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-700 border-b pb-3 relative z-10">
              Resolved Tasks
            </h3>
            <div className="relative z-10 space-y-3 max-h-64 overflow-y-auto pr-2">
              {resolvedList.map((task, index) => (
                <div key={task.id} className="py-3 border-b border-gray-100 last:border-0 flex items-start gap-3">
                  <span className="text-emerald-600 font-black text-lg">{index + 1}.</span>
                  <p className="text-slate-700 font-medium">{task.title}</p>
                </div>
              ))}

              {resolvedList.length === 0 && (
                <p className="text-slate-300 text-center py-12 italic">
                  No tasks resolved yet. Keep going!
                </p>
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