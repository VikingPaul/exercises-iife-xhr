var carn = new XMLHttpRequest();
carn.addEventListener("load", predator.onPred);
carn.open("GET", "carnivore.json");
carn.send();

var herb = new XMLHttpRequest();
herb.addEventListener("load", predator.onHerb);
herb.open("GET", "herbivore.json");
herb.send();

