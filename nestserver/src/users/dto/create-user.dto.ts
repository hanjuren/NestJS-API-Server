import { Type } from "class-transformer";
import { ArrayMaxSize, ArrayMinSize, IsArray, IsEmail, IsEnum, IsNumber, IsString, ValidateNested } from "class-validator";
import { UserRole, Users } from "src/entities/user.entity";

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public name: string;

  @IsNumber()
  public age: number;

  @IsArray()
  @ArrayMinSize(2)
  public job: any[];

  @IsEnum(UserRole)
  role: UserRole = UserRole.ADMIN;

}
