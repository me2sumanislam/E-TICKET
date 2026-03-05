//  export default function Ticket({ ticket, onTicketClick }) {
  
  
//   const { id, title, description, customer, priority, status, createdAt } = ticket;

   
//   const statusColors = {
//     open: "bg-green-100 text-green-700",
//     "in-progress": "bg-amber-100 text-amber-700",
//     resolved: "bg-blue-100 text-blue-700",
//   };
 
//   const priorityColors = {
//     High: "text-red-600",
//     Medium: "text-amber-600",
//     Low: "text-emerald-600",
//   };

//   return (
//     <div
//       onClick={() => onTicketClick(status)}
//       className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer p-6 flex flex-col h-full"
//     >
//       {/* Header: Title and Status */}
//       <div className="flex justify-between items-start gap-4 mb-3">
//         <h2 className="text-lg font-bold text-slate-800 leading-tight">
//           {title}
//         </h2>
//         <span className={`px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wide ${statusColors[status.toLowerCase()] || 'bg-gray-100 text-gray-700'}`}>
//           <span className="w-2 h-2 rounded-full bg-current"></span>
//           {status}
//         </span>
//       </div>

//       {/* Description */}
//       <p className="text-sm text-gray-500 line-clamp-2 mb-6 leading-relaxed">
//         {description}
//       </p>

//       {/* Footer: Layout fix for wrapping */}
//       <div className="flex flex-wrap items-center justify-between mt-auto pt-4 border-t border-gray-50 gap-y-3">
//         {/* Left Side: ID & Priority */}
//         <div className="flex items-center gap-3">
//           <span className="text-[11px] font-mono bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
//             #{id}
//           </span>
//           <span className={`text-[10px] font-black uppercase tracking-widest ${priorityColors[priority] || 'text-gray-500'}`}>
//             {priority} Priority
//           </span>
//         </div>

//         {/* Right Side: Customer & Date */}
//         <div className="flex items-center gap-4 text-gray-600">
//           <span className="text-xs font-semibold">{customer}</span>
//           <div className="flex items-center gap-1.5 text-gray-400 border-l pl-4 border-gray-200">
//              <span className="text-sm opacity-70">📅</span>
//              <span className="text-[11px] font-medium">{createdAt}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// Ticket.jsx (উদাহরণ)
function Ticket({ ticket, onTicketClick }) {
  const isDisabled = ticket.status !== "open";

  return (
    <div
      className={`p-6 rounded-2xl shadow-md transition-all duration-200 border
        ${isDisabled 
          ? "opacity-50 bg-gray-100 cursor-not-allowed pointer-events-none" 
          : "bg-white hover:shadow-xl hover:border-blue-300 cursor-pointer"}
      `}
      onClick={!isDisabled ? () => onTicketClick(ticket) : undefined}
    >
      <h3 className="font-bold text-lg text-gray-800">{ticket.title}</h3>
      <p className="text-gray-600 mt-2 line-clamp-3">{ticket.description}</p>
      
      <div className="mt-4 flex justify-between items-center text-sm">
        <span className={`font-semibold px-3 py-1 rounded-full
          ${ticket.priority === "High" ? "bg-red-100 text-red-700" : 
            ticket.priority === "Medium" ? "bg-yellow-100 text-yellow-700" : 
            "bg-green-100 text-green-700"}`}
        >
          {ticket.priority}
        </span>
        
        {ticket.status !== "open" && (
          <span className="text-xs font-medium text-gray-500">
            {ticket.status === "in-progress" ? "In Progress" : "Resolved"}
          </span>
        )}
      </div>
    </div>
  );
}

export default Ticket;