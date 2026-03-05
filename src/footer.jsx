 export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-10 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8" id="footer-container">
        
        {/* CS - Ticket System Section */}
        <div className="lg:col-span-1 " id="cs-ticket-system">
          <h3 className="text-white text-xl font-bold mb-4 italic">CS — Ticket System</h3>
          <p>
            An E-Ticket (Electronic Ticket) is a digital version of a paper ticket 
            that allows you to book and manage your travel or event entry online.
          </p>
        </div>

        {/* Company Section */}
        <div className="company ml-10">
          <h3 className="text-white text-xl font-bold mb-4 italic ">Company</h3>
          <p>About Us</p>
          <p>Our Mission</p>
          <p>Contact Sales</p>
        </div>

        {/* Services Section */}
        <div className="services">
          <h3 className="text-white text-xl font-bold mb-4 italic">Services</h3>
          <p>Products & Services</p>
          <p>Customer Stories</p>
          <p>Download App</p>
        </div>

        {/* Information Section */}
        <div className="information">
          <h3 className="text-white text-xl font-bold mb-4 italic">Information</h3>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Join Us</p>
        </div>

        {/* Social Links Section */}
        <div className="socialLinks">
          <h3 className="text-white text-xl font-bold mb-4 italic">SocialLinks</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-4"><i className="fa-brands fa-x-twitter"></i>@CS - TicketSystem</li>
            <li className="flex items-center gap-4"><i className="fa-brands fa-linkedin"></i>@CS - TicketSystem</li>
            <li className="flex items-center gap-4"><i className="fa-brands fa-facebook"></i>@CS - TicketSystem</li>
            <li className="flex items-center gap-4"><i className="fa-solid fa-envelope text-white"></i>@CS - TicketSystem</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}