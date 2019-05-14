
<html>
    <head>
</head>
<body>
<?php 

var_dump($to);die;

$message = "Formulaire de contact: </br>";
$message .= $_POST['email_contact'];
$message .= $_POST['nom']'</br>';
$message .= $_POST['prenom']'</br>';
$message .= $_POST['demande_contact']'</br>';


$to = 'guienjoris@gmail.com';
$to .= $_POST['email_contact'];

$subject ='Formulaire reçu';


mail( $to, $subject, $message);
?>


</body>