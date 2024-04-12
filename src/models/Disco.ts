import { Prodotto } from "./Prodotto";

export interface Disco extends Prodotto{
    autore : string, 
    durata : number,
    genere : string
}