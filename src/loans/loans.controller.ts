import { Controller, Get, Delete, Param, NotFoundException, Query, Post, Body  } from '@nestjs/common';
import { LoansService } from './loans.service';
import type { LoansStatus } from './loans.interface';
import { CreateLoanDto } from './dto/create-loans.dto';

@Controller('loans')
export class LoansController {
    constructor(private readonly loansService: LoansService) {}
    @Get ()
    getAllLoans(@Query('status')status?:LoansStatus) {
        return this.loansService.getAllLoans(status);
    }
   @Get(':id')
   findOne(@Param('id') id: string) {
    const loan = this.loansService.findOne(
      Number(id),
    );
    if (!loan) {
      throw new NotFoundException(
        'El prestamo con id ' + id + ' no existe',
      );
    }
    return loan;
  }
  @Post() create (@Body()body: CreateLoanDto){
    return this.loansService.create(body);
  }
}

