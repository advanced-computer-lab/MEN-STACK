const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlightSchema = new Schema({
  FlightNumber: {
    type: Number,
    required: true,
  },
  From: {
    type: String,
    required: true,
  },
  To: {
    type: String,
    required: true,
  },
  ArrivalTime: {
    type: Date,
    required: false
  },
  DepartureTime: {
    type: Date,
    required: false
  },
  EconomySeatsNo: {
    type: Number,
    required: true,
  },
  BusinessSeatsNo: {
    type: Number,
    required: true
  },
  FirstSeatsNo: {
    type: Number,
    required: true
  },
  AirportDeparture: {
    type: String,
    required: true
  },
  AirportArrival: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    required: false
  },
}, { timestamps: true });
mongoose.models = {}
const Flight = mongoose.model('Flight', FlightSchema);
module.exports = Flight;