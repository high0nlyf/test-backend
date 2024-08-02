const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  analystName: {
    type: String,
  },
  ownerName: {
    type: String,
  },
  ownerContactNo: {
    type: Number,
  },
  ownerAlternateNo: {
    type: Number,
  },
  locality: {
    type: String,
  },
  address: {
    type: String,
  },
  spaceType: {
    type: String,
    enum: ["Commercial", "Residential"],
  },
  propertyType: {
    type: String,
    enum: ["House", "Flat", "PG", "Office", "Shop"],
  },
  currentResidenceOfOwner: {
    type: String,
    enum: ["Same City", "Same Place", "Different City"],
  },
  rent: {
    type: Number,
  },
  concession: {
    type: Boolean,
  },
  petAllowed: {
    type: Boolean,
  },
  preference: {
    type: String,
    enum: ["Bachelors", "Family", "Any"],
  },
  ifBachelors: {
    type: String,
    enum: ["Male", "Female", "Others"],
  },
  type: {
    type: String,
    enum: ["Non-Furnished", "Semi-Furnished", "Fully-Furnished"],
  },
  bhk: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
  },
  floor: {
    type: String,
    enum: ["Ground", "1st", "2nd", "3rd", "4th", "5th"],
  },
  nearestLandmark: {
    type: String,
  },
  typeOfWashroom: {
    type: String,
    enum: ["Western", "Indian", "Both"],
  },
  coolingFacility: {
    type: String,
    enum: ["AC", "Fan", "Cooler"],
  },
  carParking: {
    type: Boolean,
  },
  subscriptionAmount: {
    type: Number,
  },
  commentByAnalyst: {
    type: String,
  },
  picturesAndVideos: {
    type: [],
  },
  locationLink: {
    type: String,
  },
  registrationDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Property", propertySchema);
