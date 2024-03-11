import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

enum Gender {
    MALE = 'masculino',
    FEMALE = 'feminino',
    OTHER = 'outro'
}

@Entity()
export class Dev {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        unique: true
    })
    username: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string

    @Column()
    staks: string;

    @Column({
        type: "enum",
        enum: Gender,
        default: Gender.OTHER
    })
    gender: Gender;
}
