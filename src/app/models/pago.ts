import { Suscripcion } from "./suscripcion"


export class Pago{
    idPago:number=0
    monto:number=0
    metodo:String=""
    fechaPago:Date= new Date()
    estado:boolean=false
    idSuscripcion: Suscripcion = new Suscripcion()
}