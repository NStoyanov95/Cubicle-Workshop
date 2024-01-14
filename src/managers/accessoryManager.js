const Accessory = require('../models/Accessory');

exports.getAll = () => Accessory.find();

exports.createAccessory = (accessoryData) => Accessory.create(accessoryData);

exports.getAvailable = (accessoriesArr) => Accessory.find({ _id: { $nin: accessoriesArr } })