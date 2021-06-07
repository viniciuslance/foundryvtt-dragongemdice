Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "dragongem", name: "Dragon Gem"}, false);
	
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/dragongem/models/gem_d20.glb",
		system: "dragongem"
	});
});