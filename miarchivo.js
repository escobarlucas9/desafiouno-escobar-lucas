// En este ejercicio use el bucle for donde le pregunto cuantos amigos tiene, con el numero que me da le pregunto el numero de veces que me dijo el nombre de sus amigos

let amigos = parseInt(prompt("¿Cuantos amigos tienes?"));
let nombre_amigos = "";
for (let i = 0; i < amigos; i++) {
   nombre_amigos = prompt("Como se llaman");
    console.log("Tus amigo/a se llama: " + nombre_amigos);
    
}
