Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "silvercrystal", name: "Silver Crystal"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/dragongem/models/silvercrystal/dicemodel_d2.gltf",
		system: "silvercrystal"
	});
		dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/dragongem/models/silvercrystal/dicemodel_d4.gltf",
		system: "silvercrystal"
	});
		dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/dragongem/models/silvercrystal/dicemodel_d6.gltf",
		system: "silvercrystal"
	});
		dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/dragongem/models/silvercrystal/dicemodel_d8.gltf",
		system: "silvercrystal"
	});
		dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/dragongem/models/silvercrystal/dicemodel_d10.gltf",
		system: "silvercrystal"
	});
		dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/dragongem/models/silvercrystal/dicemodel_d100.gltf",
		system: "silvercrystal"
	});
		dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/dragongem/models/silvercrystal/dicemodel_d12.gltf",
		system: "silvercrystal"
	});	
		dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/dragongem/models/silvercrystal/dicemodel_d20.gltf",
		system: "silvercrystal"
	});
});