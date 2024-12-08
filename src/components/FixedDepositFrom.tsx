import React, { useState } from 'react';
import { useFixedDeposit } from '../context/FixedDepositContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export const FixedDepositForm: React.FC = () => {
  const { addDeposit } = useFixedDeposit();
  const [amount, setAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [term, setTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addDeposit({
      amount: parseFloat(amount),
      interestRate: parseFloat(interestRate),
      term: parseInt(term),
      startDate: new Date(),
    });
    setAmount('');
    setInterestRate('');
    setTerm('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="w-full"
        />
      </div>
      <div>
        <Label htmlFor="interestRate">Interest Rate (%)</Label>
        <Input
          id="interestRate"
          type="number"
          step="0.01"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          required
          className="w-full"
        />
      </div>
      <div>
        <Label htmlFor="term">Term (months)</Label>
        <Input
          id="term"
          type="number"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          required
          className="w-full"
        />
      </div>
      <Button type="submit" className="w-full">Add Fixed Deposit</Button>
    </form>
  );
};

