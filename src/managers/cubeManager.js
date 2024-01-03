const cubes = [];

exports.getCubes = () => cubes.slice();
exports.create = (cubeData) => {
    const currentCube = {
        id: cubes.length + 1,
        ...cubeData
    };

    cubes.push(currentCube);
    return currentCube;
};