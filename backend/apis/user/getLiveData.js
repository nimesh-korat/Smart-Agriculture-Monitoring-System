// Import necessary modules
const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

// Define async function to fetch Live data from each collection for a specific user
async function GetLiveDataUser(req, res) {
    try {
        const db = await connectDB();

        const session = req.session.user;

        if (!session) {
            return res
                .status(401)
                .json({ success: false, message: "Unauthorized access!" });
        }
        const userId = session.session._id;
        const deviceCollection = db.collection("devices");

        const flameSensorCollection = db.collection("flameSensor");
        const irSensorCollection = db.collection("irSensor");
        const smokeSensorCollection = db.collection("smokeSensor");
        const soilSensorCollection = db.collection("soilSensor");
        const waterLevelCollection = db.collection("waterLevel");

        const deviceData = await deviceCollection.findOne(
            { userId: new ObjectId(userId) },
        )

        if (!deviceData) {
            return res
                .status(401)
                .json({ success: false, message: "No any data found!" });
        }


        // Fetch Live data from each collection for the given user ID
        const flameSensorData = await flameSensorCollection.findOne(
            { deviceId: new ObjectId(deviceData._id) },
            {
                sort: { timestamp: -1 },
                projection: { sensorValue: 1, sensorName: "Flame Sensor", _id: 0 },
            }
        );
        const smokeSensorData = await smokeSensorCollection.findOne(
            { deviceId: new ObjectId(deviceData._id) },
            {
                sort: { timestamp: -1 },
                projection: { sensorValue: 1, sensorName: "Smoke Sensor", _id: 0 },
            }
        );
        const soilSensorData = await soilSensorCollection.findOne(
            { deviceId: new ObjectId(deviceData._id) },
            {
                sort: { timestamp: -1 },
                projection: { sensorValue: 1, sensorName: "Soil Sensor", _id: 0 },
            }
        );
        const irSensorData = await irSensorCollection.findOne(
            { deviceId: new ObjectId(deviceData._id) },
            {
                sort: { timestamp: -1 },
                projection: { sensorValue: 1, sensorName: "IR Sensor", _id: 0 },
            }
        );
        const waterLevelData = await waterLevelCollection.findOne(
            { deviceId: new ObjectId(deviceData._id) },
            {
                sort: { timestamp: -1 },
                projection: { sensorValue: 1, sensorName: "Water Level Sensor", _id: 0 },
            }
        );

        // Construct the response object with required format
        const liveData = [];
        if (flameSensorData)
            liveData.push({
                sensorName: flameSensorData.sensorName,
                sensorValue: flameSensorData.sensorValue,
            });
        if (smokeSensorData)
            liveData.push({
                sensorName: smokeSensorData.sensorName,
                sensorValue: smokeSensorData.sensorValue,
            });
        if (soilSensorData)
            liveData.push({
                sensorName: soilSensorData.sensorName,
                sensorValue: soilSensorData.sensorValue,
            });
        if (irSensorData)
            liveData.push({
                sensorName: irSensorData.sensorName,
                sensorValue: irSensorData.sensorValue,
            });
        if (waterLevelData)
            liveData.push({
                sensorName: waterLevelData.sensorName,
                sensorValue: waterLevelData.sensorValue,
            });

        res.status(200).json({
            liveData,
            success: true,
            message: "Live data fetched successfully!",
        });

    } catch (error) {
        console.error("Error fetching Live data:", error);
        res.status(500).json({ success: false, error: "Something went wrong!" });
    }
}

module.exports = { GetLiveDataUser };
