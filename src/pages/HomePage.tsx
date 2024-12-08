import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const HomePage: React.FC = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-6">Welcome to FixedDeposit</h1>
      <p className="text-xl mb-8">Manage your fixed deposits with ease and maximize your returns.</p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button asChild className="w-full sm:w-auto">
          <Link to="/explore">Explore Fixed Deposits</Link>
        </Button>
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <Link to="/dashboard">Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;

