const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory',
    }]
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;