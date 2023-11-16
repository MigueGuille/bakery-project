export class ImportDinamico {
    constructor(){
        this.modulo = null;
    }

    async importarModulo(ruta){
        try {
            const moduloImportado = await import(ruta)
            this.modulo = moduloImportado.default
        } catch(error) {
            console.error('error al importar el modulo', error)
        }
    }

    obtenerModulo(){
        return this.modulo
    }
}