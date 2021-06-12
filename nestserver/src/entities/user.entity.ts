import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Posts } from "./posts.entity";

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

  @Column('varchar', { name: 'job', length: 10 })
  job: string;

  @OneToMany(() => Posts, (posts) => posts.User)
  Posts: Posts[];

}
