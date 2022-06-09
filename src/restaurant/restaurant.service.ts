import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from './restaurant.entity';
import { v4 as uuid} from 'uuid'
import { CreateRestaurantInput } from './restaurant.input';

@Injectable()
export class RestaurantsService {
    constructor(
        @InjectRepository(Restaurant) private restaurantRepository : Repository<Restaurant>
    ){}
    
    async getRestaurant(id: string):Promise<Restaurant>{
      return this.restaurantRepository.findOneBy({id}); 
    }
    async getRestaurants(): Promise<Restaurant[]> {
      return this.restaurantRepository.find();
    }

    async createRestaurant( createRestaurantInput: CreateRestaurantInput ):Promise<Restaurant>{
        /*( name, Cuisine, Opens,Closes,DaysOpen,Rating,Location,Description )*/
        const { name, Cuisine, Opens,Closes,DaysOpen,Rating,Location,Description} = createRestaurantInput;
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
