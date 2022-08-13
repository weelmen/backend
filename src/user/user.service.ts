//import { Injectable } from '@nestjs/common';
import { Injectable, Post, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { v4 as uuid } from 'uuid'
import { CreateUserInput } from './user.input';
//added
import { JwtPayload } from 'src/user/interfaces/jwt-payload.interface';
import { constants } from 'src/constants';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
//
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) { }

  //added
  createToken(payload: JwtPayload): any {
    const secretOrKey = constants.secret;
    const token = jwt.sign(payload, secretOrKey);
    console.log(token);
    return token;
  }
 





  async getUser(name: string): Promise<User> {
    return this.userRepository.findOneBy({ name });
  }
  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async validateUser(payload: JwtPayload): Promise<User> {
    return await this.getUserById(payload.id);
  }

  async getUserById(id: string): Promise<User> {
    return await this.userRepository.findOneBy({id});
  }
   
  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const {
      name,
      email,
      role,
      birthday,
      phoneNb,
      registerDate,
      lastAccessed,
      password } = createUserInput;
    const user = this.userRepository.create({
      id: uuid(),
      name,
      email,
      role,
      birthday,
      phoneNb,
      registerDate,
      lastAccessed,
      password
    });

    var duplicate = await this.userRepository.findOne({ where: { name: name } });
    if (duplicate != null) {
      throw new HttpException(
        'username already taken',
        HttpStatus.CONFLICT,
      );
    }
    if (user.password == undefined)
      user.password = "";

    user.password = await bcrypt.hash(password, 10);
    return await this.userRepository.save(user);

    //return this.userRepository.save(user);
  }


  async setUserRefreshToken(id:string ,token: string): Promise<User> {
    const user = await this.userRepository.findOneBy({id});
     user.currentHashedRefreshToken=token;
     return await this.userRepository.save(user);
   }

  async login(name: string, password: string) {
    if (password == "") {
        throw new HttpException('empty password', HttpStatus.BAD_REQUEST);
    }
    var user = await this.userRepository.findOneBy({name});
    
    if (user == null)
    {
      throw new HttpException('wrong username', HttpStatus.FORBIDDEN);
     // return null;
    }
   
    var isValid = await bcrypt.compare(password, user.password)
    if (isValid) {
      //throw new HttpException('loging true true', HttpStatus.BAD_REQUEST);
       return user;
    }else{
      throw new HttpException('wrong password', HttpStatus.FORBIDDEN);
    }

    return null ;
  //  
}
}
 