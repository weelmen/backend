import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './restaurant.entity';
import { RestaurantResolver } from './restaurant.resolver';
import { RestaurantsService } from './restaurant.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Restaurant]),
    ], 
    providers:[
        RestaurantResolver,
        RestaurantsService]
})
export class RestaurantsModule {}
