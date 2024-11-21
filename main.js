let VnomeUsuario = "";
let elemento = document.querySelector("#nome-usuario");


while(VnomeUsuario == "")
      {VnomeUsuario = prompt("qual é o seu nome ?");
}
if(VnomeUsuario == null){
elemento.textContent = "seja muito bem vindo" ;
} else {elemento.textContent = VnomeUsuario;}
