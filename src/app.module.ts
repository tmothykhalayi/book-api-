import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthorModule } from './author/author.module';
import { User } from './users/entities/user.entity';
import { Profile } from './profile/entity/entity.profile';
import { Author } from './author/entity/entity.author';
import { Category } from './category/entity/category.entity';
import { CategoryModule } from './category/category.module';
import { ProfileModule } from './profile/profile.module';
import { Book } from './book/entity/book.entity';
import { BookReview } from './book-review/entity/book-review.entity';
import { BookReviewModule } from './book-review/book-review.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT', 5432),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        ssl: configService.get('DB_SSL') === 'true',
        entities: [User, Profile, Author, Category, Book, BookReview],
        synchronize: true, // be careful with this in production
      }),
    }),
    UsersModule,
    AuthorModule,
    CategoryModule,
    ProfileModule,
    BookModule,
    BookReviewModule,
  ],
})
export class AppModule {}


