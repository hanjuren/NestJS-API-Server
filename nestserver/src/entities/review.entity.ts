import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Notices } from "./notice.entity";
import { Posts } from "./posts.entity";
import { Users } from "./user.entity";

@Entity()
export class Reviews {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'title', length: 100 })
  title: string;

  @Column('varchar', { name: 'content', length: 100 })
  content: string;

  @ManyToOne(() => Users, (users) => users.Reviews, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'WriterId', referencedColumnName: 'id' }])
  Writer: Users;

  @ManyToOne(() => Users, (users) => users.Reviews2, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'SellerId', referencedColumnName: 'id' }])
  Seller: Users;

  @OneToOne(() => Posts, (posts) => posts.Reviews, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'ProductId', referencedColumnName: 'id' }])
  Posts: Posts;

  @OneToOne(() => Notices, (notices) => notices.Reviews)
  Notices: Notices[];
}