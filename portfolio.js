function sendMail(){
    var params = {
        name: document.getElementById("name").Value,
        email:document.getElementById("email").Value,
        message:document.getElementById("message").Value,
    };

const serviceID = "service_if4ptu1";
const templateID = "template_gut5c7r";

emailjs.send(serviceID,templateID,params)
.then((res) => {
        document.getElementById("name12").value = "" ;
        document.getElementById("email12").value = "";
        document.getElementById("Message12").value = "";
        console.log(res);
        alert("Your Message Sent Successfully");
    })
    .catch((err) => console.log(err));
}