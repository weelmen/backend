import { JwtPayload } from 'src/user/interfaces/jwt-payload.interface';
import { User } from './user.entity';
import { UsersService as UserService } from './user.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { constants } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService) {
        super(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: constants.secret,
                signOptions: {expiresIn: '600s'}
            },
        );
    }

    async validate(payload: JwtPayload, done: Function) {
        const user = await this.userService.validateUser(payload);
        if (!user) {
            return done(new UnauthorizedException(), false);
        }
        done(null, user);
    }
}