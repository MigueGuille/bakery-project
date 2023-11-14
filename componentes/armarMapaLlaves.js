export const armarMapaLlaves = (infoPermisos) => {
    const mapaPermisos = new Map()

    infoPermisos.forEach(p => {
        const { de_perfil, de_metodo, de_objeto, de_modulo } = p
        const llave = `${de_perfil}_${de_metodo}_${de_objeto}_${de_modulo}`
        mapaPermisos.set(llave, { estatus: true })
    })

    return mapaPermisos
}