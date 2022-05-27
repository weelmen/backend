import { Resolver,Query, Mutation, Args } from "@nestjs/graphql";
import { RestaurantsService } from "./restaurant.service";
import { RestaurantType } from "./restaurant.type";

@Resolver(of => RestaurantType)
export class RestaurantResolver{

    constructor(
        private restaurantService: RestaurantsService,
       
      ) {}
    

    @Query(returns => RestaurantType)
    restaurant() {
        return{
       
    id: '156zfdfeth6515' ,
    name: 'Restaurant1' ,
    Cuisine: 'french' ,
    Opens: '8 AM' ,
    Closes: '10 PM' ,
    DaysOpen: 'i dont know' ,
    Rating : '3.5' ,
    Location: 'hammam sousse',    
    Description: 'Bla Bla Bla' ,

        };
    }

    @Mutation(returns => RestaurantType)
    createRestaurant(
        @Args('name') name: string , 
        @Args('Cuisine') Cuisine: string , 
        @Args('Opens') Opens: string , 
        @Args('Closes') Closes: string , 
        @Args('DaysOpen') DaysOpen: string , 
        @Args('Rating') Rating: string , 
        @Args('Location') Location: string , 
        @Args('Description') Description: string , 
  ) {
    return this.restaurantService.createRestaurant(name,Cuisine,Opens,Closes,DaysOpen,Rating,Location,Description);

    }





}