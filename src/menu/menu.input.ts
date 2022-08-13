import { InputType, Field, ID } from '@nestjs/graphql';
import { MinLength, IsDateString, IsUUID } from 'class-validator';

@InputType()
export class CreateMenuInput {
  @MinLength(1)
  @Field()
  name: string;

  /*@IsUUID("4", { each: true })
  @Field(() => [ID], { defaultValue: [] })
  students: string[];*/
  
  
  @MinLength(1)
  @Field()
  restaurant_id: string ;
  
  @MinLength(1)
  @Field()
  Rating : string ;

  @MinLength(1)
  @Field()
  Description: string ;

  @MinLength(1)
  @Field()
  imagesrc: string ;
}


