import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { FixedDepositForm } from '../components/FixedDepositFrom';
import { FixedDepositList } from '../components/FixedDepositList';

const DashboardPage: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    return <div className="text-center">Please sign in to access the dashboard.</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Add New Fixed Deposit</h2>
          <FixedDepositForm />
        </div>
        <div>
          <FixedDepositList />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

