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
export const agregarPersonaQuery = `INSERT INTO comercio.persona (no_persona, ap_persona, te_persona, di_persona) VALUES($1, $2, $3, $4)`
export const agregarUsuarioQuery = `
INSERT INTO sesion.usuario (no_usuario, id_perfil, em_usuario, pr_usuario, re_usuario, cl_usuario, id_persona)
VALUES (
    $1,
    (SELECT id_perfil FROM sesion.perfil WHERE de_perfil = $2),
    $3,
    $4,
    crypt($5, gen_salt($6)),
    crypt($7, gen_salt($8)),
	(SELECT id_persona FROM comercio.persona WHERE no_persona = $9 AND ap_persona = $10)
)
`
export const permisosQuery = `
SELECT pfl.de_perfil, met.de_metodo, obj.de_objeto, mod.de_modulo
FROM sesion.perfil pfl
INNER JOIN sesion.permiso pms ON pms.id_perfil = pfl.id_perfil
INNER JOIN sesion.metodo met ON met.id_metodo = pms.id_metodo
INNER JOIN sesion.objeto obj ON obj.id_objeto = met.id_objeto
INNER JOIN sesion.modulo mod ON mod.id_modulo = obj.id_modulo
`