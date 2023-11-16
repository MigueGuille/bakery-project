import { manejoAdmision } from '../bo/manejoAdmision.js'

export class ImportDinamico {
    constructor(){
        this.modulo = null;
    }

    async importarModulo(objeto){
        try {
            const ruta = `../bo/${objeto}.js`
            console.log('ruta: ', ruta)
            const moduloImportado = await import(ruta)
            //this.modulo = moduloImportado.default
            this.modulo = moduloImportado
        } catch(error) {
            console.error('error al importar el modulo', error)
        }
    }

    obtenerModulo(){
        return this.modulo
    }
}