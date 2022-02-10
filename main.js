var images = [];
images["El Duko"] = "duko.png";
images["Gabon"] = "gabo.png";
images["The Rich Shop"] = "richard.png";
images["Mau"] = "mau.png";
images["Lili"] = "lili.png";

var deck = [];
deck.push(new Venemon("El Duko", 100, 30, 60, "medio", 3));
deck.push(new Venemon("Gabon", 80, 50, 60, "fast", 3));
deck.push(new Venemon("The Rich Shop", 120, 40, 60, "slow", 3));
deck.push(new Venemon("Mau", 120, 40, 60, "medio", 3));
deck.push(new Venemon("Lili", 120, 40, 60, "medio", 3));


var buttonSelectVenemon;
for(var venemon of deck)
{
  venemon.show();
  buttonSelectVenemon = document.getElementById(venemon.name);
  buttonSelectVenemon.addEventListener("click", selectVenemon);
}

function selectVenemon(evento)
{
  alert("LEST GO!" + "\n" + "You've choosen: " + evento.target.id);
}