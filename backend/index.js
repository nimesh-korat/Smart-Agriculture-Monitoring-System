const connectDB = require("./db/dbConnect");
const express = require('express');
const cors = require("cors");
const { SignUpApi } = require("./apis/signupApi");
const { LoginApi } = require("./apis/loginAPi");
const session = require('express-session');
const Session = require("./apis/session");
const { GetUsers } = require("./apis/admin/getUser");
const Logout = require("./apis/logout");
const { addSensorData } = require("./apis/user/addSensorData");
const { GetIrData } = require("./apis/admin/getIRData");
const { GetSmokeData } = require("./apis/admin/getSmokeData");
const { GetSoilData } = require("./apis/admin/getSoilData");
const { GetFlameData } = require("./apis/admin/getFlameData");
const { GetWaterData } = require("./apis/admin/getWaterData");
const { getAllCounts } = require("./apis/admin/getAllCounts");
const { AddDevice } = require("./apis/user/addDevice");
const { AddComplaint } = require("./apis/user/addComplaint");
const { AddFeedback } = require("./apis/user/addFeedback");
const { GetLiveDataUser } = require("./apis/user/getLiveData");
const { GetAlerts } = require("./apis/user/getAlerts");
const { GetHistoryData } = require("./apis/user/getHistoryData");
const { GetFeedback } = require("./apis/admin/getFeedback");
const { GetComplaint } = require("./apis/admin/getComplant");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001",],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

// Configure express-session middleware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));


app.post("/api/signup", SignUpApi);
app.post("/api/login", LoginApi);
app.post("/api/session", Session);
app.post("/api/logout", Logout);


//!Admin
app.post("/api/admin/addSensorData", addSensorData);
app.post("/api/admin/addDevice", AddDevice);
app.post("/api/admin/getUser", GetUsers);
app.get("/api/admin/getIrData", GetIrData);
app.get("/api/admin/getSmokeData", GetSmokeData);
app.get("/api/admin/getSoilData", GetSoilData);
app.get("/api/admin/getFlameData", GetFlameData);
app.get("/api/admin/getWaterData", GetWaterData);
app.get("/api/admin/getAllCounts", getAllCounts);
app.get("/api/admin/getFeedback", GetFeedback);
app.get("/api/admin/getComplaint", GetComplaint);

//!User

app.post("/api/user/addComplaint", AddComplaint);
app.post("/api/user/addFeedback", AddFeedback);
app.post("/api/user/getLiveData", GetLiveDataUser);
app.post("/api/user/getAlerts", GetAlerts);
app.post("/api/user/getHistoryData", GetHistoryData);

app.listen(port, () => console.log(`Server listening on port ${port}`))