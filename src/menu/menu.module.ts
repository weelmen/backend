import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { MenuResolver } from './menu.resolver';
import { MenusService } from './menu.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Menu]),
    ], 
    providers:[
        MenuResolver,
        MenusService]
})
export class MenusModule {}
