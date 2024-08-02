const property = require("../models/propertyModel");

const addProperty = async (req, res) => {
  try {
    const {
      analystName,
      ownerName,
      ownerContactNo,
      ownerAlternateNo,
      locality,
      address,
      spaceType,
      propertyType,
      currenResidenceOfOwner,
      rent,
      concession,
      petsAllowed,
      preference,
      ifBachelors,
      type,
      bhk,
      floor,
      nearestLandmark,
      typeOfWashroom,
      coolingFacility,
      carParking,
      subcriptionAmount,
      commentByAnalyst,
      picturesAndVideos,
      locationLink,
      registrationDate,
    } = req.body;

    const data = {
      analystName,
      ownerName,
      ownerContactNo,
      ownerAlternateNo,
      locality,
      address,
      spaceType,
      propertyType,
      currenResidenceOfOwner,
      rent,
      concession,
      petsAllowed,
      preference,
      ifBachelors,
      type,
      bhk,
      floor,
      nearestLandmark,
      typeOfWashroom,
      coolingFacility,
      carParking,
      subcriptionAmount,
      commentByAnalyst,
      picturesAndVideos,
      locationLink,
      registrationDate,
    };

    const result = await property.create(data);
    console.log(result);
    res.status(200).json("Property has been added");
  } catch (err) {
    console.error(`Error: ${err}`);
    res.status(500).json("Internal server error");
  }
};

module.exports = {
  addProperty,
};
