import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";



@Entity( )
export class User{

    @ObjectIdColumn()   
    _id: string ;

    @PrimaryColumn()
    id: string ;

    @Column()
    name: string ;

    @Column()
    email : string ;
    
    @Column()
    role: string ;

    @Column()
    birthday: string ;

    @Column()
    phoneNb: string ;

    @Column()
    registerDate: string ;

    @Column()
    lastAccessed: string ;

    @Column()
    password: string ;

    @Column()
    currentHashedRefreshToken: string ;


}