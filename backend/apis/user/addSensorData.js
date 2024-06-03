const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function addSensorData(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection('soilSensor');

        const { sensorId, deviceId, sensorValue } = req.body;

        if (!sensorId || !deviceId || !sensorValue) {
            return res.status(400).json({ success: false, message: "Missing required fields!" });
        }

        //! Get current timestamp in IST
        const ISTOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
        const dateIST = new Date(Date.now() + ISTOffset);

        await collection.insertOne({
            sensorId,
            deviceId,
            sensorValue,
            timestamp: dateIST,
        });

        return res
            .status(201)
            .json({ success: true, message: "Data added Successful" });
    } catch (error) {
        console.error("Data added failed: ", error);
        return res.status(500).json({ success: false, error: "Something went wrong" });
    }
}

module.exports = { addSensorData };