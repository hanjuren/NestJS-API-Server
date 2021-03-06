import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Dilbs } from "./dilbs.entity";
import { Notices } from "./notice.entity";
import { Posts } from "./posts.entity";
import { Reviews } from "./review.entity";

export enum UserRole {
  ADMIN = "admin",
  EDITOR = "editor",
  GHOST = "ghost"
}

@Entity()
export class Users {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;

  @Column('varchar', { name: 'name', length: 20, unique: true })
  name: string;

  @Column('int', { name: 'age' })
  age: number;

  @Column('varchar', { name: 'job', length: 10, nullable: true })
  job: string[];

  @Column({
    name: 'role',
    type: 'enum',
    enum: UserRole,
    default: UserRole.ADMIN
  })
  role: UserRole;

  @OneToMany(() => Posts, (posts) => posts.users)
  posts: Posts[];

  @OneToMany(() => Reviews, (reviews) => reviews.Writer)
  Reviews: Reviews[];

  @OneToMany(() => Reviews, (reviews) => reviews.Seller)
  Reviews2: Reviews[];

  @OneToMany(() => Dilbs, (dilbs) => dilbs.Users)
  Dilbs: Dilbs[];

  @OneToMany(() => Notices, (notices) => notices.Users)
  Notices: Notices[];

}
