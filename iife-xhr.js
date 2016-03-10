function showHerb() {
  var das = predator.getHerb()
  for (i in das) {
    document.getElementById("herbivore").innerHTML += `<h3>${das[i]}</h3>`
  };
}
function showCarn() {
  var das = predator.getPreds()
  for (i in das) {
    document.getElementById("carnivore").innerHTML += `<h3>${das[i]}</h3>`
  };
}
predator.loadPred(predator.onPred)
predator.loadHerb(predator.onHerb)