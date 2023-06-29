create database ApiJorge;
drop database ApiJorge;

use ApiJorge;

show tables;
describe usuario;
describe usuario_act_imc;
describe usuario_act_estres;
describe act_nivel_estres;
describe act_imc;
describe cuenta;
describe comentario;

select * from usuario;
select * from act_nivel_estres;
select * from act_imc;
select * from cuenta;
select * from comentario;
select * from usuario_act_imc;
select * from usuario_act_estres;

ALTER TABLE usuario_act_estres
ADD CONSTRAINT fk_usuario FOREIGN KEY (usuario) REFERENCES usuario(id_usuario);

ALTER TABLE usuario_act_estres
ADD CONSTRAINT fk_act_estres FOREIGN KEY (actEstres) REFERENCES act_nivel_estres(id_actNivelEstres);

ALTER TABLE usuario_act_imc
ADD CONSTRAINT fk_usuario_imc FOREIGN KEY (usuario) REFERENCES usuario(id_usuario);

ALTER TABLE usuario_act_imc
ADD CONSTRAINT fk_act_imc FOREIGN KEY (actIMC) REFERENCES act_imc(id_actIMC);

ALTER TABLE cuenta
ADD CONSTRAINT fk_usuario_cuenta FOREIGN KEY (usuario) REFERENCES usuario(id_usuario);

ALTER TABLE comentario
ADD CONSTRAINT fk_cuenta FOREIGN KEY (cuenta) REFERENCES cuenta(id);


INSERT INTO act_imc VALUES (51,'El fruto prohibido', 'Come una manzana', 'A', 'Bajo', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103677313301893140/manzana_g.jpg' );
INSERT INTO act_imc VALUES (52,'Carnicero', 'Consuma 160g de proteina', 'A', 'Bajo', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103677312672727090/Carnicero.jpeg' );
INSERT INTO act_imc VALUES (53,'Panadero', 'Consume pan integral en tu proxima comida', 'A', 'Bajo', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103677498023235734/Panadero.jpeg' );
INSERT INTO act_imc VALUES (54,'Agua verde', 'Toma un batido verde', 'A', 'Bajo', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103677310990811296/agua_verde.jpeg' );
INSERT INTO act_imc VALUES (55, 'Aguaman', 'Toma 5 vasos de agua', 'A', 'Bajo', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103677310634299462/aguaman_.jpeg' );
INSERT INTO act_imc VALUES (56, 'Vampiro', 'Consume un batido de frutas rojas', 'A', 'Normal', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103677500132962324/Vampiro.jpeg' );
INSERT INTO act_imc VALUES (57, 'Prueba la verde', 'Consume una ensalada de lechuga', 'A', 'Normal', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103677499411542107/prueba_la_verde.jpeg' );
INSERT INTO act_imc VALUES (58, 'Chinoman', 'Consume 130g de arroz', 'A','Normal', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103677312240717824/arroz.jpeg' );
INSERT INTO act_imc VALUES (59, 'Al modo ingles', 'Tome un te de limon con canela','A', 'Normal', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103677311309582376/al_modo_ingles.jpeg' );
INSERT INTO act_imc VALUES (60, 'Perla de sangre', 'Consume 90g de arandanos', 'A', 'Normal', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103677498337787925/perla_de_sangre.jpeg' );
INSERT INTO act_imc VALUES (61, 'La vaca lola ', 'Consume 2 vasos de leche en el desayuno ', 'A', 'Sobre peso', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103677312987303996/la_vaca_lola.jpeg' );
INSERT INTO act_imc VALUES (62, ' Pollito pio', 'Consume 100g de pollo al vapor', 'A', 'Sobre peso', 'h<ttps://cdn.discordapp.com/attachments/1101143335827157042/1103677498593652786/pollito_pio.jpeg' );
INSERT INTO act_imc VALUES (63, 'Yo quiero ser un huevo duro ', 'Consume 1 huevo hervido ', 'A', 'Sobre peso', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103677500372045984/yo_quiero_ser_un_huevo_duro_.jpeg' );
INSERT INTO act_imc VALUES (64, 'Popeye ', 'Consume una ensalada de espinacas ', 'A', 'Sobre peso', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103677498920816781/popeye.jpeg' );
INSERT INTO act_imc VALUES (65, 'Aguaman 2 ', 'Toma 1L de agua antes de cada comida', 'A', 'Sobre peso', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103677311611588688/aquaman.jpeg' );
INSERT INTO act_imc VALUES (66, 'Un buen dia en la feria ', 'Consume 5 manzanas cocidas ', 'A', 'Obesidad', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103677499868708934/un_dia_en_la_feria.jpeg' );
INSERT INTO act_imc VALUES (67, 'Aguaman 3 ', 'Toma 10 vasos de agua al dia ', 'A', 'Obesidad', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103677311900975185/aquaman_v3.jpeg' );
INSERT INTO act_imc VALUES (68, '420 ', 'Consume un plato de ensalada con espinacas', 'A', 'Obesidad', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103677310290382858/420.jpeg' );
INSERT INTO act_imc VALUES (69, 'Señor cara de papa ', 'Consume 130g de papas al vapor ', 'A', 'Obesidad', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103677499629654037/senor_cara_de_papa_.jpeg' );
INSERT INTO act_imc VALUES (70, 'Primo del frijol', 'Consume 230g de lentejas ', 'A', 'Obesidad', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103677499159871618/primo_del_frijol_.jpeg' );

INSERT INTO act_nivel_estres VALUES (1, 'Huevito kinder', 'Coma un chocolate', 'Bajo', 'https://cdn.discordapp.com/attachments/1101143534695886878/1103677082267029534/chocolate.jpg');
INSERT INTO act_nivel_estres VALUES (2,'Ahuevo descansito', 'Tome un descanso de 5 minutos', 'Bajo', 'https://cdn.discordapp.com/attachments/1101143534695886878/1103677082799706233/descansito.jpg');
INSERT INTO act_nivel_estres VALUES (3,'Chismesito', 'Hable con personas cercanas', 'Bajo', 'https://cdn.discordapp.com/attachments/1101143534695886878/1103677081994416158/chismecito.jpeg');
INSERT INTO act_nivel_estres VALUES (4,'En la sala de un hospital', 'Escuche salsa', 'Bajo', 'https://cdn.discordapp.com/attachments/1101143534695886878/1103676755509792830/en_la_sala_de_un_hospital.jpeg');
INSERT INTO act_nivel_estres VALUES (5, 'Esto si me gusta', 'Practica un hoby por 10 minutos', 'Bajo', 'https://cdn.discordapp.com/attachments/1101143534695886878/1103676755769827428/esto_si_me_gusta_.jpeg');
INSERT INTO act_nivel_estres VALUES (6, 'Matilda','Lea un capitulo de algun libro', 'Medio', 'https://cdn.discordapp.com/attachments/1101143534695886878/1103676756898099230/matilda.jpeg');
INSERT INTO act_nivel_estres VALUES (7, 'Activate', 'Camine por 5 minutos', 'Medio', 'https://cdn.discordapp.com/attachments/1101143534695886878/1103677081503666187/activate.jpeg');
INSERT INTO act_nivel_estres VALUES (8, 'No es lo que parece', 'Haz el saludo al sol', 'Medio', 'https://cdn.discordapp.com/attachments/1101143534695886878/1103676757229457508/no_es_lo_que_parece.jpg');
INSERT INTO act_nivel_estres VALUES (9, 'La netflix', 'Vea una pelicula', 'Medio', 'https://cdn.discordapp.com/attachments/1101143534695886878/1103676756155707432/la_netflix.jpeg');
INSERT INTO act_nivel_estres VALUES (10, 'A la chingada', 'Cambie su area de trabajo', 'Medio', 'https://cdn.discordapp.com/attachments/1101143534695886878/1103676755241345164/a_la_chingada_.jpeg');
INSERT INTO act_nivel_estres VALUES (11, 'Sube la temperatura', 'Toma un baño caliente', 'Alto', 'https://cdn.discordapp.com/attachments/1101143534695886878/1103676757720178688/sube_la_temperatura.jpeg');
INSERT INTO act_nivel_estres VALUES (12, 'Darth vader', 'Respira de forma tranquila', 'Alto', 'https://cdn.discordapp.com/attachments/1101143534695886878/1103677082489335888/darth_vader.jpeg');
INSERT INTO act_nivel_estres VALUES (13, 'Masajito', 'Toma un masaje muscular', 'Alto','https://cdn.discordapp.com/attachments/1101143534695886878/1103676756650631178/masajito.jpeg');
INSERT INTO act_nivel_estres VALUES (14, 'Belladona', 'Toma un te de hierbas', 'Alto', 'https://cdn.discordapp.com/attachments/1101143534695886878/1103677081763721246/belladona.jpeg');
INSERT INTO act_nivel_estres VALUES (15, 'Limpieza del alma', 'Realiza tareas de limpieza', 'Alto', 'https://cdn.discordapp.com/attachments/1101143534695886878/1103676756407373834/limpieza_del_alma_.jpeg');

INSERT act_imc (id_actIMC, nombre_actIMC, descripcion_actIMC, tipo_actIMC, nivel_IMC, imagen_actIMC)VALUES  
(1, 'A ponerse fuertes', 'Comience con un peso que sea ligero, sujete las mancuernas con un agarre firme, levante las mancuernas hasta que estén a la altura de los hombros, baje las mancuernas lentamente hasta la posición inicial.', 'E', 'Bajo','https://cdn.discordapp.com/attachments/1101143335827157042/1103675985146155080/IMG-20230504-WA0023.jpg'),
(2, 'Se me hace tarde', 'Realice un trote rápido durante 30 minutos al día. Se recomienda usar ropa cómoda o deportiva (pans, tenis deportivos, playera de manga corta de algodón).', 'E', 'Bajo', "https://cdn.discordapp.com/attachments/1101143335827157042/1103675880825430097/IMG-20230504-WA0008.jpg"),
(3, 'Revisar debajo de la cama', 'Colócate en  posición de tabla con las manos en el suelo a la altura de los hombros con pies estirados y juntos, baje el cuerpo lentamente doblando los codos manteniendo la postura mas cerca posible del suelo y luego empuje el cuerpo hacia arriba.', 'E', 'Bajo','https://cdn.discordapp.com/attachments/1101143335827157042/1103675869060407407/IMG-20230504-WA0006.jpg'),
(4, 'Y la silla', 'Sitúate de pie con las piernas ligeramente separadas, mantén el tronco recto, coloca los brazos estirados al frente y comienza agachándote llevando los glúteos hacia atrás, una vez abajo vuelve a la posición inicial.', 'E', 'Bajo','https://cdn.discordapp.com/attachments/1101143335827157042/1103675901000040558/IMG-20230504-WA0013.jpg'),
(5, 'Bajo con elegacia', 'Párate con los pies juntos y da un gran paso hacia adelante con una pierna, baja el cuerpo como si fueras a sentarte y vuelve a la posición inicial.', 'E', 'Bajo','https://cdn.discordapp.com/attachments/1101143335827157042/1103675886592606299/IMG-20230504-WA0007.jpg'),
(6, 'No cuesta mucho un lavadero', 'Acostado boca arriba, flexiona las rodillas y coloca las manos detrás de la cabeza. Levanta la cabeza y los hombros hacia el techo, contrayendo los músculos abdominales. Realice 3 series de 12-15 repeticiones. ','E', 'Bajo', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103675952564805792/IMG-20230504-WA0019.jpg'),
(7, 'Ciclismo', 'Si dispones de una bicicleta, puedes realizar ciclismo de 15 a 20 minutos por día', 'E','bajo', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108923617149993050/asd.png'),
(8, 'Dominadas', 'Cuelgue de una barra con las manos hacia adelante y junte los omóplatos, luego levante su cuerpo hasta que su barbilla esté por encima de la barra y baje lentamente', 'E', 'Bajo', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108923616856387625/asd.jpg'),
(9, 'Elevacion de pantorrilas', 'Párese con los pies separados al ancho de los hombros y levante los talones del suelo lo más alto posible y luego bájelos lentamente', 'E', 'Bajo', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108923618504740874/safd.jpg'),
(10, 'Plancha', 'Acuéstese sobre un costado con ambos antebrazos en el suelo y levante el cuerpo para formar una línea recta desde los pies hasta la cabeza, manteniendo la posición de 20 a 30 segundos por dos repeticiones', 'E', 'Bajo', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108923617854631986/ekf.jpg'),
(11, 'Natacion', 'La natación es un ejercicio de bajo impacto que trabaja todo el cuerpo. Nade de 10 a 15 minutos por día', 'E', 'Bajo', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108923618177597440/nasmd.jpg'),
(12, 'Yoga', 'El yoga ayuda a mejorar la flexibilidad, el equilibrio y la fuerza. Realice sesiones de 10 a 15 minutos por dia', 'E', 'Bajo', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108923617556828160/asmd.jpg'),
(13, 'No cuesta mucho un lavadero', 'Acostado boca arriba, flexiona las rodillas y coloca las manos detrás de la cabeza. Levanta la cabeza y los hombros hacia el techo, contrayendo los músculos abdominales. Realice 3 series de 12-15 repeticiones. ','E', 'Normal', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103675952564805792/IMG-20230504-WA0019.jpg'),   
(14, 'Creo que no voy a ningún lado', 'Simula correr sin moverte del lugar, levantando las rodillas hacia el pecho y balanceando los brazos como si corrieras. Haz 3 series de 30 segundos.', 'E', 'Normal', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103675958889812109/IMG-20230504-WA0018.jpg'),
(15, 'AQUÍ ESTOY MIRENME', 'Salta abriendo las piernas hacia los lados y al mismo tiempo lleva los brazos hacia arriba, luego salta y junta las piernas y baja los brazos. Haz 3 series de 10-12 repeticiones. ', 'E', 'Normal','https://cdn.discordapp.com/attachments/1101143335827157042/1103675931656204318/IMG-20230504-WA0017.jpg'),
(16, 'Como lagartija Ha-ha-ha', 'Colócate en posición de plancha y baja el cuerpo hasta que los codos formen un ángulo de 90 grados. Empuja el cuerpo hacia arriba para volver a la posición inicial. Haz 3 series de 8-12 repeticiones.', 'E', 'Normal', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103675938195116182/IMG-20230504-WA0016.jpg'),
(17, 'Otra vez no hay sillas?', 'Coloca tus pies separados al ancho de tus hombros, baja el cuerpo hacia el suelo flexionando las rodillas, mantén la espalda recta y sube lentamente a la posición inicial. Haz 3 series de 10-15 repeticiones.', 'E', 'Normal', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103675918804852776/IMG-20230504-WA0015.jpg'),
(18, 'Dominadas', 'Cuelgue de una barra con las manos hacia adelante y junte los omóplatos, luego levante su cuerpo hasta que su barbilla esté por encima de la barra y baje lentamente', 'E', 'Normal', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108926789113356320/wefwef.jpg'),
(19, 'Plancha', 'Acuéstese sobre un costado con ambos antebrazos en el suelo y levante el cuerpo para formar una línea recta desde los pies hasta la cabeza, manteniendo la posición de 20 a 30 segundos por dos repeticiones', 'E', 'Normal', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108926788819759144/wef.jpg'),
(20, 'Elevaciones laterales', 'Sostenga una pesa en cada mano a los lados del cuerpo y levante los brazos hacia los lados hasta que estén paralelos al suelo, luego bájelos lentamente', 'E', 'Normal', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108926787150426152/gerg.png'),
(21, 'Caminar a paso rapido', 'Realice un trote rápido durante 30 minutos al día. Se recomienda usar ropa cómoda o deportiva (pans, tenis deportivos, playera de manga corta de algodón)', 'E', 'Normal', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108926787909595196/kg.png'),
(22, 'Salto con cuerda', 'Con una cuerda larga realiza saltos consecutivos de 1 a 2 minutos por día', 'E', 'Normal', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108926788203192430/lhlh.jpg'),
(23, 'Natacion', 'La natación es un ejercicio de bajo impacto que trabaja todo el cuerpo. Nade de 10 a 15 minutos por día', 'E', 'Normal', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108926788467429436/nv.jpg'),
(24, 'Yoga', 'El yoga ayuda a mejorar la flexibilidad, el equilibrio y la fuerza', 'E', 'Normal', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108926787506937866/hjvjh.jpg'),
(25, 'A tener unas piernotas', 'es un ejercicio de bajo impacto que se puede hacer en cualquier lugar y es ideal para comenzar un programa de ejercicios. Solo necesitas un par de zapatos cómodos y un poco de tiempo libre.', 'E', 'Sobrepeso','https://cdn.discordapp.com/attachments/1101143335827157042/1103675964619235418/IMG-20230504-WA0022.jpg'),
(26, 'Odio las escaleras', 'La escaladora es una máquina de ejercicio que simula la escalada de escaleras, si o posee una puede realizar en escaleras convencional. Comience con una sesión de 5 minutos y aumente gradualmente la duración y la intensidad.', 'E', 'Sobrepeso', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103675924978868294/IMG-20230504-WA0014.jpg'),
(27, 'Con quien tengo que hablar para que hayan sillas: ', 'Párate con los pies separados al ancho de los hombros y bajar lentamente las caderas como si estuviera sentándose en una silla invisible. Hacer 2-3 series de 10-12 repeticiones.', 'E', 'Sobrepeso', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103675971225264220/IMG-20230504-WA0021.jpg'),
(28, 'Algo tiene que subir no? ', 'Acostarse boca arriba en el suelo y levantar las piernas rectas unos centímetros del suelo. Hacer 2-3 series de 10-12 repeticiones.', 'E', 'Sobrepeso', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103675894318518353/IMG-20230504-WA0010.jpg'),
(29, 'Una a la vez', 'Usa una escalera o un banco bajo para subir y bajar alternando las piernas. Hacer 2-3 series de 10-12 repeticiones.', 'E', 'Sobrepeso','https://cdn.discordapp.com/attachments/1101143335827157042/1103675874718531684/IMG-20230504-WA0009.jpg'),
(30, 'Estocada', ' Este ejercicio fortalece las piernas y los glúteos. Da un paso hacia adelante con una pierna y baja el cuerpo hasta que ambas rodillas estén dobladas en un ángulo de 90 grados. Luego, vuelve a la posición inicial y cambia de pierna', 'E', 'Sobrepeso', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108928638306492526/dfgdf.jpg'),
(31, 'Sentadillas con silla', 'Coloca una silla detrás de ti. Baja el cuerpo hacia abajo como si fueras a sentarte en la silla, manteniendo las rodillas en línea con los tobillos. Luego, levántate y repite', 'E', 'Sobrepeso', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108928639858393198/yjt.png'),
(32, 'Saltos de tijera', 'Salta abriendo las piernas hacia los lados y al mismo tiempo lleva los brazos hacia arriba, luego salta y junta las piernas y baja los brazos. Haz 3 series de 10-12 repeticiones', 'E', 'Sobrepeso', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108928638629449788/ghchh.jpg'),
(33, 'Flexiones de pared', 'Apoya las manos contra una pared a la altura del pecho y realiza flexiones empujando el cuerpo hacia la pared', 'E', 'Sobrepeso', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108928638985977896/krh.jpg'),
(34, 'Elevacion de pantorrilas', 'Párate con los pies separados al ancho de los hombros y eleva lentamente los talones del suelo. Mantén la posición por un momento y luego baja de nuevo. Repite este ejercicio de 10 a 15 veces', 'E', 'Sobrepeso', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108928637937401986/asdj.png'),
(35, 'Natacion', 'La natación es un ejercicio de bajo impacto que trabaja todo el cuerpo. Nade de 10 a 15 minutos por día', 'E', 'Sobrepeso', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108928639275376681/lok.jpg'),
(36, 'Yoga', 'El yoga ayuda a mejorar la flexibilidad, el equilibrio y la fuerza', 'E', 'Sobrepeso', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108928639568973914/sjdjas.jpg'),
(37, 'Trotar', 'Realice un trote suave en un parque, en una calle o en una pista para correr. Haga un trote de 10 a 15 minutos diarios', 'E', 'Sobrepeso', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108928637627011222/alksd.jpg'),
(38, 'El piso esta sucio', 'Párate frente a una pared con las manos apoyadas en ella a la altura de los hombros. Inclínate hacia la pared y luego vuelve a la posición inicial. Repite este ejercicio de 10 a 15 veces. ', 'E', 'Obesidad', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103675906314223739/IMG-20230504-WA0012.jpg'),
(39, 'Que me lleve el viento', 'Camina durante de 30 a 60 minutos cada día.', 'E', 'Obesidad', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103675913075429456/IMG-20230504-WA0011.jpg'),
(40, 'Disco Disco', 'Pon música y baila durante 30-60 minutos al día. Además de ser divertido, es una excelente manera de quemar calorías y mejorar tu salud cardiovascular. ', 'E', 'Obesidad','https://cdn.discordapp.com/attachments/1101143335827157042/1103675945744871564/IMG-20230504-WA0020.jpg'),
(41, 'Empecemos con algo pequeño', 'Levanta pesas ligeras, como botellas de agua o latas de alimentos, mientras estás sentado o de pie. Realiza este ejercicio de 10 a 15 veces.','E', 'Obesidad', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103675201750839396/IMG-20230504-WA0005.jpg'),
(42, 'Esto me hace ver mas alto', 'Párate con los pies separados al ancho de los hombros y eleva lentamente los talones del suelo. Mantén la posición por un momento y luego baja de nuevo. Repite este ejercicio de 10 a 15 veces.', 'E', 'Obesidad', 'https://cdn.discordapp.com/attachments/1101143335827157042/1103675978070360154/IMG-20230504-WA0024.jpg'),
(43, 'Estiramientos de cuerpo completo', 'Realiza estiramientos que abarquen todo el cuerpo para mejorar la flexibilidad y reducir la rigidez muscular', 'E', 'Obesidad', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108933020620177408/sadf.jpg'),
(44, 'Natacion', 'La natación es un ejercicio de bajo impacto que trabaja todo el cuerpo. Nade de 10 a 15 minutos por día', 'E', 'Obesidad', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108933020938936330/tnh.png'),
(45, 'Yoga', 'El yoga ayuda a mejorar la flexibilidad, el equilibrio y la fuerza. Practique de 10 a 15 minutos diarios', 'E', 'Obesidad', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108933019328335943/kjjsdf.jpg'),
(46, 'Sentadillas con silla', 'Coloca una silla detrás de ti. Baja el cuerpo hacia abajo como si fueras a sentarte en la silla, manteniendo las rodillas en línea con los tobillos. Luego, levántate y repite.', 'E', 'Obesidad', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108933020016189490/lnv.jpg'),
(47, 'Remos con mancuernas', 'Realiza el ejercicio de remo con mancuernas para trabajar los músculos de la espalda y los brazos', 'E', 'Obesidad', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108933018711769238/as.jpg'),
(48, 'Estocada', 'Este ejercicio fortalece las piernas y los glúteos. Da un paso hacia adelante con una pierna y baja el cuerpo hasta que ambas rodillas estén dobladas en un ángulo de 90 grados. Luego, vuelve a la posición inicial y cambia de pierna', 'E', 'Obesidad', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108933019630321684/laS.jpg'),
(49, 'Escaladora', 'Escaladora: La escaladora es una máquina de ejercicio que simula la escalada de escaleras, si o posee una puede realizar en escaleras convencional. Comience con una sesión de 5 minutos y aumente gradualmente la duración y la intensidad.', 'E', 'Obesidad', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108933019034722394/JKCD.jpg'),
(50, 'Trotar', 'Realice un trote suave en un parque, en una calle o en una pista para correr. Haga un trote de 10 a 15 minutos diarios', 'E', 'Obesidad', 'https://cdn.discordapp.com/attachments/1108921575606063178/1108933020318191646/oqpw.jpg')
