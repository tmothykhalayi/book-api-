
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthorModule } from './author/author.module';
import { User } from './users/entities/user.entity';
import { Profile } from './profile/entity/entity.profile';
import { Author } from './author/entity/entity.author';
import { Book } from './entities/book.entity';
import { Category } from './category/entity/category.entity';
import { BookReview } from './entities/book-review.entity';
import { CategoryModule } from './category/category.module';
import { ProfileModule } from './profile/profile.module';
import { BookReviewModule } from './book-review/book-review.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([User, Profile, Author, Category, Book, BookReview]),
    UsersModule,
    AuthorModule,
    CategoryModule,
    ProfileModule,
    BookReviewModule,
  ],
})
export class AppModule {}


