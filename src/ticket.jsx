 export default function Ticket({ ticket, onTicketClick }) {
  const { id, title, description, customer, priority, status, createdAt } = ticket;

  return (
    <div 
      onClick={() => onTicketClick(status)} 
      className="card bg-base-100 w-full shadow-xl border border-base-200 hover:shadow-2xl transition-all cursor-pointer group"
    >
      <div className="card-body p-6">
        {/* টপ সেকশন: ID এবং Priority Badge */}
        <div className="flex justify-between items-start mb-2">
          <div className="badge badge-outline badge-sm opacity-50 font-mono">#{id}</div>
          <div className={`badge badge-sm font-bold ${
            priority === 'High' ? 'badge-error' : 
            priority === 'Medium' ? 'badge-warning' : 
            'badge-success'
          } text-white`}>
            {priority}
          </div>
        </div>

        {/* টাইটেল এবং ডেসক্রিপশন */}
        <h2 className="card-title text-gray-800 group-hover:text-primary transition-colors">
          {title}
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          {description}
        </p>

        {/* কাস্টমার এবং ডেট ইনফো */}
        <div className="divider my-2"></div> 
        
        <div className="flex justify-between items-center text-xs">
          <div>
            <span className="block uppercase opacity-50 font-bold">Customer</span>
            <span className="font-semibold text-base-content">{customer}</span>
          </div>
          <div className="text-right">
            <span className="block uppercase opacity-50 font-bold">Date</span>
            <span className="font-semibold text-base-content">{createdAt}</span>
          </div>
        </div>

        {/* কার্ড ফুটার: Status */}
        <div className="card-actions justify-end mt-4">
          <button className={`btn btn-xs btn-outline ${
            status === 'resolved' ? 'btn-success' : 'btn-info'
          } gap-2`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
            </span>
            {status}
          </button>
        </div>
      </div>
    </div>
  );
}