function sendMail() {
    var params={
        email: document.getElementById("recipientEmail").value,
        name: document.getElementById("emailSubject").value,
        message: document.getElementById("emailMessage").value,
    };

    const serviceID="service_bevdqg6";
    const templateID="template_owpn6vg";


    emailjs
        .send(serviceID, templateID, params)
        .then((res)=>{
        document.getElementById("recipientEmail").value="";
        document.getElementById("emailSubject").value="";
        document.getElementById("emailMessage").value="";

        console.log(res);
        alert("your message sent successfully");

    })
        .catch((err)=> console.log(err));
}