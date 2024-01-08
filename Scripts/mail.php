<?php
// Collect form data
$name = $_POST["contact_inpName"];
$email = $_POST["contact_inpEmail"];
$comment = $_POST["contact_inpComent"];

// Email address to which the message will be sent
$recipient = "noelsava25@gmail.com";

// Email subject
$subject = "Nuevo mensaje del PORTAFOLIO";

// Message to be sent via email
$message = "Nombre: $name\n";
$message .= "Correo electrónico: $email\n";
$message .= "Comentarios:\n$comment";

// Email headers
$headers = "De: $email";

// Send the email
$mailed = mail($recipient, $subject, $message, $headers);

if ($mailed) {
    echo "The message has been sent successfully. Thank you for getting in touch!";
} else {
    echo "There was an issue sending the message. Please try again later.";
}

// Redirect to the website
header("Location: ../index.html#sec-contact");

?>
