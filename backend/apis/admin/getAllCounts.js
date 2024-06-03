const connectDB = require("../../db/dbConnect");

async function getAllCounts(req, res) {
    try {
        const db = await connectDB();
        const deviceCount = await db.collection("devices").countDocuments();
        const userCount = await db.collection("users").countDocuments({ role: "1" });

        const soilCount = await db.collection("soilSensor").countDocuments({ sensorValue: { $gt: "40" }, });
        const flameCount = await db.collection("flameSensor").countDocuments({ sensorValue: { $gt: "40" }, });
        const irCount = await db.collection("irSensor").countDocuments({ sensorValue: { $gt: "40" }, });
        const smokeCount = await db.collection("smokeSensor").countDocuments({ sensorValue: { $gt: "40" }, });
        const waterCount = await db.collection("waterLevel").countDocuments({ sensorValue: { $gt: "40" }, });


        const totalAletsCounts = soilCount + flameCount + irCount + smokeCount + waterCount;

        res.status(200).json({
            totalDevices: deviceCount,
            userCount: userCount,
            totalAlerts: totalAletsCounts,
            success: true,
            message: "Counts fetched successfully!",
        });


    } catch (error) {
        console.log("getAllCounts.js: ", error);
        res.status(500).json({ success: false, error: "Something went wrong!" });
    }
}

module.exports = { getAllCounts };