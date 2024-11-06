<?php 
function enviarEmail() {

    $destinatario = 'ppatanefrisone@gmail.com';
    $asunto = 'PpataneFrisone';
    $mensaje = $_POST['mensaje'];
    $email = $_POST['email'];
    $nombre = $_POST['nombre'];
    
    $header = "Enviado desde la pagina PPataneFrisone.com: \n\n";
    $mensajeCompleto = $mensaje . "\n\nAtentamente: " . $nombre ."\nMail:" . $email;
    
    mail ($destinatario ,$asunto , $mensajeCompleto, $header);
    echo "<script>alert('Correo enviado exitosamente')</script>";
    echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
}

if ( isset($_POST['email']) == true && isset($_POST['nombre']) == true  && isset($_POST['mensaje']) == true ){
    if (strlen($_POST['email']) > 3 && strlen($_POST['nombre']) > 3 && strlen($_POST['mensaje']) > 3){
                    enviarEmail();
    } else{
        echo "<script>alert('Complete los campos por favor')</script>";
        echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
        }
    }else{
        echo "<script>alert('Complete los campos por favor')</script>";
        echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
        }
?>