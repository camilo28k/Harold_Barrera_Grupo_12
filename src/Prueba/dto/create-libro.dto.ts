import { Type } from "class-transformer";
import { IsNumber, IsString, MinLength  } from "class-validator";

export class CreateLibroDto{
    
    @IsString()
    readonly titulo: string;

    @IsString()
    readonly autor: string;

    @IsNumber()
    @Type(() => Number)
    readonly año_publicacion: number;

    @IsString()
    readonly genero: string;

    @IsString()
    readonly editorial: string;

    @IsString()
    readonly idioma: string;
    
    @IsNumber()
    @Type(() => Number)
    readonly paginas: number;
}