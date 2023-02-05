import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

import { User } from "./user.entities";

@Entity("schedules_user_property")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 60 })
  name: String;

  @Column({ length: 60, nullable: true })
  email: String;

  @Column({ length: 11 })
  cellphone: String;

  @ManyToOne(() => User, (user) => user.id, { eager: true })
  userid: User;
}

export { Contact };
