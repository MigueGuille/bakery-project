export const usuarioExisteQuery = 'SELECT no_usuario FROM sesion.usuario WHERE no_usuario = $1'
export const usuarioBloqueadoQuery = 'SELECT bl_usuario FROM sesion.usuario WHERE no_usuario = $1'
export const claveCorrectaQuery = 'SELECT id_usuario, no_usuario, id_perfil, in_usuario, bl_usuario, id_persona FROM sesion.usuario WHERE no_usuario = $1 AND cl_usuario = crypt($2, cl_usuario)'
export const resetearIntentosQuery = 'UPDATE sesion.usuario SET in_usuario = 3 WHERE no_usuario = $1'
export const bloquearUsuarioQuery = 'UPDATE sesion.usuario SET bl_usuario = true WHERE no_usuario = $1'
export const reducirIntentosQuery = 'UPDATE sesion.usuario SET in_usuario = in_usuario - 1 WHERE no_usuario = $1'
export const obtenerIntentosQuery = 'SELECT in_usuario FROM sesion.usuario WHERE no_usuario = $1'
export const verificarEmailQuery = 'SELECT em_usuario FROM sesion.usuario WHERE em_usuario = $1'
export const obtenerPreguntaQuery = 'SELECT pr_usuario FROM sesion.usuario WHERE em_usuario = $1'
export const verificarRespuestaQuery = 'SELECT * FROM sesion.usuario WHERE em_usuario = $1 AND re_usuario = crypt($2, re_usuario)'