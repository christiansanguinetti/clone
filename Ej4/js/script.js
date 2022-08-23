const DATA = [
  { name: "Juan", lastname: "Perez" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Gian", lastname: "Laic" },
  { name: "Fernando", lastname: "Saavedra" },
];

// Escribe el código necesario aquí
 function crearparrafo(text){
  let container = document.getElementById('container');
  container.innerHTML =+ "<p>"+ text +"</p>";
 }

 for( let persona of DATA){
  crearparrafo(persona.name+ " " + persona.lastname);
 }
//
