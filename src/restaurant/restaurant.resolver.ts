import { Resolver,Query, Mutation } from "@nestjs/graphql";
import { RestaurantType } from "./restaurant.type";

@Resolver(of => RestaurantType)
export class RestaurantResolver{
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
    createRestaurant(){

    }





}