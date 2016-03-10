var predator = (function() {
  var carnivore = []
  var herbivore = []
return {
  loadPred: function(func) {
    var carn = new XMLHttpRequest();
    carn.addEventListener("load", func);
    carn.open("GET", "carnivore.json");
    carn.send();
  },
  loadHerb: function(func) {
    var herb = new XMLHttpRequest();
    herb.addEventListener("load", func);
    herb.open("GET", "herbivore.json");
    herb.send();
  },
  onPred: function() {
    var carnivores = JSON.parse(this.responseText)
    for (i in carnivores.carnivores) {
      carnivore[i] = carnivores.carnivores[i]
    }
    showCarn()
  },
  getPreds: function() {
    return carnivore
  },
  onHerb: function() {
    var herbivores = JSON.parse(this.responseText)
    for (i in herbivores.herbivores) {
      herbivore[i] = herbivores.herbivores[i]
    }
    showHerb()
  },
  getHerb: function() {
    return herbivore
  }
}

}())