function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_er3hdmd", "template_wq4u618", parms).then(alert("Email Sent"))
}

<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Simple video example</title>
  </head>
  <body>
    <h1>Smart Home Automation App </h1>

    <video src="rabbit320.webm" controls>
      <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.webm">link to the video</a> instead.</p> 
    </video>
  </body>
</html>
