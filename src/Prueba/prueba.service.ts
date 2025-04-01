import { Injectable, NotFoundException } from '@nestjs/common';
import { Libro } from './interfaces/interface';
import {v4 as uuid} from 'uuid';
import {CreateLibroDto, UpdateLibroDto } from './dto'
@Injectable()
export class PruebaService {
    private libro : Libro[] = [
            {
              id: uuid(),
              titulo: "Cien años de soledad",
              autor: "Gabriel García Márquez",
              año_publicacion: 1967,
              genero: "Realismo mágico",
              editorial: "Sudamericana",
              idioma: "Español",
              paginas: 417
            },
            {
              id: uuid(),
              titulo: "1984",
              autor: "George Orwell",
              año_publicacion: 1949,
              genero: "Distopía",
              editorial: "Secker & Warburg",
              idioma: "Inglés",
              paginas: 328
            },
            {
              id: uuid(),
              titulo: "El amor en los tiempos del cólera",
              autor: "Gabriel García Márquez",
              año_publicacion: 1985,
              genero: "Realismo mágico",
              editorial: "Oveja Negra",
              idioma: "Español",
              paginas: 348
            }
          ];
          findAll(){
            return this.libro
          }
          findOnById(id:string){
            const lib = this.libro.find(li => li.id===id);

        if(!lib){
            throw new NotFoundException(`Datos con Id '${id}' no existe!`);
        }

        return lib;
    }
    create(createLibroDto: CreateLibroDto){
        
        const li: Libro ={
            id: uuid(), ...createLibroDto
        }

        this.libro.push(li);

        return li;
    }
    update(id:string, UpdateLibroDto:UpdateLibroDto){
        let libroDB = this.findOnById(id);

        this.libro = this.libro.map(l  => {
            if(l.id === id){
                libroDB = {...libroDB, ...UpdateLibroDto, id}
                return libroDB;
            }
            return l;
        })
        return libroDB;

    }
    delete(id:string){
        const car = this.findOnById(id);

        this.libro = this.libro.filter(l => l.id !== id)
        console.log()
    }

}
