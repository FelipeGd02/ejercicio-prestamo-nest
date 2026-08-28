import { Controller, Get, Delete,  } from '@nestjs/common';
import { LoansService } from './loans.service';

@Controller('loans')
export class LoansController {
    constructor(private readonly loansService: LoansService) {}
    @Get ()
    getAllLoans() {
        return this.loansService.getAllLoans();
    }
}
