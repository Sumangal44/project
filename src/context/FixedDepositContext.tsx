import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useUser } from '@clerk/clerk-react';

interface FixedDeposit {
  id: string;
  userId: string;
  amount: number;
  interestRate: number;
  term: number;
  startDate: Date;
}

interface FixedDepositContextType {
  deposits: FixedDeposit[];
  addDeposit: (deposit: Omit<FixedDeposit, 'id' | 'userId'>) => void;
  removeDeposit: (id: string) => void;
}

const FixedDepositContext = createContext<FixedDepositContextType | undefined>(undefined);

export const useFixedDeposit = () => {
  const context = useContext(FixedDepositContext);
  if (!context) {
    throw new Error('useFixedDeposit must be used within a FixedDepositProvider');
  }
  return context;
};

export const FixedDepositProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [deposits, setDeposits] = useState<FixedDeposit[]>([]);
  const { user } = useUser();

  const addDeposit = (deposit: Omit<FixedDeposit, 'id' | 'userId'>) => {
    if (user) {
      const newDeposit = { ...deposit, id: Date.now().toString(), userId: user.id };
      setDeposits([...deposits, newDeposit]);
    }
  };

  const removeDeposit = (id: string) => {
    setDeposits(deposits.filter(deposit => deposit.id !== id));
  };

  return (
    <FixedDepositContext.Provider value={{ deposits, addDeposit, removeDeposit }}>
      {children}
    </FixedDepositContext.Provider>
  );
};

