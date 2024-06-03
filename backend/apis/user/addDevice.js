const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function AddDevice(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("devices");

        const { deviceName, loginId, area } = req.body;

        if (!deviceName || !loginId || !area) {
            return res
                .status(400)
                .json({ success: false, message: "Missing required fields!" });
        }

        await collection.insertOne({
            deviceName,
            loginId: new ObjectId(loginId),
            area,
        });

        return res
            .status(201)
            .json({ success: true, message: "Device Added Successful" });
    } catch (error) {
        console.error("Registration Failed:", error);
        return res
            .status(500)
            .json({ success: false, error: "Device Add Failed" });
    }
}

module.exports = { AddDevice };
