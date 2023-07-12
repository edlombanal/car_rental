const { Schema, model } = require("mongoose");
const Car = require("./car");
const User = require("./user");

const reservationSchema = new Schema(
  {
    reservedCar: {
      type: mongoose.Schema.type.ObjectID,
      ref: "Car",
      required: [true, "Please enter the vehicle's license plate."],
    },
    customer: {
      type: mongoose.Schema.type.ObjectID,
      ref: "User",
      required: [true, "Please enter your name."],
    },
    startDate: {
      type: Date,
      required: [true, "Please enter your reservation's start date."],
    },
    endDate: {
      type: Date,
      required: [true, "Please enter your reservation's end date."],
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: { createdAt: "creationDate", updatedAt: "lastUpdate" },
  }
);

const Reservation = model("Reservation", reservationSchema);
module.exports = Reservation;
