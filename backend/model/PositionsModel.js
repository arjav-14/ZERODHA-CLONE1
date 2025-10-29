const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/PositionsSchema");

const PositionsModel = model("Positions", PositionsSchema, "positions");

module.exports = { PositionsModel };