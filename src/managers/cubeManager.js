const cubes = [];

exports.getCubes = () => cubes.slice();

exports.getOne = (id) => cubes.find(x => x.id == id)

exports.create = (cubeData) => {
    const currentCube = {
        id: cubes.length + 1,
        ...cubeData
    };

    cubes.push(currentCube);
    return currentCube;
};