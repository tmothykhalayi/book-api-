import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Book } from '../book/entity/book.entity';
import { User } from '../users/entities/user.entity';

@Entity()
export class BookReview {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @Column()
  rating: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => User, user => user.reviews)
  user: User;

  @ManyToOne(() => Book, book => book.reviews)
  book: Book;
}