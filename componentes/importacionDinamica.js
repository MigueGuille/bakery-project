//import { ManejoAdmision } from "../bo/ManejoAdmision.js";

export class ImportacionDinamica{
    constructor() {
        this.modulo = null;
    }
    
    async importarModulo(objeto) {
        try {
            const ruta = `../bo/${objeto}.js`
            console.log('ruta: ', ruta)
            const moduloImportado = await import(ruta);
            this.modulo = moduloImportado.default;
            //this.modulo = moduloImportado;
        } catch (error) {
            console.error(`Error al importar el módulo: ${error.message}`);
        }
    }
    
    obtenerModulo() {
        return this.modulo;
    }
}