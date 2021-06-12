import { PickType } from "@nestjs/mapped-types";
import { Users } from "../../entities/user.entity";

export class CreateUserDto extends PickType(Users, [
  'email',
  'name',
  'age',
  'job',
] as const) { }
