// Scope & Hoisting
// Investiguen cual es la diferencia entre declarar una variable 
// con var y directamente asignarle un valor.

// Ejercicio 1
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);  
  console.log(a);
  var f = function(a, b, c) {
    b = a; 
    console.log(b); 
    b = c; 
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);

// Ejercicio 2
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

// Ejercicio 3
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);

// Ejercicio 4

var instructor = "Tony";
console.log(instructor); 
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); 
   }
})();
console.log(instructor); 

// Ejercicio 5
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);

// Coerción de Datos
// Que crees que daran de resultado cada una de estas funciones

6 / "3" 
"2" * "3" 
4 + 5 + "px" 
"$" + 4 + 5 
"4" - 2 
"4px" - 2 
7 / 0 
{}[0] 
parseInt("09") 
5 && 2 
2 && 5 
5 || 0 
0 || 5 
[3]+[3]-[10] 
3>2>1 
// [] == ![]      <----- Resolver comentado ya que tira error 


// Hoisting
// Cual va a ser el output final?
// Ejercicio 1
function test() {
   console.log(a); 
   console.log(foo()); 

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

// Ejercicio 2
var snack = 'Meow Mix';

function getFood(food) {
    
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);

// This
// Cual es el output final
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname; 
      }
   }
};

console.log(obj.prop.getFullname()); 

var test = obj.prop.getFullname; 

console.log(test()); 

// Event Loop
// Cual es el output final
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();