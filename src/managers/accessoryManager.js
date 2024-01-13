const Accessory = require('../models/Accessory');

exports.createAccessory = (accessoryData) => Accessory.create(accessoryData);