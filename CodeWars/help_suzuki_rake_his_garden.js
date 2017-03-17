function rakeGarden(garden) {
  var rakedGarden;
	garden = garden.split(" ")
	rakedGarden = garden.map((v) => v == "rock" || v == "gravel" ? v : "gravel");
 	return rakedGarden.join(" ")
}