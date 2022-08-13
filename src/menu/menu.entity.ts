import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";



@Entity( )
export class Menu{

    @ObjectIdColumn()   
    _id: string ;

    @PrimaryColumn()
    id: string ;

    @Column()
    restaurant_id: string ;

    @Column()
    name: string ;

    @Column()
    Rating : string ;
    
    @Column()
    Description: string ;

    @Column()
    imagesrc: string ;
    
}