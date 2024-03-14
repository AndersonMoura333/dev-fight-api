import { ApiProperty } from "@nestjs/swagger";
import { Gender, Seniority } from "../entities/dev.entity";


export class CreateDevDto {

    @ApiProperty()
    username: string
    @ApiProperty()
    email: string
    @ApiProperty()
    password:string
    @ApiProperty()
    confirmPassword: string
    @ApiProperty()
    staks: string
    @ApiProperty()
    gender: Gender
    @ApiProperty()
    seniority: Seniority

}
