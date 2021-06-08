Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "dragongem", name: "Dragon Gem"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/dragongem/models/wcube_d2.glb",
		system: "dragongem"
	});
		dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/dragongem/models/wcube_d4.glb",
		system: "dragongem"
	});
		dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/dragongem/models/wcube_d6.glb",
		system: "dragongem"
	});
		dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/dragongem/models/wcube_d8.glb",
		system: "dragongem"
	});
		dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/dragongem/models/wcube_d10.glb",
		system: "dragongem"
	});
		dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/dragongem/models/wcube_d100.glb",
		system: "dragongem"
	});
		dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/dragongem/models/wcube_d12.glb",
		system: "dragongem"
	});	
		dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/dragongem/models/DragonGem_d20.glb",
		system: "dragongem"
	});
});