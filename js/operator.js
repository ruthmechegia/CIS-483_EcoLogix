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

const packageForm = document.querySelector("form");

packageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const tracking = $("#tracking").val();
    const weight = $("#weight").val();
    const dimensions = $("#dimensions").val();
    const destination = $("#destination").val();
    const priority = $("#priority").val();

    const newPackage = new Package(
        tracking,
        weight,
        dimensions,
        destination,
        priority
    );

    addPackageToTable(newPackage);

    packageForm.reset();

    $("#message").remove();

    $("form").after(
        '<p id="message">Package added successfully.</p>'
    );

    $("#message").hide().fadeIn();
});

function addPackageToTable(packageItem) {
    const newRow = `
        <tr>
            <td>${packageItem.tracking}</td>
            <td>${packageItem.destination}</td>
            <td>${packageItem.priority}</td>
            <td>${packageItem.status}</td>
        </tr>
    `;

    $("tbody").append(newRow);
}