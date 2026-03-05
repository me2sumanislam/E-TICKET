 import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Ticket from "./Ticket";
import Header from "./header";
import Footer from "./footer";

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgressList, setInProgressList] = useState([]);
  const [resolvedList, setResolvedList] = useState([]);

  // Fetching ticket data from public folder + adding default status
  useEffect(() => {
    fetch("/ticket-info.json")
      .then((res) => res.json())
      .then((data) =>
        setTickets(
          data.map((ticket) => ({
            ...ticket,
            status: "open", // "open" | "in-progress" | "resolved"
          }))
        )
      )
      .catch((err) => console.error("Error loading tickets:", err));
  }, []);

  // Add ticket to In Progress
  const handleAddToProgress = (ticket) => {
    const isAlreadyInProgress = inProgressList.some((item) => item.id === ticket.id);
    const isAlreadyResolved = resolvedList.some((item) => item.id === ticket.id);

    if (isAlreadyInProgress || isAlreadyResolved) {
      toast.warning("This task is already in your status list!");
      return;
    }

    if (ticket.status !== "open") {
      toast.info("This ticket is not available anymore.");
      return;
    }

    setInProgressList((prev) => [...prev, ticket]);

    // Update status in main tickets list
    setTickets((prev) =>
      prev.map((t) =>
        t.id === ticket.id ? { ...t, status: "in-progress" } : t
      )
    );

    toast.info(`Task Started: ${ticket.title}`);
  };

  // Move from In Progress → Resolved
  const handleCompleteTask = (task) => {
    // Remove from in-progress
    setInProgressList((prev) => prev.filter((item) => item.id !== task.id));

    // Add to resolved
    setResolvedList((prev) => [...prev, task]);

    // Update status in main tickets list
    setTickets((prev) =>
      prev.map((t) =>
        t.id === task.id ? { ...t, status: "resolved" } : t
      )
    );

    toast.success("Task successfully resolved! 🎉");
  };

  return (
    <div className="container mx-auto px-4 md:px-5 font-sans bg-gray-50 min-h-screen pb-20">
      <Header />
      <ToastContainer position="top-right" autoClose={2500} theme="colored" />

      {/* Counter Section */}
      <section className="mt-10 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-blue-600 text-white text-center rounded-2xl shadow-lg transition-transform hover:scale-105">
            <p className="font-bold uppercase tracking-widest text-sm opacity-90">In Progress</p>
            <h2 className="text-6xl md:text-7xl font-black mt-3">{inProgressList.length}</h2>
          </div>
          <div className="p-8 bg-emerald-600 text-white text-center rounded-2xl shadow-lg transition-transform hover:scale-105">
            <p className="font-bold uppercase tracking-widest text-sm opacity-90">Resolved</p>
            <h2 className="text-6xl md:text-7xl font-black mt-3">{resolvedList.length}</h2>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Available Tickets */}
        <div className="lg:col-span-8">
          <h2 className="text-3xl font-black mb-8 text-slate-800">Customer Tickets</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tickets.map((ticket) => (
              <Ticket
                key={ticket.id}
                ticket={ticket}
                onTicketClick={handleAddToProgress}
              />
            ))}
          </div>

          {tickets.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200 mt-8">
              <p className="text-gray-400 italic text-lg">No tickets available to process.</p>
            </div>
          )}
        </div>

        {/* Right: Status Sidebar */}
        <div className="lg:col-span-4 space-y-10">
          {/* In Progress Tasks */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-slate-700 border-b pb-3">Active Tasks</h3>
            <div className="space-y-4">
              {inProgressList.map((task) => (
                <div
                  key={task.id}
                  className="p-5 bg-blue-50 rounded-xl border border-blue-100 shadow-sm"
                >
                  <h4 className="font-bold text-slate-800 mb-4">{task.title}</h4>
                  <button
                    onClick={() => handleCompleteTask(task)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition-all shadow-md active:scale-95"
                  >
                    Mark as Complete
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

          {/* Resolved Tasks */}
          <div
            className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100 min-h-[280px] overflow-hidden"
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
                <div
                  key={task.id}
                  className="py-3 border-b border-gray-100 last:border-0 flex items-start gap-3"
                >
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