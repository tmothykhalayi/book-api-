import { Controller, Get, Post, Put, Delete, Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { BookReviewService } from './book-review.service';
import { CreateBookReviewDto } from './dto/create-book-review.dto';
import { UpdateBookReviewDto } from './dto/update-book-review.dto';
import { BookReview } from './entity/book-review.entity';

@Controller('book-reviews')
export class BookReviewController {
  constructor(private readonly bookReviewService: BookReviewService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createBookReviewDto: CreateBookReviewDto): Promise<BookReview> {
    return this.bookReviewService.create(createBookReviewDto);
  }

  @Get()
  async findAll(): Promise<BookReview[]> {
    return this.bookReviewService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<BookReview> {
    return this.bookReviewService.findOne(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() updateBookReviewDto: UpdateBookReviewDto): Promise<BookReview> {
    return this.bookReviewService.update(id, updateBookReviewDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.bookReviewService.remove(id);
  }
}

