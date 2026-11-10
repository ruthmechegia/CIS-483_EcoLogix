class PackageTracker {
    constructor(trackingNumber) {
        this.trackingNumber = trackingNumber;
        this.status = "En Route";
        this.destination = "Memorial Library";
        this.location = "Campus Transit Route";
    }
}

const trackingForm = document.querySelector("form");

trackingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const trackingNumber = $("#tracking").val().trim();

    if (trackingNumber === "") {
        return;
    }

    const packageInfo = new PackageTracker(trackingNumber);

    $(".tracking-result").remove();

    const result = `
<div class="card tracking-result">
<h2>Tracking Result</h2>
<p><strong>Tracking Number:</strong> ${packageInfo.trackingNumber}</p>
<p><strong>Status:</strong> ${packageInfo.status}</p>
<p><strong>Destination:</strong> ${packageInfo.destination}</p>
<p><strong>Current Location:</strong> ${packageInfo.location}</p>
</div>
    `;

    $("form").after(result);

    $(".tracking-result").hide().slideDown();
});

$("#preference").on("change", function () {
    const preference = $(this).val();

    $("#preference-message").remove();

    $(this).after(
        '<p id="preference-message">Delivery preference changed to ' +
        preference +
        ".</p>"
    );

    $("#preference-message").hide().fadeIn();
});
