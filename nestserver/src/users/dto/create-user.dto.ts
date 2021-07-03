import { IsEmail, IsEnum, IsNumber, IsString } from "class-validator";
import { UserRole } from "src/entities/user.entity";

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public name: string;

  @IsNumber()
  public age: number;

  @IsString()
  public job: string;

  @IsEnum(UserRole)
  role: UserRole = UserRole.ADMIN;

}
