import React from 'react';
import { useFixedDeposit } from '../context/FixedDepositContext';
import { useUser } from '@clerk/clerk-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const FixedDepositList: React.FC = () => {
  const { deposits, removeDeposit } = useFixedDeposit();
  const { user } = useUser();

  const userDeposits = deposits.filter(deposit => deposit.userId === user?.id);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Your Fixed Deposits</h2>
      {userDeposits.length === 0 ? (
        <p>You have no fixed deposits yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {userDeposits.map((deposit) => (
            <Card key={deposit.id}>
              <CardHeader>
                <CardTitle>${deposit.amount.toFixed(2)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Interest Rate:</strong> {deposit.interestRate}%</p>
                <p><strong>Term:</strong> {deposit.term} months</p>
                <p><strong>Start Date:</strong> {deposit.startDate.toLocaleDateString()}</p>
                <Button
                  variant="destructive"
                  onClick={() => removeDeposit(deposit.id)}
                  className="mt-2 w-full"
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

