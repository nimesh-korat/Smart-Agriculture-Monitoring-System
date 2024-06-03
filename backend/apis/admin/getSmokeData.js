const connectDB = require("../../db/dbConnect");

async function GetSmokeData(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection('smokeSensor');

        const data = await collection.find({} , { projection: { _id: 0 } }).toArray();

        //check session
        // const userId = req.session.user;
        // if (!userId) {
        //     return res.status(401).json({ success: false, message: "Unauthorized User!" });
        // }

        if (data.length === 0) {
            return res.status(401).json({ success: false, message: "No any data found!" });
        }
        res
            .status(200)
            .json({ sensorData: data, success: true, message: "Data Found Successfully!" });
    } catch (error) {
        console.log("getSmokeData.js: ", error);
        res.status(500).json({ success: false, error: "Something went wrong!" });
    }
}

module.exports = { GetSmokeData };