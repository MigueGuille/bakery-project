import { obtenerInfoPermisos } from "../utils/InfoPermisos.js"
import { armarMapaLlaves } from "../componentes/armarMapaLlaves.js"

export class ControladorSeguridad {
    constructor(){
        this.mapaPermisos
        this.cargarPermisos()
    }

    async cargarPermisos(){
        const infoPermisos = await obtenerInfoPermisos()
        this.mapaPermisos = armarMapaLlaves(infoPermisos)
    }
}