const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let packages = [
    {
        id: 1,
        tracking: "PKG-10234",
        destination: "Memorial Library",
        priority: "Normal",
        status: "Checked In"
    }
];

app.get("/api/packages", function (req, res) {
    res.json(packages);
});

app.post("/api/packages", function (req, res) {
    const newPackage = {
        id: packages.length + 1,
        ...req.body
    };

    packages.push(newPackage);
    res.status(201).json(newPackage);
});

app.listen(3000, function () {
    console.log("CampusEco server running on port 3000");
});
