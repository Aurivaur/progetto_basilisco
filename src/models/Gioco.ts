import { Prodotto } from "./Prodotto";

export interface Gioco extends Prodotto{
    minEta : number,
    minGiocatori : number,
    maxGiocatori : number,
    durata : number
}