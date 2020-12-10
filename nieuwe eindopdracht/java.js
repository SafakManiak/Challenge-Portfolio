alert("welkom op mijn website");
var persoon = {
    voornaam : prompt("Wat is je voornaam?"),
    achternaam : prompt("Wat is je achternaam?"),
    leeftijd : prompt("Wat is je leeftijd?"),

   };



   
   document.querySelector("#koptext").innerHTML = "welkom" + " " + persoon.voornaam + " " + persoon.achternaam;
   document.querySelector("#voornaam").innerHTML = persoon.voornaam;
document.querySelector("#achternaam").innerHTML = persoon.achternaam;
document.querySelector("#leeftijd").innerHTML = persoon.leeftijd;



if(persoon.leeftijd == 16){
    index.querySelector("body").style.backgroundColor = 'orange';
  
}
if(persoon.leeftijd == 17){
    document.querySelector("body").style.backgroundColor = 'blue';
   ;
}
if(persoon.leeftijd == 18){
    document.querySelector("body").style.backgroundColor = 'gold';
    
}
if(persoon.leeftijd == 19){
    document.querySelector("body").style.backgroundColor = 'green';

}
if(persoon.leeftijd == null){
    document.querySelector("body").style.backgroundColor = 'red';
 
}