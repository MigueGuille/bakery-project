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
export const agregarPersonaQuery = `INSERT INTO persona.persona (no_persona, ap_persona, te_persona, di_persona) VALUES($1, $2, $3, $4)`
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
export const cambiarEmailUsuarioQuery = 'UPDATE sesion.usuario SET em.usuario = $1 WHERE no_usuario = $2'
export const cambiarClaveUsuarioQuery = `UPDATE sesion.usuario SET cl.usuario = crypt($1, gen_salt($2)) WHERE no_usuario = $3`
export const desbloquearUsuario = `UPDATE sesion.usuario SET bl.usuario = false WHERE no_usuario = $1`
export const borrarUsuarioQuery = `DELETE FROM sesion.usuario WHERE no_usuario = $1`
export const cambiarNombreUsuarioQuery = `UPDATE sesion.usuario SET no_usuario = $1 WHERE no_usuario = $2`
export const borrarPersonaQuery = `DELETE FROM persona.persona WHERE id_persona = $1`
export const cambiarNombrePersonaQuery = `UPDATE persona.persona SET no_persona = $1 WHERE id_persona = $2`
export const cambiarApellidoPersonaQuery = `UPDATE persona.persona SET ap_persona = $1 WHERE id_persona = $2`
export const cambiarTelefonoPersonaQuery = `UPDATE persona.persona SET te_persona = $1 WHERE id_persona = $2`
export const cambiarDireccionPersonaQuery = `UPDATE persona.persona SET di_persona = $1 WHERE id_persona = $2`
export const agregarAsignacionQuery = `
INSERT INTO persona.asignacion (id_persona, id_producto_venta, fe_asignacion, id_estado)
VALUES ($1, $2, $3, $4)
`
//hay que hacer un metodo para darle a la fecha el formato especifico que acepta postgres.
//hay que cambiar los parametros para que en vez de id se inserten segun el nombre.
export const borrarAsignacionQuery = `DELETE FROM persona.asignacion WHERE id_asignacion = $1`
export const cambiarPersonaAsignacionQuery = `UPDATE persona.asignacion SET id_persona = $1 WHERE id_asignacion = $2`
export const cambiarProductoAsignacionQuery = `UPDATE persona.asignacion SET id_producto_venta = $1 WHERE id_asignacion = $2`
export const cambiarFechaAsignacionQuery = `UPDATE asignacion.asignacion SET fe_asignacion = $1 WHERE id_asignacion = $2`
export const cambiarEstadoAsignacionQuery = `UPDATE persona.asignacion SET id_estado = $1 WHERE id_asignacion = $2`
// CREO QUE SE PUEDEN MEJORAR LOS QUERIES
export const agregarPermisoQuery = `INSERT INTO sesion.permiso (id_perfil, id_metodo) VALUES ($1, $2)`
export const borrarPermisoQuery = `DELETE FROM sesion.permiso WHERE id_permiso = $1`

export const agregarPresentacionProductoQuery = `INSERT INTO asignacion.presentacion_producto (de_presentacion) VALUES ($1)`
export const borrarPresentacionProductoQuery = `DELETE FROM asignacion.presentacion_producto WHERE de_presentacion = $1`
export const cambiarPresentacionProductoQuery = `UPDATE asignacion.presentacion_producto SET de_presentacion = $1 WHERE de_presentacion = $2`

export const agregarProductoVentaQuery = `INSERT INTO asignacion.producto_venta(id_presentacion, id_producto, mo_producto_venta) VALUES ($1, $2, $3)`
export const borrarProductoVentaQuery = `DELETE FROM asignacion.producto_venta WHERE id_producto_venta = $1`
export const cambiarProductoVentaQuery = `UPDATE asignacion.producto_venta SET id_producto = $1 WHERE id_producto_venta = $2`
export const cambiarPresentacionVentaQuery = `UPDATE asignacion.producto_venta SET id_presentacion = $1 WHERE id_producto_venta = $2`
export const cambiarMontoProductoVentaQuery = `UPDATE asignacion.producto_venta SET mo_producto_venta = $1 WHERE id_producto_venta = $2`
export const agregarProductoQuery = `INSERT INTO asignacion.producto (de_producto) VALUES ($1)`
export const borrarProductoQuery = `DELETE FROM asignacion.producto WHERE de_producto = $1`
export const cambiarProductoQuery = `UPDATE asignacion.producto SET de_producto = $1 WHERE de_producto = $2`

export const agregarPersonaLocalQuery = `INSERT INTO  persona.persona_local (id_persona, id_local) VALUES ($1, $2)`
export const agregarRutaQuery = `INSERT INTO local.ruta (av_ruta, ca_ruta, mu_ruta) VALUES ($1, $2, $3)`
export const borrarRutaQuery =  `DELETE FROM local.ruta WHERE id_ruta = $1`
export const cambiarAvenidaRutaQuery = `UPDATE local.ruta SET av_ruta = $1 WHERE id_ruta = $2`
export const cambiarCalleRutaQuery = `UPDATE local.ruta SET ca_ruta = $1 WHERE id_ruta = $2`
export const cambiarMunicipioRutaQuery = `UPDATE local.ruta SET mu_ruta = $1 WHERE id_ruta = $2`
export const agregarLocalQuery = `INSERT INTO local.local (no_local, nu_local, id_ruta) VALUES ($1, $2, $3)`
export const borrarLocalQuery = `DELETE FROM local.local WHERE id_local = $1`
export const cambiarNumeroLocalQuery = `UPDATE local.local SET nu_local = $1 WHERE id_local = $2`
export const cambiarNombreLocalQuery = `UPDATE local.local SET no_local = $1 WHERE id_local = $2`
export const cambiarRutaLocalQuery = `UPDATE local.local SET id_ruta = $1 WHERE id_local = $2`


// export const agregarFormaPago = 
// export const borrarFormaPago = 
