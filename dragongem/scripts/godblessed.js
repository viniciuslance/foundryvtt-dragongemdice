Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "godblessed", name: "God Blessed"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/dragongem/models/godblessed/dicemodel_d2.gltf",
		system: "godblessed"
	});
		dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/dragongem/models/godblessed/dicemodel_d4.gltf",
		system: "godblessed"
	});
		dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/dragongem/models/godblessed/dicemodel_d6.gltf",
		system: "godblessed"
	});
		dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/dragongem/models/godblessed/dicemodel_d8.gltf",
		system: "godblessed"
	});
		dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/dragongem/models/godblessed/dicemodel_d10.gltf",
		system: "godblessed"
	});
		dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/dragongem/models/godblessed/dicemodel_d100.gltf",
		system: "godblessed"
	});
		dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/dragongem/models/godblessed/dicemodel_d12.gltf",
		system: "godblessed"
	});	
		dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/dragongem/models/godblessed/dicemodel_d20.gltf",
		system: "godblessed"
	});
});