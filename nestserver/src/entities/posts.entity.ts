import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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
}