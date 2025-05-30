import { Module } from '@nestjs/common';
import { BookReviewController } from './book-review.controller';
import { BookReviewService } from './book-review.service';

@Module({
  controllers: [BookReviewController],
  providers: [BookReviewService]
})
export class BookReviewModule {}
