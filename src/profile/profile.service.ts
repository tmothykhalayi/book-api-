import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entity/entity.profile';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const profile = this.profileRepository.create(createProfileDto);
    return this.profileRepository.save(profile);
  }

  async findAll(): Promise<Profile[]> {
    return this.profileRepository.find();
  }

  async findOne(id: string): Promise<Profile> {
    const profile = await this.profileRepository.findOneBy({ id });
    if (!profile) {
      throw new Error(`Profile with ID ${id} not found`);
    }
    return profile;
  }

  async update(id: string, updateProfileDto: UpdateProfileDto): Promise<Profile> {
    await this.profileRepository.update(id, updateProfileDto);
    const updatedProfile = await this.profileRepository.findOneBy({ id });
    if (!updatedProfile) {
      throw new Error(`Profile with ID ${id} not found`);
    }
    return updatedProfile;
  }

  async remove(id: string): Promise<void> {
    await this.profileRepository.delete(id);
  }
}



