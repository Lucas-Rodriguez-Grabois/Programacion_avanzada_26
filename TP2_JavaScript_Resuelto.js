/* ==========================================================
   TP2 - Ejercitacion JavaScript - 2026
   Programacion Avanzada - Introduccion a JavaScript
   Resolucion completa de los 4 bloques de ejercicios
   ========================================================== */


/* ============================================================
   BLOQUE 01 - EJERCICIOS SOBRE OBJETOS
   ============================================================ */

// Ejercicio 01-1: Crear un objeto "libro" con propiedades titulo, autor
// y anioDePublicacion. Imprimir cada propiedad en la consola.
const libro = {
  titulo: "Cien anios de soledad",
  autor: "Gabriel Garcia Marquez",
  anioDePublicacion: 1967
};
console.log(libro.titulo);
console.log(libro.autor);
console.log(libro.anioDePublicacion);


// Ejercicio 01-2: Crear un objeto "estudiante" con nombre, edad y direccion
// (direccion es otro objeto con calle, ciudad y pais). Imprimir la direccion completa.
const estudiante = {
  nombre: "Juan Perez",
  edad: 21,
  direccion: {
    calle: "Av. Siempre Viva 123",
    ciudad: "Concepcion del Uruguay",
    pais: "Argentina"
  }
};
console.log(
  `${estudiante.direccion.calle}, ${estudiante.direccion.ciudad}, ${estudiante.direccion.pais}`
);


// Ejercicio 01-3: Aniadir un metodo "descripcion" al objeto "libro" que devuelva
// una cadena describiendo el titulo y el autor. Invocarlo e imprimir el resultado.
libro.descripcion = function () {
  return `${this.titulo}, escrito por ${this.autor}`;
};
console.log(libro.descripcion());


// Ejercicio 01-4: Crear un objeto "producto" con nombre, precio y disponible.
// Usar un bucle for...in para imprimir todas las propiedades y sus valores.
const producto = {
  nombre: "Notebook",
  precio: 850000,
  disponible: true
};
for (const clave in producto) {
  console.log(`${clave}: ${producto[clave]}`);
}


// Ejercicio 01-5: Modificar el valor de la propiedad "precio" del objeto "producto"
// y luego imprimir el objeto completo para verificar el cambio.
producto.precio = 799999;
console.log(producto);


// Ejercicio 01-6: Crear una funcion "tienePropiedad" que tome un objeto y una
// cadena, y devuelva true si el objeto tiene esa propiedad, o false si no.
function tienePropiedad(obj, propiedad) {
  return obj.hasOwnProperty(propiedad);
}
console.log(tienePropiedad(producto, "precio")); // true
console.log(tienePropiedad(producto, "marca")); // false


// Ejercicio 01-7: Eliminar la propiedad "disponible" del objeto "producto".
// Imprimir el objeto antes y despues de eliminar la propiedad.
console.log("Antes de eliminar:", producto);
delete producto.disponible;
console.log("Despues de eliminar:", producto);


// Ejercicio 01-8: Usar Object.assign para combinar dos objetos, persona1 y
// persona2, en un nuevo objeto. Imprimir el resultado.
const persona1 = { nombre: "Ana", edad: 30 };
const persona2 = { ciudad: "Parana", pais: "Argentina" };
const personaCombinada = Object.assign({}, persona1, persona2);
console.log(personaCombinada);


// Ejercicio 01-9: Crear una copia profunda del objeto "estudiante" usando
// JSON.parse y JSON.stringify. Modificar la copia y verificar que el original
// no se haya alterado.
const copiaEstudiante = JSON.parse(JSON.stringify(estudiante));
copiaEstudiante.nombre = "Otro Nombre";
copiaEstudiante.direccion.ciudad = "Buenos Aires";
console.log("Original:", estudiante);
console.log("Copia modificada:", copiaEstudiante);


// Ejercicio 01-10: Aniadir un getter y un setter al objeto "libro" para la
// propiedad anioDePublicacion. Usar el setter para actualizar el anio y el
// getter para leerlo.
const libroConGetterSetter = {
  titulo: "El Aleph",
  autor: "Jorge Luis Borges",
  _anioDePublicacion: 1949,
  get anioDePublicacion() {
    return this._anioDePublicacion;
  },
  set anioDePublicacion(nuevoAnio) {
    this._anioDePublicacion = nuevoAnio;
  }
};
libroConGetterSetter.anioDePublicacion = 1949;
console.log(libroConGetterSetter.anioDePublicacion);


/* ============================================================
   BLOQUE 02 - EJERCICIOS SOBRE FUNCIONES
   ============================================================ */

// Ejercicio 02-1: Crear una funcion "sumar" que tome dos numeros y devuelva
// su suma. Probarla con diferentes numeros.
function sumar(a, b) {
  return a + b;
}
console.log(sumar(2, 3));
console.log(sumar(10, -5));


// Ejercicio 02-2: Crear una funcion "multiplicar" que tome dos numeros y
// devuelva su producto. Probarla con diferentes valores.
function multiplicar(a, b) {
  return a * b;
}
console.log(multiplicar(4, 5));
console.log(multiplicar(-2, 6));


// Ejercicio 02-3: Crear una funcion "saludar" con un parametro "nombre" con
// valor por defecto "Invitado". Debe devolver "Hola, [nombre]".
function saludar(nombre = "Invitado") {
  return `Hola, ${nombre}`;
}
console.log(saludar());
console.log(saludar("Maria"));


// Ejercicio 02-4: Crear una funcion "crearPersona" que tome nombre y edad
// como parametros y devuelva un objeto con esas propiedades.
function crearPersona(nombre, edad) {
  return { nombre, edad };
}
console.log(crearPersona("Lucas", 25));


// Ejercicio 02-5: Crear una funcion "actualizarEdad" que tome un objeto
// "persona" y un numero "nuevaEdad", y actualice la propiedad edad del objeto.
function actualizarEdad(persona, nuevaEdad) {
  persona.edad = nuevaEdad;
  return persona;
}
const per = crearPersona("Lucas", 25);
console.log(actualizarEdad(per, 26));


// Ejercicio 02-6: Crear una funcion recursiva "factorial" que calcule el
// factorial de un numero dado.
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120


// Ejercicio 02-7: Crear una funcion "despedir" que contenga una funcion
// interna "adios". "despedir" debe devolver el resultado de llamar a "adios".
function despedir() {
  function adios() {
    return "Adios!";
  }
  return adios();
}
console.log(despedir());


// Ejercicio 02-8: Crear una funcion "procesarArray" que tome un array y una
// funcion como parametros, y aplique la funcion a cada elemento del array.
// Usar una funcion como parametro para multiplicar cada numero por 2.
function procesarArray(arr, fn) {
  return arr.map(fn);
}
console.log(procesarArray([1, 2, 3, 4], (num) => num * 2));


// Ejercicio 02-9: Crear una funcion "crearMultiplicador" que tome un numero x
// y devuelva una nueva funcion que multiplique cualquier numero por x.
function crearMultiplicador(x) {
  return function (numero) {
    return numero * x;
  };
}
const multiplicarPor3 = crearMultiplicador(3);
console.log(multiplicarPor3(10)); // 30


// Ejercicio 02-10: Crear una funcion anonima que sume dos numeros y
// asignarla a una variable "sumarAnonima". Invocarla a traves de esa variable.
const sumarAnonima = function (a, b) {
  return a + b;
};
console.log(sumarAnonima(7, 8));


/* ============================================================
   BLOQUE 03 - EJERCICIOS SOBRE FUNCIONES (CONSUMO DE DATOS,
   MAPEO DE INFORMACION, AUTENTICACION DE USUARIOS)
   ============================================================ */

// Ejercicio 03-1: Crear una funcion "obtenerUsuarios" que haga una peticion
// HTTP a la API https://jsonplaceholder.typicode.com/users usando fetch.
// Imprimir en la consola la lista de usuarios obtenida.
async function obtenerUsuarios() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await respuesta.json();
  console.log(usuarios);
  return usuarios;
}
// obtenerUsuarios();


// Ejercicio 03-2: Usando "obtenerUsuarios", crear otra funcion
// "imprimirNombresDeUsuarios" que filtre y muestre solo los nombres.
async function imprimirNombresDeUsuarios() {
  const usuarios = await obtenerUsuarios();
  const nombres = usuarios.map((u) => u.name);
  console.log(nombres);
  return nombres;
}
// imprimirNombresDeUsuarios();


// Ejercicio 03-3: Crear una funcion "autenticarUsuario" que tome un objeto
// "credenciales" con usuario y contrasenia, y verifique si coinciden con un
// usuario predefinido. Devuelve true si es exitosa, false en caso contrario.
const usuarioPredefinido = { usuario: "admin", contrasenia: "1234" };
function autenticarUsuario(credenciales) {
  return (
    credenciales.usuario === usuarioPredefinido.usuario &&
    credenciales.contrasenia === usuarioPredefinido.contrasenia
  );
}
console.log(autenticarUsuario({ usuario: "admin", contrasenia: "1234" })); // true
console.log(autenticarUsuario({ usuario: "admin", contrasenia: "otra" })); // false


// Ejercicio 03-4: Crear una funcion "mapearUsuarios" que tome un array de
// usuarios obtenidos de la API y devuelva un nuevo array con solo las
// propiedades nombre y email de cada usuario.
function mapearUsuarios(usuarios) {
  return usuarios.map((u) => ({ nombre: u.name, email: u.email }));
}
// mapearUsuarios(await obtenerUsuarios());


// Ejercicio 03-5: Crear una funcion "validarFormulario" que tome un objeto con
// los campos nombre, email y password. Debe devolver true si todos los campos
// estan presentes y no estan vacios, y false en caso contrario.
function validarFormulario(formulario) {
  return ["nombre", "email", "password"].every(
    (campo) => formulario[campo] && formulario[campo].trim() !== ""
  );
}
console.log(
  validarFormulario({ nombre: "Ana", email: "ana@mail.com", password: "abc123" })
); // true
console.log(validarFormulario({ nombre: "", email: "ana@mail.com", password: "" })); // false


// Ejercicio 03-6: Crear una funcion "obtenerPagina" que tome un array de
// datos y un numero de pagina. Debe devolver los elementos correspondientes
// a esa pagina, asumiendo que cada pagina tiene 5 elementos.
function obtenerPagina(datos, numeroPagina) {
  const elementosPorPagina = 5;
  const inicio = (numeroPagina - 1) * elementosPorPagina;
  return datos.slice(inicio, inicio + elementosPorPagina);
}
const datosEjemplo = Array.from({ length: 12 }, (_, i) => i + 1);
console.log(obtenerPagina(datosEjemplo, 2)); // [6, 7, 8, 9, 10]


// Ejercicio 03-7: Crear una funcion "enviarDatos" que tome un objeto "data" y
// haga una peticion POST a https://jsonplaceholder.typicode.com/posts.
// Debe imprimir la respuesta de la API.
async function enviarDatos(data) {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  const resultado = await respuesta.json();
  console.log(resultado);
  return resultado;
}
// enviarDatos({ titulo: "Prueba", contenido: "Contenido de prueba" });


// Ejercicio 03-8: Crear una funcion "buscarUsuarioPorEmail" que tome un array
// de usuarios y un email, y devuelva el usuario que coincida con ese email.
// Usar el metodo find.
function buscarUsuarioPorEmail(usuarios, email) {
  return usuarios.find((u) => u.email === email);
}
const listaUsuarios = [
  { nombre: "Ana", email: "ana@mail.com" },
  { nombre: "Luis", email: "luis@mail.com" }
];
console.log(buscarUsuarioPorEmail(listaUsuarios, "luis@mail.com"));


// Ejercicio 03-9: Crear una funcion "generarToken" que tome un objeto usuario
// y devuelva un token JWT simulado como una cadena, usando btoa (Base64).
function generarToken(usuario) {
  return btoa(JSON.stringify(usuario));
}
console.log(generarToken({ usuario: "admin", rol: "administrador" }));


// Ejercicio 03-10: Crear una funcion "actualizarUsuario" que tome un objeto
// usuario y una lista de cambios a aplicar. Debe retornar el usuario con las
// propiedades actualizadas.
function actualizarUsuario(usuario, cambios) {
  return { ...usuario, ...cambios };
}
console.log(
  actualizarUsuario({ nombre: "Ana", edad: 30 }, { edad: 31, ciudad: "Rosario" })
);


/* ============================================================
   BLOQUE 04 - EJERCICIOS SOBRE OPERACIONES CON ARRAYS
   ============================================================ */

// Ejercicio 04-1: Crear un array "frutas" con ["manzana", "banana", "pera"].
// Usar push para agregar una fruta al final, y pop para eliminar la ultima.
const frutas = ["manzana", "banana", "pera"];
frutas.push("naranja");
console.log(frutas); // ["manzana", "banana", "pera", "naranja"]
frutas.pop();
console.log(frutas); // ["manzana", "banana", "pera"]


// Ejercicio 04-2: Crear un array bidimensional "matriz" con
// [[1,2,3],[4,5,6],[7,8,9]]. Acceder al elemento 5 e imprimirlo.
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matriz[1][1]); // 5


// Ejercicio 04-3: Usar un bucle for para iterar sobre el array "frutas" e
// imprimir cada elemento.
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}


// Ejercicio 04-4: Crear una funcion "elevarAlCuadrado" que tome un array de
// numeros y devuelva un nuevo array con cada numero elevado al cuadrado.
// Usar map.
function elevarAlCuadrado(numeros) {
  return numeros.map((n) => n ** 2);
}
console.log(elevarAlCuadrado([1, 2, 3, 4])); // [1, 4, 9, 16]


// Ejercicio 04-5: Crear una funcion "filtrarMayoresDe" que tome un array de
// numeros y un valor de referencia, y devuelva un nuevo array solo con los
// numeros mayores que ese valor. Usar filter.
function filtrarMayoresDe(numeros, valor) {
  return numeros.filter((n) => n > valor);
}
console.log(filtrarMayoresDe([3, 8, 1, 12, 6], 5)); // [8, 12, 6]


// Ejercicio 04-6: Crear una funcion "sumarElementos" que tome un array de
// numeros y devuelva la suma de todos los elementos usando reduce.
function sumarElementos(numeros) {
  return numeros.reduce((acumulador, actual) => acumulador + actual, 0);
}
console.log(sumarElementos([1, 2, 3, 4, 5])); // 15


// Ejercicio 04-7: Crear un array de numeros "numeros" y usar some para
// verificar si algun numero es mayor que 10.
const numeros = [2, 5, 11, 4];
console.log(numeros.some((n) => n > 10)); // true


// Ejercicio 04-8: Crear un array de numeros "numeros" y usar every para
// verificar si todos los numeros son positivos.
console.log(numeros.every((n) => n > 0)); // true


// Ejercicio 04-9: Crear un array de objetos "personas" donde cada objeto
// tenga nombre y edad. Usar find para encontrar a la primera persona mayor
// de 30 anios.
const personas = [
  { nombre: "Carlos", edad: 28 },
  { nombre: "Marta", edad: 35 },
  { nombre: "Sofia", edad: 40 }
];
console.log(personas.find((p) => p.edad > 30)); // { nombre: "Marta", edad: 35 }


// Ejercicio 04-10: Crear un array de palabras y ordenarlo alfabeticamente
// usando sort.
const palabras = ["banana", "manzana", "pera", "arandano"];
console.log(palabras.sort()); // ["arandano", "banana", "manzana", "pera"]
