import { Injectable } from '@nestjs/common';
import { Loan } from './loans.interface';

@Injectable()
export class LoansService {
    private loans: Loan[] = [
        {
            id: 1,
            student: 'pipe',
            equipment: 'pc',
            status: 'borrowed',
        },
        {
            id: 2,
            student: 'santi',
            equipment: 'libro',
            status: 'returned',
        },

    ];
    getAllLoans(){
        return this.loans; [];
    }
}

