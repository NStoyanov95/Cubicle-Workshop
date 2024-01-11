
const Cube = require('../models/Cube');

exports.getCubes = async (search, from, to) => {
    let filteredCubes = await Cube.find().lean(); 

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

exports.getOne = (id) => Cube.findById(id);

exports.create = async (cubeData) => {
    const cube = await Cube.create(cubeData)

    return cube;
};