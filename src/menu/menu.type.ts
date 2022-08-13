import { Field, ID, ObjectType } from "@nestjs/graphql";


@ObjectType('Menu')  
export class MenuType {

    @Field(type => ID)
    id: string ;

    @Field()
    restaurant_id: string ;

    @Field()
    name: string ;

    @Field()
    Rating : string ;
    
    @Field()
    Description: string ;

    @Field()
    imagesrc: string ;

    
}