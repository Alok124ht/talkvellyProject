const Ad= require("../models/adSchema")
const validate = require("../validation/validation")
const mongoose = require('mongoose');


const adCreation = async function (req, res) {
    try {
        let data = req.body;
        const { companyId, primaryText, headline, description, CTA, imageUrl, } = data

        if (!validate.isValidBody(data)) {
            return res.status(400).send({ status: false, message: "Please provide data " })
        }
       
        if (!validate.isValid(companyId)) {
            return res.status(400).send({ status: false, message: "Please provide companyId " });
        }
        
        if (!validate.isValidObjectId(companyId)) {
            return res.status(400).send({ status: false, message: "Please Provide a valid companyId in body " });;
        }

        if (!validate.isValid(primaryText)) {
            return res.status(400).send({ status: false, message: "Primarytext must be present " })
        }
        

        if (!validate.isValid(headline)) {
            return res.status(400).send({ status: false, message: "Headline must be present " })
        }

        if (!validate.isValid(description)) {
            return res.status(400).send({ status: false, message: "Description must be present " })
        }
        
      

        if (!validate.isValid(CTA)) {
            return res.status(400).send({ status: false, message: "CTA must be present " })
        }

        if (!validate.isValid(imageUrl)) {
            return res.status(400).send({ status: false, message: "imageUrl  must be present " })
        }

     

        const newAds = await Ad.create(data);
        return res.status(201).send({ status: true, message: "Ads created successfully ", data: newAds })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}

// GET search 

const adSearch = async function (req, res) {
    try {
        const keyword = req.query.keyword;
        
        if (!validate.isValid2(keyword)) {
            return res.status(400).send({ status: false, message: "Please provide a valid keyword " });
        }

        const ads = await Ad.aggregate([
            { $match: { $or: [
                { companyId: new mongoose.Types.ObjectId(keyword) },
                { primaryText: { $regex: keyword, $options: 'i' } },
                { headline: { $regex: keyword, $options: 'i' } },
                { description: { $regex: keyword, $options: 'i' } }
            ] } },
            { $lookup: { from: 'companies', localField: 'companyId', foreignField: '_id', as: 'company' } },
            { $unwind: '$company' },
            { $project: { _id: 0, company: '$company.name', primaryText: 1, headline: 1, description: 1, CTA: 1, imageUrl: 1 } }
        ]);

        return res.status(200).send({ status: true, message: "Ads fetched successfully ", data: ads });
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}

// const express = require('express');
// const router = express.Router();


const getAllAds =async function (req, res) {
  try {
    const ads = await Ad.find({});
    return res.status(200).send({ status: true, message: "Ads retrieved successfully ", data: ads });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
}






module.exports = {adCreation,adSearch,getAllAds};

//module.exports = {adCreation}

