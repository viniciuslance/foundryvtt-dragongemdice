Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "twilightrunes", name: "Twilight Runes"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/dragongem/models/twilightrunes/dicemodel_d2.gltf",
		system: "twilightrunes"
	});
		dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/dragongem/models/twilightrunes/dicemodel_d4.gltf",
		system: "twilightrunes"
	});
		dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/dragongem/models/twilightrunes/dicemodel_d6.gltf",
		system: "twilightrunes"
	});
		dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/dragongem/models/twilightrunes/dicemodel_d8.gltf",
		system: "twilightrunes"
	});
		dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/dragongem/models/twilightrunes/dicemodel_d10.gltf",
		system: "twilightrunes"
	});
		dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/dragongem/models/twilightrunes/dicemodel_d100.gltf",
		system: "twilightrunes"
	});
		dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/dragongem/models/twilightrunes/dicemodel_d12.gltf",
		system: "twilightrunes"
	});	
		dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/dragongem/models/twilightrunes/dicemodel_d20.gltf",
		system: "twilightrunes"
	});
});