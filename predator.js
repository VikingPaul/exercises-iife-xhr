var predator = (function() {
  var carnivore = []
  var herbivore = []



return {
  onPred: function() {
    var carnivores = JSON.parse(this.responseText)
    for (i in carnivores.carnivores) {
      carnivore[i] = carnivores.carnivores[i]
    }
    carni()
  },
  getPreds: function() {
    return carnivore
  },
  onHerb: function() {
    var herbivores = JSON.parse(this.responseText)
    for (i in herbivores.herbivores) {
      herbivore[i] = herbivores.herbivores[i]
    }
    herbi()
  },
  getHerb: function() {
    return herbivore
  }
}

}())

function carni() {
  var fuckThis = predator.getPreds()
  for (i in fuckThis) {
    document.getElementById('carnivore').innerHTML += `<h3>${fuckThis[i]}</h3>`
  };
}
function herbi() {
  var fuckThis = predator.getHerb()
  for (i in fuckThis) {
    document.getElementById('herbivore').innerHTML += `<h3>${fuckThis[i]}</h3>`
  };
}