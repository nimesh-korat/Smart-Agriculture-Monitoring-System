const connectDB = require("../../db/dbConnect");
const { ObjectId } = require("mongodb");

async function GetHistoryData(req, res) {

  try {
    const db = await connectDB();

    const flameSensorCollection = db.collection("flameSensor");
    const irSensorCollection = db.collection("irSensor");
    const smokeSensorCollection = db.collection("smokeSensor");
    const soilSensorCollection = db.collection("soilSensor");
    const waterLevelCollection = db.collection("waterLevel");
    const deviceCollection = db.collection("devices");

    const session = req.session.user;

    if (!session) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized access!" });
    }

    const userId = session.session._id;
    const deviceData = await deviceCollection.findOne({ userId: new ObjectId(userId) });

    if (!deviceData) {
      return res
        .status(401)
        .json({ success: false, message: "No any data found!" });
    }

    const { _id: deviceId, deviceName, area } = deviceData;

    const flameSensorData = await flameSensorCollection.find({ deviceId: new ObjectId(deviceId) }).toArray();
    const smokeSensorData = await smokeSensorCollection.find({ deviceId: new ObjectId(deviceId) }).toArray();
    const soilSensorData = await soilSensorCollection.find({ deviceId: new ObjectId(deviceId) }).toArray();
    const irSensorData = await irSensorCollection.find({ deviceId: new ObjectId(deviceId) }).toArray();
    const waterLevelData = await waterLevelCollection.find({ deviceId: new ObjectId(deviceId) }).toArray();

    const data = {
      flameSensorData,
      smokeSensorData,
      soilSensorData,
      irSensorData,
      waterLevelData,
      deviceName,
      area
    };

    res
      .status(200)
      .json({ data, success: true, message: "Data Found Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong!" });
  }
}

module.exports = { GetHistoryData };
