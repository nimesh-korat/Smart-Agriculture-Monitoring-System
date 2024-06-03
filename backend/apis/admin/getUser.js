const connectDB = require("../../db/dbConnect");

async function GetUsers(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection('users');

        const user = await collection.find({ role: "1" }).toArray();

        //check session
        // const userId = req.session.user;
        // if (!userId) {
        //     return res.status(401).json({ success: false, message: "Unauthorized User!" });
        // }

        if (user.length === 0) {
            return res.status(401).json({ success: false, message: "No any user Registered!" });
        }
        res
            .status(200)
            .json({ userData: user, success: true, message: "Users Found Successfully!" });
    } catch (error) {
        console.log("getUser.js: ", error);
        res.status(500).json({ success: false, error: "Something went wrong!" });
    }
}

module.exports = { GetUsers };