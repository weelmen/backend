import { Field, ID, ObjectType } from "@nestjs/graphql";


@ObjectType('User')  
export class UserType {

    @Field(type => ID)
    id: string ;

    @Field()
    name: string ;

    @Field()
    email : string ;
    
    @Field()
    role: string ;

    @Field()
    birthday: string ;

    @Field()
    phoneNb: string ;

    @Field()
    registerDate: string ;

    @Field()
    lastAccessed: string ;

    @Field()
    password: string ;

    @Field()
    currentHashedRefreshToken: string ;


    
}