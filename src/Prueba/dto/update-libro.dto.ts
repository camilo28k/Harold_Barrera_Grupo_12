import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, IsUUID, MinLength  } from "class-validator";

export class UpdateLibroDto{

    @IsString()
    @IsUUID()
    readonly id: string;
    
    @IsString()
    @IsOptional()
    readonly titulo?: string;

    @IsString()
    @IsOptional()
    readonly autor?: string;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    readonly año_publicacion?: number;

    @IsString()
    @IsOptional()
    readonly genero?: string;

    @IsString()
    @IsOptional()
    readonly editorial?: string;

    @IsString()
    @IsOptional()
    readonly idioma?: string;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    readonly paginas?: number;
}