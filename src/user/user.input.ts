import { InputType, Field, ID } from '@nestjs/graphql';
import { MinLength, IsDateString, IsUUID } from 'class-validator';

@InputType()
export class CreateUserInput {


  @MinLength(1)
  @Field()
  name: string ;

  @MinLength(1)
  @Field()
  email : string ;
  
  @MinLength(1)
  @Field()
  role: string ;

  @MinLength(1)
  @Field()
  birthday: string ;

  @MinLength(1)
  @Field()
  phoneNb: string ;

  @MinLength(1)
  @Field()
  registerDate: string ;

  @MinLength(1)
  @Field()
  lastAccessed: string ;

  @MinLength(1)
  @Field()
  password: string ;


}


