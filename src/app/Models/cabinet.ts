import { HoraireTravail } from "./HoraireTravail";



export interface Cabinet{
    
        
        id:number;
        name:string;
        adresse:string;
        telephone:string;
        specialite:string;
        matriculefiscale: String ;
        ville: String ;
        horaires: HoraireTravail[];
       
        
        
  
}