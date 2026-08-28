export type LoansStatus =
  |  'borrowed'
  | 'returned';

export interface Loan {
  id: number;
  student: string;
  equipment: string;
  status: LoansStatus;
  //status: 'borrowed' | 'returned';
} 