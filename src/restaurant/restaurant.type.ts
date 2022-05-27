import { Field, ID, ObjectType } from "@nestjs/graphql";


@ObjectType('Restaurant')
export class RestaurantType {

    @Field(type => ID)
    id: string ;

    @Field()
    name: string ;

    @Field()
    Cuisine: string ;

    @Field()
    Opens: string ;

    @Field()
    Closes: string ;

    @Field()
    DaysOpen: string ;

    @Field()
    Rating : string ;

    @Field()
    Location: string ;
    
    @Field()
    Description: string ;

    
}