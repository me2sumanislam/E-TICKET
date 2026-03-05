 export default function Footer() {
  return (
    <footer className="mt-20 bg-black text-gray-400 py-12 px-10 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8" id="footer-container">
        
        {/* CS - Ticket System Section */}
        <div className="lg:col-span-1" id="cs-ticket-system">
          <h3 className="text-white text-xl font-bold mb-4 italic">CS — Ticket System</h3>
          <p className="leading-relaxed">
            An E-Ticket (Electronic Ticket) is a digital version of a paper ticket 
            that allows you to book and manage your travel or event entry online.
          </p>
        </div>

        {/* Company Section */}
        <div className="company lg:ml-10">
          <h3 className="text-white text-xl font-bold mb-4 italic">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="services">
          <h3 className="text-white text-xl font-bold mb-4 italic">Services</h3>
          <ul className="space-y-2">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download App</li>
          </ul>
        </div>

        {/* Information Section */}
        <div className="information">
          <h3 className="text-white text-xl font-bold mb-4 italic">Information</h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="socialLinks">
          <h3 className="text-white text-xl font-bold mb-4 italic">Social Links</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3"><i className="fa-brands fa-x-twitter"></i> @CS — Ticket System</li>
            <li className="flex items-center gap-3"><i className="fa-brands fa-linkedin"></i> @CS — Ticket System</li>
            <li className="flex items-center gap-3"><i className="fa-brands fa-facebook"></i> @CS — Ticket System</li>
            <li className="flex items-center gap-3"><i className="fa-solid fa-envelope"></i> support@cst.com</li>
          </ul>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center">
        <p className="text-sm opacity-60 tracking-wide">
          © 2025 CS — Ticket System. All rights reserved.
        </p>
      </div>
    </footer>
  );
}