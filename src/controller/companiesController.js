const { companySchema } = require("../models/companySchema");
const mongoose = require("mongoose");
const Company = mongoose.model('Company', companySchema);

// Create a new company
const companyCreation = async function (req, res){

    try {
        const { name, url } = req.body;
        let count = await Count.findOneAndUpdate({}, { $inc: { count: 1 } }, { new: true });
        if (!count) {
            count = new Count({ count: 1 });
            await count.save();
        }
        const company = new Company({ companyId: count.count, name, url });
        await company.save();
        const savedCompany = await Company.findById(company.id).lean();
        res.status(201).json(savedCompany);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
  
}

module.exports = { companyCreation };

  //

  