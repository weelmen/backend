import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { RestaurantsModule } from './restaurant/restaurant.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './restaurant/restaurant.entity';
import { Menu } from './menu/menu.entity';
import { MenusModule } from './menu/menu.module';
import { User } from './user/user.entity';
import { UsersModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
//import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/AppSoFar',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Restaurant,
        Menu,
        User
      ]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
   /* TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/school',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Restaurant
      ]
    }),*/
    RestaurantsModule,
    MenusModule,
    UsersModule,
   // AuthModule
  ],
  //controllers: [AppController],
 // providers: [AppService],
})
export class AppModule {}
