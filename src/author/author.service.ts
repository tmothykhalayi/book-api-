import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './entity/entity.author';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author = this.authorRepository.create(createAuthorDto);
    return this.authorRepository.save(author);
  }

  async findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  async findOne(id: string): Promise<Author> {
    const author = await this.authorRepository.findOneBy({ id });
    if (!author) {
      throw new Error(`Author with ID ${id} not found`);
    }
    return author;
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    await this.authorRepository.update(id, updateAuthorDto);
    const updatedAuthor = await this.authorRepository.findOneBy({ id });
    if (!updatedAuthor) {
      throw new Error(`Author with ID ${id} not found`);
    }
    return updatedAuthor;
  }

  async remove(id: string): Promise<void> {
    await this.authorRepository.delete(id);
  }
}



