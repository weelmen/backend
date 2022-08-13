import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './menu.entity';
import { v4 as uuid} from 'uuid'
import { CreateMenuInput } from './menu.input';

@Injectable()
export class MenusService {
    constructor(
        @InjectRepository(Menu) private menuRepository : Repository<Menu>
    ){}
    
    async getMenu(id: string):Promise<Menu>{
      return this.menuRepository.findOneBy({id}); 
    }
    async getMenus(): Promise<Menu[]> {
      return this.menuRepository.find();
    }
    async getMenusByRestaurant(restaurant_id: string): Promise<Menu[]> {
      return this.menuRepository.findBy({restaurant_id});
    }

    async createMenu( createMenuInput: CreateMenuInput ):Promise<Menu>{
        /*( name, Cuisine, Opens,Closes,DaysOpen,Rating,Location,Description )*/
        const { name,restaurant_id,Rating,Description,imagesrc} = createMenuInput;
        const menu = this.menuRepository.create({
          id: uuid(),
          name,
          restaurant_id,
          Rating,
          Description,
          imagesrc
        });
    
        return this.menuRepository.save(menu);
      }
}
