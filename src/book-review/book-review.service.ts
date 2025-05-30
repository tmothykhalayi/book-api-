import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookReview } from './entity/book-review.entity';
import { CreateBookReviewDto } from './dto/create-book-review.dto';
import { UpdateBookReviewDto } from './dto/update-book-review.dto';

@Injectable()
export class BookReviewService {
  constructor(
    @InjectRepository(BookReview)
    private bookReviewRepository: Repository<BookReview>,
  ) {}

  async create(createBookReviewDto: CreateBookReviewDto): Promise<BookReview> {
    const bookReview = this.bookReviewRepository.create(createBookReviewDto);
    return this.bookReviewRepository.save(bookReview);
  }

  async findAll(): Promise<BookReview[]> {
    return this.bookReviewRepository.find();
  }

  async findOne(id: string): Promise<BookReview> {
    const review = await this.bookReviewRepository.findOneBy({ id });
    if (!review) {
      throw new Error(`Book review with ID "${id}" not found`);
    }
    return review;
  }

  async update(id: string, updateBookReviewDto: UpdateBookReviewDto): Promise<BookReview> {
    await this.bookReviewRepository.update(id, updateBookReviewDto);
    const updatedReview = await this.bookReviewRepository.findOneBy({ id });
    if (!updatedReview) {
      throw new Error(`Book review with ID "${id}" not found`);
    }
    return updatedReview;
  }

  async remove(id: string): Promise<void> {
    await this.bookReviewRepository.delete(id);
  }
}