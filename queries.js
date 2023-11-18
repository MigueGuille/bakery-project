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
export const obtenerPerfilQuery = `
SELECT pfl.de_perfil FROM sesion.perfil pfl
INNER JOIN sesion.usuario usr ON usr.id_perfil = pfl.id_perfil
WHERE usr.no_usuario = $1
`
export const obtenerInfoMetodoQuery = `
SELECT obj.de_objeto, mod.de_modulo
FROM sesion.modulo mod
INNER JOIN sesion.objeto obj ON obj.id_modulo = mod.id_modulo
INNER JOIN sesion.metodo met ON met.id_objeto = obj.id_objeto
WHERE met.de_metodo = $1
`
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

export const agregarTipoPersonaQuery = `INSERT INTO persona.tipo_persona (de_tipo_persona) VALUES ($1)`
// FIJARSE EN LOS ESQUEMAS, POR SI NO ESTAN CORRECTOS
export const cambiarEmailUsuarioQuery = `UPDATE sesion.em_usuario SET em.usuario = $1 WHERE no_usuario = $2`
export const cambiarClaveUsuarioQuery = `UPDATE sesion.cl_usuario SET cl.usuario = crypt($1, gen_salt($2)) WHERE no_usuario = $3`
export const desbloquearUsuario = `UPDATE sesion.bl_usuario SET bl.usuario = false WHERE no_usuario = $1`
export const borrarUsuarioQuery = `DELETE FROM sesion.usuario WHERE no_usuario = $1`
export const cambiarNombreUsuarioQuery = `UPDATE sesion.usuario SET no_usuario = $1 WHERE no_usuario = $2`
export const borrarPersonaQuery = `DELETE FROM comercio.persona WHERE id_persona = $1`
export const cambiarNombrePersonaQuery = `UPDATE comercio.persona SET no_persona = $1 WHERE id_persona = $2`
export const cambiarApellidoPersonaQuery = `UPDATE comercio.persona SET ap_persona = $1 WHERE id_persona = $2`
export const cambiarTelefonoPersonaQuery = `UPDATE comercio.persona SET te_persona = $1 WHERE id_persona = $2`
export const cambiarDireccionPersonaQuery = `UPDATE comercio.persona SET di_persona = $1 WHERE id_persona = $2`
export const agregarAsignacionQuery = `INSERT INTO asignacion.asignacion (id_persona, id_producto_venta, fe_asignacion, id_estado) VALUES ($1, $2, $3, $4)`
export const borrarAsignacionQuery = `DELETE FROM asignacion.asignacion WHERE id_asignacion = $1`
export const cambiarPersonaAsignacionQuery = `UPDATE asignacion.asignacion SET id_persona = $1 WHERE id_asignacion = $2`
export const cambiarProductoAsignacionQuery = `UPDATE asignacion.asignacion SET id_producto_venta = $1 WHERE id_asignacion = $2`
export const cambiarFechaAsignacionQuery = `UPDATE asignacion.asignacion SET fe_asignacion = $1 WHERE id_asignacion = $2`
export const cambiarEstadoAsignacionQuery = `UPDATE asignacion.asignacion SET id_estado = $1 WHERE id_asignacion = $2`