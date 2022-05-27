import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from './restaurant.entity';

@Injectable()
export class RestaurantsService {
    constructor(
        @InjectRepository(Restaurant) private restaurantRepository : Repository<Restaurant>
    ){}

    async createLesson(createRestaurantInput: CreateRestaurantInput): Promise<Restaurant> {
        const { name, startDate, endDate, students } = createRestaurantInput;
        
        const lesson = this.RestaurantRepository.create({
          id: uuid(),
          name,
          startDate,
          endDate,
          students
        });
    
        return this.lessonRepository.save(lesson);
      }
}
