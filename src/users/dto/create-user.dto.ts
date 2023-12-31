import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'O nome precisa ser uma string.' })
  @IsNotEmpty({ message: 'O nome não pode ficar vazio.' })
  name: string;

  @IsString({ message: 'O email precisa ser uma string.' })
  @IsNotEmpty({ message: 'O email não pode ficar vazio.' })
  @IsEmail()
  email: string;

  @IsString({ message: 'A senha precisa ser uma string.' })
  @IsNotEmpty({ message: 'A senha não pode ficar vazia.' })
  @MinLength(8, { message: 'A senha deve ter 8 ou mais caracteres.' })
  password: string;
}
