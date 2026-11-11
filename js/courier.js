class EcoCourier {
    constructor(name, vehicle, battery) {
        this.name = name;
        this.vehicle = vehicle;
        this.battery = battery;
        this.status = "Ready for Delivery";
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }
}

const courier = new EcoCourier("Student Courier", "Cart 03", 82);

$("button").on("click", function () {
    courier.updateStatus($(this).text().trim());

    $("p").each(function () {
        if ($(this).text().includes("Status:")) {
            $(this).html("<strong>Status:</strong> " + courier.status);
        }
    });

    $("#courier-message").remove();
    $(".card").first().append(
        '<p id="courier-message">Delivery status updated to ' + courier.status + ".</p>"
    );
    $("#courier-message").hide().fadeIn();
});