import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CreateMenuInput } from "./menu.input";
import { MenusService } from "./menu.service";
import { MenuType } from "./menu.type";

@Resolver(of => MenuType)
export class MenuResolver {

  constructor(
      /*  @InjectRepository(Restaurant) */private menuService: MenusService,

  ) { }


  @Query(returns => MenuType)
  Menu(
    @Args('id') id: string,
  ) {

    return this.menuService.getMenu(id)
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
  @Query(returns => [MenuType])
  Menus() {
    return this.menuService.getMenus();
  }
  @Query(returns => [MenuType])
  MenusByRestaurant( @Args('id') id: string,) {
    return this.menuService.getMenusByRestaurant(id);
  }

  @Mutation(returns => MenuType)
  createMenu(
    @Args('createMenuInput') createMenuInput: CreateMenuInput,
  ) {
    return this.menuService.createMenu(createMenuInput);

  }





}