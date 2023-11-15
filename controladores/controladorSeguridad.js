import { obtenerInfoPermisos } from "../utils/InfoPermisos.js"
import { armarMapaLlaves } from "../componentes/armarMapaLlaves.js"

export class ControladorSeguridad {
    constructor(){
        this.mapaPermisos = new Map()
        this.cargarPermisos()
    }

    static verMapaPermisos(){
        console.log(this.mapaPermisos)
        return this.mapaPermisos
    }

    async cargarPermisos(){
        const infoPermisos = await obtenerInfoPermisos()
        this.mapaPermisos = armarMapaLlaves(infoPermisos)
    }
}