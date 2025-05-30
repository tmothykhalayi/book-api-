import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookReview } from './entity/book-review.entity';
import { BookReviewService } from './book-review.service';
import { BookReviewController } from './book-review.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BookReview])],
  providers: [BookReviewService],
  controllers: [BookReviewController],
})
export class BookReviewModule {}
