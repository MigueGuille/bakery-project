-- Para registrar una persona
INSERT INTO persona (no_persona, ap_persona, te_persona, di_persona)
VALUES('Laura', 'Ramírez', '04121234568', 'Sector El Amparo Calle 83');
INSERT INTO persona (no_persona, ap_persona, te_persona, di_persona)
VALUES('Javier', 'Sánchez', '04241234567', 'Barrio La Pastora Calle 96A');
INSERT INTO persona (no_persona, ap_persona, te_persona, di_persona)
VALUES('Isabel', 'Torres', '04161234567', 'Urb El Varillal Edif La Ceiba 3');
INSERT INTO persona (no_persona, ap_persona, te_persona, di_persona)
VALUES('Diego', 'Gómez', '04121234568', 'Sector Gallo Verde Residencias Gallo Verde');
INSERT INTO persona (no_persona, ap_persona, te_persona, di_persona)
VALUES('Sofía', 'Hernández', '04241234567', 'Urb Lago Azul Edificio Rio Negro');
INSERT INTO persona (no_persona, ap_persona, te_persona, di_persona)
VALUES('Antonio', 'Rojas', '04141234567', 'Barrio San Sebastián Avenida 49 Calle 126');
INSERT INTO persona (no_persona, ap_persona, te_persona, di_persona)
VALUES('Valentina', 'Díaz', '04241234568', 'Sector La Pomona Residencias San Simón');
INSERT INTO persona (no_persona, ap_persona, te_persona, di_persona)
VALUES('Gabriel', 'Suárez', '04241234567', 'Sector Tierra Negra Residencias Los Nietos');
INSERT INTO persona (no_persona, ap_persona, te_persona, di_persona)
VALUES('Mariana', 'Lara', '04241234568', 'Sector Tierra Negra Edificio Melanie');
INSERT INTO persona (no_persona, ap_persona, te_persona, di_persona)
VALUES('Eduardo', 'Ortega', '04141234567', 'Urbanización El Pilar Residencias Las Naciones');
INSERT INTO persona (no_persona, ap_persona, te_persona, di_persona)
VALUES('Camila', 'Mendoza', '04141234568', 'Urbanización El Pilar Residencias El Portón');
INSERT INTO persona (no_persona, ap_persona, te_persona, di_persona)
VALUES('Rafael', 'Castro', '04121234567', 'Avenida 11C Villa Hermosa');
INSERT INTO persona (no_persona, ap_persona, te_persona, di_persona)
VALUES('Valeria', 'Pacheco', '04121234567', 'Sector La Paragua Residencias Mata De Coco');
INSERT INTO persona (no_persona, ap_persona, te_persona, di_persona)
VALUES('Manuel', 'Vargas', '04161234568', 'Urbanización La Rosaleda Edificio Valencia');

-- Para registrar un tipo de persona
INSERT INTO tipo_persona (de_tipo_persona) VALUES('Fabricante');
INSERT INTO tipo_persona (de_tipo_persona) VALUES('Secretaria');
INSERT INTO tipo_persona (de_tipo_persona) VALUES('Vendedor');
INSERT INTO tipo_persona (de_tipo_persona) VALUES('Cliente');
--ya registrados

--para registrar en persona_tipo_persona segun id_persona y de_tipo_persona
INSERT INTO comercio.persona_tipo_persona(id_persona, id_tipo_persona)
VALUES(9, (SELECT id_tipo_persona FROM comercio.tipo_persona WHERE de_tipo_persona = 'Cliente'));
INSERT INTO comercio.persona_tipo_persona(id_persona, id_tipo_persona)
VALUES(10, (SELECT id_tipo_persona FROM comercio.tipo_persona WHERE de_tipo_persona = 'Vendedor'));
INSERT INTO comercio.persona_tipo_persona(id_persona, id_tipo_persona)
VALUES(11, (SELECT id_tipo_persona FROM comercio.tipo_persona WHERE de_tipo_persona = 'Cliente'));

--Para registrar una forma de pago
INSERT INTO forma_pago (de_forma_pago) VALUES('Efectivo');
INSERT INTO forma_pago (de_forma_pago) VALUES('Pago Móvil');
INSERT INTO forma_pago (de_forma_pago) VALUES('Transferencia Bancaria');
INSERT INTO forma_pago (de_forma_pago) VALUES('Zelle');
INSERT INTO forma_pago (de_forma_pago) VALUES('Binance');
INSERT INTO forma_pago (de_forma_pago) VALUES('Paypal');
INSERT INTO forma_pago (de_forma_pago) VALUES('Tarjeta de Débito');
INSERT INTO forma_pago (de_forma_pago) VALUES('Tarjeta de Crédito');
--ya registrados

-- Para registrar un producto
INSERT INTO producto (de_producto) VALUES('Torta de Fresa');
INSERT INTO producto (de_producto) VALUES('Torta de Limón');
INSERT INTO producto (de_producto) VALUES('Torta de Naranja');
INSERT INTO producto (de_producto) VALUES('Torta de Coco');
INSERT INTO producto (de_producto) VALUES('Torta de Café');
INSERT INTO producto (de_producto) VALUES('Torta de ChocoArequipe');
INSERT INTO producto (de_producto) VALUES('Torta de Dulce de Leche');
INSERT INTO producto (de_producto) VALUES('Torta de Oreo');
INSERT INTO producto (de_producto) VALUES('Torta de Nueces con Almendras');
INSERT INTO producto (de_producto) VALUES('Torta de Piña');
INSERT INTO producto (de_producto) VALUES('Torta de Banana');
INSERT INTO producto (de_producto) VALUES('Pie de Guayaba');
INSERT INTO producto (de_producto) VALUES('Pie de Parchita');
INSERT INTO producto (de_producto) VALUES('Cheescake de Oreo');
INSERT INTO producto (de_producto) VALUES('Cheescake de Dulce de Leche');
INSERT INTO producto (de_producto) VALUES('Cheescake de Nutella');
INSERT INTO producto (de_producto) VALUES('Torta de Pan');

--Para registrar un tipo de producto
INSERT INTO presentacion_producto (de_presentacion) VALUES('Entera');
INSERT INTO presentacion_producto (de_presentacion) VALUES('Mitad');
INSERT INTO presentacion_producto (de_presentacion) VALUES('Cuarto');
INSERT INTO presentacion_producto (de_presentacion) VALUES('Porción');
INSERT INTO presentacion_producto (de_presentacion) VALUES('Kilo');
INSERT INTO presentacion_producto (de_presentacion) VALUES('Medio Kilo');
INSERT INTO presentacion_producto (de_presentacion) VALUES('Cuarto de Kilo');

--Para registrar una ruta
INSERT INTO ruta (av_ruta, ca_ruta, mu_ruta) 
VALUES('Avenida Universidad', 'Calle 58B', 'Maracaibo');
INSERT INTO ruta (av_ruta, ca_ruta, mu_ruta) 
VALUES('Avenida El Milagro', 'Calle 83B', 'Maracaibo');
INSERT INTO ruta (av_ruta, ca_ruta, mu_ruta) 
VALUES('Avenida El Milagro', 'Calle 77', 'Maracaibo');
INSERT INTO ruta (av_ruta, ca_ruta, mu_ruta) 
VALUES('Avenida Los Haticos', 'Calle 109', 'Maracaibo');
INSERT INTO ruta (av_ruta, ca_ruta, mu_ruta) 
VALUES('Avenida Los Haticos', 'Calle 110A', 'Maracaibo');
INSERT INTO ruta (av_ruta, ca_ruta, mu_ruta) 
VALUES('Avenida Libertador', 'Calle 96', 'Maracaibo');
INSERT INTO ruta (av_ruta, ca_ruta, mu_ruta) 
VALUES('Avenida La Limpia', 'Calle 79-I', 'Maracaibo');
INSERT INTO ruta (av_ruta, ca_ruta, mu_ruta) 
VALUES('Avenida La Limpia', 'Calle 79-K', 'Maracaibo');
INSERT INTO ruta (av_ruta, ca_ruta, mu_ruta) 
VALUES('Avenida 1 de Mayo', 'Calle 84', 'Maracaibo');
INSERT INTO ruta (av_ruta, ca_ruta, mu_ruta) 
VALUES('Avenida 1 de Mayo', 'Calle 83B', 'Maracaibo');
INSERT INTO ruta (av_ruta, ca_ruta, mu_ruta) 
VALUES('Avenida Milagro Norte', 'Calle U', 'Maracaibo');
INSERT INTO ruta (av_ruta, ca_ruta, mu_ruta) 
VALUES('Avenida Milagro Norte', 'Calle S', 'Maracaibo');
INSERT INTO ruta (av_ruta, ca_ruta, mu_ruta) 
INSERT INTO ruta (av_ruta, ca_ruta, mu_ruta) 
VALUES('Avenida 40', 'Calle 165', 'San Francisco');
INSERT INTO ruta (av_ruta, ca_ruta, mu_ruta) 
VALUES('Avenida 40', 'Calle 158', 'San Francisco');
INSERT INTO ruta (av_ruta, ca_ruta, mu_ruta) 
VALUES('Avenida Andres Bello', 'Calle Igualda', 'Cabimas');
INSERT INTO ruta (av_ruta, ca_ruta, mu_ruta) 
VALUES('Avenida Andres Bello', 'Calle Bolivar', 'Cabimas');

--para registrar un perfil
INSERT INTO perfil (de_perfil) VALUES('admin');
INSERT INTO perfil (de_perfil) VALUES('vendedor');
INSERT INTO perfil (de_perfil) VALUES('asistente');
--ya registrados

--para registrar un estado
INSERT INTO comercio.estado (ti_estado) VALUES('Pagado');
INSERT INTO comercio.estado (ti_estado) VALUES('Pendiente');
INSERT INTO comercio.estado (ti_estado) VALUES('Anulado');
--ya registrados

--para registrar un local
INSERT INTO comercio.local (no_local, nu_local, id_ruta)
VALUES('Panadería La Rosaleda', '1-G', '1');
INSERT INTO comercio.local (no_local, nu_local, id_ruta)
VALUES('Boutique Elegante', '2-A', '5');
INSERT INTO comercio.local (no_local, nu_local, id_ruta)
VALUES('Rincón de Las Flores', '3-K', '8');
INSERT INTO comercio.local (no_local, nu_local, id_ruta)
VALUES('Café Aromático', '4-P', '3');
INSERT INTO comercio.local (no_local, nu_local, id_ruta)
VALUES('TechZone', '5-D', '11');
INSERT INTO comercio.local (no_local, nu_local, id_ruta)
VALUES('Librería Imagina', '6-T', '6');
INSERT INTO comercio.local (no_local, nu_local, id_ruta)
VALUES('Joyeria Brillante', '7-J', '9');
INSERT INTO comercio.local (no_local, nu_local, id_ruta)
VALUES('Dulces Delicias', '8-V', '2');
INSERT INTO comercio.local (no_local, nu_local, id_ruta)
VALUES('Boutique Vintage', '9-S', '4');
INSERT INTO comercio.local (no_local, nu_local, id_ruta)
VALUES('Ferretería Progresiva', '10-H', '7');
INSERT INTO comercio.local (no_local, nu_local, id_ruta)
VALUES('Tienda Deportiva Xtreme', '11-E', '10');
INSERT INTO comercio.local (no_local, nu_local, id_ruta)
VALUES('Moda Urbana', '20-U', '1');
INSERT INTO comercio.local (no_local, nu_local, id_ruta)
VALUES('Delicias Gourmet', '17-Z', '8');
INSERT INTO comercio.local (no_local, nu_local, id_ruta)
VALUES('Pandería Artesanal', '13-C', '3');
INSERT INTO comercio.local (no_local, nu_local, id_ruta)
VALUES('Florería Primavera', '12-R', '5');
--ya registrados

--para registrar un producto_venta 
INSERT INTO comercio.producto_venta (id_presentacion, id_producto, mo_producto_venta)
VALUES(
    (SELECT id_presentacion FROM comercio.presentacion_producto WHERE de_presentacion = 'Mitad'), 
    (SELECT id_producto FROM comercio.producto WHERE de_producto = 'Brazo Gitano'), 5
);
INSERT INTO comercio.producto_venta (id_presentacion, id_producto, mo_producto_venta)
VALUES(
    (SELECT id_presentacion FROM comercio.presentacion_producto WHERE de_presentacion = 'Porción'), 
    (SELECT id_producto FROM comercio.producto WHERE de_producto = 'Pie de Limón'), 2.5
);
INSERT INTO comercio.producto_venta (id_presentacion, id_producto, mo_producto_venta)
VALUES(
    (SELECT id_presentacion FROM comercio.presentacion_producto WHERE de_presentacion = 'Porción'), 
    (SELECT id_producto FROM comercio.producto WHERE de_producto = 'Cheescake de Pistachio'), 7
);
INSERT INTO comercio.producto_venta (id_presentacion, id_producto, mo_producto_venta)
VALUES(
    (SELECT id_presentacion FROM comercio.presentacion_producto WHERE de_presentacion = 'Entera'), 
    (SELECT id_producto FROM comercio.producto WHERE de_producto = 'Cheescake de Fresa'), 125
);
INSERT INTO comercio.producto_venta (id_presentacion, id_producto, mo_producto_venta)
VALUES(
    (SELECT id_presentacion FROM comercio.presentacion_producto WHERE de_presentacion = 'Medio Kilo'), 
    (SELECT id_producto FROM comercio.producto WHERE de_producto = 'Torta de Chocolate'), 30
);
--ya registrados


--para registrar una persona_local
INSERT INTO comercio.persona_local (id_persona, id_local) VALUES(4, 15);
INSERT INTO comercio.persona_local (id_persona, id_local) VALUES(5, 12);
INSERT INTO comercio.persona_local (id_persona, id_local) VALUES(6, 7);
INSERT INTO comercio.persona_local (id_persona, id_local) VALUES(8, 1);
--ya registrados

--para registrar un modulo
INSERT INTO sesion.modulo (de_modulo) VALUES('comunicacion');
INSERT INTO sesion.modulo (de_modulo) VALUES('admision');
INSERT INTO sesion.modulo (de_modulo) VALUES('seguridad');
INSERT INTO sesion.modulo (de_modulo) VALUES('usuario');
INSERT INTO sesion.modulo (de_modulo) VALUES('permiso');
--ya registrados

--para registrar objeto
INSERT INTO sesion.objeto (de_objeto, id_modulo) VALUES('manejoMensajes', 1);
INSERT INTO sesion.objeto (de_objeto, id_modulo) VALUES('manejoAdmision', 2);
INSERT INTO sesion.objeto (de_objeto, id_modulo) VALUES('manejoSeguridad', 3);
INSERT INTO sesion.objeto (de_objeto, id_modulo) VALUES('manejoUsuarios', 4);
INSERT INTO sesion.objeto (de_objeto, id_modulo) VALUES('manejoPermisos', 5);
--ya registrados

--para registrar metodo
INSERT INTO sesion.metodo (de_metodo, id_objeto) VALUES('enviarMensaje', 1);
INSERT INTO sesion.metodo (de_metodo, id_objeto) VALUES('agregarUsuario', 2);
INSERT INTO sesion.metodo (de_metodo, id_objeto) VALUES('borrarUsuario', 4);
--ya registrados

--para registrar permisos del admin
INSERT INTO sesion.permiso (id_perfil, id_metodo) VALUES(1, 1);
INSERT INTO sesion.permiso (id_perfil, id_metodo) VALUES(1, 2);
INSERT INTO sesion.permiso (id_perfil, id_metodo) VALUES(1, 3);
--ya registrados

--para registrar permisos de un vendedor
INSERT INTO sesion.permiso (id_perfil, id_metodo) VALUES(2, 1);
INSERT INTO sesion.permiso (id_perfil, id_metodo) VALUES(2, 42);
INSERT INTO sesion.permiso (id_perfil, id_metodo) VALUES(2, 44);
--ya registrados

--para registrar permisos del asistente
INSERT INTO sesion.permiso (id_perfil, id_metodo) VALUES(3, 1);
INSERT INTO sesion.permiso (id_perfil, id_metodo) VALUES(3, 2);
INSERT INTO sesion.permiso (id_perfil, id_metodo) VALUES(3, 3);
--ya registrados

--para registrar un usuario:
INSERT INTO sesion.usuario (no_usuario, id_perfil, em_usuario, pr_usuario, re_usuario, cl_usuario, id_persona)
VALUES (
    'josemmr11',
    (SELECT id_perfil FROM sesion.perfil WHERE de_perfil = 'admin'),
    'josemmr311@gmail.com',
    'nombre de tu mama',
    crypt('ana', gen_salt('bf')),
    crypt('jose.29932288', gen_salt('bf')),
	(SELECT id_persona FROM comercio.persona WHERE no_persona = 'José' AND ap_persona = 'Mavárez')
);
INSERT INTO sesion.usuario (no_usuario, id_perfil, em_usuario, pr_usuario, re_usuario, cl_usuario, id_persona)
VALUES (
    'misa24jr',
    (SELECT id_perfil FROM sesion.perfil WHERE de_perfil = 'admin'),
    'misa24jr@gmail.com',
    'bebida preferida',
    crypt('nestea', gen_salt('bf')),
    crypt('misa1234', gen_salt('bf')),
	(SELECT id_persona FROM comercio.persona WHERE no_persona = 'Misael' AND ap_persona = 'Reverol')
);
INSERT INTO sesion.usuario (no_usuario, id_perfil, em_usuario, pr_usuario, re_usuario, cl_usuario, id_persona)
VALUES (
    'marcos2808',
    (SELECT id_perfil FROM sesion.perfil WHERE de_perfil = 'vendedor'),
    'vejegamarcos@gmail.com',
    'marca de carro favorito',
    crypt('toyota', gen_salt('bf')),
    crypt('280801mv', gen_salt('bf')),
	(SELECT id_persona FROM comercio.persona WHERE no_persona = 'Marcos' AND ap_persona = 'Vejega')
);

--ya registrado

--todavía no tienen registros:
-- comercio: factura, pago, asignacion, deuda, renglon
-- comunicacion: mensaje

--desbloquear un usuario 
UPDATE sesion.usuario SET bl_usuario = false WHERE no_usuario = 'josemmr11';

--traer las personas segun su tipo de persona:
SELECT * FROM comercio.persona per
INNER JOIN comercio.persona_tipo_persona ptp ON ptp.id_persona = per.id_persona
INNER JOIN comercio.tipo_persona tpp ON tpp.id_tipo_persona = ptp.id_tipo_persona
WHERE tpp.de_tipo_persona = 'Cliente';

--traer todos los metodos con su respectivo objeto y modulo
SELECT met.de_metodo, obj.de_objeto, mod.de_modulo
FROM sesion.modulo mod
INNER JOIN sesion.objeto obj ON obj.id_modulo = mod.id_modulo
INNER JOIN sesion.metodo met ON met.id_objeto = obj.id_objeto

--traer el perfil segun el nombre de un usuario:
SELECT pfl.de_perfil FROM sesion.perfil pfl
INNER JOIN sesion.usuario usr ON usr.id_perfil = pfl.id_perfil
WHERE usr.no_usuario = 'josemmr11'

