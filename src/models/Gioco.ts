import { Prodotto } from "./Prodotto";

export interface Gioco extends Prodotto{
autore: any;
genere: any;
    minEta : number,
    minGiocatori : number,
    maxGiocatori : number,
    durata : number
}