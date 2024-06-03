const connectDB = require("../../db/dbConnect");

async function GetComplaint(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection('complaint');

        const data = await collection.find({}, { projection: { _id: 0 } }).toArray();

        if (data.length === 0) {
            return res.status(401).json({ success: false, message: "No any data found!" });
        }

        res
            .status(200)
            .json({ complaint: data, success: true, message: "Data Found Successfully!" });
    } catch (error) {
        console.log("GetComplaint.js: ", error);
        res.status(500).json({ success: false, error: "Something went wrong!" });
    }
}

module.exports = { GetComplaint };