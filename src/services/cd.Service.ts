import { Injectable } from "@angular/core";
import { CD } from "../models/cd";

@Injectable()
export class CDService{
    cds: CD[] = [
        {
            title: 'Chien bleu',
            author: 'Nadja',
            isLend: false
        },{
            title: 'Otto',
            author: 'Tomi Ungerer',
            isLend: true
        },{
            title: 'La guerre des mots',
            author: 'Thierry Dedieu',
            isLend: false
        }
    ]
}