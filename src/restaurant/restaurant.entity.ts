import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";



@Entity( )
export class Restaurant{

    @ObjectIdColumn()   
    _id: string ;

    @PrimaryColumn()
    id: string ;

    @Column()
    name: string ;

    @Column()
    Cuisine: string ;

    @Column()
    Opens: string ;

    @Column()
    Closes: string ;

    @Column()
    DaysOpen: string ;

    @Column()
    Rating : string ;

    @Column()
    Location: string ;
    
    @Column()
    Description: string ;

}