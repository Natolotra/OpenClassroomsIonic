import { Injectable } from "@angular/core";
import { Book } from "../models/book";

@Injectable()
export class BookService{
    books: Book[] = [
        {
            title: 'Contes',
            author: 'Hans Christian Andersen',
            isLend: true
        },{
            title: 'Fictions',
            author: 'Jorge Luis Borges',
            isLend: false
        },{
            title: 'Les Démons',
            author: 'Fiodor Dostoïevski',
            isLend: false
        }
    ];
    
    constructor(){}
}