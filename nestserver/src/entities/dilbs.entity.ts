import { Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Notices } from "./notice.entity";
import { Posts } from "./posts.entity";
import { Users } from "./user.entity";

@Entity()
export class Dilbs {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (users) => users.Dilbs, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  Users: Users[];

  @ManyToOne(() => Posts, (users) => users.Dilbs, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'PostsId', referencedColumnName: 'id' }])
  Posts: Posts[];

  @OneToOne(() => Notices, (notices) => notices.Dilbs)
  Notices: Notices[];
}