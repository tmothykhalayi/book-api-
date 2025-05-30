import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Book } from '../book/book.entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  bio: string;

  @Column({ nullable: true })
  birthDate: Date;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Book, book => book.author)
  books: Book[];
}