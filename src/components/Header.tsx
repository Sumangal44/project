import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserButton, SignInButton, SignUpButton, useUser } from '@clerk/clerk-react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from './mode-toggle';

const Header: React.FC = () => {
  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-zinc-900 shadow-md fixed w-full">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">FixedDeposit</Link>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
              <li><Link to="/" className="text-white hover:text-primary" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/explore" className="text-white hover:text-primary" onClick={toggleMenu}>Explore</Link></li>
              {isSignedIn && (
                <>
                  <li><Link to="/dashboard" className="text-white hover:text-primary" onClick={toggleMenu}>Dashboard</Link></li>
                  <li><Link to="/profile" className="text-white hover:text-primary" onClick={toggleMenu}>Profile</Link></li>
                  <ModeToggle />
                </>
              )}
            </ul>
          </nav>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
            {isSignedIn ? (
              <UserButton />
            ) : (
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <SignInButton mode="modal">
                  <Button variant="outline" className="w-full md:w-auto">Sign In</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="w-full md:w-auto">Sign Up</Button>
                </SignUpButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

