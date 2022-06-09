import { InputType, Field, ID } from '@nestjs/graphql';
import { MinLength, IsDateString, IsUUID } from 'class-validator';

@InputType()
export class CreateRestaurantInput {
  @MinLength(1)
  @Field()
  name: string;

  /*@IsUUID("4", { each: true })
  @Field(() => [ID], { defaultValue: [] })
  students: string[];*/


  @MinLength(1)
  @Field()
  Cuisine: string;

  @MinLength(1)
  @Field()
  Opens: string ;

  @MinLength(1)
  @Field()
  Closes: string ;

  @MinLength(1)
  @Field()
  DaysOpen: string ;

  @MinLength(1)
  @Field()
  Rating : string ;

  @MinLength(1)
  @Field()
  Location: string ;

  @MinLength(1)
  @Field()
  Description: string ;
}


