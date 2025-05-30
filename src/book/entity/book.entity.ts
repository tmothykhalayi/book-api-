import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Author } from '../author/author.entity';
import { Category } from '../category/category.entity';
import { BookReview } from '../book-review/book-review.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  publicationYear: number;

  @Column({ default: true })
  isAvailable: boolean;

  @ManyToOne(() => Author, author => author.books)
  author: Author;

  @ManyToMany(() => Category, category => category.books)
  @JoinTable()
  categories: Category[];

  @OneToMany(() => BookReview, review => review.book)
  reviews: BookReview[];
}