
const mongoose = require("mongoose");


//--------------------------------------------------------------------//

const isValid = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};

const isValidBody = function (data) {
  return Object.keys(data).length > 0;
};


let alphabetTestOfString = function (value) {
  let regex = /^[A-Za-z ]+$/;
  if (!regex.test(value)) {
    return false;
  }
  return true;
};



const isValid2 = (keyword) => {
  return mongoose.Types.ObjectId.isValid2(keyword);
}

module.exports = {isValid2};

const isValidObjectId = function (objectId) {
  return mongoose.Types.ObjectId.isValid(objectId)
}



//--------------------------------------------------------------------//


module.exports = {
  isValid,
  isValidBody,
  alphabetTestOfString,
  isValidObjectId
};


//--------------------------------------------------------------------//