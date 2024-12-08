import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const fixedDepositOptions = [
  { name: 'Standard FD', interestRate: 5.5, minTerm: 6, maxTerm: 60 },
  { name: 'Senior Citizen FD', interestRate: 6.0, minTerm: 12, maxTerm: 60 },
  { name: 'Tax Saver FD', interestRate: 5.75, minTerm: 60, maxTerm: 120 },
  { name: 'Cumulative FD', interestRate: 5.6, minTerm: 12, maxTerm: 120 },
];

const ExplorePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Explore Fixed Deposit Options</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fixedDepositOptions.map((option, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{option.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Interest Rate:</strong> {option.interestRate}%</p>
              <p><strong>Term:</strong> {option.minTerm} to {option.maxTerm} months</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;

