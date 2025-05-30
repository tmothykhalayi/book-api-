import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entity/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const book = this.bookRepository.create(createBookDto);
    return this.bookRepository.save(book);
  }

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async findOne(id: string): Promise<Book> {
    const book = await this.bookRepository.findOneBy({ id });
    if (!book) {
      throw new Error(`Book with ID ${id} not found`);
    }
    return book;
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    await this.bookRepository.update(id, updateBookDto);
    const book = await this.bookRepository.findOneBy({ id });
    if (!book) {
      throw new Error(`Book with ID ${id} not found after update`);
    }
    return book;
  }

  async remove(id: string): Promise<void> {
    await this.bookRepository.delete(id);
  }
}