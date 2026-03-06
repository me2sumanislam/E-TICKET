 export default function Ticket({ ticket, onTicketClick }) {
  const priorityStyles = {
    High: "bg-red-100 text-red-800 border-red-400",
    Medium: "bg-orange-100 text-orange-800 border-orange-400",
    Low: "bg-green-100 text-green-800 border-green-400",
  };

  const statusStyles = {
    open: {
      bg: "bg-green-50",
      text: "text-green-700",
      dot: "bg-green-500",
      label: "OPEN",
    },
    "in-progress": {
      bg: "bg-blue-50",
      text: "text-blue-700",
      dot: "bg-blue-500",
      label: "IN-PROGRESS",
    },
    resolved: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-500",
      label: "RESOLVED",
    },
  };

  const currentStatus = statusStyles[ticket.status] || statusStyles.open;

  const formattedDate = new Date(ticket.createdAt).toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const isClickable = ticket.status === "open";

  const handleCardClick = () => {
    if (isClickable) {
      onTicketClick(ticket);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className={`
        bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden 
        transition-all duration-300 hover:shadow-lg hover:border-indigo-300 group
        ${isClickable ? "cursor-pointer hover:bg-indigo-50/20" : "cursor-default"}
      `}
    >
      {/* Top colored bar */}
      <div className={`h-1.5 w-full ${currentStatus.dot.replace("500", "600")}`}></div>

      <div className="p-5 md:p-6">
        {/* Title + Status Badge */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
          <h3 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-indigo-700 transition-colors line-clamp-2">
            {ticket.title}
          </h3>

          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${currentStatus.bg} ${currentStatus.text} whitespace-nowrap`}
          >
            <span className={`w-2.5 h-2.5 rounded-full ${currentStatus.dot}`}></span>
            {currentStatus.label}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-5 line-clamp-4 leading-relaxed">
          {ticket.description}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-5">
          <div>
            <span className="block text-gray-500 font-medium">Customer</span>
            <span className="font-semibold text-slate-700">{ticket.customer}</span>
          </div>

          <div>
            <span className="block text-gray-500 font-medium">Priority</span>
            <span
              className={`inline-block px-3 py-0.5 rounded-full text-xs font-bold uppercase border ${priorityStyles[ticket.priority] || "bg-gray-100 text-gray-700"}`}
            >
              {ticket.priority}
            </span>
          </div>

          <div>
            <span className="block text-gray-500 font-medium">Ticket ID</span>
            <span className="font-mono font-medium text-slate-700">{ticket.id}</span>
          </div>

          <div>
            <span className="block text-gray-500 font-medium">Created</span>
            <span className="font-medium text-slate-600">{formattedDate}</span>
          </div>
        </div>

        
      </div>
    </div>
  );
}