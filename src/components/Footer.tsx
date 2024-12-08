import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 mt-80 ">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">FixedDeposit</h3>
            <p className="text-white">Manage your fixed deposits with ease.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white hover:text-primary">Home</Link></li>
              <li><Link to="/explore" className="text-white hover:text-primary">Explore</Link></li>
              <li><Link to="/dashboard" className="text-white hover:text-primary">Dashboard</Link></li>
            </ul>
          </div>
          <div><h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-white">Email: support@fixeddeposit.com</p>
            <p className="text-white">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-white">&copy; 2023 FixedDeposit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

