import { Persona } from "./Persona";

export interface Utente extends Persona{
    indirizzoSpedizione : string, 
    indirizzoFatturazione: string,
    metodoPagamento : string
}