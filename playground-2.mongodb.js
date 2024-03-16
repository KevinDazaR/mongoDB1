/*realizarán la creación de una colección en mongoDB que tenga los siguientes campos.

llenar la base de datos de acuerdo a la necesidad no hay un mínimo de registros ni un máximo, lo importantes es poder probar todos los ejercicios.

Nombre colección: users
datos:
nombres:
apellidos:
correo:
ciudad:
país:
salario: (dólares)
edad: (número)
altura: (en Centímetros )
peso: (en libras)



Realizar los siguientes ejercicios.




La actividad debe de ser entregada en un repositorio llamado "mongodb-1" en la rama main.

quedo atento a comentarios.
*/

//Creo la BD

db.createCollection('users');

db.users.insertMany([
    {
        nombres: 'Kevin',
        apellidos: 'Daza Ramones',
        correo: 'kdramones@gmail.com',
        ciudad: 'Medellin',
        país: 'Colombia',
        salario: 1420,
        edad: 23,
        altura: 182,
        peso: 82
    },
    {
        nombres: 'Maria',
        apellidos: 'Gomez Fernandez',
        correo: 'mfgomez@gmail.com',
        ciudad: 'Bogota',
        país: 'Colombia',
        salario: 1500,
        edad: 25,
        altura: 170,
        peso: 65
    },
    {
        nombres: 'Juan',
        apellidos: 'Perez Rodriguez',
        correo: 'jperez@gmail.com',
        ciudad: 'Cali',
        país: 'Colombia',
        salario: 1350,
        edad: 27,
        altura: 175,
        peso: 75
    },
    // Agrega aquí más usuarios con sus datos
    {
        nombres: 'Laura',
        apellidos: 'Garcia Martinez',
        correo: 'lgarcia@gmail.com',
        ciudad: 'Barranquilla',
        país: 'Colombia',
        salario: 1600,
        edad: 30,
        altura: 165,
        peso: 60
    },
    {
        nombres: 'Pedro',
        apellidos: 'Ramirez Sanchez',
        correo: 'pramirez@gmail.com',
        ciudad: 'Cartagena',
        país: 'Colombia',
        salario: 1450,
        edad: 26,
        altura: 178,
        peso: 70
    },
    {
        nombres: 'Ana',
        apellidos: 'Lopez Garcia',
        correo: 'alopez@gmail.com',
        ciudad: 'Santa Marta',
        país: 'Colombia',
        salario: 1550,
        edad: 28,
        altura: 160,
        peso: 55
    },
    {
        nombres: 'Carlos',
        apellidos: 'Hernandez Ruiz',
        correo: 'chernandez@gmail.com',
        ciudad: 'Pereira',
        país: 'Colombia',
        salario: 1480,
        edad: 29,
        altura: 180,
        peso: 80
    },
    {
        nombres: 'Sofia',
        apellidos: 'Diaz Castro',
        correo: 'sdiaz@gmail.com',
        ciudad: 'Manizales',
        país: 'Colombia',
        salario: 1520,
        edad: 31,
        altura: 168,
        peso: 63
    },
    {
        nombres: 'Diego',
        apellidos: 'Martinez Ramirez',
        correo: 'dmartinez@gmail.com',
        ciudad: 'Cucuta',
        país: 'Colombia',
        salario: 1400,
        edad: 24,
        altura: 176,
        peso: 72
    },
    {
        nombres: 'Fernanda',
        apellidos: 'Gonzalez Suarez',
        correo: 'fgonzalez@gmail.com',
        ciudad: 'Ibague',
        país: 'Colombia',
        salario: 1580,
        edad: 32,
        altura: 163,
        peso: 58
    },
    {
        nombres: 'Javier',
        apellidos: 'Ortiz Morales',
        correo: 'jortiz@gmail.com',
        ciudad: 'Pasto',
        país: 'Colombia',
        salario: 1430,
        edad: 27,
        altura: 177,
        peso: 78
    },
    {
        nombres: 'Valentina',
        apellidos: 'Perez Duque',
        correo: 'vperez@gmail.com',
        ciudad: 'Tunja',
        país: 'Colombia',
        salario: 1560,
        edad: 29,
        altura: 169,
        peso: 67
    },
    {
        nombres: 'Daniel',
        apellidos: 'Sanchez Castro',
        correo: 'dsanchez@gmail.com',
        ciudad: 'Villavicencio',
        país: 'Colombia',
        salario: 1470,
        edad: 26,
        altura: 175,
        peso: 75
    },
    {
        nombres: 'Isabella',
        apellidos: 'Gutierrez Diaz',
        correo: 'igutierrez@gmail.com',
        ciudad: 'Armenia',
        país: 'Colombia',
        salario: 1590,
        edad: 30,
        altura: 166,
        peso: 61
    },
    {
        nombres: 'Luis',
        apellidos: 'Sánchez',
        correo: 'lsanchez@gmail.com',
        ciudad: 'Barranquilla',
        país: 'Colombia',
        salario: 1200,
        edad: 20,
        altura: 175,
        peso: 70
    },
    {
        nombres: 'Marcela',
        apellidos: 'Ramírez',
        correo: 'mramirez@gmail.com',
        ciudad: 'Cali',
        país: 'Colombia',
        salario: 1250,
        edad: 19,
        altura: 160,
        peso: 55
    },
    {
        nombres: 'Andrés',
        apellidos: 'García',
        correo: 'agarcia@gmail.com',
        ciudad: 'Bogotá',
        país: 'Colombia',
        salario: 1300,
        edad: 18,
        altura: 180,
        peso: 75
    },
    {
        nombres: 'Paola',
        apellidos: 'Hernández',
        correo: 'phernandez@gmail.com',
        ciudad: 'Medellín',
        país: 'Colombia',
        salario: 1350,
        edad: 21,
        altura: 165,
        peso: 60
    },
    {
        nombres: 'Diego',
        apellidos: 'Díaz',
        correo: 'ddiaz@gmail.com',
        ciudad: 'Cartagena',
        país: 'Colombia',
        salario: 1400,
        edad: 22,
        altura: 170,
        peso: 65
    },
    {
        nombres: 'Laura',
        apellidos: 'López',
        correo: 'llopez@gmail.com',
        ciudad: 'Santa Marta',
        país: 'Colombia',
        salario: 1450,
        edad: 20,
        altura: 168,
        peso: 62
    },
    {
        nombres: 'Javier',
        apellidos: 'Martínez',
        correo: 'jmartinez@gmail.com',
        ciudad: 'Bucaramanga',
        país: 'Colombia',
        salario: 1500,
        edad: 19,
        altura: 175,
        peso: 68
    },
    {
        nombres: 'Valentina',
        apellidos: 'Gómez',
        correo: 'vgomez@gmail.com',
        ciudad: 'Pereira',
        país: 'Colombia',
        salario: 1550,
        edad: 18,
        altura: 163,
        peso: 58
    },
    {
        nombres: 'Sebastián',
        apellidos: 'Ruiz',
        correo: 'sruiz@gmail.com',
        ciudad: 'Manizales',
        país: 'Colombia',
        salario: 1600,
        edad: 20,
        altura: 180,
        peso: 70
    },
    {
        nombres: 'Valeria',
        apellidos: 'González',
        correo: 'vgonzalez@gmail.com',
        ciudad: 'Ibagué',
        país: 'Colombia',
        salario: 1650,
        edad: 19,
        altura: 170,
        peso: 64
    },
    {
        nombres: 'Mateo',
        apellidos: 'Herrera',
        correo: 'mherrera@gmail.com',
        ciudad: 'Pasto',
        país: 'Colombia',
        salario: 1700,
        edad: 21,
        altura: 178,
        peso: 72
    },
    {
        nombres: 'Isabella',
        apellidos: 'Castaño',
        correo: 'icastaño@gmail.com',
        ciudad: 'Cúcuta',
        país: 'Colombia',
        salario: 1750,
        edad: 18,
        altura: 160,
        peso: 55
    },
    {
        nombres: 'Juan José',
        apellidos: 'Londoño',
        correo: 'jjlondono@gmail.com',
        ciudad: 'Tunja',
        país: 'Colombia',
        salario: 1800,
        edad: 20,
        altura: 185,
        peso: 75
    },
    {
        nombres: 'Alejandra',
        apellidos: 'Ospina',
        correo: 'aospina@gmail.com',
        ciudad: 'Villavicencio',
        país: 'Colombia',
        salario: 1850,
        edad: 19,
        altura: 162,
        peso: 58
    },
    {
        nombres: 'Santiago',
        apellidos: 'Cano',
        correo: 'scano@gmail.com',
        ciudad: 'Armenia',
        país: 'Colombia',
        salario: 1900,
        edad: 20,
        altura: 177,
        peso: 70
    },
    {
        nombres: 'Danna',
        apellidos: 'Gallego',
        correo: 'dgallego@gmail.com',
        ciudad: 'Riohacha',
        país: 'Colombia',
        salario: 1950,
        edad: 18,
        altura: 168,
        peso: 60
    },
    {
        nombres: 'Juan David',
        apellidos: 'Orozco',
        correo: 'jorozco@gmail.com',
        ciudad: 'Sincelejo',
        país: 'Colombia',
        salario: 2000,
        edad: 21,
        altura: 182,
        peso: 76
    },
    {
        nombres: 'Daniela',
        apellidos: 'Bermúdez',
        correo: 'dbermudez@gmail.com',
        ciudad: 'Valledupar',
        país: 'Colombia',
        salario: 2050,
        edad: 20,
        altura: 170,
        peso: 63
    },
    {
        nombres: 'Esteban',
        apellidos: 'Sánchez',
        correo: 'esanchez@gmail.com',
        ciudad: 'Quibdó',
        país: 'Colombia',
        salario: 2100,
        edad: 19,
        altura: 175,
        peso: 68
    },
    {
        nombres: 'Camilo',
        apellidos: 'Buitrago',
        correo: 'cbuitrago@gmail.com',
        ciudad: 'Mocoa',
        país: 'Colombia',
        salario: 2150,
        edad: 20,
        altura: 180,
        peso: 72
    },
    {
        nombres: 'Valentina',
        apellidos: 'Zapata',
        correo: 'vzapata@gmail.com',
        ciudad: 'Puerto Carreño',
        país: 'Colombia',
        salario: 2200,
        edad: 18,
        altura: 165,
        peso: 57
    },
    {
        nombres: 'Carlos',
        apellidos: 'Hernández',
        correo: 'chernandez@gmail.com',
        ciudad: 'Barranquilla',
        país: 'Colombia',
        salario: 1200,
        edad: 19,
        altura: 170,
        peso: 65
    },
    {
        nombres: 'Paula',
        apellidos: 'López',
        correo: 'plopez@gmail.com',
        ciudad: 'Cali',
        país: 'Colombia',
        salario: 1250,
        edad: 18,
        altura: 160,
        peso: 55
    },
    {
        nombres: 'Andrea',
        apellidos: 'Gómez',
        correo: 'agomez@gmail.com',
        ciudad: 'Bogotá',
        país: 'Colombia',
        salario: 1300,
        edad: 17,
        altura: 165,
        peso: 60
    },
    {
        nombres: 'Juan',
        apellidos: 'Ramírez',
        correo: 'jramirez@gmail.com',
        ciudad: 'Medellín',
        país: 'Colombia',
        salario: 1350,
        edad: 16,
        altura: 175,
        peso: 70
    },
    {
        nombres: 'María',
        apellidos: 'Martínez',
        correo: 'mmartinez@gmail.com',
        ciudad: 'Cartagena',
        país: 'Colombia',
        salario: 1400,
        edad: 19,
        altura: 168,
        peso: 65
    },
    {
        nombres: 'David',
        apellidos: 'García',
        correo: 'dgarcia@gmail.com',
        ciudad: 'Santa Marta',
        país: 'Colombia',
        salario: 1450,
        edad: 18,
        altura: 180,
        peso: 75
    },
    {
        nombres: 'Sara',
        apellidos: 'Fernández',
        correo: 'sfernandez@gmail.com',
        ciudad: 'Bucaramanga',
        país: 'Colombia',
        salario: 1500,
        edad: 17,
        altura: 155,
        peso: 50
    },
    {
        nombres: 'Gabriel',
        apellidos: 'Pérez',
        correo: 'gperez@gmail.com',
        ciudad: 'Pereira',
        país: 'Colombia',
        salario: 1550,
        edad: 16,
        altura: 170,
        peso: 62
    },
    {
        nombres: 'Camila',
        apellidos: 'Díaz',
        correo: 'cdiaz@gmail.com',
        ciudad: 'Manizales',
        país: 'Colombia',
        salario: 1600,
        edad: 15,
        altura: 163,
        peso: 55
    },
    {
        nombres: 'Daniel',
        apellidos: 'Herrera',
        correo: 'dherrera@gmail.com',
        ciudad: 'Ibagué',
        país: 'Colombia',
        salario: 1650,
        edad: 18,
        altura: 172,
        peso: 68
    },
    {
        nombres: 'Valeria',
        apellidos: 'Ruiz',
        correo: 'vruiz@gmail.com',
        ciudad: 'Pasto',
        país: 'Colombia',
        salario: 1700,
        edad: 17,
        altura: 168,
        peso: 60
    },
    {
        nombres: 'Sebastián',
        apellidos: 'González',
        correo: 'sgonzalez@gmail.com',
        ciudad: 'Cúcuta',
        país: 'Colombia',
        salario: 1750,
        edad: 19,
        altura: 180,
        peso: 70
    },
    {
        nombres: 'Valentina',
        apellidos: 'Castaño',
        correo: 'vcastaño@gmail.com',
        ciudad: 'Tunja',
        país: 'Colombia',
        salario: 1800,
        edad: 16,
        altura: 160,
        peso: 58
    },
    {
        nombres: 'Mateo',
        apellidos: 'Londoño',
        correo: 'mlondono@gmail.com',
        ciudad: 'Villavicencio',
        país: 'Colombia',
        salario: 1850,
        edad: 17,
        altura: 175,
        peso: 65
    },
    {
        nombres: 'Isabella',
        apellidos: 'Ospina',
        correo: 'iospina@gmail.com',
        ciudad: 'Armenia',
        país: 'Colombia',
        salario: 1900,
        edad: 15,
        altura: 155,
        peso: 52
    },
    {
        nombres: 'Juan José',
        apellidos: 'Cano',
        correo: 'jjcano@gmail.com',
        ciudad: 'Sincelejo',
        país: 'Colombia',
        salario: 1950,
        edad: 18,
        altura: 170,
        peso: 63
    },
    {
        nombres: 'Daniela',
        apellidos: 'Bermúdez',
        correo: 'dbermudez@gmail.com',
        ciudad: 'Valledupar',
        país: 'Colombia',
        salario: 2000,
        edad: 16,
        altura: 160,
        peso: 55
    },
    {
        nombres: 'Esteban',
        apellidos: 'Sánchez',
        correo: 'esanchez@gmail.com',
        ciudad: 'Quibdó',
        país: 'Colombia',
        salario: 2050,
        edad: 17,
        altura: 165
    }

]);


// Agrego màs usuarios con diferente país y salario

db.users.insertMany([
    {
        nombres: 'John',
        apellidos: 'Smith',
        correo: 'jsmith@gmail.com',
        ciudad: 'New York',
        país: 'Estados Unidos',
        salario: 2000,
        edad: 30,
        altura: 180,
        peso: 75
    },
    {
        nombres: 'Sophie',
        apellidos: 'Dubois',
        correo: 'sdubois@gmail.com',
        ciudad: 'Paris',
        país: 'Francia',
        salario: 1800,
        edad: 28,
        altura: 165,
        peso: 60
    },
    {
        nombres: 'Pedro',
        apellidos: 'Silva',
        correo: 'psilva@gmail.com',
        ciudad: 'Rio de Janeiro',
        país: 'Brasil',
        salario: 2200,
        edad: 32,
        altura: 175,
        peso: 70
    },
    {
        nombres: 'Alejandro',
        apellidos: 'García',
        correo: 'agarcia@gmail.com',
        ciudad: 'Madrid',
        país: 'España',
        salario: 1900,
        edad: 29,
        altura: 178,
        peso: 72
    },
    {
        nombres: 'María',
        apellidos: 'Hernández',
        correo: 'mhernandez@gmail.com',
        ciudad: 'Mexico City',
        país: 'México',
        salario: 2100,
        edad: 31,
        altura: 170,
        peso: 68
    },
    {
        nombres: 'Emily',
        apellidos: 'Johnson',
        correo: 'ejohnson@gmail.com',
        ciudad: 'Los Angeles',
        país: 'Estados Unidos',
        salario: 3500,
        edad: 35,
        altura: 170,
        peso: 65
    },
    {
        nombres: 'Louis',
        apellidos: 'Martin',
        correo: 'lmartin@gmail.com',
        ciudad: 'Paris',
        país: 'Francia',
        salario: 3200,
        edad: 38,
        altura: 175,
        peso: 75
    },
    {
        nombres: 'Fernanda',
        apellidos: 'Oliveira',
        correo: 'foliveira@gmail.com',
        ciudad: 'São Paulo',
        país: 'Brasil',
        salario: 3800,
        edad: 33,
        altura: 168,
        peso: 62
    },
    {
        nombres: 'Javier',
        apellidos: 'Rodríguez',
        correo: 'jrodriguez@gmail.com',
        ciudad: 'Madrid',
        país: 'España',
        salario: 3100,
        edad: 37,
        altura: 180,
        peso: 80
    },
    {
        nombres: 'Carlos',
        apellidos: 'González',
        correo: 'cgonzalez@gmail.com',
        ciudad: 'Ciudad de México',
        país: 'México',
        salario: 3400,
        edad: 36,
        altura: 172,
        peso: 70
    }
    
]);

db.users.insertMany([
    {
        nombres: 'Sophie',
        apellidos: 'Dubois',
        correo: 'sdubois@gmail.com',
        ciudad: 'Paris',
        país: 'Francia',
        salario: 1800,
        edad: 28,
        altura: 165,
        peso: 60
    },
    {
        nombres: 'Louis',
        apellidos: 'Martin',
        correo: 'lmartin@gmail.com',
        ciudad: 'Parìs',
        país: 'Francia',
        salario: 3200,
        edad: 38,
        altura: 175,
        peso: 75
    },
    {
        nombres: 'Claire',
        apellidos: 'Rousseau',
        correo: 'crousseau@gmail.com',
        ciudad: 'Paris',
        país: 'Francia',
        salario: 2800,
        edad: 33,
        altura: 170,
        peso: 63
    },
    {
        nombres: 'Antoine',
        apellidos: 'Leclerc',
        correo: 'aleclerc@gmail.com',
        ciudad: 'Paris',
        país: 'Francia',
        salario: 3100,
        edad: 36,
        altura: 178,
        peso: 72
    },
    {
        nombres: 'Charlotte',
        apellidos: 'Girard',
        correo: 'cgirard@gmail.com',
        ciudad: 'Paris',
        país: 'Francia',
        salario: 2900,
        edad: 31,
        altura: 165,
        peso: 58
    },
    {
        nombres: 'Mathieu',
        apellidos: 'Dubois',
        correo: 'mdubois@gmail.com',
        ciudad: 'Paris',
        país: 'Francia',
        salario: 3400,
        edad: 40,
        altura: 180,
        peso: 80
    },
    {
        nombres: 'Emilie',
        apellidos: 'Lefevre',
        correo: 'elefevre@gmail.com',
        ciudad: 'Paris',
        país: 'Francia',
        salario: 2600,
        edad: 29,
        altura: 168,
        peso: 65
    }
])

db.users.insertMany([
    {
        nombres: 'William',
        apellidos: 'Smith',
        correo: 'wsmith@gmail.com',
        ciudad: 'Londres',
        país: 'Reino Unido',
        salario: 2500,
        edad: 32,
        altura: 175,
        peso: 70
    },
    {
        nombres: 'Emily',
        apellidos: 'Johnson',
        correo: 'ejohnson@gmail.com',
        ciudad: 'Londres',
        país: 'Reino Unido',
        salario: 3500,
        edad: 35,
        altura: 170,
        peso: 65
    },
])

db.users.insertMany([
    {
        nombres: 'Diego',
        apellidos: 'González',
        correo: 'dgonzalez@gmail.com',
        ciudad: 'Santiago',
        país: 'Chile',
        salario: 2800,
        edad: 25,
        altura: 180,
        peso: 75
    },
    {
        nombres: 'Sofía',
        apellidos: 'Martínez',
        correo: 'smartinez@gmail.com',
        ciudad: 'Buenos Aires',
        país: 'Argentina',
        salario: 3000,
        edad: 28,
        altura: 165,
        peso: 60
    },
    {
        nombres: 'Mateo',
        apellidos: 'Sánchez',
        correo: 'msanchez@gmail.com',
        ciudad: 'Mendoza',
        país: 'Argentina',
        salario: 3200,
        edad: 23,
        altura: 175,
        peso: 70
    },
    {
        nombres: 'Camila',
        apellidos: 'Rodríguez',
        correo: 'crodriguez@gmail.com',
        ciudad: 'Valparaíso',
        país: 'Chile',
        salario: 2900,
        edad: 22,
        altura: 168,
        peso: 65
    },
    {
        nombres: 'Lucas',
        apellidos: 'López',
        correo: 'llopez@gmail.com',
        ciudad: 'Santiago',
        país: 'Chile',
        salario: 3100,
        edad: 26,
        altura: 175,
        peso: 72
    },
    {
        nombres: 'Valentina',
        apellidos: 'Fernández',
        correo: 'vfernandez@gmail.com',
        ciudad: 'Rosario',
        país: 'Argentina',
        salario: 3000,
        edad: 24,
        altura: 170,
        peso: 68
    },
    {
        nombres: 'Sebastián',
        apellidos: 'Gómez',
        correo: 'sgomez@gmail.com',
        ciudad: 'La Serena',
        país: 'Chile',
        salario: 2800,
        edad: 29,
        altura: 180,
        peso: 75
    },
    {
        nombres: 'María',
        apellidos: 'Alvarez',
        correo: 'malvarez@gmail.com',
        ciudad: 'Córdoba',
        país: 'Argentina',
        salario: 2900,
        edad: 27,
        altura: 165,
        peso: 62
    },
    {
        nombres: 'Lucía',
        apellidos: 'Hernández',
        correo: 'lhernandez@gmail.com',
        ciudad: 'Viña del Mar',
        país: 'Chile',
        salario: 3000,
        edad: 30,
        altura: 170,
        peso: 65
    },
    {
        nombres: 'Nicolás',
        apellidos: 'Pérez',
        correo: 'nperez@gmail.com',
        ciudad: 'Mendoza',
        país: 'Argentina',
        salario: 3100,
        edad: 28,
        altura: 178,
        peso: 78
    }
])

// Listo todos los usuarios con sus datos
db.users.find().count;

// Miro la cantidad de usuarios en la colecciòn
db.users.count();


//--------------------------- EJERCICIOS - TALLER  ------------------------------------

//1) Obtener todos los usuarios que sean mayores de 18 años.

db.users.find({edad: {$gte:18}});


// 2) Obtener todos los usuarios que sean de Londres o de París.

db.users.find({ciudad: {$in: ['Londres', 'Parìs']}});   

//3 Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.

db.users.find({salario: {$gte: 2000, $lte: 3000}}); 

//4) Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.

db.users.find({salario: {$gte: 3000}, país: 'España'});

//5) Obtener a todos los usuarios que tengan entre 25 y 35 años.

db.users.find({salario: {$gte: 2500, $lte: 3500}});

//6) Obtener a todos los usuarios que no sean de Estados Unidos.    

db.users.find({país: {$ne: 'Estados Unidos'}}); 

//7) Obtener a todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.

db.users.find({salario: {$gte: 3000, $lte: 5000}, país: 'Francia'});

//8) Obtener a todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.

db.users.find({ país: 'Brasil', $or: [ { peso: { $lt: 120 } }, { peso: { $gt: 140 } } ] });


//9) Obtener a todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
 
db.users.find({ país: { $in: ['Argentina', 'Chile'] }, edad: { $lt: 25 } });


//10) Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.
    
db.users.find({ $or: [ { salario: { $lt: 2000 } }, { edad: { $gt: 40 } } ] });


//11) Obtener a todos los usuarios que no tengan un correo electrónico registrado.

db.users.insertOne(
    {
    nombres: 'Nocorreolio',
    apellidos: 'Pérez',
    ciudad: 'Mendoza',
    país: 'Argentina',
    salario: 4200,
    edad: 58,
    altura: 178,
    peso: 79
}
);

db.users.find( { correo: { $exists: false }}); 

//12) Obtener todos los usuarios que tengan entre 25 y 35 años.

db.users.find( { edad: { $gte: 25, $lte: 35 }} );

//13) Obtener a todos los usuarios que no sean de Estados Unidos.

db.users.find({ país: { $ne: 'Estados Unidos'}});

//14) Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.

db.users.find({ ciudad: 'Londres', $or: [ { salario: { $gt: 2500 } }, { edad: { $gt: 30 } } ] });


//15) Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.

db.users.insertMany([
    {
        nombres: 'Olivia',
        apellidos: 'Smith',
        correo: 'osmith@gmail.com',
        ciudad: 'Sidney',
        país: 'Australia',
        salario: 3200,
        edad: 29,
        altura: 165,
        peso: 142
    },
    {
        nombres: 'Jack',
        apellidos: 'Wilson',
        correo: 'jwilson@gmail.com',
        ciudad: 'Melbourne',
        país: 'Australia',
        salario: 3000,
        edad: 32,
        altura: 180,
        peso: 75
    },
    {
        nombres: 'Chloe',
        apellidos: 'Brown',
        correo: 'cbrown@gmail.com',
        ciudad: 'Brisbane',
        país: 'Australia',
        salario: 3500,
        edad: 28,
        altura: 170,
        peso: 65
    },
    {
        nombres: 'James',
        apellidos: 'Taylor',
        correo: 'jtaylor@gmail.com',
        ciudad: 'Perth',
        país: 'Australia',
        salario: 3300,
        edad: 31,
        altura: 175,
        peso: 70
    },
    {
        nombres: 'Isabella',
        apellidos: 'Jones',
        correo: 'ijones@gmail.com',
        ciudad: 'Adelaida',
        país: 'Australia',
        salario: 3100,
        edad: 27,
        altura: 168,
        peso: 63
    }
]);

db.users.count();
db.users.find();


db.users.find({ país: 'Australia', peso: { $gt: 140}});

db.users.find( { país : 'Australia'});

//16) Obtener a todos los usuarios que no sean de Londres ni de París.

db.users.find({ciudad: {$ne: ['Londres', 'Parìs']}});   

//17) Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.

db.users.find({ $or: [ { salario: { $lt: 2000 } }, { edad: { $gt: 40 } } ] });

//18) Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.

db.users.insertOne(
    {
        nombres: 'Johna',
        apellidos: 'Smitha',
        correo: 'jsmitha@gmail.com',
        ciudad: 'Toronto',
        país: 'Canadà',
        salario: 4300,
        edad: 30,
        altura: 184,
        peso: 75
    }
);

db.users.find({ país: 'Canadà', $or: [ { salario: { $gt: 4000 } }, { altura: { $gt: 180 }}]}); /* NO */


//19) Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.

db.users.insertOne(
    {
        nombres: 'Johnea',
        apellidos: 'Smietha',
        correo: 'jsmithae@gmail.com',
        ciudad: 'Roma',
        país: 'Italia',
        salario: 4300,
        edad: 22,
        altura: 184,
        peso: 75
    }
);

db.users.find({ país: 'Italia', edad: { $gt: 20, $lt: 30}});




/* 


Obtener todos los usuarios que no tengan un correo electrónico registrado.
Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.
Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
Obtener todos los usuarios que sean de India y que no tengan un salario registrado.

*/