import { Injectable, NotFoundException } from '@nestjs/common';
import { Loan, LoansStatus } from './loans.interface';
import { CreateLoanDto } from './dto/create-loans.dto';

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
      getAllLoans(status?: LoansStatus): Loan[] {
    if (!status) {
      return this.loans;
    }
    return this.loans.filter((loan) => loan.status === status);
  }
    findOne(id: number): Loan | undefined {return this.loans.find(
      (loan) => loan.id === id,
    );
  }

  create(data: CreateLoanDto): Loan{
    const newLoan: Loan = {
        id: this.loans.length + 1,
        student: data.student,
        equipment: data.equipment,
        status: 'borrowed',
    };
    this.loans.push(newLoan);
    return newLoan;
  }
  remove(id: number) {
    const index = this.loans.findIndex((loan)=>loan.id===id);
    if (index===-1){
        throw new NotFoundException('El prestamo con id' + id + 'no existe',);
    }
    const [deletedLoan]=this.loans.splice(index, 1);
    return deletedLoan;
  }
}

