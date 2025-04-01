import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { PruebaService } from './prueba.service';
import {CreateLibroDto, UpdateLibroDto}from './dto'

@Controller('prueba')
export class PruebaController {
    constructor(
        private readonly pruebaService:PruebaService
    ){}
    @Get()
    getAllCars(){
        return this.pruebaService.findAll();
    }

    @Get('id/:id')
    getCarById(@Param('id', ParseUUIDPipe)id:string){
        console.log({id})
        //throw new Error('Auxilio!')
        return this.pruebaService.findOnById(id);
    }
    @Post()
    //@UsePipes(ValidationPipe)
    createLibro(@Body() createLibroDto:CreateLibroDto){
        return this.pruebaService.create(createLibroDto)
    }

    @Patch('id/:id')
    updateLibro(
        @Param('id', ParseUUIDPipe) id:string,
        @Body() updateLibroDto:UpdateLibroDto){
        return this.pruebaService.update(id, updateLibroDto);
    }

    @Delete('id/:id')
    deleteLibro(@Param('id', ParseUUIDPipe) id:string){
        return this.pruebaService.delete(id);
    }
}

