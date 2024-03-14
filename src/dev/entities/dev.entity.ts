import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Gender {
    MALE = 'masculino',
    FEMALE = 'feminino',
    OTHER = 'outro'
}
export enum Seniority {
    JUNIOR = 'junior',
    MID = 'pleno',
    SENIOR = 'senior'
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
    @Column({
        type: "enum",
        enum: Seniority,
        default: Seniority.JUNIOR
    })
    seniority: Seniority;
    @Column({default: 0, type: "int" })
    wins: number;

    @Column({default: 0, type: "int" })
    losses: number;
    
    @Column({default: 0, type: "int" })
    draws: number;
}
