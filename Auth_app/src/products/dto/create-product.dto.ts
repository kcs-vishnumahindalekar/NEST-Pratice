import { IsNumber, IsString } from "class-validator";

export class CreateProduct{

    @IsString()
    title: string;

    @IsString()
    desc: string;

    @IsNumber()
    price: number;
}