import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {Game} from "./model/Game"

@Injectable()

export class GameService{
    public listaGames =[{
        id: 1,
        name: 'Hades',
        price: 29.99,
        category: 'rogue-like',
        img: 'img1'
    },
    {
        id: 2,
        name: 'Persona 5',
        price: 50.00,
        category:'RPG',
        img: 'img2'
    },
    {
        id: 3,
        name: 'Dark Souls',
        price: 34.99,
        category: 'souls-like',
        img: 'img3'
    },
    {
        id: 4,
        name: 'Devil May Cry',
        price: 10.99,
        category: 'hack-n-slash',
        img: 'img4'
    },
    {
        id: 5,
        name: 'Cuphead',
        price: 33.50,
        category: 'platformer',
        img: 'img5'
    },
    {
        id: 6,
        name: 'Portal',
        price: 9.99,
        category: 'puzzle',
        img: 'img6'
    },
    {
        id: 7,
        name: 'God of War',
        price: 45.00,
        category: 'RPG',
        img: 'img7'
    },
    {
        id: 8,
        name: 'FIFA 2022',
        price: 29.00,
        category: 'sports',
        img: 'img8'
    }]

    constructor(){}

    getGame(){
        return this.listaGames;
    }

}