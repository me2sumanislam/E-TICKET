 export default function Ticket({ ticket, onTicketClick }) {
  
  
  const { id, title, description, customer, priority, status, createdAt } = ticket;

  // Status Badge Logic (গাঢ় কালার ব্যবহার করা হয়েছে)
  const statusColors = {
    open: "bg-green-100 text-green-700",
    "in-progress": "bg-amber-100 text-amber-700",
    resolved: "bg-blue-100 text-blue-700",
  };

  // Priority Color Logic (বেশি স্পষ্ট কালার)
  const priorityColors = {
    High: "text-red-600",
    Medium: "text-amber-600",
    Low: "text-emerald-600",
  };

  return (
    <div
      onClick={() => onTicketClick(status)}
      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer p-6 flex flex-col h-full"
    >
      {/* Header: Title and Status */}
      <div className="flex justify-between items-start gap-4 mb-3">
        <h2 className="text-lg font-bold text-slate-800 leading-tight">
          {title}
        </h2>
        <span className={`px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wide ${statusColors[status.toLowerCase()] || 'bg-gray-100 text-gray-700'}`}>
          <span className="w-2 h-2 rounded-full bg-current"></span>
          {status}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 line-clamp-2 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Footer: Layout fix for wrapping */}
      <div className="flex flex-wrap items-center justify-between mt-auto pt-4 border-t border-gray-50 gap-y-3">
        {/* Left Side: ID & Priority */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
            #{id}
          </span>
          <span className={`text-[10px] font-black uppercase tracking-widest ${priorityColors[priority] || 'text-gray-500'}`}>
            {priority} Priority
          </span>
        </div>

        {/* Right Side: Customer & Date */}
        <div className="flex items-center gap-4 text-gray-600">
          <span className="text-xs font-semibold">{customer}</span>
          <div className="flex items-center gap-1.5 text-gray-400 border-l pl-4 border-gray-200">
             <span className="text-sm opacity-70">📅</span>
             <span className="text-[11px] font-medium">{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}