const packageForm = document.querySelector("form");
const packageTableBody = document.querySelector("tbody");

class Package {
    constructor(tracking, weight, dimensions, destination, priority) {
        this.tracking = tracking;
        this.weight = weight;
        this.dimensions = dimensions;
        this.destination = destination;
        this.priority = priority;
        this.status = "Checked In";
    }
}

packageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const tracking = document.getElementById("tracking").value;
    const weight = document.getElementById("weight").value;
    const dimensions = document.getElementById("dimensions").value;
    const destination = document.getElementById("destination").value;
    const priority = document.getElementById("priority").value;

    const newPackage = new Package(
        tracking,
        weight,
        dimensions,
        destination,
        priority
    );

    addPackageToTable(newPackage);

    packageForm.reset();
});

function addPackageToTable(packageItem) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${packageItem.tracking}</td>
        <td>${packageItem.destination}</td>
        <td>${packageItem.priority}</td>
        <td>${packageItem.status}</td>
    `;

    packageTableBody.appendChild(row);
}