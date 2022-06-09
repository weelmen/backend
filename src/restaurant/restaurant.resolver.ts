import { Resolver,Query, Mutation, Args } from "@nestjs/graphql";
import { CreateRestaurantInput } from "./restaurant.input";
import { RestaurantsService } from "./restaurant.service";
import { RestaurantType } from "./restaurant.type";

@Resolver(of => RestaurantType)
export class RestaurantResolver{

    constructor(
      /*  @InjectRepository(Restaurant) */private restaurantService: RestaurantsService,
       
      ) {}
    

    @Query(returns => RestaurantType)
    restaurant(
        @Args('id') id: string,
    ) {

        return this.restaurantService.getRestaurant(id)
    /*    return{
       
    id: '156zfdfeth6515' ,
    name: 'Restaurant1' ,
    Cuisine: 'french' ,
    Opens: '8 AM' ,
    Closes: '10 PM' ,
    DaysOpen: 'i dont know' ,
    Rating : '3.5' ,
    Location: 'hammam sousse',    
    Description: 'Bla Bla Bla' ,

        };*/
    }
    @Query(returns => [RestaurantType])
    restaurants() {
    return this.restaurantService.getRestaurants();
  }

    @Mutation(returns => RestaurantType)
    createRestaurant(
      @Args('createRestaurantInput') createRestaurantInput:CreateRestaurantInput,
    ) {
    return this.restaurantService.createRestaurant(createRestaurantInput);

    }





}