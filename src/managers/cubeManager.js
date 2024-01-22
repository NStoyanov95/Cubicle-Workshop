
const Cube = require('../models/Cube');

exports.getCubes = async (search, from, to) => {
    let filteredCubes = await Cube.find().lean();

    //TODO: Make mongoose search
    if (search) {
        filteredCubes = filteredCubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        filteredCubes = filteredCubes.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        filteredCubes = filteredCubes.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return filteredCubes;
};

exports.getOne = (id) => Cube.findById(id).populate('accessories');
exports.create = (cubeData) => Cube.create(cubeData);

exports.attachAccessory = async (cubeId, accessoryId) => {

    const cube = await Cube.findById(cubeId);
    cube.accessories.push(accessoryId);

    await cube.save();

};
exports.update = (id, cubeData) => Cube.findByIdAndUpdate(id, cubeData);