Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "dragongem", name: "Dragon Gem"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/dragongem/models/DragonGem_d2.gltf",
		system: "dragongem"
	});
		dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/dragongem/models/DragonGem_d4.gltf",
		system: "dragongem"
	});
		dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/dragongem/models/DragonGem_d6.gltf",
		system: "dragongem"
	});
		dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/dragongem/models/DragonGem_d8.gltf",
		system: "dragongem"
	});
		dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/dragongem/models/DragonGem_d10.gltf",
		system: "dragongem"
	});
		dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/dragongem/models/DragonGem_d100.gltf",
		system: "dragongem"
	});
		dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/dragongem/models/DragonGem_d12.gltf",
		system: "dragongem"
	});	
		dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/dragongem/models/DragonGem_d20.gltf",
		system: "dragongem"
	});
});