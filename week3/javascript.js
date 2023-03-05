function sendEmail(event) {
    event.preventDefault();

    var template_params = {
        "recipient_email": document.getElementById("recipientEmail").value,
        "subject": document.getElementById("emailSubject").value,
        "message": document.getElementById("emailMessage").value
    }

    var service_id = "YOUR_EMAIL_SERVICE_ID";
    var template_id = "YOUR_EMAIL_TEMPLATE_ID";

    emailjs.send(service_bevdqg6, template_tzdhimh, template_params)
        .then(function(response) {
            console.log("Email sent", response);
        }, function(error) {
            console.log("Email failed to send", error);
        });

    document.getElementById("emailForm").reset();
}


