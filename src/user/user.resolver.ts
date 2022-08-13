import { HttpException, HttpStatus, UseGuards } from "@nestjs/common";
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";
import { GqlAuthGuard } from "src/user/guards/gql-auth.guard";
import { CreateUserInput } from "./user.input";
import { UsersService } from "./user.service";
import { UserType } from "./user.type";
import { RtGuard } from "./guards/rt.guards";

@Resolver(of => UserType)
export class UserResolver {

  constructor(
    private readonly userService: UsersService,

  ) { }


  @Query(returns => String)
    @UseGuards(GqlAuthGuard)
    hello(): String {
        return "hello hello"
    }

  @UseGuards(GqlAuthGuard)
  @Query(returns => UserType)
  User(
    @Args('id') id: string,
  ) {

    return this.userService.getUser(id)

  }
  @Query(returns => UserType)
  Users() {
    return this.userService.getUsers();
  }


  
  @Query(returns => String )
  async login(
    @Args('name') name: string,
    @Args('password') password: string,
  ): Promise<String> {
    var user = await this.userService.login(name, password);
    if (user != null) {
  
      return this.userService.createToken({ id: user.id });
    }
    throw new HttpException(
      'error logging user in',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  @Mutation(returns => UserType)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ) {
    return this.userService.createUser(createUserInput);

  }
  @Mutation(returns => UserType)
  async register(@Args('createUserInput') createUserInput: CreateUserInput): Promise<String> {
    var user = await this.userService.createUser(createUserInput);
    if (user != null) {
      return this.userService.createToken({ id: user.id });
    }
    throw new HttpException(
      'error registering user',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );

  }


  /*
  @Query(returns => UserType)
  login(
    @Args('name') name: string,
    @Args('password') password: string,
   /* name:string,password:string*//*) {
    return this.userService.login(name, password);
  }
*/


}