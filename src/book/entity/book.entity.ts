import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Category } from '../../category/entity/category.entity';
import { BookReview } from '../../book-review/entity/book-review.entity';
import { Author } from '../../author/entity/entity.author';
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