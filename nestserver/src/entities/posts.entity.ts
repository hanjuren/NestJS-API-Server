import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Dilbs } from "./dilbs.entity";
import { Reviews } from "./review.entity";
import { Users } from "./user.entity";

@Entity()
export class Posts {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'title', length: 150 })
  title: string;

  @Column('text', { name: 'content' })
  content: string;

  @ManyToOne(() => Users, (users) => users.Posts, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'Userid', referencedColumnName: 'id' }])
  User: Users;

  @OneToOne(() => Reviews, (reviews) => reviews.Posts)
  Reviews: Reviews[];

  @OneToMany(() => Dilbs, (dilbs) => dilbs.Posts)
  Dilbs: Dilbs[];
}