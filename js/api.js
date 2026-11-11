const API_URL = "http://localhost:3000/api/packages";

async function getPackages() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to load packages");
        }

        const packages = await response.json();

        console.log("Packages received:", packages);

        displayPackages(packages);
    } catch (error) {
        console.error("GET error:", error);
    }
}

async function addPackage(packageData) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(packageData)
        });

        if (!response.ok) {
            throw new Error("Failed to add package");
        }

        const newPackage = await response.json();

        console.log("Package added:", newPackage);

        return newPackage;
    } catch (error) {
        console.error("POST error:", error);
    }
}

function displayPackages(packages) {
    const tableBody = document.querySelector("tbody");

    if (!tableBody) {
        return;
    }

    tableBody.innerHTML = "";

    packages.forEach(function (packageItem) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${packageItem.tracking}</td>
            <td>${packageItem.destination}</td>
            <td>${packageItem.priority}</td>
            <td>${packageItem.status}</td>
        `;

        tableBody.appendChild(row);
    });
}