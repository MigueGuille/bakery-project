export const usuarioExisteQuery = 'SELECT no_usuario FROM sesion.usuario WHERE no_usuario = $1'
export const usuarioBloqueadoQuery = 'SELECT st_usuario FROM sesion.usuario WHERE no_usuario = $1'
export const claveCorrectaQuery = 'SELECT * FROM sesion.usuario WHERE no_usuario = $1 AND cl_usuario = crypt($2, cl_usuario)'