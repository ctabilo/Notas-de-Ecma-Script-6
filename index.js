//ASIGNAR VALORES POR DEFECTO EN UNA FUNCIÓN

function newFunction(name, age, country) {
    var name = name || 'Oscar'; // || Se usa para la oparacion OR, o sea ni no enviaban parametros a la función se asignaba ese valor.
    var age = age || 32;
    var country = country || 'CL';
    console.log(name, age, country);
}

newFunction();

// ES6

function newFunction2(name='Oscar', age=32, country='Co') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Cristian', 38, 'CL');

// Concatenar textos
let a = 'Hello';
let b = 'World';
let fraseepica = a + ' ' + b;
console.log(fraseepica);

//ES6
let fraseepica2 = `${a} ${b}`; //se usan con el acento inverso 
console.log(fraseepica2);

//COMO HACER MULTILINEAS EN JAVASCRIPT ANTES
let fraseconlineas = "esta es la primera linea \n" + "y esta es la segunda linea";
console.log(fraseconlineas);

//ES6
let fraseconlineas2 = `esta es la primera linea
y esta es la segunda linea`;
console.log(fraseconlineas2);

let a = 'mi nombre es Cristian';
let b = 'vivo en Chile';
let c = 'tengo 39 años';
let fraseconlineas3 = `${a}
${b}
${c}`;
console.log(fraseconlineas3);

//Desestructuración de objetos

let person = {
    'name' : 'Cristian',
    'age' : 39,
    'country' : 'CL'
}

console.log(person.name , person.age, person.country);

//ES6
{
let {name, age , country} = person;
console.log( age, country, name);
}

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria' , 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2]; //los puntos suspensivos(...) sirven para copiar el array completo

console.log(education);

//la diferencia entre VAR y LET es que var es global y let solo en el bloque de código en el que se encuentra

//propiedad de objetos mejoradas
{
let name = 'Cristian';
let age = 39;

//creación de objetos antes

let obj = {name : name, age : age};
console.log(obj);

//ES 6
let obj2 = {name, age};
console.log(obj2);

}

//ARROW FUNCTION =>
{
    const names = [
        {name: 'Cristian', age: 39},
        {name: 'Oscar' , age: 32}
    ]

    //ANTES

    let listofnames = names.map(function(item) {
        console.log(item.name);
    });

    //ES 6
    let listofnames2 = names.map(item => console.log(item.name));


}
