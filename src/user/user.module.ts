import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './jwt.strategy';
import { User } from './user.entity';
import { UserResolver } from './user.resolver';
import { UsersService } from './user.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
    ], 
    providers:[
        UserResolver,
        UsersService,
        JwtStrategy
    ],
    exports:[
        UsersService,
        UserResolver
    ]
})
export class UsersModule {}
