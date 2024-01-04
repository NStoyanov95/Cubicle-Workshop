const uniqid = require('uniqid');

const cubes = [];

exports.getCubes = (search, from, to) => {
    let filteredCubes = cubes.slice();

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

exports.getOne = (id) => cubes.find(x => x.id == id);

exports.create = (cubeData) => {
    const currentCube = {
        id: uniqid(),
        ...cubeData
    };

    cubes.push(currentCube);
    return currentCube;
};