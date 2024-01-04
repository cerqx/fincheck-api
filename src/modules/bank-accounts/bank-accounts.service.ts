import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { BankAccountsRepository } from 'src/shared/database/repositories/bank-accounts.repositories';

@Injectable()
export class BankAccountsService {
  constructor(private readonly bankAccountsRepo: BankAccountsRepository) {}
  create(userId: string, createBankAccountDto: CreateBankAccountDto) {
    const { name, type, color, initialBalance } = createBankAccountDto;

    return this.bankAccountsRepo.create({
      data: {
        userId,
        name,
        type,
        color,
        initialBalance,
      },
    });
  }

  findAllByUserId(userId: string) {
    return this.bankAccountsRepo.findMany({
      where: { userId },
    });
  }

  async update(
    userId: string,
    bankAccountId: string,
    updateBankAccountDto: UpdateBankAccountDto,
  ) {
    return { userId, bankAccountId, updateBankAccountDto };
  }

  remove(id: string) {
    return `This action removes a #${id} bankAccount`;
  }
}
