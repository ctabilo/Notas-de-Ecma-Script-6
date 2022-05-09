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

    const listofnames3 = (names.name, names.age) => {console.log("mi nombre y mi edad es: " names.name + " " + names.age )}; //NO RESULTA ASÍ

    const DOBLE = numero => numero * numero;


}

//PROMESAS

const hellopromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }

    });
}

hellopromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));

// CLASES

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(6,1000000));

// IMPORTAR MODULOS
import { hello } from './modulo';

hello();

//GENERADORES / funcion especial que retorna valores segun el algoritmo definido

function* helloworld() {
// el asterisco es para indicar que la funcion es un generador
    if (true) {
        yield 'hello, ';
    }
    if (true) {
        yield 'world';
    }

};

const generatorHello = helloworld();
console.log(generatorHello.next().value); //llama el primer valor
console.log(generatorHello.next().value); //llama el segundo valor
console.log(generatorHello.next().value); // llama un tercer valor que no existe y por eso el resultado es undefined


//ES7

//INCLUDES

let numbers = [1,2,3,4,5,6,7,8];
if (numbers.includes(7)) {
    console.log('Si se encuentra el valor 7');
} else {
    console.log('No se encuentra el valor 7');
}

// eleva a la potencia

let base = 4;
let exponente = 3;
let result = base ** exponente;
console.log(result);


//ES8

//objetct.entries extrae los datos dentro de una matriz

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

let entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// //resultado
// [ [ 'frontend', 'Oscar' ],
//   [ 'backend', 'Isabel' ],
//   [ 'design', 'Ana' ] ]
// 3


// OBJECT.VALUES
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const values = Object.values(data);
console.log(values);

// resultado: [ 'Oscar', 'Isabel', 'Ana' ]

//PADDING / sirve para rellenar adelante o atras del texto con los caracteres seleccionados y la cantidad elegida

const string = 'helo';
console.log(string.padStart(10, 'hi '));
console.log(string.padEnd(12, '##**'));

// RESULTADO
// hi hi helo
// helo##**##**

//ASYNC Y AWAIT 

const helloworld = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloworld();
    console.log(hello);
}

helloAsync();

const anotherfunction = async () => {
    try {
        const hello = await helloworld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherfunction();

// Async Await
const prepareIceCream = (money) => {
    return new Promise((resolve, reject) => {
        if(money >= 500) {    
            console.log('We are preparing your Ice cream...')
            setTimeout(() => {
                resolve('Here you are a Chocolate Ice cream');
            }, 6000);  //3. Si el dinero que ingresaste es mayor o igual a 500, entonces te preparamos el helado. El proceso toma 6 segundos.
        } else {
            reject('Sorry! You do not have enough money :('); //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
        }
    });
}

const buyIceCream = async (money) => { 
    try{
        console.log('Welcome to Ice Cream World!');
        const result = await prepareIceCream(money); //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado 
        console.log(result); //4. Imprimimos tu pedido! si todo salió bien.
        console.log('Thanks for your purchase!');
    } catch(e) {
        console.log(e); //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
    }
}

buyIceCream(500); //1. llamas a la funcion comprar helado e Ingresas el dinero


// ES9

//operador de reposo

const obj = {
    name: 'Cristian',
    age: 39,
    country: 'CL'    
};

// let {name, ...all} = obj;  //estrae los otros valores de un objeto
// console.log(all);

let {country, ...all} = obj;
console.log(all);

const obj = {
    name: 'Cristian',
    age: 39,
};

const obj1 = {
    ...obj,
    country: 'CL',
};

console.log(obj1);

