const engineerModel = require("../models/engineerModel");
const getEngineerInfoController = async (req, res) => {
  try {
    const engineer = await engineerModel.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: "engineer data fetch success ",
      data: engineer,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in fetching engineer details",
    });
  }
};

//update doc profile
const updateProfileController = async (req, res) => {
  try {
    const engineer = await engineerModel.findOneAndUpdate({
      userId: req.body.userId
    }, req.body)
    res.status(201).send({
      success: true,
      message:'Engineer Profile Updated',
      data:engineer,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Engineer Profile Update Issue",
      error,
    });
  }
};

module.exports = { getEngineerInfoController, updateProfileController };
