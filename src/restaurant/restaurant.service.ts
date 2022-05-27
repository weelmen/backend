import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from './restaurant.entity';
import { v4 as uuid} from 'uuid'

@Injectable()
export class RestaurantsService {
    constructor(
        @InjectRepository(Restaurant) private restaurantRepository : Repository<Restaurant>
    ){}

    async createRestaurant( name, Cuisine, Opens,Closes,DaysOpen,Rating,Location,Description ):Promise<Restaurant>{
        
        const restaurant = this.restaurantRepository.create({
          id: uuid(),
          name,
          Cuisine,
          Opens,
          Closes,
          DaysOpen,
          Rating,
          Location,
          Description,
        });
    
        return this.restaurantRepository.save(restaurant);
      }
}
