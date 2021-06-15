import { Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Dilbs } from "./dilbs.entity";
import { Posts } from "./posts.entity";
import { Reviews } from "./review.entity";
import { Users } from "./user.entity";

@Entity()
export class Notices {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (users) => users.Notices, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'userid', referencedColumnName: 'id' }])
  Users: Users[];

  @OneToOne(() => Reviews, (reviews) => reviews.Notices, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'reviewid', referencedColumnName: 'id' }])
  Reviews: Reviews[];

  @OneToOne(() => Dilbs, (dilbs) => dilbs.Notices, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'dilbsId', referencedColumnName: 'id' }])
  Dilbs: Dilbs[];
}